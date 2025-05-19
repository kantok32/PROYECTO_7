const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Cart = require('../models/Cart');
const Order = require('../models/Order');

// Crear intención de pago
exports.createPaymentIntent = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id })
      .populate('items.product');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'El carrito está vacío' });
    }

    // Crear la intención de pago en Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(cart.total * 100), // Stripe usa centavos
      currency: 'usd',
      metadata: {
        userId: req.user.id,
        cartId: cart._id.toString()
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error('Error al crear intención de pago:', error);
    res.status(500).json({ message: 'Error al procesar el pago', error: error.message });
  }
};

// Webhook para manejar eventos de Stripe
exports.handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Error en webhook:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Manejar el evento
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    
    try {
      // Obtener el carrito
      const cart = await Cart.findById(paymentIntent.metadata.cartId)
        .populate('items.product');

      if (!cart) {
        throw new Error('Carrito no encontrado');
      }

      // Crear la orden
      const order = new Order({
        user: paymentIntent.metadata.userId,
        items: cart.items.map(item => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.price
        })),
        total: cart.total,
        paymentIntentId: paymentIntent.id,
        status: 'completed'
      });

      await order.save();

      // Vaciar el carrito
      cart.items = [];
      cart.total = 0;
      await cart.save();

      console.log('Orden creada exitosamente:', order._id);
    } catch (error) {
      console.error('Error al procesar el pago exitoso:', error);
      return res.status(500).json({ error: 'Error al procesar el pago' });
    }
  }

  res.json({ received: true });
}; 
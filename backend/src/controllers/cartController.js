const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Obtener el carrito del usuario
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id })
      .populate('items.product', 'name price image');
    
    if (!cart) {
      return res.status(200).json({ items: [], total: 0 });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el carrito', error: error.message });
  }
};

// Agregar producto al carrito
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Verificar si el producto existe
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Buscar o crear el carrito del usuario
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    // Verificar si el producto ya está en el carrito
    const existingItem = cart.items.find(item => item.product.toString() === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
        price: product.price
      });
    }

    // Calcular el total y guardar
    cart.calculateTotal();
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar al carrito', error: error.message });
  }
};

// Actualizar cantidad de un producto en el carrito
exports.updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    const item = cart.items.find(item => item.product.toString() === productId);
    if (!item) {
      return res.status(404).json({ message: 'Producto no encontrado en el carrito' });
    }

    item.quantity = quantity;
    cart.calculateTotal();
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el carrito', error: error.message });
  }
};

// Eliminar producto del carrito
exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    cart.calculateTotal();
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar del carrito', error: error.message });
  }
};

// Vaciar el carrito
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    cart.items = [];
    cart.total = 0;
    await cart.save();

    res.json({ message: 'Carrito vaciado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al vaciar el carrito', error: error.message });
  }
}; 
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true
  }
});

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [cartItemSchema],
  total: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Método para calcular el total del carrito
cartSchema.methods.calculateTotal = function() {
  this.total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return this.total;
};

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart; 
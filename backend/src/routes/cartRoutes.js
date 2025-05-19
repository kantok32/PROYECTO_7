const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../controllers/cartController');

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Obtener el carrito del usuario
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Carrito obtenido exitosamente
 *       401:
 *         description: No autorizado
 */
router.get('/', auth, getCart);

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Agregar producto al carrito
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - quantity
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto agregado al carrito
 *       401:
 *         description: No autorizado
 */
router.post('/', auth, addToCart);

/**
 * @swagger
 * /api/cart/{productId}:
 *   put:
 *     summary: Actualizar cantidad de un producto en el carrito
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *             properties:
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Carrito actualizado
 *       401:
 *         description: No autorizado
 */
router.put('/:productId', auth, updateCartItem);

/**
 * @swagger
 * /api/cart/{productId}:
 *   delete:
 *     summary: Eliminar producto del carrito
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado del carrito
 *       401:
 *         description: No autorizado
 */
router.delete('/:productId', auth, removeFromCart);

/**
 * @swagger
 * /api/cart:
 *   delete:
 *     summary: Vaciar el carrito
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Carrito vaciado exitosamente
 *       401:
 *         description: No autorizado
 */
router.delete('/', auth, clearCart);

module.exports = router; 
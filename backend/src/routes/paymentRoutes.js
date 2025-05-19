const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const {
  createPaymentIntent,
  handleWebhook
} = require('../controllers/paymentController');

/**
 * @swagger
 * /api/payments/create-payment-intent:
 *   post:
 *     summary: Crear una intención de pago
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Intención de pago creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 clientSecret:
 *                   type: string
 *       401:
 *         description: No autorizado
 */
router.post('/create-payment-intent', auth, createPaymentIntent);

/**
 * @swagger
 * /api/payments/webhook:
 *   post:
 *     summary: Webhook para eventos de Stripe
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: Webhook procesado exitosamente
 */
router.post('/webhook', express.raw({type: 'application/json'}), handleWebhook);

module.exports = router; 
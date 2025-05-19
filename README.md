# E-Commerce Fullstack

Este es un proyecto de comercio electrónico desarrollado con React y Node.js, diseñado para ser desplegado en Render.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

### Backend (Node.js + Express)

- API RESTful con Express
- Autenticación con JWT
- Base de datos MongoDB
- Integración con Stripe para pagos
- Documentación con Swagger

### Frontend (React + Vite)

- Interfaz de usuario moderna con Material-UI
- Gestión de estado con Context API
- Enrutamiento con React Router
- Integración con Stripe para pagos

## Requisitos Previos

- Node.js >= 14.0.0
- MongoDB
- Cuenta de Stripe (para pagos)

## Configuración del Entorno

1. Clona el repositorio
2. Configura las variables de entorno:

### Backend (.env)
```
PORT=3000
MONGODB_URI=tu_uri_de_mongodb
JWT_SECRET=tu_secreto_jwt
STRIPE_SECRET_KEY=tu_stripe_secret_key
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
VITE_STRIPE_PUBLIC_KEY=tu_stripe_public_key
```

## Instalación

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Despliegue en Render

### Backend
1. Crea un nuevo servicio Web en Render
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno
4. Usa el comando de inicio: `npm start`

### Frontend
1. Crea un nuevo servicio Static Site en Render
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno
4. Usa el comando de construcción: `npm run build`

## Características

- Autenticación de usuarios
- Catálogo de productos
- Carrito de compras
- Proceso de pago seguro
- Perfil de usuario
- Historial de pedidos

## Tecnologías Utilizadas

- React
- Node.js
- Express
- MongoDB
- Material-UI
- Stripe
- JWT
- Swagger 
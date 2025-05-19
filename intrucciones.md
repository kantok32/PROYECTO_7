PROYECTO 7: Aplicación Fullstack de Comercio Electrónico
ÍNDICE
1. Intro
2. Demo
3. ¿Qué construirás?
4. Objetivos de Aprendizaje
5. Requisitos
6. Criterios de evaluación
7. Entregas
1. Intro
El comercio electrónico ha experimentado un crecimiento significativo en los últimos años. Cada vez más empresas necesitan incorporar una tienda en línea a sus procesos de comercialización para adaptarse a las nuevas demandas del mercado. En este contexto, llevar a cabo un proyecto de comercio electrónico (eCommerce) se convierte en uno de los ejercicios más completos y desafiantes en el ámbito de las aplicaciones Fullstack.

2. Demo
Para ilustrar el alcance y las funcionalidades de un proyecto de este tipo, hemos preparado una demostración que puedes explorar en el siguiente enlace:

Link a aplicación

Link a explicación

En esta demostración, presentamos una pizzería virtual en la que los usuarios pueden pedir y pagar pizzas en línea utilizando la pasarela de pago Stripe. La plataforma incluye todas las funcionalidades necesarias para gestionar pedidos, realizar pagos y mantener la información de los usuarios segura.



Al momento de realizar un pago, puedes usar la tarjeta 4242 4242 4242 4242 y colocar el resto de números e información como gustes. Esto para que puedas probar la sección de recibos.

Para tu proyecto, puedes elegir otras plataformas como Mercado Pago, o PayPal. En realidad, la arquitectura debería ser la misma, solo cambiarías el manejo de API.

3. ¿Qué construirás?
El objetivo de este proyecto es desarrollar una aplicación Fullstack de comercio electrónico que incluya todos los elementos esenciales para gestionar un negocio en línea. Algunos de los elementos clave que deberás tener en cuenta son:

Un catálogo de productos que permita a los usuarios explorar los artículos disponibles.
Un carrito de compras para que los usuarios puedan seleccionar y gestionar sus compras.
Una pasarela de pago segura (específicamente Stripe, PayPal o MercadoPago, en versión de pruebas) que facilite las transacciones en línea.
Autenticación de usuarios, incluido el registro de cuentas y el inicio de sesión, mediante JSON Web Tokens (JWT).
Autorización, mediante la creación de áreas privadas en las que los usuarios puedan acceder y gestionar su perfil e información personal.
Para el desarrollo de este proyecto, te recomendamos emplear las siguientes tecnologías:

Frontend

React (con vite)
Uso de manejo de estado con useContext y useReducer
Manejo de ruteo con react-router-dom. Puedes utilizar la v5 o v6
CSS (TailwindCSS, MUI, Bootstrap, CSS Modules o Styled Components)
Axios
Backend

Node
Express.js
JWT
bcryptjs
cors
dotenv
mongoose
nodemon
openapi-backend
stripe u otra librería de comercio electrónico
swagger-jsdoc
swagger-ui-express
Base de datos

MongoDB
Además, podrás utilizar bibliotecas externas que faciliten y complementen el desarrollo de las funcionalidades necesarias.

4. Objetivos de aprendizaje
A lo largo de este proyecto, tendrás la oportunidad de profundizar y aplicar tus conocimientos en diversas áreas clave, como:

Manejo de rutas en el lado del cliente (Frontend) para garantizar una navegación fluida y eficiente.
Manejo de estados locales y globales (Frontend) para gestionar la información de la aplicación y facilitar la comunicación entre componentes.
Manejo de rutas en el servidor (Backend) para gestionar las solicitudes y respuestas entre el cliente y el servidor.
Gestión y flujo de datos en MongoDB, lo que te permitirá almacenar, consultar y manipular información de manera eficiente y segura.
Implementación de medidas de seguridad, como autenticación y autorización, para proteger la información y garantizar el acceso adecuado a las funciones y datos del usuario.
5. Requisitos y entregables
A continuación, se presenta una lista de requisitos mínimos y entregables que deberás cumplir para garantizar el éxito del proyecto:

GENERAL
El proyecto debe realizarse de manera individual.
FRONTEND
 Desarrollar un prototipado simple que permita visualizar y planificar la estructura de la aplicación.
 Utilizar ReactJS como librería principal para el desarrollo del frontend.
 Emplear Context API para el manejo de estados en la aplicación.
 Implementar las rutas necesarias, incluyendo Home, Sign Up, Log in, mi perfil, producto individual y listado de productos.
 Implementar área de pasarela de pagos Checkout
BACKEND
 Utilizar ExpressJS como framework principal para el desarrollo del backend.
 Crear y gestionar las rutas necesarias para el funcionamiento del frontend y la comunicación con la base de datos.
DESPLIEGUE
 Generar una URL para compartir el proyecto (puedes utilizar Netlify, Railway y Mongo Atlas).
 Incluir una descripción detallada del proyecto en el repositorio. Es posible contar con dos repositorios o en uno solo, como sea más cómodo.
6. Criterios de evaluación
A partir de los requisitos, tu % estará definido de esta forma:

ÁREA	% DEL TOTAL
IMPLEMENTACIÓN GESTIÓN DE PRODUCTOS	30%
IMPLEMENTACIÓN AUTENTICACIÓN	30%
IMPLEMENTACIÓN DE PASARELA DE PAGOS ECOMMERCE	20%
DESPLIEGUE	20%
ENTREGA A TIEMPO	10%
7. Entregas
Implementación Gestión de Productos: Se evaluará la funcionalidad y la eficiencia en la gestión de los productos, incluyendo la creación, consulta, actualización y eliminación de los artículos en el catálogo, así como la presentación de los productos a los usuarios.

Implementación Autenticación: Se evaluará la correcta implementación de los sistemas de autenticación y autorización, incluyendo el registro de usuarios, el inicio de sesión, la generación y validación de tokens, y la gestión de roles y permisos de acceso a las áreas privadas de la aplicación.

Implementación eCommerce: Se evaluará la correcta implementación de la plataforma de comercio electrónico en su conjunto, incluyendo el catálogo de productos, el carrito de compras y la integración con la pasarela de pago.

Despliegue: Se evaluará la calidad y estabilidad del despliegue de la aplicación, incluyendo la correcta configuración del entorno, el uso de servicios de alojamiento adecuados y la disponibilidad de una URL para compartir el proyecto.

Entrega a tiempo: Se evaluará la capacidad para cumplir con los plazos establecidos y entregar el proyecto de manera oportuna, demostrando habilidades de gestión del tiempo y planificación adecuadas.
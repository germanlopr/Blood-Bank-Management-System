# Blood Bank Management

## Project info

/* Expansión del sistema MERN para la gestión de bancos de sangre. Se añaden nuevas funcionalidades como autenticación mejorada, gráficos interactivos y un sistema de búsqueda avanzada. */

 BACKEND 
 

(incluye lo anterior más las siguientes características):

 1. Rutas adicionales para estadísticas avanzadas, con agregación en MongoDB para análisis.

 2. Funcionalidad para enviar correos electrónicos de confirmación o notificaciones con Nodemailer.

 3. Implementación de un sistema de roles (administrador y usuario).

 4. Registro de auditorías para cambios en datos sensibles.

 5. Sistema de carga de archivos para documentos relacionados con donantes y donaciones.


--- FRONTEND (React) ---


// Nuevas características del frontend:

// 1. Gráficos interactivos con Recharts para visualizar estadísticas de donaciones.

// 2. Sistema de búsqueda avanzada con filtros dinámicos.

// 3. Módulo de administración con gestión de usuarios y permisos.

// 4. Formularios de carga de archivos para donantes.

// 5. Implementación de notificaciones visuales y alertas (toast).


// Estructura de carpetas actualizada:

// src/

//   components/

//     Header.js

//     Footer.js

//     Dashboard.js

//     LoginForm.js

//     RegisterForm.js

//     DonorForm.js

//     SearchBar.js

//     AdminPanel.js

//     Charts.js

//     FileUpload.js

//     Notifications.js

//   pages/

//     HomePage.js

//     LoginPage.js

//     RegisterPage.js

//     DonorsPage.js

//     ReportsPage.js

//     AdminPage.js

//     UploadDocumentsPage.js

//   App.js

//   index.js

// Instalación necesaria:

// npm install react-router-dom axios recharts jspdf nodemailer react-toastify

// Archivo: src/components/FileUpload.js




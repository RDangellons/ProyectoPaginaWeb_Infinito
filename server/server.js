// server/server.js

// 1. Cargar variables de entorno y módulos
require('dotenv').config();
const express = require('express');
const path = require('path');

// 2. Inicializar la aplicación de Express
const app = express();

// 3. Middleware para manejar JSON
app.use(express.json());

// 4. Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// 5. Ruta de ejemplo para probar el servidor
app.get('/api/test', (req, res) => {
    res.json({ message: '¡Servidor funcionando correctamente!' });
});

// 6. Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

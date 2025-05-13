const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/api/v1/medecin', createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: true }));
app.use('/api/v1/patient', createProxyMiddleware({ target: 'http://localhost:4001', changeOrigin: true }));
app.use('/api/v1/consultation', createProxyMiddleware({ target: 'http://localhost:4002', changeOrigin: true }));
app.use('/', createProxyMiddleware({ target: 'http://localhost:4005', changeOrigin: true }));

app.listen(5000, () => console.log('🌐 API Gateway running on port 5000'));
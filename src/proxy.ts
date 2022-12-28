import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';

export default function(app: express.Application) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
      secure: false
    })
  );
}

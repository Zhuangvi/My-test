const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://cnodejs.org',   // 目标服务器
      changeOrigin: true
    })
  );
};
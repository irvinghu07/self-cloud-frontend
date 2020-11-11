module.exports = {
  devServer: {
    proxy: {
      '/upload': {
        target: 'http://localhost:7777',
        changeOrigin: true
      },
      '/download': {
        target: 'http://localhost:7777',
        changeOrigin: true
      },
    }
  }
}

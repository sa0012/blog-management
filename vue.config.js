module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: "http://localhost:7778",
        changeOrigin: true
      }
    }
  }
}
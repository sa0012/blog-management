module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    port: 8088,
    proxy: {
      '/api': {
        target: "http://localhost:7778",
        changeOrigin: true
      }
    }
  }
}
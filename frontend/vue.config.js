const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000/', // Change to your Django server URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // Remove the "/api" prefix in the requests
        },
      },
    },
  },
})

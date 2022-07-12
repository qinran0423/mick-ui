// 引入vite导出的build方法，用它来创建
const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const fsExtra = require('fs-extra')

// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')
// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})
// rollup配置
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 创建package.json文件
const createPackageJson = () => {
  const fileStr = `{
    "name": "mick-ui",
    "version": "0.0.0",
    "main": "mick-ui.umd.js",
    "module": "mick-ui.es.js",
    "author": "mick",
    "github": "",
    "description": "mick第一个组件库Mick-UI, 好好学习，天天向上！",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/qinran0423/mick-ui.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/qinran0423/mick-ui/issues"
    }
  }`

  fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8')
}

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'mick-ui',
          fileName: 'mick-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )

  createPackageJson()
}

const buildLib = async () => {
  await buildAll()
}

buildLib()

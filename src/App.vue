<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'

const confirm = () => console.log('confirm')
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Test>
    <template #default> aaa </template>
    <template #title>
      <h3>title</h3>
    </template>
  </Test>
  <SButton type="primary" size="large" @click="confirm"></SButton>
  <SButton type="primary" size="medium" disabled @click="confirm"></SButton>
  <SButton type="primary" size="small"></SButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

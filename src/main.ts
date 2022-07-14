import { createApp } from 'vue'
import App from './App.vue'

import './index.scss'

import Button from './button'
import Tree from './tree'

createApp(App).use(Button).use(Tree).mount('#app')

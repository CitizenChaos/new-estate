import { App } from 'vue'
import { createStore } from 'vuex'
import getters from './getters'
const path = require('path')

/********************************自动导包 start********************************/
const file = require.context('./mod', true, /\.ts/)
const modules: any = {}
file.keys().forEach((key) => {
  const name: string = path.basename(key, '.ts')
  modules[name] = file(key).default || file(key)
})
/********************************自动导包 end********************************/

const store = createStore({
  getters,
  modules
})

export function setupStore(app: App) {
  app.use(store)
}

export default store

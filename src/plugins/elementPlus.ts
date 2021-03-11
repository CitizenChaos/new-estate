import { ElButton } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { App } from 'vue'

export function setupElementPlus(app: App) {
  app.use(ElButton)
}

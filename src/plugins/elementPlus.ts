import { ElButton, ElInput, ElForm, ElFormItem } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { App } from 'vue'

const components = [ElButton, ElInput, ElForm, ElFormItem]
export function setupElementPlus(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

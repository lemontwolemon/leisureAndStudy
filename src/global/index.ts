import type { App } from 'vue'
import native from './native-ui'

export function registerApp(app: App): void {
  app.use(native)
}

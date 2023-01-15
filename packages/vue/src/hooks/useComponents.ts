import { inject, Ref } from 'vue'
import { DesignerComponentsContext } from '../context'
import { IDesignerComponents } from '../types'

export function useComponents() {
  const components = inject(DesignerComponentsContext)
  return components as Ref<IDesignerComponents>
}

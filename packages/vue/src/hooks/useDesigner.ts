import { Engine } from '@rapid/designable-core'
import { inject, Ref } from 'vue'
import { DesignerEngineContext } from '../context'

export function useDesigner() {
  const designer = inject(DesignerEngineContext)
  return designer as Ref<Engine>
}

import { GlobalRegistry, IDesignerRegistry } from '@rapid/designable-core'
import { globalThisPolyfill } from '@rapid/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}

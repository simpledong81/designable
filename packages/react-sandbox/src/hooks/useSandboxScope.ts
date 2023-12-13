import { globalThisPolyfill } from '@rapid/designable-shared'

export const useSandboxScope = () => {
  return globalThisPolyfill['__DESIGNABLE_SANDBOX_SCOPE__']
}

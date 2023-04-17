import { defineComponent } from 'vue'

import { FormProvider } from '@formily/vue'
import { createForm } from '@formily/core'

export const Form = defineComponent({
  setup(_, { slots }) {
    const form = createForm()
    return () => {
      return <FormProvider form={form}>{slots.default?.()}</FormProvider>
    }
  },
})

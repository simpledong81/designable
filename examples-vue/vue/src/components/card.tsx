import { defineComponent } from 'vue'
import './style.less'

export const Card = defineComponent({
  name: 'Card',
  setup(_, { slots, attrs }) {
    return () => (
      <div class="card" {...attrs}>
        <span>card</span>
        <div class="card-body">{slots.default?.()}</div>
      </div>
    )
  },
})

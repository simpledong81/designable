import { createBehavior, createResource } from '@pind/designable-core'
import { DnFC } from '@pind/designable-vue'
import { Card as InCard } from '../components'

export const Card: DnFC = InCard

Card.Behavior = createBehavior({
  name: 'Card',
  selector: (node) => node.props?.['x-component'] === 'Card',
  designerProps: {
    droppable: true,
  },
  designerLocales: {
    'zh-CN': {
      title: '卡片',
    },
    'en-US': {
      title: 'Card',
    },
    'ko-KR': {
      title: '카드',
    },
  },
})

Card.Resource = createResource({
  title: {
    'zh-CN': '卡片',
    'en-US': 'Card',
    'ko-KR': '카드 상자',
  },
  icon: 'CardSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: '卡片',
        type: 'void',
        'x-component': 'Card',
      },
    },
  ],
})

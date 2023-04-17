import { createBehavior, createResource } from '@pind/designable-core'
import { DnFC } from '@pind/designable-vue'
import { Input as FormInput } from '../components'

export const Input: DnFC = FormInput

Input.Behavior = createBehavior({
  name: 'Input',
  selector: (node) => node.props['x-component'] === 'Input',
  designerProps: {
    propsSchema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    },
  },
})

Input.Resource = createResource({
  title: {
    'zh-CN': '输入框',
    'en-US': 'Field',
    'ko-KR': '입력 상자',
  },
  icon: 'InputSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: '输入框',
        type: 'string',
        'x-component': 'Input',
      },
    },
  ],
})

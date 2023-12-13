import { createBehavior, createResource } from '@rapid/designable-core'
import { Field as Input } from '../components'
import { DnFC } from '@rapid/designable-vue'

export const Field: DnFC = Input

Field.Behavior = createBehavior(
  {
    name: 'Root',
    selector: 'Root',
    designerProps: {
      droppable: true,
    },
    designerLocales: {
      'zh-CN': {
        title: '根组件',
      },
      'en-US': {
        title: 'Root',
      },
      'ko-KR': {
        title: '루트',
      },
    },
  },
  {
    name: 'Field',
    selector: (node) =>
      node.componentName === 'Field' && node.props['x-component'] === 'Input',
    designerProps: {
      propsSchema: {
        type: 'object',
        $namespace: 'Field',
        properties: {
          'field-properties': {
            type: 'void',
            'x-component': 'CollapseItem',
            title: '字段属性',
            properties: {
              title: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },

              hidden: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Switch',
              },
              default: {
                'x-decorator': 'FormItem',
                'x-component': 'ValueInput',
              },
              test: {
                type: 'void',
                title: '测试',
                'x-decorator': 'FormItem',
                'x-component': 'DrawerSetter',
                'x-component-props': {
                  text: '打开抽屉',
                },
                properties: {
                  test: {
                    type: 'string',
                    title: '测试输入',
                    'x-decorator': 'FormItem',
                    'x-component': 'Field',
                  },
                },
              },
            },
          },

          'component-styles': {
            type: 'void',
            title: '样式',
            'x-component': 'CollapseItem',
            properties: {
              'style.width': {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'SizeInput',
              },
              'style.height': {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'SizeInput',
              },
              'style.display': {
                'x-component': 'DisplayStyleSetter',
              },
              'style.background': {
                'x-component': 'BackgroundStyleSetter',
              },
              'style.boxShadow': {
                'x-component': 'BoxShadowStyleSetter',
              },
              'style.font': {
                'x-component': 'FontStyleSetter',
              },
              'style.margin': {
                'x-component': 'BoxStyleSetter',
              },
              'style.padding': {
                'x-component': 'BoxStyleSetter',
              },
              'style.borderRadius': {
                'x-component': 'BorderRadiusStyleSetter',
              },
              'style.border': {
                'x-component': 'BorderStyleSetter',
              },
            },
          },
        },
      },
    },
    designerLocales: {
      'zh-CN': {
        title: '输入框',
        settings: {
          title: '标题',
          hidden: '是否隐藏',
          default: '默认值',
          style: {
            width: '宽度',
            height: '高度',
            display: '展示',
            background: '背景',
            boxShadow: '阴影',
            font: '字体',
            margin: '外边距',
            padding: '内边距',
            borderRadius: '圆角',
            border: '边框',
          },
        },
      },
      'en-US': {
        title: 'Field',
        settings: {
          title: 'Title',
          hidden: 'Hidden',
          default: 'Default Value',
          style: {
            width: 'Width',
            height: 'Height',
            display: 'Display',
            background: 'Background',
            boxShadow: 'Box Shadow',
            font: 'Font',
            margin: 'Margin',
            padding: 'Padding',
            borderRadius: 'Border Radius',
            border: 'Border',
          },
        },
      },
      'ko-KR': {
        title: '입력',
        settings: {
          title: '텍스트',
          hidden: '숨김 여부',
          default: '기본 설정 값',
          style: {
            width: '너비',
            height: '높이',
            display: '디스플레이',
            background: '배경',
            boxShadow: '그림자 박스',
            font: '폰트',
            margin: '마진',
            padding: '패딩',
            borderRadius: '테두리 굴곡',
            border: '테두리',
          },
        },
      },
    },
  }
)

Field.Resource = createResource({
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
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
    },
  ],
})

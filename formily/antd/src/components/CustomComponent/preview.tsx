import React from 'react'
import { createBehavior, createResource } from '@rapid/designable-core'
import { createFieldSchema } from '@rapid/designable-formily-antd'
import { DnFC } from '@rapid/designable-react'

// 组件模板
export const CustomComponent: DnFC = ({ ...props }) => {
  // props对应Resource的x-component-props
  return (
    <div>
      {/* 也可以以高级组件的形式使用：{props.children}*/}
      <input type="text" {...props} />
    </div>
  )
}

// 组件行为的描述
CustomComponent.Behavior = createBehavior({
  name: 'CustomComponent',
  extends: ['Field'], // 好像只能填Field
  selector: (node) => node.props['x-component'] === 'CustomComponent', // 与Resource的x-component的值匹配上才生效
  designerProps: {
    // createFieldSchema的值如果是空对象，则“属性配置”面板中没有“组件属性”。
    // 如果把createFieldSchema换成createVoidFieldSchema函数，字段属性一栏将只保留必要的配置项。
    propsSchema: createFieldSchema({
      type: 'object',
      properties: {
        customFieldName: {
          type: 'number',
          title: '字段属性',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
          'x-component-props': {
            defaultValue: 100,
          },
        },
        customFieldName2: {
          type: 'number',
          title: '字段属性2',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
          'x-component-props': {
            defaultValue: 200,
          },
        },
      },
    }),
  },

  // 语言翻译
  designerLocales: {
    'zh-CN': {
      title: '我的输入框',
      settings: {
        'x-component-props': {
          customFieldName: '自定义字段名称',
          customFieldName2: '自定义字段名称2',
        },
      },
    },
    'en-US': {
      title: 'Input',
      settings: {
        'x-component-props': {
          customFieldName: 'customFieldName',
          customFieldName2: 'customFieldName2',
        },
      },
    },
  },
})

// 组件资源的描述
CustomComponent.Resource = createResource('OKS', {
  icon: 'InputSource', // 体现在组件栏的icon
  elements: [
    {
      componentName: 'Field', // 好像只能填Field

      // 下面的传参 就是formily的Field的属性配置。具体见此链接的文末：https://www.formilyjs.org/zh-CN/guide/quick-start#%E5%85%B7%E4%BD%93%E7%94%A8%E4%BE%8B
      props: {
        type: 'String', // 返回的数据类型，
        title: '你好呀', // 对应“属性设置”里的标题字段
        'x-decorator': 'FormItem', // 目前只有`FormItem`值会改变组件形态为“表单字段”，填其它值跟没写没有两样。如果不希望组件以表单字段的形式呈现，不写x-decorator和title字段即可。
        'x-component': 'CustomComponent', // 对应的组件
        // 组件“属性设置”的默认值，也会体现在组件的props中。
        'x-component-props': {
          placeholder: '占位占位',
          maxLength: 3,
        },
      },
    },
  ],
})

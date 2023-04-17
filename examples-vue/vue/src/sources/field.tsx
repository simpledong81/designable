import { FormPath } from '@formily/core'
import { toJS } from '@formily/reactive'
import { observer } from '@formily/reactive-vue'
import { each, reduce } from '@formily/shared'
import {
  ArrayField,
  ISchema,
  Field as InternalField,
  ObjectField,
  Schema,
  VoidField,
} from '@formily/vue'
import { createBehavior, createResource } from '@pind/designable-core'
import { isArr, isStr } from '@pind/designable-shared'
import {
  DnFC,
  useComponents,
  useDesigner,
  useTreeNode,
} from '@pind/designable-vue'
import { defineComponent } from 'vue'
Schema.silent(true)

const SchemaStateMap = {
  title: 'title',
  description: 'description',
  default: 'value',
  enum: 'dataSource',
  readOnly: 'readOnly',
  writeOnly: 'editable',
  required: 'required',
  'x-content': 'content',
  'x-value': 'value',
  'x-editable': 'editable',
  'x-disabled': 'disabled',
  'x-read-pretty': 'readPretty',
  'x-read-only': 'readOnly',
  'x-visible': 'visible',
  'x-hidden': 'hidden',
  'x-display': 'display',
  'x-pattern': 'pattern',
}

const NeedShownExpression = {
  title: true,
  description: true,
  default: true,
  'x-content': true,
  'x-value': true,
}

const isExpression = (val: any) => isStr(val) && /^\{\{.*\}\}$/.test(val)

const filterExpression = (val: any): any => {
  if (typeof val === 'object') {
    const isArray = isArr(val)
    const results = reduce(
      val,
      (buf: any, value, key) => {
        if (isExpression(value)) {
          return buf
        } else {
          const results = filterExpression(value)
          if (results === undefined || results === null) return buf
          if (isArray) {
            return buf.concat([results])
          }
          buf[key] = results
          return buf
        }
      },
      isArray ? [] : {}
    )
    return results
  }
  if (isExpression(val)) {
    return
  }
  return val
}

const toDesignableFieldProps = (
  schema: ISchema,
  components: any,
  nodeIdAttrName: string,
  id: string
) => {
  const results: any = {}
  each(SchemaStateMap, (fieldKey, schemaKey) => {
    const value = schema[schemaKey]
    if (isExpression(value)) {
      if (!NeedShownExpression[schemaKey]) return
      if (value) {
        results[fieldKey] = value
        return
      }
    } else if (value) {
      results[fieldKey] = filterExpression(value)
    }
  })
  if (!components['FormItem']) {
    // components['FormItem'] = 'div'
  }
  const decorator =
    schema['x-decorator'] && FormPath.getIn(components, schema['x-decorator'])
  const component =
    schema['x-component'] && FormPath.getIn(components, schema['x-component'])
  const decoratorProps = filterExpression(schema['x-decorator-props'] || {})
  const componentProps = filterExpression(schema['x-component-props'] || {})

  if (decorator) {
    results.decorator = [decorator, toJS(decoratorProps)]
  }
  if (component) {
    results.component = [component, toJS(componentProps)]
  }
  if (decorator) {
    FormPath.setIn(results['decorator'][1], nodeIdAttrName, id)
  } else if (component) {
    FormPath.setIn(results['component'][1], nodeIdAttrName, id)
  }
  results.title = results.title && (
    <span data-content-editable="title">{results.title}</span>
  )
  results.description = results.description && (
    <span data-content-editable="description">{results.description}</span>
  )
  return results
}

const _Field = observer(
  defineComponent({
    name: 'Field',
    setup(_, { slots, attrs }) {
      const designerRef = useDesigner()
      const componentsRef = useComponents()
      const nodeRef = useTreeNode()
      return () => {
        const designer = designerRef.value
        const components = componentsRef.value
        const node = nodeRef.value
        const fieldProps = toDesignableFieldProps(
          attrs,
          components,
          designer.props.nodeIdAttrName,
          node.id
        )
        if (attrs.type === 'object') {
          return (
            <div>
              <ObjectField {...fieldProps} name={node.id}>
                {slots.default?.()}
              </ObjectField>
            </div>
          )
        } else if (attrs.type === 'array') {
          return <ArrayField {...fieldProps} name={node.id} />
        } else if (node.props.type === 'void') {
          return (
            <VoidField {...fieldProps} name={node.id}>
              {slots.default?.()}
            </VoidField>
          )
        }
        return <InternalField {...fieldProps} name={node.id} />
      }
    },
  })
)

export const Field: DnFC = _Field

Field.Behavior = createBehavior(
  {
    name: 'Form',
    selector: 'Form',
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

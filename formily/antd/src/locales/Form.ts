import { createLocales } from '@rapid/designable-core'
import { Component } from './Component'

export const Form = createLocales(Component, {
  'zh-CN': {
    title: '表单',
    settings: {
      labelCol: '标签网格宽度',
      wrapperCol: '组件网格宽度',
      colon: '是否有冒号',
      labelAlign: {
        title: '标签对齐',
        dataSource: ['左对齐', '右对齐', '继承'],
      },
      wrapperAlign: {
        title: '组件对齐',
        dataSource: ['左对齐', '右对齐', '继承'],
      },
      labelWrap: '标签换行',
      wrapperWrap: '组件换行',
      labelWidth: '标签宽度',
      wrapperWidth: '组件宽度',
      fullness: '组件占满',
      inset: '内联布局',
      shallow: '是否浅传递',
      bordered: '是否有边框',
      size: { title: '尺寸', dataSource: ['大', '小', '默认', '继承'] },
      layout: { title: '布局', dataSource: ['垂直', '水平', '内联', '继承'] },
      feedbackLayout: {
        title: '反馈布局',
        dataSource: ['宽松', '紧凑', '弹层', '无', '继承'],
      },
      tooltipLayout: {
        title: '提示布局',
        dataSource: ['图标', '文本', '继承'],
      },
    },
  },
  'en-US': {
    title: 'Form',
    settings: {
      labelCol: 'Label Col',
      wrapperCol: 'Wrapper Col',
      colon: 'Colon',
      labelAlign: {
        title: 'Label Align',
        dataSource: ['Left', 'Right', 'Inherit'],
      },
      wrapperAlign: {
        title: 'Wrapper Align',
        dataSource: ['Left', 'Right', 'Inherit'],
      },
      labelWrap: 'Label Wrap',
      wrapperWrap: 'Wrapper Wrap',
      labelWidth: 'Label Width',
      wrapperWidth: 'Wrapper Width',
      fullness: 'Fullness',
      inset: 'Inset',
      shallow: 'Shallow',
      bordered: 'Bordered',
      size: {
        title: 'Size',
        dataSource: ['Large', 'Small', 'Default', 'Inherit'],
      },
      layout: {
        title: 'Layout',
        dataSource: ['Vertical', 'Horizontal', 'Inline', 'Inherit'],
      },
      feedbackLayout: {
        title: 'Feedback Layout',
        dataSource: ['Loose', 'Terse', 'Popup', 'None', 'Inherit'],
      },
      tooltipLayout: {
        title: 'Tooltip Layout',
        dataSource: ['Icon', 'Text', 'Inherit'],
      },
    },
  },
  'ja-JP': {
    title: 'フォーム',
    settings: {
      labelCol: 'ラベルのグリッド幅',
      wrapperCol: 'コンポーネントのグリッド幅',
      colon: 'コロンを表示',
      labelAlign: {
        title: 'ラベルの配置',
        dataSource: ['左揃え', '右揃え', '継承'],
      },
      wrapperAlign: {
        title: 'コンポーネントの配置',
        dataSource: ['左揃え', '右揃え', '継承'],
      },
      labelWrap: 'ラベルラップ',
      wrapperWrap: 'コンポーネントラップ',
      labelWidth: 'ラベル幅',
      wrapperWidth: 'コンポーネントの幅',
      fullness: 'フルレイアウト',
      inset: 'インラインレイアウト',
      shallow: '浅いレンダラー',
      bordered: 'ボーダーを表示',
      size: { title: 'サイズ', dataSource: ['大', '小', 'デフォルト', '継承'] },
      layout: {
        title: '布局',
        dataSource: ['垂直', '水平', 'インライン', '継承'],
      },
      feedbackLayout: {
        title: 'フィードバックレイアウト',
        dataSource: ['ルーズ', '簡潔', 'ポップアップ', 'なし', '継承'],
      },
      tooltipLayout: {
        title: 'ツールチップレイアウト',
        dataSource: ['アイコン', 'テキスト', '継承'],
      },
    },
  },
  'ko-KR': {
    title: '폼',
    settings: {
      labelCol: 'Label Col',
      wrapperCol: 'Wrapper Col',
      colon: 'Colon',
      labelAlign: {
        title: 'Label 정렬',
        dataSource: ['왼쪽', '오른쪽', '상속'],
      },
      wrapperAlign: {
        title: 'Wrapper 정렬',
        dataSource: ['왼쪽', '오른쪽', '상속'],
      },
      labelWrap: 'Label Wrap',
      wrapperWrap: 'Wrapper Wrap',
      labelWidth: 'Label Width',
      wrapperWidth: 'Wrapper Width',
      fullness: 'Fullness',
      inset: 'Inset',
      shallow: 'Shallow',
      bordered: 'Bordered',
      size: {
        title: '크기',
        dataSource: ['크게', '작게', '보통', '상속'],
      },
      layout: {
        title: '레이아웃',
        dataSource: ['수직', '수평', '인라인', '상속'],
      },
      feedbackLayout: {
        title: '피드백 레이아웃',
        dataSource: ['Loose', 'Terse', '팝업', '없음', '상속'],
      },
      tooltipLayout: {
        title: '툴팁 레이아웃',
        dataSource: ['아이콘', '텍스트', '상속'],
      },
    },
  },
})

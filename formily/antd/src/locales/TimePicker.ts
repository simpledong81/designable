import { createLocales } from '@rapid/designable-core'
import { DatePicker } from './DatePicker'

export const TimePicker = createLocales(DatePicker, {
  'zh-CN': {
    title: '时间选择',
    settings: {
      'x-component-props': {
        clearText: '清除提示',
        disabledHours: '禁止小时',
        disabledMinutes: '禁止分钟',
        disabledSeconds: '禁止秒',
        hideDisabledOptions: '隐藏禁止选项',
        hourStep: '小时间隔',
        minuteStep: '分钟间隔',
        secondStep: '秒间隔',
        use12Hours: '12小时制',
        inputReadOnly: '输入框只读',
        showNow: '显示此刻',
        format: '格式',
      },
    },
  },
  'en-US': {
    title: 'Time Picker',
    settings: {
      'x-component-props': {
        clearText: 'Clear Text',
        disabledHours: 'Disabled Hours',
        disabledMinutes: 'Disabled Minutes',
        disabledSeconds: 'Disabled Seconds',
        hideDisabledOptions: 'Hide Disabled Options',
        hourStep: 'Hour Step',
        minuteStep: 'Minute Step',
        secondStep: 'Second Step',
        use12Hours: 'Use 12-hour',
        inputReadOnly: 'Input ReadOnly',
        showNow: 'Show Now',
        format: 'Format',
      },
    },
  },
  'ja-JP': {
    title: '時間の選択',
    settings: {
      'x-component-props': {
        clearText: 'クリア可能',
        disabledHours: '時間の選択無効',
        disabledMinutes: '分の選択無効',
        disabledSeconds: '秒の選択無効',
        hideDisabledOptions: '禁止されたオプション非表示',
        hourStep: '時間間隔',
        minuteStep: '分間隔',
        secondStep: '秒間隔',
        use12Hours: '12時間時計',
        inputReadOnly: '読み取り専用',
        showNow: '現在の選択を表示',
        format: 'フォーマット',
      },
    },
  },
  'ko-KR': {
    title: '시간 선택',
    settings: {
      'x-component-props': {
        clearText: '텍스트 삭제',
        disabledHours: '시 비활성화',
        disabledMinutes: '분 비활성화',
        disabledSeconds: '초 비활성화',
        hideDisabledOptions: '비황성화 옵션 숨기기',
        hourStep: '시 스탭',
        minuteStep: '분 스탭',
        secondStep: '초 스탭',
        use12Hours: '12시간 단위 사용',
        inputReadOnly: 'ReadOnly',
        showNow: '현재 시각 보여주기',
        format: '포맷',
      },
    },
  },
})

export const TimeRangePicker = createLocales(TimePicker, {
  'zh-CN': {
    title: '时间范围',
  },
  'en-US': {
    title: 'Time Range',
  },
  'ja-JP': {
    title: '時間範囲',
  },
  'ko-KR': {
    title: '시간 범위',
  },
})

export default {
  type: 'HtForm',
  props: {
    title: '表单',
    isCard: false,
    url: '/mock/api/update',
    fields: [
      {
        field: 'name',
        title: '姓名',
        disabled: false,
        tooltip: '',
        required: false,
        placeholder: '',
        type: 'Input',
        defaultValue: '',
      },
      {
        field: 'sex',
        title: '性别',
        disabled: false,
        tooltip: '',
        required: false,
        placeholder: '',
        options: [
          {
            label: '男',
            value: '1',
          },
          {
            label: '女',
            value: '0',
          },
        ],
        defaultValue: '1',
        type: 'Radio',
      },
      {
        field: 'season',
        title: '登场季数',
        disabled: false,
        tooltip: '',
        required: false,
        placeholder: '',
        defaultValue: 1,
        type: 'InputNumber',
      },
      {
        field: 'remark',
        title: '人物介绍',
        disabled: false,
        tooltip: '',
        required: false,
        placeholder: '',
        type: 'Input.TextArea',
        rows: 4,
        defaultValue: '',
      },
    ],
    alias: '$$HtForm',
    labelCol: {
      span: 6,
      offset: 0,
    },
    wrapperCol: {
      span: 16,
      offset: 0,
    },
  },
}
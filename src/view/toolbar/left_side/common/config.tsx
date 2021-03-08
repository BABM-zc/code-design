import { MenuGroup } from './data';

/**
 * 默认标签设置
 */
export const defaultLabelSize = {
    fontSize: '12px'
}

export const iconFontSource = '//at.alicdn.com/t/font_2249751_xbdda3eni8.js';

export const menusConfigs: MenuGroup[] = [
    {
        name: '按钮型组件',
        key: 'input-component',
        children: [
            {
                key: 'button',
                name: '按钮',
                type: 'button',
                icon: 'icon-anniu',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
            {
                key: 'radio',
                name: '单选按钮组',
                type: 'radio',
                icon: 'icon-danxuananniuzu',
                dom: {
                    key: 'radio',
                    domType: 'div',
                    type: 'div',
                    id: '1',
                    class: 'ant-radio-group ant-radio-group-outline',
                    children: [
                        {
                            key: 'radio',
                            domType: 'label',
                            type: 'label',
                            class: 'ant-radio-wrapper',
                            id: '1-1',
                            parentId: '1',
                            children: [
                                {
                                    key: 'radio',
                                    domType: 'span',
                                    type: 'span',
                                    class: 'ant-radio',
                                    id: '1-1-1',
                                    parentId: '1-1',
                                    children: [
                                        {
                                            key: 'radio',
                                            domType: 'input',
                                            type: 'radio',
                                            id: '1-1-1-1',
                                            parentId: '1-1-1',
                                            class: 'ant-radio-input',
                                            value: '',
                                        },
                                        {
                                            key: 'radio',
                                            domType: 'span',
                                            type: 'span',
                                            id: '1-1-1-2',
                                            parentId: '1-1-1',
                                            class: 'ant-radio-inner',
                                        }
                                    ]
                                },
                                {
                                    key: 'radio',
                                    domType: 'span',
                                    type: 'span',
                                    id: '1-1-2',
                                    parentId: '1-1',
                                    value: '',
                                }
                            ]
                        }
                    ]
                }
            },
            {
                key: 'button',
                name: '上传',
                type: 'button',
                icon: 'icon-icon_shangchuan-',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
        ]
    },
    {
        name: '输入型组件',
        key: 'input-component',
        children: [
            {
                key: 'input',
                name: '输入框',
                type: 'input',
                icon: 'icon-danhangshurukuang',
                dom: {
                    domType: 'input',
                    type: 'text',
                    class: 'ant-input',
                    value: '',
                    placeholder: '请输入需要输入的内容',
                }
            },
            {
                key: 'TextArea',
                name: '多行文本框',
                type: 'button',
                icon: 'icon-duohangwenben',
                dom: {
                    domType: 'TextArea',
                    type: 'TextArea',
                    class: 'ant-input',
                    value: '',
                    placeholder: '请输入需要输入的内容',
                    size: {
                        rows: 4
                    },
                }
            },

            {
                key: 'button',
                name: '密码输入框',
                type: 'button',
                icon: 'icon-mima',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },

        ],
    },
    {
        name: '选择型组件',
        key: 'select-component',
        children: [
            {
                key: 'button',
                name: '评分',
                type: 'button',
                icon: 'icon-pingfen',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
            {
                key: 'button',
                name: '时间选择器',
                type: 'button',
                icon: 'icon-shijianxuanzeqi',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
            {
                key: 'button',
                name: '时间范围',
                type: 'button',
                icon: 'icon-huoyueshijianduan',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
            {
                key: 'button',
                name: '日期选择器',
                type: 'button',
                icon: 'icon-riqixuanze',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
            {
                key: 'button',
                name: '开关',
                type: 'button',
                icon: 'icon-kaiguan',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
            {
                key: 'button',
                name: '滑块',
                type: 'button',
                icon: 'icon-huakuai-',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
            {
                key: 'button',
                name: '多选框组',
                type: 'button',
                icon: 'icon-duoxuankuangzu',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
            {
                key: 'button',
                name: '下拉选择',
                type: 'button',
                icon: 'icon-xialaxuanzekuang',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            },
            {
                key: 'button',
                name: '级联选择',
                type: 'button',
                icon: 'icon-jilianxuanze',
                dom: {
                    domType: 'button',
                    type: 'button',
                    class: 'ant-btn',
                    value: '按钮',
                }
            }
        ]
    }
];
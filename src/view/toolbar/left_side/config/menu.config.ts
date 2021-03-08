import { MenuGroup } from "../common/data";
import { button, radio } from "../component";


/**
 * 目录配置
 */
export const menusConfigs: MenuGroup[] = [
    {
        name: '按钮型组件',
        key: 'button-component',
        children: [
            button,
            radio
        ]
    },
    {
        name: '输入型组件',
        key: 'input-component',
        children: [

        ]
    },
    {
        name: '选择型组件',
        key: 'select-component',
        children: [

        ]
    }
]
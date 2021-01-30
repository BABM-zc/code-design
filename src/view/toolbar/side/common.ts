
/**
 * 菜单组
 */
export interface MenuGroup {
    name: string;
    key: string;
    children: RenderMessage[];
}

export interface RenderMessage {
    key: string;
    name: string;
    type: string;
    icon: string;
    dom: RenderDOM;
}
/**
 * DOM数据结构
 */
export interface RenderDOM {
    domType: string;
    type: string;
    class?: string;
    value?: string;
    placeholder?: string;
    isDisabled?: boolean;
    size?: {
        rows?: number,
        cols?: number
    };  // 显示行数，多行文本框需要   
    children?: RenderDOM[]; // 可能存在多层级嵌套(当然也可能是存在多个孩子节点)
}
/**
 * DOM操作工具
 */
export class DOMUtils {
    /**
     * 找到当前行的根节点
     * @param dom 当前的dom
     */
    public static getRootLine(dom: HTMLElement): HTMLElement {
        // 遍历迭代，不影响性能，每次都只比父节点
        while(!(dom.className.indexOf('code-design-line') > -1)) {
            if (dom && dom.parentElement) {
                dom = dom && dom.parentElement;
            }
        }
        return dom;
    }
    /**
     * 获取到表单的label对象
     * @returns 因为label的特殊性但凡找到了，就不会再有多的。
     */
    public static getLabel(dom: HTMLElement): HTMLElement {
        let value: HTMLElement = dom;
        if (dom.children.length > 0 ) {
            while (!(value.className.indexOf('ant-form-item-label') > -1)) {
                value = (value.children[0] as HTMLElement)
            }
        }  
        return (value.children[0] as HTMLElement);     
    }
}
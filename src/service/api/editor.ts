/**
 * 编辑器接口
 */
export interface IEditorService {
    /**
     * 设置字段名称接口
     */
    setFieldName(value: string): void;
    /**
     * 设置标题   
     */
    setTitle(value: string, target: HTMLElement): void;
    /**
     * 设置占位符内容（输入型组件特有）
     */
    setPlacehodler(value: string, target: HTMLElement): void;
}
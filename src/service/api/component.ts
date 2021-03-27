/**
 * 组件服务接口
 */
export interface IComponentService {
    /**
     * 插入DOM到画板
     */
    insertDOM(domString: string): void;
}

/**
 * 拖拽服务接口
 */
export interface IDragBoardService {
    /**
     * 部署到远程服务器
     */
    pushToRemoteService(): void;
    /**
     * 表单强转为table（通过form转table生成列表项）
     */
    convertAsTableCode(): void;
    /**
     * 重置画板
     * @param target 待清空的节点
     */
    resetBoard(target: HTMLElement): void;
}
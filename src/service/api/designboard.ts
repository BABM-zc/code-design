
import { ICodeService } from './code';
import { IComponentService } from './component';
import { IDragBoardService } from './dragboard';
import { IExportService } from './export';

/**
 * 设计板挂载入口
 */
export interface IDesignBoardService {
    /**
     * 代码生成服务接口
     */
    readonly code: ICodeService;
    /**
     * 组件操作接口
     */
    readonly component: IComponentService;
    /**
     * 拖拽接口
     */
    readonly dragboard: IDragBoardService;
    /**
     * 导出接口
     */
    readonly export: IExportService;
}
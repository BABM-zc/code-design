

import { 
    IDragBoardService, 
    ICodeService,
    IComponentService,
    IExportService 
} from '../api';
import { CodeService } from './code_service';
import { ComponentService } from './component_service';
import { DragBoardService } from './dragboard_service';
import { ExportService } from './export_service';
import { IDesignBoardService } from '../api/designboard';

/**
 * 主服务，将会挂载所有的CodeDesign的功能
 */
export class DesignBoardService implements IDesignBoardService{

    private codeService: ICodeService;

    private componentSerivce: IComponentService;

    private dragboardService: IDragBoardService;

    private exportService: IExportService;

    constructor() {
        this.codeService = new CodeService();
        this.componentSerivce = new ComponentService();
        this.dragboardService = new DragBoardService();
        this.exportService = new ExportService();
    }

    public get code(): ICodeService {
        return this.codeService;
    }

    public get component(): IComponentService {
        return this.componentSerivce;
    }

    public get dragboard(): IDragBoardService {
        return this.dragboardService;
    }

    public get export(): IExportService {
        return this.exportService;
    }
}
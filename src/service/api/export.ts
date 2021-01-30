/**
 * 导出服务接口
 */
export interface IExportService {

    exportAsReact(): void;

    exportAsVue(): void;

    exportAsWechatMiniProgram(): void;
}
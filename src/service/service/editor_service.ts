import { IEditorService } from "../api/editor";
import { DOMUtils } from '../../common/dom_utils';


/**
 * 整个编辑器服务
 */
export class EditorService implements IEditorService {


    public setPlacehodler(value: string, target: HTMLElement): void {
        throw new Error("Method not implemented.");
    }


    public setTitle(value: string, target: HTMLElement): void {
        // 设置了
        if (target) {
            const lable = DOMUtils.getLabel(target);
            lable.textContent = value;
            // 更新数据结构模型
        } else {
            throw Error('target element is not undefined!');
        }
    }

    public setFieldName(value: string): void {

    }

}
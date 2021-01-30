import { DOMUtils } from "../../common/dom_utils";
import { RenderDOM } from "../../view/toolbar/side/common";
import { IComponentService } from '../api';

/**
 * 组件服务类
 */
export class ComponentService implements IComponentService {

    private root!: RenderDOM; // 待渲染节点的根节点

    private dragElement!: HTMLElement; // 拖拽组件的中间状态

    private renderDom?: HTMLElement; // 待渲染组件

    /**
     * 拖拽移动交互
     */
    private onDrag(e: DragEvent) {
        this.dragElement = e.target as HTMLElement;
        e.dataTransfer!.setData("text/html", this.dragElement.innerHTML);
    }

    private onDragOver(e: DragEvent) {
        e.preventDefault();
    }

    private onClick(e: MouseEvent) {
        const clickTargetline = DOMUtils.getRootLine((e.target as HTMLElement));
        const event = new CustomEvent('componentClick', { 'detail': clickTargetline });
        document.dispatchEvent(event);
    }

    private onDrop(e: DragEvent) {
        e.preventDefault();
        // 迭代找到当前的对应行的顶级div
        const currentElement = DOMUtils.getRootLine((e.target as HTMLElement));
        // 交换位置
        if (this.dragElement !== currentElement) {
            this.dragElement.innerHTML = currentElement.innerHTML;
            currentElement.innerHTML = e.dataTransfer!.getData("text/html");
        }
    }

    private renderlabel(): HTMLDivElement {
        const labelContainer = document.createElement('div');
        labelContainer.className = 'ant-col ant-col-4 ant-form-item-label';
        const label = document.createElement('label');
        label.title = '默认标题';
        label.textContent = '默认标题';
        labelContainer.appendChild(label);
        return labelContainer;
    }
    /**
     * 深度遍历生成DOM
     * 因为一个dom的常规样子是这样的
     *                   root
     *            leaf          leaf
     *        leaf    leaf   leaf   leaf 
     * https://github.com/AnswerYas/blog/issues/11
     */
    private renderChildren(node: RenderDOM, nodeList = []) {

        if (node) {
            const dom = document.createElement(node.domType);
            if (node.class) {
                dom.className = node.class;
            }
            // @ts-ignore
            nodeList.push(node)
            if (node.children && node.children.length) {
                for (var i = 0; i < node.children.length; i++) {
                    this.renderChildren(node.children[i], nodeList)
                }
            }
        }

        return nodeList
    }

    private renderFormComponent(): HTMLDivElement {
        // 渲染组件的外层
        const componentContainer = document.createElement('div');
        componentContainer.className = 'ant-col ant-col-14 ant-form-item-control';
        const inputContainer = document.createElement('div');
        inputContainer.className = 'ant-form-item-control-input';
        const inputContent = document.createElement('div');
        inputContent.className = 'ant-form-item-control-input-content';
        this.renderDom = inputContent;
        // 渲染dom
        this.renderChildren(this.root);
        // 输出最后结果
        inputContent.appendChild((this.renderDom as Node));
        inputContainer.appendChild(inputContent);
        componentContainer.appendChild(inputContainer)
        return componentContainer;
    }

    private renderLine(): HTMLDivElement {
        const line = document.createElement('div');
        line.appendChild(this.renderlabel());
        line.appendChild(this.renderFormComponent());
        // 设置行样式
        line.className = 'ant-row ant-form-item code-design-line';
        line.style.marginBottom = '15px';
        line.draggable = true;
        // 绑定行的一些能力
        line.addEventListener('dragstart', this.onDrag.bind(this));
        line.addEventListener('dragover', this.onDragOver.bind(this));
        line.addEventListener('drop', this.onDrop.bind(this));
        line.addEventListener('click', this.onClick.bind(this));
        return line;
    }

    /**
     * 插入组件
     */
    public insertDOM(dom: RenderDOM): void {
        if (dom) {
            this.root = dom;
            const dragBoard = document.getElementById('drawing-board');
            dragBoard && dragBoard.appendChild(this.renderLine());
        } else {
            throw Error('传入的待渲染的DOM是非法的！请检查config.ts中的dom值是否在合法范围内！');
        }
    }
}
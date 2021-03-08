import { DOMUtils } from "../../common/dom_utils";
import { RenderNode } from "../../view/toolbar/left_side/common";
import { IComponentService } from '../api';

/**
 * 组件服务类
 */
export class ComponentService implements IComponentService {

    private root!: RenderNode; // 待渲染节点的根节点

    private dragElement!: HTMLElement; // 拖拽组件的中间状态

    private componentNode!: HTMLElement;

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

    private renderChildren(nodes: RenderNode[]) {
        // 渲染当前这一层的
        nodes.forEach((node) => {
            let dom = document.createElement(node.domType);
            if (node.class) {
                dom.className = node.class;
            }
            if (node.id) {
                dom.id = `${node.key}-${node.id}`; // 为了确保不重复id为 key + nodeId
            }
            this.componentNode.appendChild(dom);
            dom = this.componentNode as HTMLElement;
            this.componentNode = dom;
            if (node && node.children) {
                this.renderChildren(node.children);
            }
        });
    }

    private renderRootDomTree(node: RenderNode) {
        const dom = document.createElement(node.domType);
        if (node.class) {
            dom.className = node.class;
        }
        if (node.id) {
            dom.id = `${node.key}-${node.id}`; // 为了确保不重复id为 key + nodeId
        }
        this.componentNode = dom;
    }


    private renderFormComponent(): HTMLDivElement {
        // 渲染组件的外层
        const componentContainer = document.createElement('div');
        componentContainer.className = 'ant-col ant-col-14 ant-form-item-control';
        const inputContainer = document.createElement('div');
        inputContainer.className = 'ant-form-item-control-input';
        const inputContent = document.createElement('div');
        inputContent.className = 'ant-form-item-control-input-content';
        this.renderRootDomTree(this.root);

        if (this.root && this.root.children) {
            this.renderChildren(this.root.children);
        }
        console.log(this.componentNode);
        // 输出最后结果
        inputContent.appendChild(this.componentNode);
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
    public insertDOM(dom: RenderNode): void {
        if (dom) {
            this.root = dom;
            const dragBoard = document.getElementById('drawing-board');
            dragBoard && dragBoard.appendChild(this.renderLine());
        } else {
            console.error('传入的待渲染的DOM是非法的！请检查config.ts中的dom值是否在合法范围内！');
        }
    }
}
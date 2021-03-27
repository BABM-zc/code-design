import { RenderMessage } from "../common/data";

/**
 * render组件
 */
export const button: RenderMessage = {
    key: 'button',
    name: '按钮',
    type: 'button',
    icon: 'icon-anniu',
    element: `
        <button type="button" class="ant-btn ant-btn-primary">
            <span class="code-design-input-text">Primary Button</span>
        </button>
    `,
}

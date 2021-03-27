/**
 * render组件
 */
export const radio = {
    key: 'radio',
    name: '单选按钮组',
    type: 'radio',
    icon: 'icon-danxuananniuzu',
    element: `
        <div class="ant-radio-group ant-radio-group-outline">
            <label class="ant-radio-wrapper ant-radio-wrapper-checked">
                <span class="ant-radio ant-radio-checked">
                    <input type="radio" class="ant-radio-input code-design-radio-input" value="1" checked={true} />
                    <span class="ant-radio-inner">
                    </span>
                </span>
                <span class="code-design-radio-value" >A</span>
            </label>
        </div>
    `,
}
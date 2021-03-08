/**
 * render组件
 */
export const radio = {
    key: 'radio',
    name: '单选按钮组',
    type: 'radio',
    icon: 'icon-danxuananniuzu',
    element: (
        <div className="ant-radio-group ant-radio-group-outline">
            <label className="ant-radio-wrapper ant-radio-wrapper-checked">
                <span className="ant-radio ant-radio-checked">
                    <input type="radio" className="ant-radio-input code-design-radio-input" value="1" checked={true} />
                    <span className="ant-radio-inner">
                    </span>
                </span>
                <span className="code-design-radio-value" >A</span>
            </label>
        </div>
    ),
}
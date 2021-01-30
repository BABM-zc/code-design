import React from "react";
import { Tabs } from 'antd';
import { ComponentProp } from "./component_prop";
import { IEditorService } from '../../../service/api/editor';
import { EditorService } from "../../../service/service/editor_service";


const { TabPane } = Tabs;
/**
 * 右栏工具栏
 */
export class RightSideNavBar extends React.PureComponent {

    private editorService: IEditorService;

    constructor(props: any) {
        super(props)
        // 初始化编辑器能力给整个组件用
        this.editorService = new EditorService();
    }

    private tabChange() {

    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.tabChange}>
                    <TabPane tab="组件属性" key="1">
                        <ComponentProp service = {this.editorService} />
                    </TabPane>
                    <TabPane tab="表单属性" key="2">
                        
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
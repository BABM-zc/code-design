import React from "react";
import { iconFontSource } from "./common/config";
import './side_nav_bar.css';
import { MenuGroup, RenderNode } from './common/data';
import { createFromIconfontCN } from '@ant-design/icons';
import { Tabs, Divider } from 'antd';
import { menusConfigs } from './config/menu.config';

const { TabPane } = Tabs;

// 注入自定义样式
const IconFont = createFromIconfontCN({
    scriptUrl: iconFontSource,
});

/**
 * 菜单栏
 */
export class SideNavBar extends React.PureComponent {

    private selectNode!: RenderNode;

    private onDragStart(_type: string, dom: any) {
        // 要react.element => Element
        const element = React.createElement(dom);
        console.log(element);
        this.selectNode = dom;
    }

    private onDragEnd() {
        // 用户释放触发
        const event = new CustomEvent('componentMove', { 'detail': this.selectNode });
        document.dispatchEvent(event);
    }

    private onDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    private tabChange(key: string) {
        console.log(key);
    }

    public render() {
        return (
            <div className='components-list'>
                <Tabs defaultActiveKey="1" onChange={this.tabChange}>
                    <TabPane tab="常规组件" key="1">
                        <div className='components-draggable'>
                            {
                                menusConfigs.map((menuGroup: MenuGroup) => {
                                    return (
                                        <div>
                                            <Divider plain>{menuGroup.name}</Divider>
                                            {
                                                menuGroup.children.map((menu) => {
                                                    return (
                                                        <div
                                                            key={menu.key}
                                                            className='components-item'
                                                            draggable='true'
                                                            onDragStart={this.onDragStart.bind(this, menu.type, menu.element)}
                                                            onDragEnd={this.onDragEnd.bind(this)}
                                                            onDragOver={this.onDragOver.bind(this)}
                                                        >
                                                            <div className='components-body'>
                                                                <IconFont type={menu.icon} /> {menu.name}
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </TabPane>
                    <TabPane tab="活动页组件" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>

            </div>

        );
    }
}
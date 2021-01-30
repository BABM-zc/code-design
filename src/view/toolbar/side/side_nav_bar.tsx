import React from "react";
import { iconFontSource, menusConfigs } from "./config";
import './side_nav_bar.css';
import { MenuGroup, RenderDOM } from './common';
import { createFromIconfontCN } from '@ant-design/icons';
import { Tabs, Divider } from 'antd';


const { TabPane } = Tabs;

// 注入自定义样式
const IconFont = createFromIconfontCN({
    scriptUrl: iconFontSource,
});

/**
 * 菜单栏
 */
export class SideNavBar extends React.PureComponent {

    private selectNode!: RenderDOM;

    private onDragStart(_type: string, dom: RenderDOM) {
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
                                                            onDragStart={this.onDragStart.bind(this, menu.type, menu.dom)}
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
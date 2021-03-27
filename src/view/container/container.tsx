import React from "react";
import { HeadNavBar, SideNavBar, RightSideNavBar } from "../toolbar";
import './container.css'
import {
  Form,
  Layout,
} from 'antd';
import { DesignBoardService, IDesignBoardService } from "../../service";
import { NotificationList } from "../../common/notification";



const { Header, Sider } = Layout;

interface ContainerState {
  inputValue: string;
}

export class CodeDesignContainer extends React.PureComponent<{}, ContainerState> {

  private designboardService: IDesignBoardService;

  private isRender: boolean = false;

  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.designboardService = new DesignBoardService();
  }

  private onDragEnter() {
    this.isRender = false;
    document.addEventListener(NotificationList.COMPONENT_MOVE, this.addComponent.bind(this));
  }

  private addComponent(e: any) {
    if (!this.isRender) {
      this.isRender = true;
      this.designboardService.component.insertDOM(e.detail);
    }
  }

  private onDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  public render() {
    return (
      <Layout>
        <Header className="container-header">
          <HeadNavBar />
        </Header>
        <Layout>
          <Sider width={300} className="container-left-sider">
            <SideNavBar />
          </Sider>
          <Layout>
            <Form
              className = 'container-form'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
              <div
                id='drawing-board'
                onDragOver = {this.onDragOver.bind(this)}
                onDragEnter = {this.onDragEnter.bind(this)}
              ></div>
            </Form>
          </Layout>
          <Sider width={400} className="container-left-sider">
            <RightSideNavBar />
          </Sider>
        </Layout>
      </Layout>
    );
  }
}
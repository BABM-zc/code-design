import React from "react";
import { SideNavBar } from "../toolbar";
import './container.css'
import {
  Form,
  Layout,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Input
} from 'antd';

const { Header, Sider } = Layout;

interface ContainerState {
  inputValue: string;
}

export class CodeDesignContainer extends React.PureComponent<{}, ContainerState> {

  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  private onDragEnter() {
    document.addEventListener('componentMove', (e: any) => {
      const mainContent = document.getElementById('drawing-board');
      if (mainContent) {
        const para = document.createElement('div');
        para.className = 'ant-row ant-form-item';
        para.style.lineHeight = '4';
        para.appendChild(e.detail);
        mainContent.appendChild(para);
      }
    });
  }

  private onDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  private onChange(e: any) {
    const value = e.target && e.target.value;
    const dataDom = document.getElementsByClassName('test-btn');
    if (dataDom) {
      for (let i = 0; i < dataDom.length; i++) {
        (dataDom[i] as HTMLElement).style.lineHeight = `${value}`;
      }
    }
  }

  public render() {
    return (
      <Layout>
        <Header className="header">
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <SideNavBar />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Input placeholder="Basic usage"
              onChange={this.onChange.bind(this)} />
            <div
              id='drawing-board'
              onDragEnter={this.onDragEnter.bind(this)}
              onDragOver={this.onDragOver.bind(this)}>
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
              >
                <Form.Item label="Form Size" name="size">
                  <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Input">
                  <Input />
                </Form.Item>
                <Form.Item label="Select">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                  <TreeSelect
                    treeData={[
                      { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Cascader">
                  <Cascader
                    options={[
                      {
                        value: 'zhejiang',
                        label: 'Zhejiang',
                        children: [
                          {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                          },
                        ],
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="DatePicker">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                  <InputNumber />
                </Form.Item>
                <Form.Item label="Switch">
                  <Switch />
                </Form.Item>
                <Form.Item label="Button">
                  <Radio.Group onChange={this.onChange.bind(this)} value={1}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                  </Radio.Group>                </Form.Item>
              </Form>
            </div>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
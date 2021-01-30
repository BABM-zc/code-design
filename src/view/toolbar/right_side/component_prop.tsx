import React from "react";
import { Form, Input, Divider, Switch, Slider } from 'antd';
import { IEditorService } from '../../../service/api/editor';
import { DOMUtils } from '../../../common/dom_utils';

export interface ComponentProps {

    service: IEditorService;
}

export interface ComponentState {

    title: string;
}


export class ComponentProp extends React.PureComponent<ComponentProps, ComponentState> {

    private componentClickListener = this.componentClick.bind(this)

    private targetElement!: HTMLElement;

    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            title: '',
        }
        document.addEventListener('componentClick', this.componentClickListener);
    }

    componentWillUnmount() {
        document.removeEventListener('componentClick', this.componentClickListener);
    }

    private componentClick(event: any) {
        this.targetElement = (event.detail as HTMLElement);
    }

    private onSwitchChange(checked: boolean) {
        console.log(`switch to ${checked}`);
    }

    private onInputChange(type: string, event: any) {
        const value = event.target.value;
        switch (type) {
            case 'title':
                this.props.service.setTitle(value, this.targetElement);
                break;
            case 'placehodler':
                this.props.service.setPlacehodler(value, this.targetElement);


        }
        if (value) {
        }
    }

    render() {
        return (
            <div>
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Divider plain>基本设置</Divider>
                    <Form.Item
                        label="字段名称"
                        name="字段名称"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="标题"
                        name="标题"
                    >
                        <Input onChange = {this.onInputChange.bind(this, 'title')}/>
                    </Form.Item>
                    <Form.Item
                        label="占位提示"
                        name="占位提示"
                    >
                        <Input onChange = {this.onInputChange.bind(this, 'placehodler')}/>
                    </Form.Item>
                    <Form.Item
                        label="是否必填"
                        name="是否必填"
                    >
                        <Switch defaultChecked onChange={this.onSwitchChange.bind(this)} />
                    </Form.Item>
                    <Divider plain>布局设置</Divider>
                    <Form.Item
                        label="标签宽度"
                        name="标签宽度"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="组件宽度"
                        name="组件宽度"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="表单栅格"
                        name="表单栅格"
                    >
                        <Slider defaultValue={30} />
                    </Form.Item>
                    <Divider plain>功能设置</Divider>
                    <Form.Item
                        label="是否只读"
                        name="是否只读"
                    >
                        <Switch defaultChecked onChange={this.onSwitchChange.bind(this)} />
                    </Form.Item>
                    <Form.Item
                        label="组件宽度"
                        name="组件宽度"
                    >
                        <Switch defaultChecked onChange={this.onSwitchChange.bind(this)} />
                    </Form.Item>
                    <Form.Item
                        label="正则表达式"
                        name="正则表达式"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
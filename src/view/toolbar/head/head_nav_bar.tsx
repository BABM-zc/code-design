import React from "react";
import { Row, Col, Button } from 'antd';
import { 
    CloudDownloadOutlined,
    CopyOutlined, DeleteOutlined,
    CloudServerOutlined 
} from '@ant-design/icons';
import './head_nav_bar.css';
import { DesignBoardService, IDesignBoardService } from "../../../service";

/**
 * 头部导航栏
 */
export class HeadNavBar extends React.PureComponent {

    private designboardService: IDesignBoardService;

    constructor(props: any) {
        super(props);
        this.designboardService = new DesignBoardService();
    }

    private saveAsReactFile() {
        this.designboardService && this.designboardService.export && this.designboardService.export.exportAsReact();
    }
    private copyAsCode() {
        this.designboardService && this.designboardService.code && this.designboardService.code.copyAsCode();
    }
    private pushToRemoteService() {
        this.designboardService && this.designboardService.dragboard && this.designboardService.dragboard.pushToRemoteService();
    }
    private resetBoard() {
        const dom = document.getElementById('app');
        dom && this.designboardService && this.designboardService.dragboard && this.designboardService.dragboard.resetBoard(dom);
    }


    public render() {
        return (
            <Row>
                <Col span={8}>
                    <div className = 'head-nav-title'>Code Design</div>
                </Col>
                <Col span={8}>
                </Col>
                <Col span={8}>
                    <Row>
                        <Col span={6} className = 'head-tool-list'>
                            <Button type="link" onClick = {this.saveAsReactFile.bind(this)}><CloudDownloadOutlined />导出代码文件</Button>

                        </Col>
                        <Col span={6} className = 'head-tool-list'>
                            <Button type="link" onClick = {this.copyAsCode.bind(this)}><CopyOutlined />复制代码</Button>

                        </Col>
                        <Col span={6} className = 'head-tool-list'>
                            <Button type="link" onClick = {this.pushToRemoteService.bind(this)}><CloudServerOutlined />部署到远程服务器</Button>

                        </Col>
                        <Col span={6} className = 'head-tool-list'>
                            <Button type="link" onClick = {this.resetBoard.bind(this)} danger><DeleteOutlined />清空代码</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
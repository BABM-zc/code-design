import ReactDOM from 'react-dom';
import { App } from './view/App';
import './index.css';
import 'antd/dist/antd.css';
import { GlobalStore } from './common/global_store';

// 初始化全局Store
GlobalStore.getInstance();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

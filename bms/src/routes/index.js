import React from "react";
import { ConfigProvider, Spin } from "antd";
import {Router,Route,Switch,Prompt} from 'react-router-dom';

//实现组件的懒加载
const Home = React.lazy(() => import("../pages/Home"));
const Test = React.lazy(() => import("../pages/Test"));
const Tictactoe = React.lazy(() => import("../pages/Tictactoe"));

//组件路由的加载优化
const SuspenseComponent = (Component = props => (
  <React.Suspense fallback={<Spin />}>
    <Component {...props}>{props.children}</Component>
  </React.Suspense>
));
const Index = () => {
  return <></>;
};
export default Index;

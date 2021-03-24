import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterHome from './routerHome'
//一般情况，会打包到这个文件中
// import Chess from './chess'
// import ThinkingInReact from './thinking-in-react'

//按模块分块打包
// const Chess = () => import('./chess')
// const ThinkingInReact = () => import('./thinking-in-react')

//在组件首次渲染时，自动导入
const Chess = lazy(() => import('./chess'));
const Demo = lazy(() => import('./demo'));
const ThinkingInReact = lazy(() => import('./thinking-in-react.js'));



const App = () => (
    <div>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/ThinkingInReact" component={ThinkingInReact} />
                    <Route path="/Chess" component={Chess} />
                    <Route path="/Demo" component={Demo} />
                </Switch>
            </Suspense>
        </Router>
        <RouterHome></RouterHome>
    </div>
);
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
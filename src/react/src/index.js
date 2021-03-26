import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const RouterHome = function home() {
    return (<ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/ThinkingInReact'>ThinkingInReact</a></li>
        <li><a href='/Chess'>Chess</a></li>
        <li><a href='/Demo'>Demo</a></li>
        <li><a href='/errorBoundary'>errorBoundary</a></li>
        <li><a href='/Fragments'>Fragments</a></li>
    </ul>)
}
//一般情况，会打包到这个文件中
// import Chess from './chess'
// import ThinkingInReact from './thinking-in-react'

//按模块分块打包
// const Chess = () => import('./chess')
// const ThinkingInReact = () => import('./thinking-in-react')

//在组件首次渲染时，自动导入
const Chess = lazy(() => import('./chess'));
const ThinkingInReact = lazy(() => import('./thinking-in-react.js'));
const Demo = lazy(() => import('./demo'));
const ErrorBoundary = lazy(() => import('./errorBoundary'));
const Fragments = lazy(() => import('./Fragments'));



const App = () => (
    <div>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterHome></RouterHome>
                <Switch>
                    <Route path="/ThinkingInReact" component={ThinkingInReact} />
                    <Route path="/Chess" component={Chess} />
                    <Route path="/Demo" component={Demo} />
                    <Route path="/ErrorBoundary" component={ErrorBoundary} />
                    <Route path="/Fragments" component={Fragments} />
                </Switch>
            </Suspense>
        </Router>
    </div>
);
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
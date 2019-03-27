import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import TabBar from '../src/views/TabBar';
import Signature from '../src/views/Signature';
import Travel from '../src/views/Travel';
import Leave from '../src/views/Leave';
import Overtime from '../src/views/Overtime';
import FillTpl from '../src/views/FillTpl';
import Egress from '../src/views/Egress';
import SignList from '../src/views/SignList';

const routes = [
    {
        path: '/',//首页
        component: TabBar
    }, {
        path: '/signature',//首页
        component: Signature
    }, {
        path: '/travel',//出差
        component: Travel
    },
    {
        path: '/leave',//请假
        component: Leave
    },
    {
        path: '/overtime',//加班
        component: Overtime
    },
    {
        path: '/egress',//外出
        component: Egress
    },
    {
        path: '/fillTpl/:templateType',//外出
        component: FillTpl
    },
    {
        path: '/signList',//外出
        component: SignList
    }

];

/**
 *    <Provider store={store}>
 <Router history={history}>

 <Switch>
 {routes.map((route,i)=>{
            return <Route exact={true} key={i}  path={route.path} component={route.component} />
        })}
 </Switch>

 </Router>
 // </Provider>
 * */
function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Switch>
                {routes.map((route, i) => {
                    return <Route exact={true} key={i} path={route.path} component={route.component}/>
                })}
            </Switch>
        </Router>
    );
}

export default RouterConfig;

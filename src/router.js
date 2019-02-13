import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import TabBar from '../src/component/TabBar';
import Signature from '../src/component/Signature';
import Travel from '../src/component/Travel';
import Leave from '../src/component/Leave';
import Overtime from '../src/component/Overtime';

import Egress from '../src/component/Egress';

const routes = [
    {
        path: '/',//首页
        component: TabBar
    }, {
        path: '/signature',//首页
        component: Signature
    },
    {
        path: '/travel',//出差
        component: Travel
    }
    ,
    {
        path: '/leave',//请假
        component: Leave
    }
    ,
    {
        path: '/overtime',//加班
        component: Overtime
    }
    ,
    {
        path: '/egress',//外出
        component: Egress
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

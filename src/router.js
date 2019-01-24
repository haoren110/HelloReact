import React from 'react';
import { Router, Route, Switch} from 'dva/router';
import TabBar from '../src/component/TabBar';
import Signature from '../src/component/Signature';
import Travel from '../src/component/Travel';
import {Provider} from 'react-redux';
const routes=[{
    path:'/',
    component:TabBar
},{
    path:'/signature',
    component:Signature
},
    {
        path:'/travel',
        component:Travel
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
function RouterConfig({ history }) {
    return (
        <Router history={history}>

            <Switch>
                {routes.map((route,i)=>{
                    return <Route exact={true} key={i}  path={route.path} component={route.component} />
                })}
            </Switch>

        </Router>

    );
}

export default RouterConfig;

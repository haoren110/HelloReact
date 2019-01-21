import React from 'react';
import {Router, Route, Switch,HashRouter, Redirect} from 'dva/router';
import TabBar from '../src/component/TabBar';
import Signature from '../src/component/Signature';
import Travel from '../src/component/Travel';
function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
            <Route path="/" exact component={TabBar}/>
                <Route path="/signature" exact component={Signature} />
                <Route path="/travel" exact component={Travel} />
                <Redirect to='/' />
            </Switch>
        </Router>
    );
}

export default RouterConfig;

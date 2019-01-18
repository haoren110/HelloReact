import React from 'react';
import { Router, Route, Switch,BrowserRouter } from 'dva/router';
import TabBar from '../src/component/TabBar';
import Detail from '../src/component/Detail';
import Search from '../src/component/Search';
function RouterConfig({ history }) {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={TabBar} />
                <Route path="/detail"  component={Detail} />
                <Route path="/search"  component={Search} />
            </div>
        </BrowserRouter>
    );
}

export default RouterConfig;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter,HashRouter,Route} from 'react-router-dom';
import dva from 'dva';
import './index.css';
// 1. Initialize
const app = dva();
// 2. Plugins
// app.use({});

// // 3. Model
 app.model(require('../src/component/Second/model').default);
  app.model(require('../src/component/TabBar/model').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
// ReactDOM.render(<BrowserRouter>
//     <Route path="/" component={App}></Route>
// </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

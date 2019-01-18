import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TabBar,ListView} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import LifeView from '../Life';
import Second from '../Second'
import My from '../My';

import home1 from '../../img/home1.png';
import home from '../../img/home.png';
import add from '../../img/add.png';
import add1 from '../../img/add1.png';
import mine from '../../img/mine.png';
import mine1 from '../../img/mine1.png';

class TaBarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           hidden: !this.state.hidden,
                       });
                   }}
                >
                    Click to show/hide tab-bar
                </a>
            </div>
        );
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    hidden={this.state.hidden}
                    prerenderingSiblingsNumber={0}
                >
                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background:`url(${home1}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${home}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        <LifeView />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${add1}) center center /  21px 21px no-repeat` }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${add}) center center /  21px 21px no-repeat` }}
                            />
                        }
                        title="新建"
                        key="Koubei"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <Second />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${mine1}) center center /  21px 21px no-repeat` }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${mine1}) center center /  21px 21px no-repeat` }}
                            />
                        }
                        title="我的"
                        key="Friend"
                        dot={false}
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    {/*<TabBar.Item*/}
                        {/*icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}*/}
                        {/*selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}*/}
                        {/*title="我的"*/}
                        {/*key="my"*/}
                        {/*selected={this.state.selectedTab === 'yellowTab'}*/}
                        {/*onPress={() => {*/}
                            {/*this.setState({*/}
                                {/*selectedTab: 'yellowTab',*/}
                            {/*});*/}
                        {/*}}*/}
                    {/*>*/}
                        {/*<My />*/}
                    {/*</TabBar.Item>*/}
                </TabBar>
            </div>
        );
    }
}
export  default TaBarView;
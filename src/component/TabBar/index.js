import React from 'react';
import { TabBar} from 'antd-mobile';
import { connect } from 'dva';
//import { withRouter } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
import IndexView from '../IndexView';
import AddView from '../AddView'
import My from '../My'
import './index.css';
import home1 from '../../img/home1.png';
import home from '../../img/home.png';
import add from '../../img/add.png';
import add1 from '../../img/add1.png';
import mine from '../../img/mine.png';
import mine1 from '../../img/mine1.png';
//import vip from '../../img/vip.png';
//import sex0 from '../../img/sex0.png';
//import sex1 from '../../img/sex1.png';
//import sex2 from '../../img/sex2.png';
//import axios from '../../utils/axios'
//import { saveFormData, changeSelect, clearData } from './model.js';
//import PropTypes from 'prop-types';
class TaBarView extends React.Component {
    componentWillMount() {
        const {dispatch}=this.props;
        dispatch({type:'tabbar/loadData'});
    }
    handClick(value){
        //this.props.handClick(value,'CHANGESELWCT')
        console.log(value)
    }

    render() {
        const {dispatch}=this.props;
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    hidden={this.props.hidden}
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
                        selected={this.props.selectedTab === 'blueTab'}
                        onPress={()=>{
                            dispatch({type:'tabbar/initList',payload:'blueTab'});
                        }}
                        data-seed="logId"
                    >
                        <IndexView />
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
                        selected={this.props.selectedTab === 'redTab'}
                        onPress={()=>{
                                dispatch({type:'tabbar/initList',payload:'redTab'});
                        }}
                        data-seed="logId1"
                    >
                        <AddView data={this.props}/>
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
                                background: `url(${mine}) center center /  21px 21px no-repeat` }}
                            />
                        }
                        title="我的"
                        key="Friend"
                        dot={false}
                        selected={this.props.selectedTab === 'greenTab'}
                        onPress={()=>{
                            dispatch({type:'tabbar/initList',payload:'greenTab'});
                        }}
                    >
                        <My obj={this.props.obj}/>
                    </TabBar.Item>

                </TabBar>
            </div>
        );
    }
}
TaBarView.propTypes={
};
const mapStateToProps = (state) =>{
    console.log(state)
    return state.tabbar
}
export  default connect(mapStateToProps)(TaBarView)  ;
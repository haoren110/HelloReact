import React from 'react';
import { TabBar} from 'antd-mobile';
import { connect } from 'dva';
import { withRouter } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
import LifeView from '../Life';
import Second from '../Second'
import './index.css';
import home1 from '../../img/home1.png';
import home from '../../img/home.png';
import add from '../../img/add.png';
import add1 from '../../img/add1.png';
import mine from '../../img/mine.png';
import mine1 from '../../img/mine1.png';
import vip from '../../img/vip.png';
import { saveFormData, changeSelect, clearData } from './model.js';
import PropTypes from 'prop-types'
class TaBarView extends React.Component {
    constructor(props) {
        super(props);
    }
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                {/*<div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>*/}
                {/*<a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}*/}
                   {/*onClick={(e) => {*/}
                       {/*e.preventDefault();*/}
                       {/*this.setState({*/}
                           {/*hidden: !this.state.hidden,*/}
                       {/*});*/}
                   {/*}}*/}
                {/*>*/}
                    {/*Click to show/hide tab-bar*/}
                {/*</a>*/}
                <div className="avator-box">
                    <a href="">
                        <div className="avator f_left"><img src={mine} alt=""/></div>
                        <ul className="avator-name f_left">
                            <li style={{color:'#000'}}>张三<span className="sex"><img src={mine} alt="" /></span></li>
                            <li style={{color:'#868686'}}>微信昵称</li>
                        </ul>
                    </a>
                </div>
                <ul className="other-info">
                    <li className="clearfix" style={{display:this.props.isPrivilege?"":"none"}}>
                        <a href="./superEtrance.html" className="clearfix">
                            <div className="f_left">先否未奏</div>
                            <div className="f_left vip"><img src={vip}/></div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix" style={{display:this.props.isPrivilege?"":"none"}}>
                        <a href="./superPrivilege.html" className="clearfix">
                            <div className="f_left">已妥却否</div>
                            <div className="f_left vip"><img src={vip}/></div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix">
                        <a href="./collect.html" className="clearfix">
                            <div className="f_left">我的收藏</div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix" style={{display:this.props.attributeState === 4 ? "" : "none"}}>
                        <a href="./verify.html" className="clearfix">
                            <div className="f_left">考勤助手</div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix">
                        <a href="./annualTotal.html" className="clearfix">
                            <div className="f_left">存换休指数</div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix">
                        <a href="./modify.html" className="clearfix">
                            <div className="f_left">修改手机号</div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix">
                        <a href="./distrub.html" className="clearfix">
                            <div className="f_left">勿扰模式</div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix">
                        <a href="./message.html" className="clearfix">
                            <div className="f_left">用户反馈</div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix">
                        <a href="tel:029-88318318" className="clearfix">
                            <div className="f_left">联系我们 <span className='telTip'>029-88318318（转电商部）</span></div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix">
                        <a href="./plat.html" className="clearfix">
                            <div className="f_left">关于平台</div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                </ul>
            </div>
        );
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
                        selected={this.props.selectedTab === 'redTab'}
                        onPress={()=>{
                                dispatch({type:'tabbar/initList',payload:'redTab'});
                        }}
                        data-seed="logId1"
                    >
                        <Second data={this.props}/>
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
                        selected={this.props.selectedTab === 'greenTab'}
                        onPress={()=>{
                            dispatch({type:'tabbar/initList',payload:'greenTab'});
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>

                </TabBar>
            </div>
        );
    }
}
TaBarView.propTypes={
};
const mapStateToProps = (state) =>{
    return state.tabbar
}
export  default connect(mapStateToProps)(TaBarView)  ;
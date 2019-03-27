import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import sex0 from "../../img/sex0.png";
import sex1 from "../../img/sex1.png";
import sex2 from "../../img/sex2.png";
import vip from "../../img/vip.png";
class My extends React.Component {
    state = {
        value: '美食',
    };

    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        let sexImg=sex0;
        if(this.props.sex===1){
            sexImg=sex1
        }else if(this.props.sex===2){
            sexImg=sex2
        }
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
                    <a href='./'>
                        <div className="avator f_left"><img src={this.props.obj.head} alt=""/></div>
                        <ul className="avator-name f_left">
                            <li style={{color:'#000'}}>{this.props.obj.name}<span className="sex"><img src={sexImg} alt="" /></span></li>
                            <li style={{color:'#868686'}}>微信昵称:{this.props.obj.wxname}</li>
                        </ul>
                    </a>
                </div>
                <ul className="other-info">
                    <li className="clearfix" style={{display:this.props.isPrivilege?"":"none"}}>
                        <a href="./superEtrance.html" className="clearfix">
                            <div className="f_left">先否未奏</div>
                            <div className="f_left vip"><img src={vip} alt={vip}/></div>
                            <div className="other-val f_right"><i className='iconfont icon-right'></i></div>
                        </a>
                    </li>
                    <li className="clearfix" style={{display:this.props.isPrivilege?"":"none"}}>
                        <a href="./superPrivilege.html" className="clearfix">
                            <div className="f_left">已妥却否</div>
                            <div className="f_left vip"><img src={vip} alt={vip}/></div>
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
}
export default My;
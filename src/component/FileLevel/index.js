import React from 'react';
import styles from './index.css';
import help from "../../img/help.png";
import {Modal} from 'antd-mobile';
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
class Filelevel extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props)
        this.fileTypeClick = this.fileTypeClick.bind(this);
        this.state={ modal1: false,
            modal2: false,}
    }
    fileTypeClick(value,e) {
        this.props.chooseFileType(value);
    }
    showModal = (key)  => {
        console.log(key)
        // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }


    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
render() {
    return (<ul className="level clearfix">
        <li className="f_left">文级</li>
        <li className={` f_left ${this.props.fileType===1?"active":""}`} onClick={(e)=>{this.fileTypeClick(1,this)} }>
            <input type="radio" className="hidden" name="grade" value="1" data-level='正常' id="normal" />
            <label htmlFor="normal"><span className={`iconfont icon-square ${this.props.fileType===1?"icon-squarecheck":""}`}></span>正常</label>
        </li>
        <li className={` f_left ${this.props.fileType===2?"active":""}`} onClick={()=>{this.fileTypeClick(2,this)} }>
            <input type="radio" className="hidden" name="grade" value="2" data-level='紧急' id="urgent" />
            <label htmlFor="urgent"><span className={`iconfont  icon-square ${this.props.fileType===2?"icon-squarecheck":""}`}></span>紧急</label>
        </li>
        <li className={` f_left ${this.props.fileType===3?"active":""}`} onClick={()=>{this.fileTypeClick(3,this)} }>
            <input type="radio" className="hidden" name="grade" value="3" data-level='特急' id="extra" />
            <label htmlFor="extra"><span className={`iconfont icon-square ${this.props.fileType===3?"icon-squarecheck":""}`}></span>特急</label>
        </li>
        <li className="f_left" onClick={()=>this.showModal('modal1')}>
            <span className="help"><img src={help} alt="" /></span>
        </li>
        <Modal
            visible={this.state.modal1}
            transparent
            maskClosable={false}
            onClose={this.onClose('modal1')}
            title=""
            footer={[{ text: '我知道了', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
            afterClose={() => {  }}
        >
            <div style={{ minWidth: '250px',minHeight:'120px'}}>
                <h4 style={{margin:'1rem 0 1rem 0'}}>文级级别（签呈审批节点通知获悉方式）</h4>
                <ul  style={{margin:'0.5rem 1rem'}}>
                    <li style={{textAlign:'left'}}>1、正常：微信推送</li>
                    <li style={{textAlign:'left'}}>2、紧急：勿扰时间外短信推送</li>
                    <li style={{textAlign:'left'}}>3、特急：全天候短信推送</li>
                </ul>
            </div>
        </Modal>
    </ul>);
}
}
export  default Filelevel;
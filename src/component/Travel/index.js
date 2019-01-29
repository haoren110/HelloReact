import React from 'react';
import './index.css';
import history from '../../img/history.png';
import   clearNoNum from '../../utils/help';
import { DatePicker, List,Modal } from 'antd-mobile';
// import help from '../../img/help.png';
import help from '../../img/help.png';
//const alert=Modal.alert;
const nowTimeStamp = Date.now();
//const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
//const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}
// const showAlert = () => {
//     const alertInstance = alert('Delete', 'Are you sure???', [
//         { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
//         { text: 'OK', onPress: () => console.log('ok') },
//     ]);
//     setTimeout(() => {
//         // 可以调用close方法以在外部close
//         console.log('auto close');
//         alertInstance.close();
//     }, 500000);
// };
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

// function formatDate(date) {
//     /* eslint no-confusing-arrow: 0 */
//     console.log(date.getFullYear())
//     const pad = n => n < 10 ? `0${n}` : n;
//     const year=date.getFullYear();
//     const month= pad(date.getMonth()+1);
//     const day= pad(date.getDate());
//     const dateStr = `${year}-${month}-${day}`;
//    // const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
//     return `${dateStr} `;
// }
class Travel extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            planTrip:"",
            trafficExp:"",
            housExp:"",
            mealExp:"",
            otherExp:"",
            objective:"",
            dateStart:"",
            dateEnd:"",
            fileType:1,
            modal1: false,
            modal2: false,
            dropDowm:true,
            trafficTypeArray:[{value:'飞机',choose:false},{value:'火车',choose:false},{value:'汽车',choose:false},{value:'出租',choose:false}]
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.planTripChange=this.planTripChange.bind(this);
        this.trafficExpChange=this.trafficExpChange.bind(this);
        this.housExpChange=this.housExpChange.bind(this);
        this.mealExpChange=this.mealExpChange.bind(this);
        this.otherExpChange=this.otherExpChange.bind(this);
        this.objectiveChange=this.objectiveChange.bind(this);
        //  this.fileTypeClick=this.fileTypeClick.bind(this);
    }
    handleSubmit(event){
        console.log( this.state);
        event.preventDefault();
    }
    planTripChange(event) {
        this.setState({planTrip: event.target.value});
    }
    trafficExpChange(event){
        this.setState({trafficExp: clearNoNum(event.target)});
    }
    housExpChange(event) {
        this.setState({housExp: event.target.value});
    }
    mealExpChange(event){
        this.setState({mealExp: event.target.value});
    }
    otherExpChange(event) {
        this.setState({otherExp: event.target.value});
    }
    objectiveChange(event) {
        this.setState({objective: event.target.value});
    }
    fileTypeClick=(value)=>{
        console.log(value)
        this.setState({fileType:value})
    }
    showModal = key => (e) => {
        console.log(key)
        e.preventDefault(); // 修复 Android 上点击穿透
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
    dropDown=() => (e) =>{
        this.setState({dropDowm:!this.state.dropDowm})
    }
    trafficType=(value)=>(e)=>{
        let trafficTypeArray=this.state.trafficTypeArray;
        trafficTypeArray[value].choose=!this.state.trafficTypeArray[value].choose
        this.setState({trafficTypeArray:trafficTypeArray})
    }

    render() {
        const value=this.state.trafficTypeArray.filter((val)=>{return val.choose===true}).map((val)=><span style={{fontFamily:' sans-serif',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0,color:'#333'}} key={val.value}>{val.value}</span>);
        let value2="请选择";
        if(!!value&&value.length!==0){
            value2=value
        }else{
            value2="请选择"
        }
             return (
                 <div className="container">
                 {/*提示历史足迹按钮*/}
                 {/*<div className="mask">*/}
                     {/*<div className="arrow">*/}
                         {/*<img src="./img/arrow.png" alt="" />*/}
                     {/*</div>*/}
                     {/*<div className="point">老铁，您的<span>历史差旅</span>签呈都在这里藏着喔~</div>*/}
                 {/*</div>*/}
                 <div className="notes">
                     <h4 className="num">这是本月第 <span></span> 次提交出差<a href="./travelRecord.html" className="f_right"><img
                         src={history} alt="" /></a></h4>
                     <form onSubmit={this.handleSubmit}>
                         <ul className="level clearfix">
                             <li className="f_left">文级</li>
                             <li className={` f_left ${this.state.fileType===1?"active":""}`} onClick={()=>{this.fileTypeClick(1)} }>
                                 <input type="radio" className="hidden" name="grade" value="1" data-level='正常' id="normal" />
                                 <label htmlFor="normal"><span className={`iconfont icon-square ${this.state.fileType===1?"icon-squarecheck":""}`}></span>正常</label>
                             </li>
                             <li className={` f_left ${this.state.fileType===2?"active":""}`} onClick={()=>{this.fileTypeClick(2)} }>
                                 <input type="radio" className="hidden" name="grade" value="2" data-level='紧急' id="urgent" />
                                 <label htmlFor="urgent"><span className={`iconfont  icon-square ${this.state.fileType===2?"icon-squarecheck":""}`}></span>紧急</label>
                             </li>
                             <li className={` f_left ${this.state.fileType===3?"active":""}`} onClick={()=>{this.fileTypeClick(3)} }>
                                 <input type="radio" className="hidden" name="grade" value="3" data-level='特急' id="extra" />
                                 <label htmlFor="extra"><span className={`iconfont icon-square ${this.state.fileType===3?"icon-squarecheck":""}`}></span>特急</label>
                             </li>
                             <li className="f_left" onClick={this.showModal('modal1')}>
                                 <span className="help"><img src={help} alt="" /></span>
                             </li>
                         </ul>
                         <ul className="apply">
                             <li><span>预计行程</span><input type="text" className="planTrip" placeholder="如：西安-北京-西安(必填)" value={this.state.planTrip} onChange={this.planTripChange}/></li>
                             <DatePicker
                                 mode="date"
                                 title="出发时间"
                                 extra=""
                                 value={this.state.dateStart}
                                 onChange={date => this.setState({dateStart:date})}
                             >
                                 <List.Item arrow="horizontal">出发时间</List.Item>
                             </DatePicker>
                             <DatePicker
                                 mode="date"
                                 title="返回时间"
                                 extra=""
                                 format="YYYY-MM-DD"
                                 value={this.state.dateEnd}
                                 onChange={(date) =>{
                                     this.setState( {dateEnd:date} )}}
                             >
                                 <List.Item arrow="horizontal">返回时间</List.Item>
                             </DatePicker>
                         </ul>

                         <ul className="apply">
                             <li><span>预计交通费</span><input type="text" className="trafficExp text_right" placeholder="请输入预计交通费"
                                                          onChange={this.trafficExpChange} value={this.state.trafficExp} />元</li>
                             <li><span>预计住宿费</span><input type="text" className="housExp text_right" placeholder="请输入预计住宿费"
                                                          onChange={this.housExpChange} value={this.state.housExp} />元</li>
                             <li><span>预计交食补</span><input type="text" className="mealExp text_right" placeholder="请输入预计交食补"
                                                          onChange={this.mealExpChange} value={this.state.mealExp} />元</li>
                             <li><span>预 计 其 他 </span><input type="text" className="otherExp text_right" placeholder="请输入预计其他费用"
                                                             onChange={this.otherExpChange} value={this.state.otherExp} />元</li>
                         </ul>
                         <ul className="apply">
                             <li className="clearfix"><span className="f_left">交通工具</span>
                                 <div className="dropdown">
                                     <div className="dropdown-text" onClick={this.dropDown()}>{value2}</div>
                                     <ul className="dropdown-list" hidden={this.state.dropDowm}>
                                         <li onClick={this.trafficType(0)} className={this.state.trafficTypeArray[0].choose?"active":""}>飞机</li>
                                         <li onClick={this.trafficType(1)} className={this.state.trafficTypeArray[1].choose?"active":""}>火车</li>
                                         <li onClick={this.trafficType(2)} className={this.state.trafficTypeArray[2].choose?"active":""}>汽车</li>
                                         <li onClick={this.trafficType(3)} className={this.state.trafficTypeArray[3].choose?"active":""}>出租</li>
                                     </ul>
                                 </div>
                             </li>
                         </ul>
                         <ul className="textarea-box">
                             <li>目的简述</li>
                             <li><textarea className="objective" placeholder="请输入出差目的简述" onChange={this.objectiveChange} value={this.state.objective}></textarea></li>
                         </ul>

                         {/*附件 */}
                         {/*<form action="" enctype="multipart/form-data" method="post" id="upload">*/}
                         {/*附件预览*/}
                         {/*<div class="img-view">*/}
                         {/*<h4>附件：<span>温馨提示：V1.5.2版本仅支持图片附件</span></h4>*/}
                         {/*<ul class="preview clearfix">*/}
                         {/*<li class="affix">*/}
                         {/*<img src="./img/jia.png" alt="" />*/}
                         {/*<label for="file"></label>*/}
                         {/*<input type="file" name="file" id="file" class="hidden" />*/}
                         {/*</li>*/}
                         {/*</ul>*/}
                         {/*</div>*/}

                         {/*<div class="annex">*/}
                         {/*<input type="text" value="" class="hidden" name="petitionPoolId" id="petitionPoolId" />*/}
                         {/*</div>*/}
                         {/*</form> */}

                         <input className="btn inputBtn"  type="submit" value='提交申请' />
                     </form>
                 </div>
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

                 </div>);
    }


};
export default Travel;

import React from 'react';
import './index.css';
import axios from "../../utils/axios";
import history from '../../img/history.png';
import clearNoNum from '../../utils/help';
import { DatePicker, List, Modal, Toast, InputItem } from 'antd-mobile';
// import help from '../../img/help.png';
import help from '../../img/help.png';
import arrow from '../../img/arrow.png';
import Filelevel from '../../component/FileLevel'
import { from } from "immutable/contrib/cursor";
const alert = Modal.alert;
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
// 检测费用是否符合规范
function isNum(str) {
    if (str === "" || str === "0") {
        return true;
    } else {
        return Number(str);
    }
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

function formatDateBasic(date) {
    const pad = n => n < 10 ? `0${n}` : n;
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const dateStr = `${year}-${month}-${day}`;
    return `${dateStr}`;
}
class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maskHidden: false,
            planTrip: "",
            trafficExp: "",
            housExp: "",
            mealExp: "",
            otherExp: "",
            objective: "",
            dateStart: "",
            dateEnd: "",
            fileType: 1,
            modal1: false,
            modal2: false,
            dropDowm: true,
            trafficTypeArray: [{ value: '飞机', choose: false }, { value: '火车', choose: false }, { value: '汽车', choose: false }, { value: '出租', choose: false }]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.planTripChange = this.planTripChange.bind(this);
        this.trafficExpChange = this.trafficExpChange.bind(this);
        this.housExpChange = this.housExpChange.bind(this);
        this.mealExpChange = this.mealExpChange.bind(this);
        this.otherExpChange = this.otherExpChange.bind(this);
        this.objectiveChange = this.objectiveChange.bind(this);
        //  this.fileTypeClick=this.fileTypeClick.bind(this);
    }
    componentDidMount() {
        console.log(this)
        const _this = this;
        if (this.props.history.action === "POP") {
            setTimeout(() => {
                window.scrollTo(0, 0);
            });
        }
        document.body.style.overflow = 'hidden';
        document.body.addEventListener('click', function (e) {
            console.log(e.target.nodeName)
            if (e.target === document.querySelector('.dropdown-text') || e.target.nodeName === 'LI') {

            } else {
                _this.setState({ dropDowm: true })
            }
        }, false)

    }
    closeMask = () => (e) => {
        const body = document.body;
        body.style.overflow = 'auto'
        this.setState({ maskHidden: true })
    }

    handleSubmit(event) {
        let { fileType, objective, planTrip, trafficTypeArray, trafficExp, housExp, mealExp, otherExp, dateStart, dateEnd } = this.state;
        let vehicle = "";
        trafficTypeArray.forEach((val, i) => {
            if (val.choose) {
                vehicle += val.value
            }
        });
        if (planTrip === "") {
            Toast.info('预计行程不能为空', 3);
            return false;
        } else if (planTrip.length > 45) {
            Toast.info('预计行程过长请按示例重新填写！', 2);
            return false;
        } else if (dateStart === '') {
            Toast.info('出发时间不能为空', 2);
            return false;
        } else if (dateEnd === '') {
            Toast.info('返回时间不能为空', 2);
            return false;
        } else if (vehicle === '') {
            Toast.info('交通工具不能为空', 2);
            return false;
        } else if (objective === '') {
            Toast.info('目的简述不能为空', 2);
            return false;
        };
        if (!isNum(trafficExp)) {
            Toast.info('预计交通费用填写有误，请重新填写', 2);
            return false;
        };
        if (!isNum(housExp)) {
            Toast.info('预计住宿费用填写有误，请重新填写', 2);

            return false;
        };
        if (!isNum(mealExp)) {
            Toast.info('预计交食补费用填写有误，请重新填写', 2);

            return false;
        };
        if (!isNum(otherExp)) {
            Toast.info('预计其他费用填写有误，请重新填写', 2);
            return false;
        };
        if (trafficExp === "") {
            trafficExp = 0;
        }
        if (housExp === "") {
            housExp = 0;
        }
        if (mealExp === "") {
            mealExp = 0;
        }
        if (otherExp === "") {
            otherExp = 0;
        }
        const dateStart1 = formatDateBasic(dateStart);
        const dateEnd1 = formatDateBasic(dateEnd);
        //floatTool.add(floatTool.add(trafficExp,housExp),floatTool.add(mealExp,otherExp))
        let sum = trafficExp + housExp + mealExp + otherExp;
        let data = {
            fileLevel: fileType,
            objective: objective, // 目的简述
            planTrip: planTrip, // 预计行程
            planStartDate: dateStart1, // 出发时间
            planEndDate: dateEnd1, // 返回时间
            vehicle: vehicle, // 交通工具
            planTrafficExpense: trafficExp, // 预计交通费用
            planHousingExpense: housExp, // 预计住宿费用
            planTrafficMealExpense: mealExp, // 预计交食补费用
            planOtherExpense: otherExp, // 预计其他费用
            planTogetherExpense: sum,
            addCustomerId: 'AC63A0DD00B54A12AD1FF9527CFFB98D',
            departmentCode: 1004010,
        };
        console.log(localStorage.getItem('filltpl'))
        const alertInstance = alert('Delete', 'Are you sure???', [
            { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
            { text: 'OK', onPress: () => console.log('ok') },
        ]);

        event.preventDefault();
    }
    planTripChange(event) {
        this.setState({ planTrip: event.target.value });
    }
    trafficExpChange(event) {
        this.setState({ trafficExp: clearNoNum(event.target) });
    }
    housExpChange(event) {
        this.setState({ housExp: event.target.value });
    }
    mealExpChange(event) {
        this.setState({ mealExp: event.target.value });
    }
    otherExpChange(event) {
        this.setState({ otherExp: event.target.value });
    }
    objectiveChange(event) {
        this.setState({ objective: event.target.value });
    }
    fileTypeClick = (value) => {
        console.log(value)
        this.setState({ fileType: value })
    }

    dropDown(e) {
        e.preventDefault();
        this.setState({ dropDowm: !this.state.dropDowm })
    }
    trafficType(value) {
        let trafficTypeArray = this.state.trafficTypeArray;
        trafficTypeArray[value].choose = !this.state.trafficTypeArray[value].choose
        this.setState({ trafficTypeArray: trafficTypeArray })
    }

    render() {
        const value = this.state.trafficTypeArray.filter((val) => { return val.choose === true }).map((val) => <span style={{
            fontFamily: ' sans-serif',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0, color: '#333'
        }} key={val.value}>{val.value}</span>);
        let value2 = "请选择";
        if (!!value && value.length !== 0) {
            value2 = value
        } else {
            value2 = "请选择"
        }
        return (
            <div className="container">
                {/*提示历史足迹按钮*/}
                <div className="mask" onClick={this.closeMask()} hidden={this.state.maskHidden}>
                    <div className="arrow">
                        <img src={arrow} alt={arrow} />
                    </div>
                    <div className="point">老铁，您的<span>历史差旅</span>签呈都在这里藏着喔~</div>
                </div>
                <div className="notes">
                    <h4 className="num">这是本月第 <span></span> 次提交出差<a href="./travelRecord.html" className="f_right"><img
                        src={history} alt="" /></a></h4>
                    <form onSubmit={this.handleSubmit}>
                        <Filelevel fileType={this.state.fileType} chooseFileType={this.fileTypeClick} />
                        <List>
                            <List.Item><span>预计行程</span><input type="text" className="planTrip" placeholder="如：西安-北京-西安(必填)" value={this.state.planTrip} onChange={this.planTripChange} /></List.Item>
                            <DatePicker
                                mode="date"
                                title="出发时间"
                                extra=""
                                value={this.state.dateStart}
                                onChange={date => {
                                    this.setState({ dateStart: date })
                                }}
                            >
                                <List.Item arrow="horizontal">出发时间</List.Item>
                            </DatePicker>
                            <DatePicker
                                mode="date"
                                title="返回时间"
                                extra=""
                                format="YYYY-MM-DD"
                                value={this.state.dateEnd}
                                onChange={(date) => {
                                    this.setState({ dateEnd: date })
                                }}
                            >
                                <List.Item arrow="horizontal">返回时间</List.Item>
                            </DatePicker>
                        </List>

                        <ul className="apply">
                            <li><span>预计交通费</span><input type="number" className="trafficExp text_right" placeholder="请输入预计交通费"
                                onChange={this.trafficExpChange} value={this.state.trafficExp} />元</li>
                            <li><span>预计住宿费</span><input type="number" className="housExp text_right" placeholder="请输入预计住宿费"
                                onChange={this.housExpChange} value={this.state.housExp} />元</li>
                            <li><span>预计交食补</span><input type="number" className="mealExp text_right" placeholder="请输入预计交食补"
                                onChange={this.mealExpChange} value={this.state.mealExp} />元</li>
                            <li><span>预 计 其 他 </span><input type="number" className="otherExp text_right" placeholder="请输入预计其他费用"
                                onChange={this.otherExpChange} value={this.state.otherExp} />元</li>
                        </ul>
                        <ul className="apply">
                            <li className="clearfix"><span className="f_left">交通工具</span>
                                <div className="dropdown">
                                    <div className="dropdown-text" onClick={(e) => this.dropDown(e)}>{value2}</div>
                                    <ul className="dropdown-list" hidden={this.state.dropDowm}>
                                        <li onClick={(e) => {
                                            e.stopPropagation();
                                            e.nativeEvent.stopImmediatePropagation();
                                            this.trafficType(0)
                                        }} className={this.state.trafficTypeArray[0].choose ? "active" : ""}>飞机</li>
                                        <li onClick={(e) => {
                                            e.stopPropagation();
                                            e.nativeEvent.stopImmediatePropagation(); this.trafficType(1)
                                        }} className={this.state.trafficTypeArray[1].choose ? "active" : ""}>火车</li>
                                        <li onClick={(e) => {
                                            e.stopPropagation();
                                            e.nativeEvent.stopImmediatePropagation(); this.trafficType(2)
                                        }} className={this.state.trafficTypeArray[2].choose ? "active" : ""}>汽车</li>
                                        <li onClick={(e) => {
                                            e.stopPropagation();
                                            e.nativeEvent.stopImmediatePropagation(); this.trafficType(3)
                                        }} className={this.state.trafficTypeArray[3].choose ? "active" : ""}>出租</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="textarea-box">
                            <li>目的简述</li>
                            <li><textarea className="objective" placeholder="请输入出差目的简述" onChange={this.objectiveChange} value={this.state.objective}></textarea></li>
                        </ul>

                        <input className="btn inputBtn" type="submit" value='提交申请' />
                    </form>
                </div>
            </div>);
    }
};
export default Travel;

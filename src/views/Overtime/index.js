import React from 'react';
import './index.css';
//import history from '../../img/history.png';
import affix from '../../img/affix.png';
import { DatePicker, List, Badge, Toast } from 'antd-mobile';
import history from '../../img/history.png';
import other from '../../img/other.png';
import pdf from '../../img/pdf.png';
import ppt from '../../img/ppt.png';
import txt from '../../img/txt.png';
import word from '../../img/word.png';
import zip from '../../img/zip.png';
import image from '../../img/image.png';
import Filelevel from "../../component/FileLevel";
import FileUpLoad from "../../component/fileUpLoad";
import axios from "../../utils/axios";
import {formatTime} from '../../utils/public'

class Overtime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileType: 1,
            leaveChooseList: true,
            times: [{ dateStart: "", dateEnd: "" }],
            daytotal: "",
            hourtotal: "",
            replacement: "",
            replacemobile: "",
            reason: "",
            files: []
        };
        this.reasonChange = this.reasonChange.bind(this);
        // this.fileChange = this.fileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fileTypeClick = (value) => {
        console.log(value)
        this.setState({ fileType: value })
    }
    dropdownRadio = (e) => {
        this.setState({ leaveChooseList: !this.state.leaveChooseList })
    }
    selectRadio = (num) => {
        let array = this.state.leaveListJson;
        array.forEach((value, index) => {
            value.choosed = false;
            if (num === index) {
                value.choosed = true;
            }
        });
        this.setState({ leaveListJson: array, leaveChooseList: true });
    }
    //添加时间
    addTimes() {
        let newDate = { dateStart: "", dateEnd: "" };
        let times = this.state.times;
        times.push(newDate);
        this.setState({ times: times })
    }
    //删除时间
    deleteTimes(i) {
        let newDate = this.state.times;
        newDate.splice(i, 1);
        this.setState({ times: newDate })
    }
    //请假事由
    reasonChange(event) {
        this.setState({ reason: event.target.value })
    }
    //文件删除
    delFile(index){
        let files= this.state.files;
        files.splice(index,1);
        this.setState({files:files})
    }
    changeFiles = (array) => {
        //console.log(array)
        this.setState({ files: array })
    }
    //表单提交
    handleSubmit(event) {
        event.preventDefault();
        const {reason,times,leaveListJson,files,fileType}=this.state;
        let  leaveType= leaveListJson.filter((value)=>value.choosed===true)[0].value;

        if(reason===""){
            Toast.info('有必填项为空，请填写！',3)
            return false;
        }else {
            let start=[],end=[];
            times.forEach((value,index)=>{
                // let now=new Date(value.dateStart);
                // let utcOffset = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
                // let nows=new Date(value.dateEnd);
                // let utcOffsets = new Date(nows.getTime() - (nows.getTimezoneOffset() * 60000));
                // console.log(utcOffset.toISOString())
                start.push(formatTime(value.dateStart,'Y-M-D h:m'));
                end.push(formatTime(value.dateEnd,'Y-M-D h:m'));
            });
            const data = {
                fileLevel: fileType,
                planBeginTime: start.join(','),
                planEndTime: end.join(','),
                reason: reason,
                addCustomerId: 'AC63A0DD00B54A12AD1FF9527CFFB98D',
                departmentCode: 1004010,
                specialExplain:""
            };

            console.log(data)
            return false;
            // axios.post('petitionPoolController/addOvertime.do', data).then((res)=>{
            //     if (res.statusCode == 1) {
            //         if(this.state.files.length>0){
            //             let formData=new FormData;
            //             formData.append('petitionPoolId',res.obj);
            //            for(let i=0;i<this.state.files.length;i++){
            //                formData.append('files',this.state.files[i].file);
            //                console.log(this.state.files[i])
            //            }
            //             axios.post('petitionPoolController/addPetitionPoolFile.do',formData).then((msg)=>{
            //                   this.props.history.push({pathname: '/'});
            //             })
            //         }
            //         return false;
            //     }});
            return false;
        }
    }
    render() {
        const filesList = this.state.files.map((value, index) => {
            let elm;
            switch (value.type) {
                case "dot": case "docx": case "dotm": case "doc":
                    elm = <li className="affix" key={index} ><div className='affix-icon'><img src={word} alt={word} /></div><p>{value.name}</p><span className='del' onClick={()=>this.delFile(index)}>×</span></li>
                    break;
                case "jpg": case "png": case "jpeg": case "gif":
                    elm = <li className="affix" key={index} ><div className='affix-icon'><img src={image} alt={image} /></div><p>{value.name}</p><span className='del' onClick={()=>this.delFile(index)}>×</span></li>
                    break;
                case "pdf":
                    elm = <li className="affix" key={index} ><div className='affix-icon'><img src={pdf} alt={pdf} /></div><p>{value.name}</p><span className='del' onClick={()=>this.delFile(index)}>×</span></li>
                    break;
                case "xls": case "xlsx":
                    elm = <li className="affix" key={index} ><div className='affix-icon'><img src={word} alt={word} /></div><p>{value.name}</p><span className='del' onClick={()=>this.delFile(index)}>×</span></li>
                    break;
                case "txt":
                    elm = <li className="affix" key={index} ><div className='affix-icon'><img src={txt} alt={txt} /></div><p>{value.name}</p><span className='del' onClick={()=>this.delFile(index)}>×</span></li>
                    break;
                case "ppt": case "pptx":
                    elm = <li className="affix" key={index} ><div className='affix-icon'><img src={ppt} alt={ppt} /></div><p>{value.name}</p><span className='del' onClick={()=>this.delFile(index)}>×</span></li>
                    break;
                // case "zip": case "rar":
                //     suffix = "zip";
                //     break;
                default:
                    elm = 'other'
                    break;
            }
            return elm;
        });
        const timesList = this.state.times.map((value, index) => {
            return (<ul className="info-box time-box overtime-item" style={{ padding: '1rem 0 0 0' }} key={index}>
                <DatePicker
                    mode="datetime"
                    title="起始时间"
                    extra=" "
                    value={value.dateStart}
                    onChange={date => {
                        let newDate = this.state.times;
                        newDate[index].dateStart = date;
                        this.setState({ times: newDate })
                    }}
                >
                    <List.Item arrow="horizontal"><Badge text={'*'} style={{ background: 'none', color: 'red' }} /><span
                        style={{ fontSize: '0.75rem' }}>起始时间</span></List.Item>
                </DatePicker>
                <DatePicker
                    mode="datetime"
                    title="结束时间"
                    extra=" "
                    value={value.dateEnd}
                    onChange={(date) => {
                        let newDate = this.state.times;
                        newDate[index].dateEnd = date;
                        this.setState({ times: newDate })
                    }}
                >
                    <List.Item arrow="horizontal"><Badge text={'*'} style={{ background: 'none', color: 'red' }} /><span
                        style={{ fontSize: '0.75rem' }}>结束时间</span></List.Item>
                </DatePicker>
                <div className="del-time" onClick={() => this.deleteTimes(index)}><i
                    className="iconfont icon-delete"></i></div>
            </ul>)
        });
        return (
            <div className="container">
                <div className="dask"></div>
                {/*签呈标签 */}
                <h4 className="times">加班申请 <a href="./attendanceRecord.html?checktype=10" className="f_right"><img
                    src={history} alt="" /></a></h4>
                {/*说明 */}
                <div className="explain">
                    说明：加班须事前履行加班审批手续，获准后，方可加班；加班一律按小时计算，且须按规定考勤（即打卡），无考勤记录者，不计加值班。
                </div>
                <div className="egress-box">
                    {/*文级*/}
                    <Filelevel fileType={this.state.fileType} chooseFileType={this.fileTypeClick} />
                </div>
                <form className="egress-info" onSubmit={this.handleSubmit}>
                    {/*/!*外出时间 *!/*/}
                    <div className="overtime-quantum">
                        {timesList}
                    </div>
                    <div className="add-time-quantum" onClick={() => this.addTimes()}><i
                        className="iconfont icon-roundadd"></i> 新增时间段
                    </div>
                    <ul className="info-box">
                        <li className="areabox flex flex-v">
                            <label className="required" htmlFor="">加班事由：</label>
                            <textarea type='text' name="reason" value={this.state.reason} onChange={this.reasonChange}
                                      className="flex-1"></textarea>
                        </li>
                    </ul>
                    <FileUpLoad filesList={filesList}  files={this.state.files} changFiles={this.changeFiles} />

                    <input className="btn inputBtn" type="submit" value='提交'/>
                </form>
            </div>)
    }
};
export default Overtime;

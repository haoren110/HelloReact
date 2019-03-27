import React from 'react';
import './index.css';
import Filelevel from "../../component/FileLevel";
import {Badge, DatePicker,List} from "antd-mobile";
import affix from "../../img/affix.png";
import word from "../../img/word.png";
import image from "../../img/image.png";
import pdf from "../../img/pdf.png";
import txt from "../../img/txt.png";
import ppt from "../../img/ppt.png";
//import history from '../../img/history.png';
// import help from '../../img/help.png';
//import help from '../../img/help.png';
class Egress extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            fileType:1,
            times: [{ dateStart: "", dateEnd: "" }],
            trafficTypeArray: [{value: '08:20', choose: false}, {value: '11:50', choose: false}, {
                value: '13:00',
                choose: false
            }, {value: '17:20', choose: false}],
            dropDowm:true,files: []
        }
    }
    dropDown(e) {
        e.preventDefault();
        this.setState({dropDowm: !this.state.dropDowm})
    }

    trafficType(value) {
        let trafficTypeArray = this.state.trafficTypeArray;
        trafficTypeArray[value].choose = !this.state.trafficTypeArray[value].choose
        this.setState({trafficTypeArray: trafficTypeArray})
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
    selectCheckbox = (num) => {
        let array = this.state.leaveListJson;
        array.forEach((value, index) => {
            value.choosed = false;
            if (num === index) {
                value.choosed = true;
            }
        });
        this.setState({ leaveListJson: array, leaveChooseList: true });
    };
    fileTypeClick=(value)=>{
        console.log(value)
        this.setState({fileType:value})
    }
    //文件删除
    delFile(index){
        let files= this.state.files;
        files.splice(index,1);
        this.setState({files:files})
    }
         render() {
             const value = this.state.trafficTypeArray.filter((val) => {
                 return val.choose === true
             }).map((val) => <span style={{
                 fontFamily: 'sans-serif',
                 fontSize: '100%',
                 lineHeight: 1.15,
                 margin: 0, color: '#333'
             }} key={val.value}>{val.value}</span>);
             let value2 = "请选择";
             if (!!value && value.length !== 0) {
                 value2 = value
             } else {
                 value2 = "请选择"
             };
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
                         value={value.dateStart}
                         onChange={date => {
                             let newDate = this.state.times;
                             newDate[index].dateStart = date;
                             this.setState({ times: newDate })
                         }}>
                         <List.Item arrow="horizontal"><Badge text={'*'} style={{ background: 'none', color: 'red' }} /><span
                             style={{ fontSize: '0.75rem' }}>起始时间</span></List.Item>
                     </DatePicker>
                     <DatePicker
                         mode="datetime"
                         title="结束时间"
                         value={value.dateEnd}
                         onChange={(date) => {
                             let newDate = this.state.times;
                             newDate[index].dateEnd = date;
                             this.setState({ times: newDate })
                         }}>
                         <List.Item arrow="horizontal"><Badge text={'*'} style={{ background: 'none', color: 'red' }} /><span
                             style={{ fontSize: '0.75rem' }}>结束时间</span></List.Item>
                     </DatePicker>
                     <div className="del-time" onClick={() => this.deleteTimes(index)}><i className="iconfont icon-delete"></i></div>
                 </ul>)
             });
             const baseStyle={fontSize:'0.6rem'},baseStyle1={width:'66%'},baseStyle2={borderBottom:'1px solid #f0f0f0'};
             return (
                 <div className="container">
                     <div className="dask"></div>
                      {/*签呈标签*/}
                     <h4 className="times">外出申请 <a href="./attendanceRecord.html?checktype=12" className="f_right"><img
                         src="./img/history.png" alt="" /></a></h4>
                      {/*说明 */}
                     <div className="explain">
                         说明：员工因公外出，须在外出前履行申请审批手续，并注明详细外出时间、地点及事由，外出事由项不可只简单填写诸如“外出”、“XX地点”、“参会”等；获准后方可外出。
                     </div>
                     <div className="egress-box">
                         {/*文级*/}
                         <Filelevel fileType={this.state.fileType} chooseFileType={this.fileTypeClick} />
                     </div>
                     <form className="egress-info">
                         <div className="overtime-quantum">
                             {timesList}
                         </div>
                         <ul className="apply">
                             <li className="clearfix">
                                 {/*<label htmlFor="">未正常打卡时间：</label>*/}
                                 <div className="clearfix"><span className="f_left" style={baseStyle}>未正常打卡时间：</span>
                                     <div className="dropdown" style={baseStyle1}>
                                     <div className="dropdown-text" onClick={(e) => this.dropDown(e)}>{value2}</div>
                                         <ul className="dropdown-list" hidden={this.state.dropDowm}>
                                             <li onClick={(e) => {
                                                 e.stopPropagation();
                                                 e.nativeEvent.stopImmediatePropagation();
                                                 this.trafficType(0)
                                             }} className={this.state.trafficTypeArray[0].choose ? "active" : ""}>08:20
                                             </li>
                                             <li onClick={(e) => {
                                                 e.stopPropagation();
                                                 e.nativeEvent.stopImmediatePropagation();
                                                 this.trafficType(1)
                                             }} className={this.state.trafficTypeArray[1].choose ? "active" : ""}>11:50
                                             </li>
                                             <li onClick={(e) => {
                                                 e.stopPropagation();
                                                 e.nativeEvent.stopImmediatePropagation();
                                                 this.trafficType(2)
                                             }} className={this.state.trafficTypeArray[2].choose ? "active" : ""}>13:00
                                             </li>
                                             <li onClick={(e) => {
                                                 e.stopPropagation();
                                                 e.nativeEvent.stopImmediatePropagation();
                                                 this.trafficType(3)
                                             }} className={this.state.trafficTypeArray[3].choose ? "active" : ""}>17:20
                                             </li>
                                         </ul>
                                     </div>
                                 </div>
                             </li>
                             {/*<li className="areabox flex flex-v">*/}
                                 {/*<label className="required" htmlFor="">外出事由：</label>*/}
                                 {/*<textarea type='text' name="reason" id="" placeholder="请输入外出事由" className="flex-1 special"></textarea>*/}
                             {/*</li>*/}
                             <ul className="textarea-box" style={baseStyle2}>
                                 <li>外出事由:</li>
                                 <li><textarea className="objective" placeholder="请输入外出事由" onChange={this.objectiveChange}
                                               value={this.state.reason}></textarea></li>
                             </ul>
                             {/*<li className="areabox flex flex-v">*/}
                                 {/*<label className="required" htmlFor="">外出地点：</label>*/}
                                 {/*<textarea name="site" id="" placeholder="请输入外出地点" className="flex-1 special"></textarea>*/}
                             {/*</li>*/}
                             <ul className="textarea-box">
                                 <li>外出地点:</li>
                                 <li><textarea className="objective" placeholder="请输入外出地点" onChange={this.objectiveChange}
                                               value={this.state.site}></textarea></li>
                             </ul>
                         </ul>

                         <div className="egress-box">
                             {/*附件*/}
                             <div className="img-view">
                                 <h4>
                                     <label htmlFor="file">
                                         <span>附件</span>
                                         <img src={affix} alt={affix} />
                                     </label>
                                     {/*accept="image/*" */}
                                     <input type="file" name="file" id="file" className="hidden" onChange={this.fileChange} />
                                 </h4>
                                 <ul className="preview2 clearfix">
                                     {filesList}
                                 </ul>
                             </div>
                         </div>

                         <div className="btn">提交</div>
                     </form>
                 </div>);
    }
};
export default Egress;

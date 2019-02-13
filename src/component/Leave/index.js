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
import Filelevel from '../../component/FileLevel';

class Leave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileType: 1,
            leaveChooseList: true,
            leaveListJson: [
                { value: '事假', choosed: true, detail: '' },
                { value: '换休', choosed: false, detail: '' },
                { value: '病假', choosed: false, detail: '请提供市级（三甲）以上医院的病假证明、诊断书、交费凭证、病历等相关资料复印件, 若未能提交书面材料的按旷工计算' },
                { value: '婚假', choosed: false, detail: '请提供结婚证、婚前检查资料复印件（验原件）,若未能提交书面材料的按事假计算' },
                {
                    value: '丧假',
                    choosed: false,
                    detail: '请在“请假事由”栏说明去世人与申请人的关系，若直系亲属（指父母、配偶、子女与配偶之父母），可申请3天丧假；若旁系亲属（指祖父母、兄弟姐妹与配偶之祖父母、兄弟姐妹），可申请休2天丧假'
                },
                {
                    value: '产假',
                    choosed: false,
                    detail: '请提供孕前检查资料、孩子出生证明等相关复印件（验原件）；若遇难产、多胞胎情况时还需提供相关证明资料复印件（验原件）,若未能提交书面材料的按事假计算'
                },
                {
                    value: '哺乳假',
                    choosed: false,
                    detail: '请提供孕前检查资料、孩子出生证明等相关复印件（验原件）；若遇难产、多胞胎情况时还需提供相关证明资料复印件（验原件）,若未能提交书面材料的按事假计算'
                },
                {
                    value: '陪产假',
                    choosed: false,
                    detail: '请提供孕前检查资料、孩子出生证明等相关复印件（验原件）；若遇难产、多胞胎情况时还需提供相关证明资料复印件（验原件）,若未能提交书面材料的按事假计算'
                }
            ],
            times: [{ dateStart: "", dateEnd: "" }],
            daytotal: "",
            hourtotal: "",
            replacement: "",
            replacemobile: "",
            reason: "",
            files: []
        };
        this.dayTotalChange = this.dayTotalChange.bind(this);
        this.hourtotalChange = this.hourtotalChange.bind(this);
        this.replacemobileChange = this.replacemobileChange.bind(this);
        this.replacementChange = this.replacementChange.bind(this);
        this.reasonChange = this.reasonChange.bind(this);
        this.fileChange = this.fileChange.bind(this);
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
   /**
     *输入框值变化监听
     * */
   //合计天数
    dayTotalChange(event) {
        this.setState({ daytotal: event.target.value })
    }
    //合计小时
    hourtotalChange(event) {
        this.setState({ hourtotal: event.target.value })
    }
    //接替人
    replacementChange(event) {
        this.setState({ replacement: event.target.value })
    }
    //接替人电话
    replacemobileChange(event) {
        this.setState({ replacemobile: event.target.value })
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
    //表单提交
    handleSubmit(event) {
        event.preventDefault();

        const {daytotal,hourtotal,replacement,replacemobile,reason,times,leaveListJson,files,fileType}=this.state;
        let  leaveType= leaveListJson.filter((value)=>value.choosed===true)[0].value;
        console.log(leaveType)
        if(daytotal===""||hourtotal===""||replacement===""||replacemobile===""||reason===""){
            Toast.info('有必填项为空，请填写！',3)
            return false;
        }
        return false;
    }
    //文件提交
    fileChange(event) {
        let suffix;
        let file = event.target.files[0];
        let star = file.name.lastIndexOf(".");
        let fileType = file.name.substring(star + 1).toLowerCase();
        switch (fileType) {
            case "dot": case "docx": case "dotm": case "doc":
                suffix = "word";
                break;
            case "jpg": case "png": case "jpeg": case "gif":
                suffix = "image";
                break;
            case "pdf":
                suffix = "pdf";
                break;
            case "xls": case "xlsx":
                suffix = "excel";
                break;
            case "txt":
                suffix = "txt";
                break;
            case "ppt": case "pptx":
                suffix = "ppt";
                break;
            // case "zip": case "rar":
            //     suffix = "zip";
            //     break;
            default:
                suffix = 'other'
                break;
        }
        // 限制上传类型
        if (suffix !== "other") {
            let filesArr = this.state.files;
            filesArr.push({ name: file.name, size: file.size, type: fileType });
            this.setState({ files: filesArr });
        } else {
            Toast.info('暂不支持其他格式的文件！', 2);
        }

    }

    render() {
        const lists = this.state.leaveListJson.map(((value, index) => {
            return (<li onClick={() => this.selectRadio(index)} key={index}
                className={`${value.choosed ? 'active' : ''}`}>{value.value}</li>);
        }));
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
        })
        return (
            <div className="container">
                <div className="dask"></div>
                {/*签呈标签 */}
                <h4 className="times">请假申请 <a href="./attendanceRecord.html?checktype=10" className="f_right"><img
                    src={history} alt="" /></a></h4>
                {/*说明 */}
                <div className="explain">
                    说明：1、请假须事前履行申请审批手续，获准后方可休假（至少提前30分钟）；如遇特殊情况，须第一时间向所在部门负责人及组织发展部电话请假告知，并在获批准后，一天内补打请假手续；<br />
                    2、请休婚假、产假、陪产假、哺乳假时，须同时按考勤管理制度提交相关书面证明材料；请休病假，事前履行请假手续，事后及时补充病假材料<br />
                    3、请假人须做好交接工作，如有差错，各部门领导负连带责任
                </div>
                <div className="egress-box">
                    {/*文级*/}
                    <Filelevel fileType={this.state.fileType} chooseFileType={this.fileTypeClick} />
                </div>
                <form className="egress-info" onSubmit={this.handleSubmit}>
                    {/*外出时间 */}
                    <ul className="info-box">
                        <li className="flex flex-align-center flex-pack-justify">
                            <label className="required" htmlFor="">请假类型：</label>
                            <div className="time-area-box flex-1">
                                <input type="text" name="leveltype" placeholder="请选择" readOnly unselectable="on"
                                    onClick={(e) => this.dropdownRadio(e)}
                                    value={this.state.leaveListJson.filter((value) => {
                                        return value.choosed === true
                                    })[0].value} />
                                <ol className={`time-area ${this.state.leaveChooseList ? '' : 'active'}`}>
                                    {/*假期列表*/}
                                    {lists}
                                </ol>
                            </div>
                        </li>
                    </ul>
                    <div className="overtime-quantum">
                        {timesList}
                    </div>
                    <div className="add-time-quantum" onClick={() => this.addTimes()}><i
                        className="iconfont icon-roundadd"></i> 新增时间段
                    </div>

                    <ul className="semihTotal">
                        <li className="flex flex-align-center flex-pack-justify">
                            <label className="required" htmlFor="">合计：</label>
                            <input type="number" value={this.state.daytotal} onChange={this.dayTotalChange} />
                            <label htmlFor=""> 天</label>
                            <input type="number" value={this.state.hourtotal} onChange={this.hourtotalChange} />
                            <label htmlFor="">小时</label>
                        </li>
                    </ul>
                    <ul className="info-box">
                        <li className="control flex flex-align-center flex-pack-justify">
                            <label className="required" htmlFor="">工作接替人：</label>
                            <input type="text" name="replacement" className="flex-1" value={this.state.replacement} onChange={this.replacementChange} />
                        </li>
                        <li className="control flex flex-align-center flex-pack-justify">
                            <label className="required" htmlFor="">接替人电话：</label>
                            <input type="text" name="replacemobile" className="flex-1" value={this.state.replacemobile} onChange={this.replacemobileChange} />
                        </li>
                    </ul>
                    <ul className="info-box">
                        <li className="areabox flex flex-v">
                            <label className="required" htmlFor="">请假事由：</label>
                            <textarea type='text' name="reason" value={this.state.reason} onChange={this.reasonChange}
                                className="flex-1"></textarea>
                        </li>
                    </ul>

                    <div className="egress-box">
                        {/*附件*/}
                        <div className="img-view">
                            <p className="affix-brife">{this.state.leaveListJson.filter((value) => {
                                return value.choosed === true
                            })[0].detail}</p>
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

                    <input className="btn inputBtn" type="submit" value='提交'/>
                </form>
            </div>)
    }
};
export default Leave;

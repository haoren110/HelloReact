import React from "react";
import axios from "../../utils/axios";
import './index.css';
import history from '../../img/history.png';
import affix from '../../img/affix.png';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Filelevel from "../../component/FileLevel";
import FileUpLoad from "../../component/fileUpLoad";
import word from "../../img/word.png";
import image from "../../img/image.png";
import pdf from "../../img/pdf.png";
import txt from "../../img/txt.png";
import ppt from "../../img/ppt.png";
class BasicExample  extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={info:[],name:'',fileType:1, files: [],dropDowm: true,};
    }
    componentDidMount() {
        const index = parseInt(this.props.match.params.templateType);
        axios.post('TemplateFormManageController/getTemplateFormInfo.do', {userId: '0005ED886CF74AACA117B83EE989F4BD'}).then((data)=>{
            this.setState({info:JSON.parse(data.list[index - 1].templateWrite),name:data.list[index - 1].name});
        })
    }
    fileTypeClick = (value) => {
        //console.log(value)
        this.setState({ fileType: value })
    }
    //文件删除
    delFile(index){
        let files= this.state.files;
        files.splice(index,1);
        this.setState({files:files})
    }
    changeFiles = (array) => {
        //console.log(array)
        this.setState({files: array})
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
        const infoList= this.state.info.map((value,index)=>{
            console.log(value)
            let elm;
            switch (value.type) {
                case 'input':
                    elm=<Input data={value} key={index}/>;
                    break;
                case 'textarea':
                    elm=<Textarea data={value} key={index}/>;
                    break;
                case 'radio':
                    elm=<Radio data={value} key={index}/>;
                    break;
                case 'checkbox':
                    elm=<Checkbox data={value} key={index} dropDown={this.state.dropDowm}/>;
                    break;
                case 'time':
                    elm=<Time data={value} key={index}/>;
                    break;
            }
            return elm;
        })
        return (<div className="container" style={{maxWidth:'640px',minWidth:'320px',margin:'0 auto',padding:'0'}}>
            <div className="dask"></div>
            {/*签呈标签 */}
            <h4 className="times"><span>{this.state.name}</span>
                <a href="javascript:;" className="f_right">
                    <img src={history} alt="" /></a></h4>
            <div className="signature">
                {/*文级*/}
                <Filelevel fileType={this.state.fileType} chooseFileType={this.fileTypeClick} />
                {/*填写模板*/}
                <form className="filltpl">
                    {infoList}
                </form>
               {/*附件*/}
                <FileUpLoad filesList={filesList}  files={this.state.files} changFiles={this.changeFiles} />
                 {/*生成签呈 */}
                <div className="generate">提交</div>
                 {/*保存为草稿*/}
                 {/*<div class="draft"><img src="./img/save.png" alt=""></div>*/}
            </div>
        </div>);
    }
}

function ImgView(props) {
    return (
        <li className="affix">
            <div className='affix-icon'><img src="./img/{props.type}.png" alt=""/></div>
            <p>{props.name}</p>
            <span className='del' data-index="{{$index}}">×</span>
        </li>
    );
}

function Input(value) {
       console.log(value)
    return (
        <div className='template-input'>
            <label className={value.data.isRequired?"active":""}>{value.data.val}</label>
            <input type="text"placeholder={value.data.placeholder} maxLength={value.data.length} name={value.data.name}/>
        </div>
    );
}

function Time(props) {
    return (
        <div className='template-input'>
            <label className={props.data.isRequired?"active":""}>{props.data.val}</label>
            <input type="text" placeholder={props.data.placeholder} maxLength={props.data.length} name={props.data.name}/>
        </div>
    );
}

function Radio(props) {
    return (
        <div className='template-input'>
            <label className='{{isRequired?"active":""}}'>{props.data.val}</label>
            <input type="text" placeholder={props.data.placeholder} maxLength={props.data.length} name={props.data.name}/>
        </div>
    );
}

class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            trafficTypeArray: [{value: '飞机', choose: false}, {value: '火车', choose: false}, {
                value: '汽车',
                choose: false
            }, {value: '出租', choose: false}]
        };
    }
    dropDown(e) {
        e.preventDefault();
        this.setState({dropDowm: !this.state.dropDowm})
    }
    trafficType(value) {
        let trafficTypeArray = this.state.trafficTypeArray;
        trafficTypeArray[value].choose = !this.state.trafficTypeArray[value].choose;
        this.setState({trafficTypeArray: trafficTypeArray})
    }
    render() {
        const  list= this.props.data.droplist.map((item,index)=>{
            return <li onClick='selectCheckbox(this)' data-index={index} data-val={item.item} key={index}>{item.item}</li>
        });
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
        }
        return (
            <ul className="apply">
                <li className="clearfix"><span className="f_left">交通工具</span>
            <div className="dropdown" style={{width:'72%'}}>
                <div className="dropdown-text" onClick={(e) => this.dropDown(e)}>{value2}</div>
                <ul className="dropdown-list" hidden={this.props.dropDowm}>
                    <li onClick={(e) => {
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        this.trafficType(0)
                    }} className={this.state.trafficTypeArray[0].choose ? "active" : ""}>飞机
                    </li>
                    <li onClick={(e) => {
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        this.trafficType(1)
                    }} className={this.state.trafficTypeArray[1].choose ? "active" : ""}>火车
                    </li>
                    <li onClick={(e) => {
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        this.trafficType(2)
                    }} className={this.state.trafficTypeArray[2].choose ? "active" : ""}>汽车
                    </li>
                    <li onClick={(e) => {
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        this.trafficType(3)
                    }} className={this.state.trafficTypeArray[3].choose ? "active" : ""}>出租
                    </li>
                </ul>
            </div>
            </li></ul>);
    }
}

function Textarea(props) {
    return (
        <div className='template-box'>
            <label className={props.data.isRequired?"active":""}>{props.data.val}</label>
            <textarea name={props.data.name} id="" maxLength={props.data.length} placeholder={props.data.placeholder}></textarea>
        </div>
    );
}

function Generate(props) {
    return (
        <div className="tab">
            {/*签呈标题 */}
            <div className="topic">步长制药签呈表</div>
            <ul className="send clearfix">
                <li className="f_left">致： 公司领导</li>
                <li className="f_right">自： {props.depName}</li>
            </ul>
            {/*文级 */}
            <div className="rank">{props.level_text}</div>
            {/*签呈主旨及内容 */}
            <div className="main-body clearfix">
                <div className="title">主旨：<span>{props.title}</span></div>
                <div className="reason">
                    <h4>理由及建议：</h4>
                    <p>{props.text}</p>
                </div>
                <p className="applicant f_right">申请人：<span>{props.name} </span> 呈</p>
            </div>
            {/*温馨提示*/}
            <div className="prompt">* 请认真核实以上信息，一经提交，无法更改</div>
        </div>
    );
}


export default BasicExample;
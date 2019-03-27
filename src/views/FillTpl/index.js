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
        this.state={info:[],name:'',fileType:1, files: []};
    }
    componentDidMount() {
        const index = parseInt(this.props.match.params.templateType);
        axios.post('TemplateFormManageController/getTemplateFormInfo.do', {userId: '0005ED886CF74AACA117B83EE989F4BD'}).then((data)=>{
            this.setState({info:JSON.parse(data.list[index - 1].templateWrite),name:data.list[index - 1].name});
        })
    }
    fileTypeClick = (value) => {
        console.log(value)
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
        const InfoList= this.state.info.map((value,index)=>{
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
                    elm=<Checkbox data={value} key={index}/>;
                    break;
                case 'time':
                    elm=<Time data={value} key={index}/>;
                    break;
            }
            return elm;
        })
        return (<div className="container" style={{maxWidth:'640px',minWidth:'320px',margin:'0 auto'}}>
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
                    {InfoList}
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

function Checkbox(props) {
    return (
        <div className='template-input'>
            <label className='{{isRequired?"active":""}}'>{props.data.val}</label>
            <input type="text"  placeholder={props.data.placeholder} maxLength={props.data.length} name={props.data.name}/>
        </div>
    );
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
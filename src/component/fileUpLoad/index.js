import React from 'react';
import affix from "../../img/affix.png";
import {Toast} from "antd-mobile";
//const baseurl="https://weixin.buchang.com/ZbtOfficial/";
class FileUpLoad extends  React.Component{
    constructor(props) {
        super(props);
        console.log(this.props);
        this.fileChange=this.fileChange.bind(this)
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
            console.log(this)
            let filesArr = this.props.files;
            filesArr.push({ name: file.name, size: file.size, type: fileType,file:file });
           this.childrenChange(filesArr)
        } else {
            Toast.info('暂不支持其他格式的文件！', 2);
        }
    }
    childrenChange(filesArr){
        console.log(filesArr)
        this.props.changFiles(filesArr);
    }
    render() {
        //let url=baseurl+this.props.data.iconUrl;
        return (<div className="egress-box">
            {/*附件*/}
            <div className="img-view">
                <p className="affix-brife">{this.props.leaveListJson.filter((value) => {
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
                    {this.props.filesList}
                </ul>
            </div>
        </div>);
    }
}
export default FileUpLoad;
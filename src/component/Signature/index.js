import React from 'react';
import {Link} from 'dva/router';
import './index.css';
import help from '../../img/help.png';
import affix from '../../img/affix.png'
import save from '../../img/save.png'
import Filelevel from '../../component/FileLevel'
class Signature extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            fileType:1
        }
    }
    fileTypeClick=(value)=>{
        console.log(value)
        this.setState({fileType:value})
    }
    render() {
        return (<div className="container" style={{maxHeight:'640px',minWidth:'320px',margin:'0 auto',}}>
            {/*提示历史足迹按钮*/}
            {/*<div className="mask">*/}
                {/*<div className="arrow"><img src="./img/arrow.png" alt="" /></div>*/}
                {/*<div className="point tip-history">老铁，您的<span>历史事务</span>签呈都在这里藏着喔~</div>*/}
                {/*<div className="arrow save-bg">*/}
                    {/*<img src="./img/arrow.png" alt="" />*/}
                {/*</div>*/}
                {/*<div className="point save-draft">点击这里可以<span>存为草稿</span>喔~</div>*/}
            {/*</div>*/}
             {/*签呈标签 */}
            <h4 className="times">这是您本月第 <span>2</span> 次提交签呈 <Link to="./signRecord.html" className="f_right"><img
                src="./img/history.png" alt="" /></Link></h4>
            <div className="signature">
                {/*主旨 */}
                <div className="subject clearfix">
                    <label className="f_left" htmlFor="">主旨：</label>
                    <input type="text" placeholder="请输入签呈的标题" maxLength="50"/>
                    <p className='hidden'>标题不能超过50个字</p>
                </div>
                 {/*文级*/}
                <Filelevel fileType={this.state.fileType} chooseFileType={this.fileTypeClick} />

                 {/*理由及建议*/}
                <div className="reason">
                    理由及建议:
                    <div className="text-box">
                        <textarea name="text" id="text" maxLength="500" placeholder="请输入您的理由及建议~"></textarea>
                        <p className="count">您还可以输入<span>500</span>个字</p>
                    </div>
                </div>

                 {/*附件*/}
                <div className="img-view">
                    {/*<span>温馨提示：V1.5.2版本仅支持图片附件</span> */}
                    <h4>
                        <label htmlFor="file"><span>附件</span><img src={affix} alt="" /></label>
                        <input type="file" name="file" id="file" className="hidden"/>
                    </h4>
                    <ul className="preview clearfix">

                    </ul>
                </div>
                 {/*生成签呈*/}
                <div className="generate">生成签呈</div>
                <div className="draft"><img src={save} alt="" /></div>
            </div>
        </div>);
    }

};
export default Signature;

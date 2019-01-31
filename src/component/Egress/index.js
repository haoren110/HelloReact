import React from 'react';
import './index.css';
import Filelevel from "../FileLevel";
//import history from '../../img/history.png';
// import help from '../../img/help.png';
//import help from '../../img/help.png';
class Egress extends  React.Component{
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
                          {/*外出时间 */}
                         <ul className="info-box time-box">
                             <li className="control flex flex-align-center flex-pack-justify">
                                 <label className="required" htmlFor="">外出时间：</label>
                                 <input type="text" name="starttime" placeholder="" readOnly unselectable="on"
                                        className="flex-1" id="start1" onFocus='chooseDateTimeFn("start1")' />
                                     <i className="f_right iconfont icon-right"></i>
                             </li>
                             <li className="control flex flex-align-center flex-pack-justify">
                                 <label className="required" htmlFor="">返回时间：</label>
                                 <input type="text" name="endtime" placeholder="" readOnly unselectable="on"
                                        className="flex-1" id="end1" onFocus='chooseDateTimeFn("end1")' />
                                     <i className="f_right iconfont icon-right"></i>
                             </li>
                         </ul>

                         <ul className="info-box">
                             <li className="flex flex-align-center flex-pack-justify">
                                 <label htmlFor="">未正常打卡时间：</label>
                                 <div className="time-area-box flex-1">
                                     <input type="text" name="clockin" placeholder="8:20 11:50 13:00 17:20" readOnly
                                            unselectable="on" onClick="dropdownCheckbox(this)" />
                                         <ol className="time-area">
                                             <li onClick='selectCheckbox(this)' data-index='0' data-val='8:20'
                                                 className="">8:20
                                             </li>
                                             <li onClick='selectCheckbox(this)' data-index='1' data-val='11:50'>11:50
                                             </li>
                                             <li onClick='selectCheckbox(this)' data-index='2' data-val='13:00'>13:00
                                             </li>
                                             <li onClick='selectCheckbox(this)' data-index='3' data-val='17:20'>17:20
                                             </li>
                                         </ol>
                                 </div>
                             </li>
                             <li className="areabox flex flex-v">
                                 <label className="required" htmlFor="">外出事由：</label>
                                 <textarea type='text' name="reason" id="" placeholder="请输入外出事由"
                                           className="flex-1"></textarea>
                             </li>
                             <li className="areabox flex flex-v">
                                 <label className="required" htmlFor="">外出地点：</label>
                                 <textarea name="site" id="" placeholder="请输入外出地点" className="flex-1"></textarea>
                             </li>
                         </ul>

                         <div className="egress-box">
                             {/*附件 */}
                             <div className="img-view">
                                 <h4>
                                     <label htmlFor="file">
                                         <span>附件</span>
                                         <img src="./img/affix.png" alt="" />
                                     </label>
                                      {/*accept="image/*" */}
                                     <input type="file" name="file" id="file" className="hidden"/>
                                 </h4>
                                 <ul className="preview clearfix">

                                 </ul>
                             </div>
                         </div>

                         <div className="btn">提交</div>
                     </form>
                 </div>);
    }


};
export default Egress;

import React from 'react';
import './index.css';
//import history from '../../img/history.png';
// import help from '../../img/help.png';
//import help from '../../img/help.png';
import Filelevel from '../FileLevel'
class Overtime extends  React.Component{
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
                     {/*签呈标签 */}
                     <h4 className="times">加班申请 <a href="./attendanceRecord.html?checktype=11" className="f_right"><img
                         src="./img/history.png" alt="" /></a></h4>

                     {/*说明 */}
                     <div className="explain">
                         说明：加班须事前履行加班审批手续，获准后，方可加班；加班一律按小时计算，且须按规定考勤（即打卡），无考勤记录者，不计加值班。
                     </div>
                     <div className="egress-box">
                         {/*文级*/}
                         <Filelevel fileType={this.state.fileType} chooseFileType={this.fileTypeClick} />
                     </div>
                     <form className="egress-info">
                         {/*外出时间 */}
                         <div className="overtime-quantum">
                             <ul className="info-box time-box overtime-item">
                                 <li className="control flex flex-align-center flex-pack-justify">
                                     <label className="required" htmlFor="">起始时间：</label>
                                     <input type="text" name="starttime" placeholder="" readOnly unselectable="on"
                                            className="flex-1 starttime" id="start0"
                                            onFocus='chooseDateTimeFn("start0")' />
                                         <i className="f_right iconfont icon-right"></i>
                                 </li>
                                 <li className="control flex flex-align-center flex-pack-justify">
                                     <label className="required" htmlFor="">结束时间：</label>
                                     <input type="text" name="endtime" placeholder="" readOnly unselectable="on"
                                            className="flex-1 endtime" id="end0" onFocus='chooseDateTimeFn("end0")' />
                                         <i className="f_right iconfont icon-right"></i>
                                 </li>
                                 <div className="del-time" data-order='0' onClick="delTimeQuantum(this)"><i
                                     className="iconfont icon-delete"></i></div>
                             </ul>
                         </div>

                         <div className="add-time-quantum" data-order='0'><i
                             className="iconfont icon-roundadd"></i> 新增时间段
                         </div>

                         <ul className="info-box">
                             <li className="areabox flex flex-v">
                                 <label className="required" htmlFor="">加班事由：</label>
                                 <textarea type='text' name="reason" id="" placeholder="请输入加班事由"
                                           className="flex-1"></textarea>
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
                                      {/*accept="image/*"*/}
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
export default Overtime;

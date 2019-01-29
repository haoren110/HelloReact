import React from 'react';
import './index.css';
//import history from '../../img/history.png';
// import help from '../../img/help.png';
//import help from '../../img/help.png';
class Travel extends  React.Component{
    constructor(props){
        super(props);
        console.log(props)
    }
         render() {
             return (
                 <div className="container">
                     <div className="dask"></div>
                      {/*签呈标签 */}
                     <h4 className="times">请假申请 <a href="./attendanceRecord.html?checktype=10" className="f_right"><img
                         src="./img/history.png" alt="" /></a></h4>

                     {/*说明 */}
                     <div className="explain">
                         说明：1、请假须事前履行申请审批手续，获准后方可休假（至少提前30分钟）；如遇特殊情况，须第一时间向所在部门负责人及组织发展部电话请假告知，并在获批准后，一天内补打请假手续；<br/>
                         2、请休婚假、产假、陪产假、哺乳假时，须同时按考勤管理制度提交相关书面证明材料；请休病假，事前履行请假手续，事后及时补充病假材料<br/>
                         3、请假人须做好交接工作，如有差错，各部门领导负连带责任
                     </div>
                     <div className="egress-box">
                          {/*文级 */}
                         <ul className="level clearfix">
                             <li className="f_left">文级：</li>
                             <li className="active f_left">
                                 <input type="radio" className="hidden" name="grade" value="1" data-level='正常'
                                        id="normal" defaultChecked={true}/>
                                 <label htmlFor="normal">
                                     <span className="iconfont icon-squarecheck"></span>正常</label>
                             </li>
                             <li className="f_left">
                                 <input type="radio" className="hidden" name="grade" value="2" data-level='紧急'
                                        id="urgent"/>
                                 <label htmlFor="urgent">
                                     <span className="iconfont icon-square"></span>紧急</label>
                             </li>
                             <li className="f_left">
                                 <input type="radio" className="hidden" name="grade" value="3" data-level='特急'
                                        id="extra"/>
                                 <label htmlFor="extra">
                                     <span className="iconfont icon-square"></span>特急</label>
                             </li>
                             <li className="f_left">
                    <span className="help">
                        <img src="./img/help.png" alt="" />
                    </span>
                             </li>
                         </ul>
                     </div>
                     <form className="egress-info">
                        {/*外出时间 */}
                         <ul className="info-box">
                             <li className="flex flex-align-center flex-pack-justify">
                                 <label className="required" htmlFor="">请假类型：</label>
                                 <div className="time-area-box flex-1">
                                     <input type="text" name="leveltype" placeholder="请选择" readOnly unselectable="on"
                                            onClick="dropdownRadio(this)" />
                                         <ol className="time-area">
                                             <li onClick='selectRadio(this)' data-index='0' data-val='事假'
                                                 className="">事假
                                             </li>
                                             <li onClick='selectRadio(this)' data-index='1' data-val='换休'>换休</li>
                                             <li onClick='selectRadio(this)' data-index='2' data-val='病假'>病假</li>
                                             <li onClick='selectRadio(this)' data-index='3' data-val='婚假'>婚假</li>
                                             <li onClick='selectRadio(this)' data-index='4' data-val='丧假'>丧假</li>
                                             <li onClick='selectRadio(this)' data-index='5' data-val='产假'>产假</li>
                                             <li onClick='selectRadio(this)' data-index='6' data-val='哺乳假'>哺乳假</li>
                                             <li onClick='selectRadio(this)' data-index='7' data-val='陪产假'>陪产假</li>
                                         </ol>
                                 </div>
                             </li>
                         </ul>

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

                         <ul className="semihTotal">
                             <li className="flex flex-align-center flex-pack-justify">
                                 <label className="required" htmlFor="">合计：</label>
                                 <input type="number" name="daytotal" placeholder="" onBlur="clearNoInt(this)"/>
                                 <label htmlFor=""> 天</label>
                                 <input type="number" name="hourtotal" placeholder="" onBlur="clearNoInt(this)"/>
                                 <label htmlFor="">小时</label>
                             </li>
                         </ul>
                         <ul className="info-box">
                             <li className="control flex flex-align-center flex-pack-justify">
                                 <label className="required" htmlFor="">工作接替人：</label>
                                 <input type="text" name="replacement" placeholder="" className="flex-1"/>
                             </li>
                             <li className="control flex flex-align-center flex-pack-justify">
                                 <label className="required" htmlFor="">接替人电话：</label>
                                 <input type="text" name="replacemobile" placeholder="" className="flex-1"/>
                             </li>
                         </ul>
                         <ul className="info-box">
                             <li className="areabox flex flex-v">
                                 <label className="required" htmlFor="">请假事由：</label>
                                 <textarea type='text' name="reason" id="" placeholder="请输入请假事由"
                                           className="flex-1"></textarea>
                             </li>
                         </ul>

                         <div className="egress-box">
                              {/*附件*/}
                             <div className="img-view">
                                 <p className="affix-brife"></p>
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
                 </div>)
    }


};
export default Travel;

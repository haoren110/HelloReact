import React from 'react';
import './index.css';
import history from '../../img/history.png';
// import help from '../../img/help.png';
import help from '../../img/help.png';
class Travel extends  React.Component{
    constructor(props){
        super(props);
        console.log(props)
    }
         render() {
             return (
                 <div className="container">
                 {/*提示历史足迹按钮*/}
                 {/*<div className="mask">*/}
                     {/*<div className="arrow">*/}
                         {/*<img src="./img/arrow.png" alt="" />*/}
                     {/*</div>*/}
                     {/*<div className="point">老铁，您的<span>历史差旅</span>签呈都在这里藏着喔~</div>*/}
                 {/*</div>*/}
                 <div className="notes">
                     <h4 className="num">这是本月第 <span></span> 次提交出差<a href="./travelRecord.html" className="f_right"><img
                         src={history} alt="" /></a></h4>
                     <div>
                         <ul className="level clearfix">
                             <li className="f_left">文级</li>
                             <li className="active f_left">
                                 <input type="radio" className="hidden" name="grade" value="1" data-level='正常' id="normal"
                                        defaultChecked/>
                                 <label htmlFor="normal"><span className="iconfont icon-squarecheck"></span>正常</label>
                             </li>
                             <li className="f_left">
                                 <input type="radio" className="hidden" name="grade" value="2" data-level='紧急' id="urgent"/>
                                 <label htmlFor="urgent"><span className="iconfont icon-square"></span>紧急</label>
                             </li>
                             <li className="f_left">
                                 <input type="radio" className="hidden" name="grade" value="3" data-level='特急' id="extra"/>
                                 <label htmlFor="extra"><span className="iconfont icon-square"></span>特急</label>
                             </li>
                             <li className="f_left">
                                 <span className="help"><img src={help} alt="" /></span>
                             </li>
                         </ul>
                         <ul className="apply">
                             <li><span>预计行程</span><input type="text" className="planTrip" placeholder="如：西安-北京-西安(必填)"/></li>
                             <li><span>出发时间</span><input type="text" placeholder="2017-03-11" readOnly id="dateStart" /><i className="f_right iconfont icon-right"></i></li>
                                 <li><span>返回时间</span><input type="text" placeholder="2017-03-17" readOnly id="dateEnd" /><i className="f_right iconfont icon-right"></i></li>
                         </ul>
                         <ul className="apply">
                             <li><span>预计交通费</span><input type="text" className="trafficExp text_right" placeholder="请输入预计交通费"
                                                          onKeyUp="clearNoNum(this)" />元</li>
                             <li><span>预计住宿费</span><input type="text" className="housExp text_right" placeholder="请输入预计住宿费"
                                                          onKeyUp="clearNoNum(this)" />元</li>
                             <li><span>预计交食补</span><input type="text" className="mealExp text_right" placeholder="请输入预计交食补"
                                                          onKeyUp="clearNoNum(this)" />元</li>
                             <li><span>预 计 其 他 </span><input type="text" className="otherExp text_right" placeholder="请输入预计其他费用"
                                                             onKeyUp="clearNoNum(this)" />元</li>
                         </ul>
                         <ul className="apply">
                             <li className="clearfix"><span className="f_left">交通工具</span>
                                 <div className="dropdown">
                                     <div className="dropdown-text">请选择</div>
                                     <ul className="dropdown-list">
                                         <li>飞机</li>
                                         <li>火车</li>
                                         <li>汽车</li>
                                         <li>出租</li>
                                     </ul>
                                 </div>
                             </li>
                         </ul>
                         <ul className="textarea-box">
                             <li>目的简述</li>
                             <li><textarea className="objective" placeholder="请输入出差目的简述"></textarea></li>
                         </ul>

                         {/*附件 */}
                         {/*<form action="" enctype="multipart/form-data" method="post" id="upload">*/}
                         {/*附件预览*/}
                         {/*<div class="img-view">*/}
                         {/*<h4>附件：<span>温馨提示：V1.5.2版本仅支持图片附件</span></h4>*/}
                         {/*<ul class="preview clearfix">*/}
                         {/*<li class="affix">*/}
                         {/*<img src="./img/jia.png" alt="" />*/}
                         {/*<label for="file"></label>*/}
                         {/*<input type="file" name="file" id="file" class="hidden" />*/}
                         {/*</li>*/}
                         {/*</ul>*/}
                         {/*</div>*/}

                         {/*<div class="annex">*/}
                         {/*<input type="text" value="" class="hidden" name="petitionPoolId" id="petitionPoolId" />*/}
                         {/*</div>*/}
                         {/*</form> */}

                         <div className="btn">提交申请</div>
                     </div>
                 </div>
             </div>);
    }


};
export default Travel;

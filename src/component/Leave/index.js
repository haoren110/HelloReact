import React from 'react';
import './index.css';
//import history from '../../img/history.png';
// import help from '../../img/help.png';
import history from '../../img/history.png';
import Filelevel from '../../component/FileLevel'
class Leave extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            fileType:1,
            leaveChooseList:true,
            leaveListJson:[
                {value:'事假',choosed:true,detail:''},
                {value:'换休',choosed:false,detail:''},
                {value:'病假',choosed:false,detail:'请提供市级（三甲）以上医院的病假证明、诊断书、交费凭证、病历等相关资料复印件, 若未能提交书面材料的按旷工计算'},
                {value:'婚假',choosed:false,detail:'请提供结婚证、婚前检查资料复印件（验原件）,若未能提交书面材料的按事假计算'},
                {value:'丧假',choosed:false,detail:'请在“请假事由”栏说明去世人与申请人的关系，若直系亲属（指父母、配偶、子女与配偶之父母），可申请3天丧假；若旁系亲属（指祖父母、兄弟姐妹与配偶之祖父母、兄弟姐妹），可申请休2天丧假'},
                {value:'产假',choosed:false,detail:'请提供孕前检查资料、孩子出生证明等相关复印件（验原件）；若遇难产、多胞胎情况时还需提供相关证明资料复印件（验原件）,若未能提交书面材料的按事假计算'},
                {value:'哺乳假',choosed:false,detail:'请提供孕前检查资料、孩子出生证明等相关复印件（验原件）；若遇难产、多胞胎情况时还需提供相关证明资料复印件（验原件）,若未能提交书面材料的按事假计算'},
                {value:'陪产假',choosed:false,detail:'请提供孕前检查资料、孩子出生证明等相关复印件（验原件）；若遇难产、多胞胎情况时还需提供相关证明资料复印件（验原件）,若未能提交书面材料的按事假计算'}
                ]
        }
    }
    fileTypeClick=(value)=>{
        console.log(value)
        this.setState({fileType:value})
    }
    dropdownRadio=(e)=>{
this.setState({leaveChooseList:!this.state.leaveChooseList})
}
    selectRadio=(num)=>{
      let array= this.state.leaveListJson;
      array.forEach((value, index)=>{
          value.choosed=false;
          if(num==index){
              value.choosed=true;
          }
      });
      this.setState({leaveListJson:array,leaveChooseList:true});
    }

         render() {

            const lists= this.state.leaveListJson.map(((value, index) => {
                     return (<li onClick={()=>this.selectRadio(index)}  key={index} className={`${value.choosed?'active':''}`}>{value.value}</li>);
             }));
             return (
                 <div className="container">
                     <div className="dask"></div>
                      {/*签呈标签 */}
                     <h4 className="times">请假申请 <a href="./attendanceRecord.html?checktype=10" className="f_right"><img
                         src={history} alt="" /></a></h4>

                     {/*说明 */}
                     <div className="explain">
                         说明：1、请假须事前履行申请审批手续，获准后方可休假（至少提前30分钟）；如遇特殊情况，须第一时间向所在部门负责人及组织发展部电话请假告知，并在获批准后，一天内补打请假手续；<br/>
                         2、请休婚假、产假、陪产假、哺乳假时，须同时按考勤管理制度提交相关书面证明材料；请休病假，事前履行请假手续，事后及时补充病假材料<br/>
                         3、请假人须做好交接工作，如有差错，各部门领导负连带责任
                     </div>
                     <div className="egress-box">
                         {/*文级*/}
                         <Filelevel fileType={this.state.fileType} chooseFileType={this.fileTypeClick} />
                     </div>
                     <form className="egress-info">
                        {/*外出时间 */}
                         <ul className="info-box">
                             <li className="flex flex-align-center flex-pack-justify">
                                 <label className="required" htmlFor="">请假类型：</label>
                                 <div className="time-area-box flex-1">
                                     <input type="text" name="leveltype" placeholder="请选择" readOnly unselectable="on"
                                                onClick={ (e)=>this.dropdownRadio(e)} value={this.state.leaveListJson.filter((value)=>{return value.choosed===true})[0].value} />
                                         <ol className={`time-area ${this.state.leaveChooseList?'':'active'}`}>
                                             {/*假期列表*/}
                                             {lists}
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
                                 <p className="affix-brife">{this.state.leaveListJson.filter((value)=>{return value.choosed===true})[0].detail}</p>
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
export default Leave;

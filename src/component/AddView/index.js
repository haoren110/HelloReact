import React from 'react';
import ColumItem from '../ColumnItem';
import ColumnItemTwo from '../ColumnItemTwo';
import './index.css';
import {connect} from "dva";
import 'antd-mobile/dist/antd-mobile.css';
import bannerImage from  '../../img/ban.jpg';
import mine3 from '../../img/ordHistory.png';
import mine4 from '../../img/traHistory.png';
import mine5 from '../../img/over_time.png';
import mine7 from '../../img/go_out.png';
const array=[
    {icon:`${mine3}`,text:"事务",url:"/signature"},
    {icon:`${mine4}`,text:"出差",url:"/travel"}
];
const array2=[
    {icon:`${mine3}`,text:"请假",url:"/leave"},
    {icon:`${mine5}`,text:"加班",url:"/overtime"},
    {icon:`${mine7}`,text:"外出",url:"/egress"}
];
const array1=[{"id":"1013BE50B626479C95A1228865096DA7","name":"资料用印","iconUrl":"/uploads/20180525/840f6+-7528+-5370.png","templateType":1,"templateWrite":"[{\"type\":\"input\",\"val\":\"收件人：\",\"name\":\"recipients\",\"isRequired\":true,\"placeholder\":\"张三\",\"length\":\"4\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"联系方式：\",\"name\":\"phone\",\"isRequired\":true,\"placeholder\":\"15112346547\",\"length\":\"11\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"邮编：\",\"name\":\"postcode\",\"isRequired\":true,\"placeholder\":\"730722\",\"length\":\"6\",\"raleVal\":\"\"},{\"type\":\"textarea\",\"val\":\"资料邮寄地址：\",\"name\":\"address\",\"isRequired\":true,\"placeholder\":\"如：陕西省西安市高新区南洋国际8楼\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"textarea\",\"val\":\"用印事由：\",\"name\":\"reason\",\"isRequired\":true,\"placeholder\":\"请输入用印事由\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"textarea\",\"val\":\"用印内容及数量：\",\"name\":\"details\",\"isRequired\":true,\"placeholder\":\"请输入用印内容及数量\",\"length\":\"255\",\"raleVal\":\"\"}]","writeNum":6,"addManaId":"013c7c1fc47f44c4aab6b994ca477041","addManaName":"王竞","addTime":1527235555000,"enable":1,"icon":"https://weixin.buchang.com/ZbtOfficial//uploads/20180525/840f6+-7528+-5370.png"},{"id":"A9B6033CBD034BFA97D44FEC85AEA062","name":"电脑申购","iconUrl":"/uploads/20180525/b376c+-7535+-8111+-7533+-8d2d.png","templateType":2,"templateWrite":"[{ \"type\": \"radio\", \"val\": \"设备类型：\", \"name\": \"facility\", \"droplist\": [{ \"item\": \"计算机\" }],\"isRequired\": true, \"placeholder\": \"计算机\", \"length\": \"10\", \"raleVal\": \"\" },{ \"type\": \"textarea\", \"val\": \"申请理由：\", \"name\": \"reason\", \"isRequired\": true, \"placeholder\": \"请输入申请理由\", \"length\": \"255\", \"raleVal\": \"\" },{ \"type\": \"textarea\", \"val\": \"对申请设备的特殊要求：\", \"name\": \"special\", \"isRequired\": true, \"placeholder\": \"如：电脑速度快、配置高\", \"length\": \"255\", \"raleVal\": \"\" },{ \"type\": \"time\", \"val\": \"设备预计使用时间：\", \"name\": \"usertime\", \"isRequired\": true, \"id\":\"timepicker1\", \"placeholder\": \"2018-05-17\", \"length\": \"12\", \"raleVal\": \"\" }]","writeNum":4,"addManaId":"013c7c1fc47f44c4aab6b994ca477041","addManaName":"王竞","addTime":1527235592000,"enable":1,"icon":"https://weixin.buchang.com/ZbtOfficial//uploads/20180525/b376c+-7535+-8111+-7533+-8d2d.png"},{"id":"75B2E58CB9DA49D982C85C267C000852","name":"发文","iconUrl":"/uploads/20180525/d4963+-53d1+-6587.png","templateType":3,"templateWrite":"[{\"type\":\"input\",\"val\":\"发文单位：\",\"name\":\"company\",\"isRequired\":true,\"placeholder\":\"请输入发文单位\",\"length\":\"20\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"标题：\",\"name\":\"title\",\"isRequired\":true,\"placeholder\":\"请输入标题\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"送达范围：\",\"name\":\"range\",\"isRequired\":true,\"placeholder\":\"请输入送达范围\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"分机：\",\"name\":\"extension\",\"isRequired\":true,\"placeholder\":\"6688\",\"length\":\"12\",\"raleVal\":\"\"}]","writeNum":4,"addManaId":"013c7c1fc47f44c4aab6b994ca477041","addManaName":"王竞","addTime":1527235646000,"enable":1,"icon":"https://weixin.buchang.com/ZbtOfficial//uploads/20180525/d4963+-53d1+-6587.png"},{"id":"284802CB46F64764807762E8F8206F87","name":"国内接待","iconUrl":"/uploads/20180615/c4a7e+-63a5+-5f85.png","templateType":4,"templateWrite":"[{\"type\":\"input\",\"val\":\"申请人：\",\"name\":\"name\",\"isRequired\":true,\"placeholder\":\"张三\",\"length\":\"4\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"申请部门：\",\"name\":\"department\",\"isRequired\":true,\"placeholder\":\"请输入部门\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"time\",\"val\":\"活动时间：\",\"name\":\"time\",\"isRequired\":true,\"placeholder\":\"2018-01-01\",\"id\":\"time1\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"活动地点：\",\"name\":\"site\",\"isRequired\":true,\"placeholder\":\"陕西省雁塔区\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"人数：\",\"name\":\"number\",\"isRequired\":true,\"placeholder\":\"12\",\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"天数：\",\"name\":\"days\",\"isRequired\":true,\"placeholder\":\"10\",\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"费用预算：\",\"name\":\"cost\",\"isRequired\":true,\"placeholder\":\"5000元\",\"length\":\"20\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"餐标：\",\"name\":\"standard\",\"isRequired\":true,\"placeholder\":\"请输入用餐标准\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"前期考察：\",\"name\":\"inspect\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"需要\"},{\"item\":\"不需要\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"酒店要求：\",\"name\":\"require\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"五星\"},{\"item\":\"准五\"},{\"item\":\"四星\"},{\"item\":\"准四\"},{\"item\":\"三星\"}],\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"用餐种类：\",\"name\":\"dinertype\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"桌餐\"},{\"item\":\"酒店自助\"},{\"item\":\"特色餐\"},{\"item\":\"茶歇\"}],\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"购物：\",\"name\":\"shopping\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"安排\"},{\"item\":\"不安排\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"checkbox\",\"val\":\"物料：\",\"name\":\"material\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"LED\"},{\"item\":\"背景板\"},{\"item\":\"议程安排表\"},{\"item\":\"会议手册\"},{\"item\":\"会议须知\"},{\"item\":\"接机牌\"},{\"item\":\"易拉宝\"},{\"item\":\"X展架\"},{\"item\":\"胸牌\"},{\"item\":\"台卡\"},{\"item\":\"台花\"},{\"item\":\"车头贴\"},{\"item\":\"条幅\"},{\"item\":\"雨衣\"},{\"item\":\"瓶签\"},{\"item\":\"集体照\"},{\"item\":\"摄像\"}],\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"textarea\",\"val\":\"会场要求：\",\"name\":\"meetingrequest\",\"isRequired\":true,\"placeholder\":\"请输入会场要求\",\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"textarea\",\"val\":\"活动主旨理由及建议：\",\"name\":\"gist\",\"isRequired\":true,\"placeholder\":\"请输入主旨理由及建议\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"接送站点：\",\"name\":\"pickup\",\"isRequired\":true,\"placeholder\":\"请输入接送站点\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"其他要求：\",\"name\":\"other\",\"isRequired\":true,\"placeholder\":\"请输入其他要求\",\"length\":\"255\",\"raleVal\":\"\"}]","writeNum":15,"addManaId":"013c7c1fc47f44c4aab6b994ca477041","addManaName":"王竞","addTime":1529023672000,"enable":1,"icon":"https://weixin.buchang.com/ZbtOfficial//uploads/20180615/c4a7e+-63a5+-5f85.png"},{"id":"E403015F6A004F0792F5A97E25E2DDC1","name":"出国考察","iconUrl":"/uploads/20180615/0a528+-56fd+-5916.png","templateType":5,"templateWrite":"[{\"type\":\"input\",\"val\":\"申请人：\",\"name\":\"proposer\",\"isRequired\":true,\"placeholder\":\"张三\",\"length\":\"40\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"申请单位：\",\"name\":\"company\",\"isRequired\":true,\"placeholder\":\"请输入地办\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"事由：\",\"name\":\"reason\",\"isRequired\":true,\"placeholder\":\"邀约目的及预期效果\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"邀约对象：\",\"name\":\"Invite\",\"isRequired\":true,\"placeholder\":\"请输入邀约对象\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"出访国家：\",\"name\":\"countries\",\"isRequired\":true,\"placeholder\":\"请输入出访国家\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"行程天数：\",\"name\":\"days\",\"isRequired\":true,\"placeholder\":\"请输入行程天数\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"人数：\",\"name\":\"people\",\"isRequired\":true,\"placeholder\":\"请输入人数\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"出发城市：\",\"name\":\"city\",\"isRequired\":true,\"placeholder\":\"请输入出发城市\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"time\",\"val\":\"出访时间：\",\"name\":\"usertime\",\"isRequired\":true,\"id\":\"timepicker1\",\"placeholder\":\"2018-05-17\",\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"行程安排：\",\"name\":\"arrange\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"高端\"},{\"item\":\"普通\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"前期考察：\",\"name\":\"inspect\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"需要\"},{\"item\":\"不需要\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"会议：\",\"name\":\"meeting\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"安排\"},{\"item\":\"不安排\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"checkbox\",\"val\":\"酒店要求：\",\"name\":\"demand\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"三星(国际连锁)\"},{\"item\":\"四星\"},{\"item\":\"五星\"},{\"item\":\"超五星\"},{\"item\":\"三花(当地酒店)\"},{\"item\":\"四花\"},{\"item\":\"五花\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"购物：\",\"name\":\"shopping\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"安排\"},{\"item\":\"不安排\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"特色餐：\",\"name\":\"specialty\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"安排\"},{\"item\":\"不安排\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"国内集合安排酒店：\",\"name\":\"hotel\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"三星\"},{\"item\":\"四星\"},{\"item\":\"五星\"},{\"item\":\"不安排住宿\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"radio\",\"val\":\"国内集合地接送机：\",\"name\":\"hotel\",\"isRequired\":true,\"placeholder\":\"请选择\",\"droplist\":[{\"item\":\"安排\"},{\"item\":\"不安排\"}],\"length\":\"12\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"物料需求：\",\"name\":\"material\",\"isRequired\":true,\"placeholder\":\"请输入物料需求\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"费用：\",\"name\":\"cost\",\"isRequired\":true,\"placeholder\":\"请输入费用\",\"length\":\"255\",\"raleVal\":\"\"}]","writeNum":20,"addManaId":"013c7c1fc47f44c4aab6b994ca477041","addManaName":"王竞","addTime":1529049175000,"enable":1,"icon":"https://weixin.buchang.com/ZbtOfficial//uploads/20180615/0a528+-56fd+-5916.png"},{"id":"7475FCBF59184BA593211F2BB51970F1","name":"协议盖章","iconUrl":"/uploads/20180615/ce085+-534f+-8bae.png","templateType":6,"templateWrite":"[{\"type\":\"input\",\"val\":\"协议名称：\",\"name\":\"agrname\",\"isRequired\":true,\"placeholder\":\"请输入协议名称\",\"length\":\"60\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"地办：\",\"name\":\"position\",\"isRequired\":true,\"placeholder\":\"请输入地办\",\"length\":\"60\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"咨询公司名称：\",\"name\":\"time\",\"isRequired\":true,\"placeholder\":\"请输入咨询公司名称\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"用印单位：\",\"name\":\"unit\",\"isRequired\":true,\"placeholder\":\"请输入用印单位\",\"length\":\"255\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"金额：\",\"name\":\"money\",\"isRequired\":true,\"placeholder\":\"请输入金额\",\"length\":\"20\",\"raleVal\":\"\"},{\"type\":\"input\",\"val\":\"备注：\",\"name\":\"remark\",\"isRequired\":false,\"placeholder\":\"备注\",\"length\":\"255\",\"raleVal\":\"\"}]","writeNum":6,"addManaId":"013c7c1fc47f44c4aab6b994ca477041","addManaName":"王竞","addTime":1529049832000,"enable":1,"icon":"https://weixin.buchang.com/ZbtOfficial//uploads/20180615/ce085+-534f+-8bae.png"},{"id":"2048D4331F04472796CF5B82F8218FF0","name":"审计监察","iconUrl":"/uploads/20180725/f2389+-5ba1+-8ba1.png","templateType":7,"templateWrite":"[{\"type\":\"textarea\",\"val\":\"审计报告\",\"name\":\"shenji\",\"isRequired\":true,\"placeholder\":\"请输入...\",\"length\":\"100000\",\"isRichtext\": true,\"raleVal\":\"\"}]","writeNum":1,"addManaId":"013c7c1fc47f44c4aab6b994ca477041","addManaName":"王竞","addTime":1532522205000,"enable":1,"icon":"https://weixin.buchang.com/ZbtOfficial//uploads/20180725/f2389+-5ba1+-8ba1.png"}]
function Items (props) {
    const array = props.array;
    const listItems = array.map((number,key) =>
        // 又对啦！key应该在数组的上下文中被指定
        <ColumItem key={key}
                   data={number} children={props} />
    );
    return (
        <ul className="item clearfix">{listItems}</ul>
    );
}
function ItemTwos (props) {
    const array = props.array;
    const listItems = array.map((number,key) =>
        // 又对啦！key应该在数组的上下文中被指定
        <ColumnItemTwo key={key}
                   data={number} />
    );
    return (
        <ul className="item clearfix">{listItems}</ul>
    );
}

class AddView extends  React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (<div className="container">
            <div className="banner">
                <img src={bannerImage} alt="" />
            </div>
            {/*应用*/}
            <div className="infoCenter">
                <h2><span className="line"></span> 常用应用 </h2>

                <Items array={array} data={this.props}/>

            </div>
            <div className="infoCenter">
                <h2><span className="line"></span> 考勤应用 </h2>
                <Items array={array2}/>
            </div>
            <div className="infoCenter">
                <h2><span className="line"></span> 其他应用 </h2>
                <ItemTwos array={array1}/>
            </div>
        </div>);
    }

}
const mapStateToProps = (state) =>{
    return {data:state.data}
}

export  default connect(mapStateToProps)(AddView);
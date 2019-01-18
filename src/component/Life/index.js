import React, { Component } from 'react';
import ColumItem from '../ColumnItem';
import {ListView,Grid} from 'antd-mobile';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import bannerImage from  '../../img/ban0.jpg';
import mine1 from '../../img/notice.png';
import mine2 from '../../img/cs.png';
import mine3 from '../../img/ordHistory.png';
import mine4 from '../../img/traHistory.png';
const array=[
    {icon:`${mine1}`,text:"通知公告",url:"http://www.baidu.com",num:0},
    {icon:`${mine2}`,text:"抄送",url:"http://www.baidu.com",num:0},
    {icon:`${mine3}`,text:"事务历史",url:"http://www.baidu.com",num:0},
    {icon:`${mine4}`,text:"出差历史",url:"http://www.baidu.com",num:0}
    ];
const data = Array.from(array).map((_val, i) => ({
    icon: _val.icon,
    text: _val.text,
}));
function Items (props) {
    const array = props.array;
    const listItems = array.map((number) =>
        // 又对啦！key应该在数组的上下文中被指定
        <ColumItem key={number.toString()}
                  data={number} />

    );
    return (
        <ul className="item clearfix">{listItems}</ul>
    );
}
const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

class LifeView extends  React.Component{
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
                <h2><span className="line"></span> 应用 </h2>
                <Items array={array}/>
            </div>
            <div className="infoCenter">
                <h2><span className="line"></span> 消息 </h2>
                <Grid data={data} activeStyle={false} hasLine={false} />
            </div>
        </div>);
    }

}

export  default LifeView;
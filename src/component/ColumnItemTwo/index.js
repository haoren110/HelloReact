import React from 'react';
//const baseurl="https://weixin.buchang.com/ZbtOfficial/";
class ColumItemTwo extends  React.Component{
    render() {
          //let url=baseurl+this.props.data.iconUrl;
            return (<li className="f_left"><a href={this.props.data.url}>
                <div className="aplicon"><img src={this.props.data.icon} alt="" />
                </div>
                <span>{this.props.data.name}</span>
            </a></li>);


    }

}

export default ColumItemTwo;
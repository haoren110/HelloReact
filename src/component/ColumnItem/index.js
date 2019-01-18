import React from 'react';
class ColumItem extends  React.Component{
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.data.num)
        if(this.props.data.num==false){
            return (<li className="f_left"><a href={this.props.data.url}>
                <div className="aplicon"><img src={this.props.data.icon} alt="" />
                    <div className="unnotice">{this.props.data.num}</div>
                </div>
                <span>{this.props.data.text}</span>
            </a></li>);
        }else {
            return (<li className="f_left"><a href={this.props.data.url}>
                <div className="aplicon"><img src={this.props.data.icon} alt="" />
                </div>
                <span>{this.props.data.text}</span>
            </a></li>);
        }

    }

}

export default ColumItem;
import React from 'react';
import { connect } from 'dva';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import {Link} from 'dva/router';
class ColumItem extends  React.Component{
    render() {
      //const com= this.props.data.url.substring(0,1).toLocaleUpperCase()+this.props.data.url.substring(1,this.props.data.url.length-1)
       // console.log(this.props.data.url)
        if(this.props.data.num===false){
            return (<li className="f_left">
                <Link to={this.props.data.url}>
                <div className="aplicon"><img src={this.props.data.icon} alt="" />
                    <div className="unnotice">{this.props.data.num}</div>
                </div>
                <span>{this.props.data.text}</span>
                </Link>
            </li>);
        }else {
            return (<li className="f_left" >
                <Link to={this.props.data.url}>
                <div className="aplicon"><img src={this.props.data.icon} alt="" />
                </div>
                <span>{this.props.data.text}</span>
                </Link>
               </li>);
        }
    }
}
export default connect(
    ({ColumItem}) => ({ColumItem})
)(CSSModules(ColumItem, styles));
import React from 'react';
import { connect } from 'dva';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import {NavLink,Route,Redirect} from 'dva/router';
import Signature from '../Signature';
import Travel from '../Travel';
class ColumItem extends  React.Component{
    constructor(props){
        super(props);
    }
    render() {

      const com= this.props.data.url.substring(0,1).toLocaleUpperCase()+this.props.data.url.substring(1,this.props.data.url.length-1)
        console.log(this.props.data.url)
        if(this.props.data.num==false){
            return (<li className="f_left">
                <NavLink to={this.props.data.url}>
                <div className="aplicon"><img src={this.props.data.icon} alt="" />
                    <div className="unnotice">{this.props.data.num}</div>
                </div>
                <span>{this.props.data.text}</span>
                </NavLink>
            </li>);
        }else {
            return (<li className="f_left" >
                <NavLink to={{com}}>
                <div className="aplicon"><img src={this.props.data.icon} alt="" />
                </div>
                <span>{this.props.data.text}</span>
                </NavLink>
               </li>);
        }

    }

}
export default connect(
    ({ColumItem}) => ({ColumItem})
)(CSSModules(ColumItem, styles));
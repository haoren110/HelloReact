import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from'prop-types';
import FillTpl from '../../views/FillTpl';
//const baseurl="https://weixin.buchang.com/ZbtOfficial/";
class ColumItemTwo extends  React.Component{

    constructor(props){
       super(props);
        //console.log(this.props)
    }
    render() {
          let url='fillTpl/'+this.props.data.templateType;
            return (<li className="f_left">
                <Link to={url}>
                <div className="aplicon"><img src={this.props.data.icon} alt="" />
                </div>
                <span>{this.props.data.name}</span>
                </Link>
            </li>);
    }

}
ColumItemTwo.propTypes={
    // icon:PropTypes.string.isRequired,
    // name:PropTypes.string.isRequired
};

export default ColumItemTwo;
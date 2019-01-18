import React from 'react';
import {Flex, SearchBar,WhiteSpace} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
const numbers = [1, 2, 3, 4, 5];
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const FlexExample = () => (
    <div className="flex-container">
        <div className="sub-title">历史搜索记录</div>
        <Flex>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>

    </div>
);
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    componentDidMount() {
        this.autoFocusInst.focus();
    }

    render() {
        return(
        <div>
        <SearchBar
            value={this.state.value}
            placeholder="Search"
            onSubmit={value => console.log(value, 'onSubmit')}
            onClear={value => console.log(value, 'onClear')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onCancel={() => console.log('onCancel')}
            showCancelButton
            onChange={this.onChange} ref={ref => this.autoFocusInst = ref}
        />
           <FlexExample />

        </div>);
    }
}

export default Search;
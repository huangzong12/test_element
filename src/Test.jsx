import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

@connect((state, props) => {
    return {state: state}
})
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '测试2',
            data: []
        }
    }

    componentDidMount() {
        this.setState({data: [1, 2, 4, 5]});
    }

    test() {
        console.log(this);
        const {onTest} = this.props;
        onTest && onTest()
    }

    render() {
        return (
            <div>
                {this.state.data.map(item => {
                    return (<div key={item}>{item}</div>)
                })}
                <button onClick={() => {
                    this.test()
                }}>{this.props.title}黄斌
                </button>
                {this.props.children}
            </div>
        );
    }
}
Test.defaultProps = {
    title: '111'
};
Test.propTypes = {
    title: PropTypes.string
};
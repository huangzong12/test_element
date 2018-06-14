import React from 'react';
import ReactDom from 'react-dom';
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import 'element-theme-default';
import {Button} from 'element-react';
import url from './images/test.png'
import Test from './Test.jsx'

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

let store = createStore(todos, ['Use Redux']);

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function test() {
    store.dispatch({
        type: 'ADD_TODO',
        text: 'Read the docs'
    })
    console.log(store.getState())
    console.log(Math.random());
}

const numbers = [1, 2, 3, 4, 5];
ReactDom.render(
    <Provider store={store}>
        <div>
            <Button>ss</Button>
            <img src={url} alt="ss"/>
            <NumberList numbers={numbers}/>
            <Test title={"黄渤"} onTest={() => {
                test()
            }}>
                <p>12</p>
            </Test>
        </div>
    </Provider>,
    document.getElementById('root')
)
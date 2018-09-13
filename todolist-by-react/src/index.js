import React from 'react';
// 把组件挂载到DOM上
import ReactDOM from 'react-dom';
// App组件，大写字母开头
import Todolist from './Todolist';
// all in js
import './style.css'
// 把组件挂载到Dom节点上,在JSX中，如果要使用自己创建的组件，用这种标签形式的就可以了
ReactDOM.render(<Todolist />, document.getElementById('root'));

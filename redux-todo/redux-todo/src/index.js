import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { taskReducer } from './reducers/taskReducer';

import './index.css';
import App from './App';

const store = createStore(taskReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


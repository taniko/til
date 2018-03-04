import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from 'components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

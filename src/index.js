import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Material UI
import l3BaseTheme from './l3BaseTheme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const ThemedApp = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(l3BaseTheme)}>
        <App />
    </MuiThemeProvider>
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();

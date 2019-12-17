import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    primary:{
      main: '#E91D3D'
    }
  }
});

console.log(theme);
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root')
);

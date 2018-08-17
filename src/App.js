import React, { Component } from 'react';
import MenuBar from './components/MenuBar';
import Blog from './containers/Blog';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(62,64,66)"
    }
  },
});

class App extends Component {
  render() {
    return (
      <div className="app">
        <MuiThemeProvider theme={theme}>
          <MenuBar />
          <Blog />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
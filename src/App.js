import React, { Component } from 'react';
import MenuBar from './components/MenuBar';
import Blog from './containers/Blog';
import Homepage from './components/Homepage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";


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
      <Router>
        <div className="app">
          <MuiThemeProvider theme={theme}>
            <MenuBar />
            <Route exact path="/" component={Homepage} />
            <Route path="/projects/:client" component={Blog} />
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
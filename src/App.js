import React, { Component } from 'react';
import MenuBar from './components/MenuBar';
import Post from './containers/Post';
import Gallery from './containers/Gallery'
import Homepage from './components/Homepage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GA from './utils/GoogleAnalytics'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(54,91,151)"
    },
    secondary: {
      main: "rgb(62,64,66)"
    }
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          { GA.init() && <GA.RouteTracker /> }  
          <MuiThemeProvider theme={theme}>
            <MenuBar />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/projects" component={Gallery} />
            <Route path="/projects/:client" component={Post} />
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
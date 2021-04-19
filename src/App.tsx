import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import * as containers from './containers'
import pages from './pages'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Redirect exact path="/"
            to = {pages.palette.href}
          />
          <Route exact path={pages.counterHook.href}
            component={containers.CounterHook}
          />
          <Route exact path={pages.palette.href}
            component={containers.Palette}
          />
          <Route exact path={pages.nodeGraph.href}
            component={containers.NodeGraph}
          />
          <Route exact path={pages.notFound.href}
            component={containers.NotFound}
          />
          <Redirect to={pages.notFound.href} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;

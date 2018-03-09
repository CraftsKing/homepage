import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

import Login from './containers/Login'
import Todos from './containers/Todos'
import NotFound from './containers/NotFound'
import PrivateRoute from './containers/PrivateRoute'

@inject('userStore')
@withRouter
@observer
export default class App extends React.Component {

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (<div>
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/todo" component={Todos}/>
        <PrivateRoute path="/" component={NotFound}/>
      </Switch>
    </div>);
  }
}

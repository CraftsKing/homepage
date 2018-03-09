import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
export default class PrivateRoute extends React.Component {
  render() {
    const { userStore, ...restProps } = this.props;
    if (userStore.user.username) return <Route {...restProps} />;
    return <Redirect to="/login" />;
  }
}

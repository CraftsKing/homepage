// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Input } from 'antd';
import './index.scss';
const Search = Input.Search;

type Props = {
  bar?: string
};

@inject('userStore')
@observer
class App extends Component<Props> {

  handleUsernameChange = username => this.props.userStore.setUername(username);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.props.userStore.user.username}</h1>
          <Search placeholder="添加TODO" enterButton="add" onSearch={value => this.handleUsernameChange(value)} size="large" />
        </header>
      </div>
    );
  }
}

export default App;

// @flow

import React, {Component} from 'react';
import './index.scss';

class NotFound extends Component {
  componentDidMount() {
    document.title = '404';
  }

  render() {
    return (<div className="not-found-container">
      <img src={require('../../assets/images/404.png')} alt="NotFound"/>
      <p>:( 很抱歉，您所访问的页面不存在！</p>
    </div>);
  }
}

export default NotFound;

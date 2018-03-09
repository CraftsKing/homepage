// @flow
import { observable, action } from 'mobx';

class UserStore {
  @observable user = {
    username: '',
    email: '',
    password: ''
  };

  @action setUername(username) {
    this.user.username = username;
  }

  @action setEmail(email) {
    this.user.email = email;
  }

  @action setPassword(password) {
    this.user.password = password;
  }
}
export default new UserStore();

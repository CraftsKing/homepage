// @flow
import { observable, action } from 'mobx';
// import { indexOf } from 'lodash/array';

export default class TodoStore {
  @observable todos = [];

  @action addTodo(todoName) {
    this.todos.push(todoName);
  }

  @action removeTodo(todoName) {
    const indexNumber = this.todos.indexOf(todoName);
    this.todos.splice(indexNumber, indexNumber === -1 ? 0:1);
  }

  @action clearTodo() {
    this.todos = [];
  }
}

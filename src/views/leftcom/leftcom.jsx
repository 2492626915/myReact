import React, {Component} from 'react';

export default class LeftCom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div style={{ float:'left' }}>
          <div>用户名</div>
          <input type="text" placeholder="用户名"/>
          <div>评论内容</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>发布</button>
        </div>
    )
  }
}
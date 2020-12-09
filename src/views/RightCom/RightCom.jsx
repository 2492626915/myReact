import React, {Component} from 'react';

export default class RightCom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div style={{ float:'right' }}>
          <h1>评论回复：</h1>
          <div style={{ width:'500px',border:'1px solid #000' }}>
            <p>xxx说：</p>
            <p style={{ textIndent:'30px' }}>React不错！！！</p>
          </div>
        </div>
    )
  }
}
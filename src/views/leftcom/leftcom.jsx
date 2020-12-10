import React, {Component} from 'react';

export default class LeftCom extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  btnClick = () => {
  }
    inputChange = (e) => {
        console.log(e.target.value);
            this.setState({
            userName:e.target.value
            },
            () => {
                console.log(this.state.userName);
            }
        )
    }
  render() {
    return (
        <div style={{ float:'left' }}>
          <div >用户名</div>
          <input ref='userName' onBlur={ (e) => { this.inputChange(e) } } type="text" placeholder="用户名"/>
          <div>评论内容</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
            <div>
                <button onClick={ this.btnClick } style={{ width:'150px',height:'30px',background:'#8787ff',border:'none',borderRadius:'20px' }}>发布</button>
            </div>
        </div>
    )
  }
}
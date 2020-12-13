import React, {Component} from 'react';
import LeftCom from './leftcom/leftcom'
import RightCom from  './RightCom/RightCom'
const app = {
}
export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text:'请发表对React的评论'
    };
  }
  getLeftCom = (res,msg) => {
    console.log(msg);
    this.setState({
      text:msg
    })
  }
  render() {
    return (
        <div  style={{ width:'1000px',margin:'200px  auto 0',border:'1px solid #000',overflow:'hidden',padding:'100px' }}>
          <h1 style={app}>{ this.state.text }</h1>
          <div>
            <LeftCom parent={ this } />
            <RightCom text={ this.state.text }></RightCom>
          </div>
        </div>
    )
  }
}
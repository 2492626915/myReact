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
  render() {
    return (
        <div  style={{ width:'1000px',margin:'200px  auto 0',border:'1px solid #000',overflow:'hidden',padding:'100px' }}>
          <h1 style={app}>{ this.state.text }</h1>
          <div>
            <LeftCom />
            <RightCom></RightCom>
          </div>
        </div>
    )
  }
}
import React, {Component} from 'react';
import LeftCom from './leftcom/leftcom'
import RightCom from  './RightCom/RightCom'
const app = {
}
export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div >
          <h1 style={app}>请发表对React的评论</h1>
          <div>
            <LeftCom />
            <RightCom></RightCom>
          </div>
        </div>
    )
  }
}
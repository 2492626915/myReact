import React, {Component} from 'react';
const app = {
  width:'300px',
  height:'300px'
}
export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div >
          <h1 style={app}>nihao</h1>
        </div>
    )
  }
}
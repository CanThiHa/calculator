import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Input,Button } from 'antd';
import 'antd/dist/antd.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { ketqua: 0 }
  }

  nhapso = (so) => {
    this.setState({
      ketqua: so
    })
  }

  render() {
    return (
      <div>
        <div>
          <Input placeholder="Basic usage" style={{ width: '230px', height: '35px', marginBottom: '10px' }} value={this.state.ketqua}></Input>
          <Button type="primary" style={{ marginLeft: '20px', width: '50px', height: '35px' }} >=</Button>
        </div>
        <div className='left'>
          <div >
            <div className='bottom'>
              <Button className='dmeo' type="primary" onClick={() => this.nhapso(7)}>7</Button>
              <Button className='dmeo' type="primary" onClick={() => this.nhapso(8)}>8</Button>
              <Button className='dmeo' type="primary" onClick={() => this.nhapso(9)}>9</Button>
            </div>

            <div>
              <Button className='dmeo' type="primary" onClick={() => this.nhapso(4)}>4</Button>
              <Button className='dmeo' type="primary" onClick={() => this.nhapso(5)}>5</Button>
              <Button className='dmeo' type="primary" onClick={() => this.nhapso(6)}>6</Button>
            </div>
            <div>
              <Button className='dmeo' type="primary" onClick={() => this.nhapso(1)}>1</Button>
              <Button className='dmeo' type="primary" onClick={() => this.nhapso(2)}>2</Button>
              <Button className='dmeo' type="primary" onClick={() => this.nhapso(3)}>3</Button>
            </div>
          </div>
            <div style={{ display:'flex',flexDirection: 'column'}}>
             <Button  className='top' type="primary" >+</Button>
             <Button className='top' type="primary" >-</Button>
             <Button className='top' type="primary" >x</Button>
             <Button className='top' type="primary" >/</Button>
          </div>

        </div> 

        


      </div>




    );
  }
}
export default App;


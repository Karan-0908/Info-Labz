import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
      <h1><i><u>This is Task 1</u></i></h1><br/>
      <h1>Hello Info labz</h1>
      <h2>Hello Info labz</h2>
      <h3>Hello Info labz</h3>
      <h4>Hello Info labz</h4>
      <h5>Hello Info labz</h5>
      <h6>Hello Info labz</h6>
      <p>
        The main motive of making this documnets is not just doin the home work it is about learning the react and how to use it in the real world. The main motive of making this documnets is not just doin the home work it is about learning the react and how to use it in the real world. The main motive of making this documnets is not just doin the home work it is about learning the react and how to use it in the real world. The main motive of making this documnets is not just doin the home work it is about learning the react and how to use it in the real world. The main motive of making this documnets is not just doin the home work it is about learning the react and how to use it in the real world. The main motive of making this documnets is not just doin the home work it is about learning the react and how to use it in the real world. The main motive of making this documnets is not just doin the home work it is about learning the react and how to use it in the real world.
      </p><br/>
    </div>
    );
  }
}

class Text extends Component {
  render() {
    return(
      <div>
        <h1><i><u>This is Task 2</u></i></h1><br/>
        <b>This text is bold</b><br/>
        <i>This text is italic</i><br/>
        <u>This text is underlined</u><br/>
        here i have used the line break tag <br></br> to break the line and start a new line<br/>
      </div>
    )
  }
}

class One extends Component {
  render() {
    return(
      <div>
          <h1><i><u>This is Task 3</u></i></h1><br/>
        <b>This text is subscript</b><br/>
        &nbsp;&nbsp;H<sub>2</sub>O is the chemical formula for water<br/>
        <b>This text is superscript</b><br/>
        &nbsp;&nbsp;10<sup>2</sup> = 100
      </div>
    )
  }
}

class Two extends Component {
  render() {
    return(
      <div>
        <h1><i><u>This is Task 4</u></i></h1>
        <ins>This text is inserted</ins><br/><br/>
        <del>This text is deleted</del><br/><br/>
        <mark>This text is marked</mark><br/>
      </div>
    )
  }
}

export default App;
export { Text, One, Two };
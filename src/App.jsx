// main entry point for react
import React, { Component } from 'react';
import LocationContainer from '';
import { render } from 'sass';

class App extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <LocationContainer/>
      </div>
    );
  }
}

// export function App() {
//     return (
//         <div>
//             <h1>Hello World { new Date().toString() }</h1>
//         </div>
//     );
// }

export default App;
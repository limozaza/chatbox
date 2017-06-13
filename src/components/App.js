import React from 'react';

import Formulaire from './Formulaire';
import Message from './Message'

class App extends React.Component{

  state = {
    messages:{

    }
  }

  addMessage = (message) => {
    const messages = { ...this.state.messages};
    //Le timeStamp
    const timestamp = Date.now();
    messages[`message - ${timestamp}`] = message;

    this.setState({
      messages : messages
    })
  };

  render(){
    return(
      <div className="box">
        <div className="messages">
          <Message pseudo={this.props.params.pseudo}/>
        </div>
        <Formulaire
          addMessage={this.addMessage}
          pseudo={this.props.params.pseudo}
          length="140"
          />
      </div>
    );
  }
}
export default App;

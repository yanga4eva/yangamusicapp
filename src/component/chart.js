import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Button} from '@blueprintjs/core'


class Test extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <nav class="bp3-navbar .modifier">
      <div class="bp3-navbar-group bp3-align-left">
        <div class="bp3-navbar-heading">Fored | Finance </div>
        <input class="bp3-input" placeholder="Search Stock..." type="text" />
      </div>
      <div class="bp3-navbar-group bp3-align-right">
        <button class="bp3-button bp3-minimal bp3-icon-home">Home</button>
        <button class="bp3-button bp3-minimal bp3-icon-document">My Stock</button>
        <span class="bp3-navbar-divider"></span>
        <button class="bp3-button bp3-minimal bp3-icon-user"></button>
        <button class="bp3-button bp3-minimal bp3-icon-notifications"></button>
        <button class="bp3-button bp3-minimal bp3-icon-cog"></button>
      </div>
    </nav>
    </>
     );
  }
}
 
export default Test;
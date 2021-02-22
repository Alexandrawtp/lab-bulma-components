
import React, {Component} from 'react';
import Navbar from "../navbar/Navbar.js";
import FormField from "../formfield/FormField.js";
import CoolButtons from '../buttons/CoolButton.js';

class Signup extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password"/>
        <CoolButtons isPrimary>Sign Up</CoolButtons>
      </React.Fragment>
    ) 
  }
}

export default Signup;
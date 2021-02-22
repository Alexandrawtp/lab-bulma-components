import React from 'react';
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./buttons/CoolButton.js"


class App extends React.Component {
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
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </React.Fragment>
    );
  }
}

export default App;







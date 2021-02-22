import React from 'react'

function CoolButtons (props){

    // Conditionally render classes
    // Note this is a hint for the lab if you're reading this.
    // If you've understood how props work this would be easy peassy
    let blue = props.className ? props.className : 'is-primary'
    
    return (
      <div>
        <div className={blue}>
          <button>Primary</button>
        </div>
      </div>
    );
}

export default CoolButtons;
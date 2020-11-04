import React, {Component} from 'react';

class PersonalInfo extends Component {
    continue =  e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
      const  {handleChange,FullName,Email,Password} =this.props;
        return (
            <> 
            <h2>Enter your personal Information</h2>
            <label>
                <input type="text"
                 name ="FullName"  
                 placeholder ="FullName" 
                 value ={FullName}
                  onChange ={handleChange('FullName')} />
            </label>
            <label>
                <input type="text"
                 name ="Email"  
                 placeholder ="Email" 
                 value ={Email}
                  onChange ={handleChange('Email')} />
            </label>
            <label>
                <input type="text"
                 name ="Password"  
                 placeholder ="Password" 
                 value = {Password}
                  onChange ={handleChange('Password')} />
            </label>
            <button className = "Next" onClick= {this.continue}>
            Next
            </button>
            </>
        );
    }
}


export default PersonalInfo;
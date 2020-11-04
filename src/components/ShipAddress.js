import React, {component} from 'react';
class ShipAddress extends component {
    continue =  e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back =  e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const  {handleChange,AddressLineOne,AddressLineTwo,City,State,ZipCode,PhoneNumber} =this.props;
          return (
              <> 
              <h2>Enter your shipping Information</h2>
              <label>
                  <input type="text"
                   name ="AddressLineOne"  
                   placeholder ="AddressLineOne" 
                   value = {AddressLineOne}
                    onChange ={handleChange('AddressLineOne')} />
              </label>
              <label>
                  <input type="text"
                   name ="AddressLineTwo"  
                   placeholder ="AddressLineTwo" 
                   value ={AddressLineTwo}
                    onChange ={handleChange('AddressLineTwo')} />
              </label>
              <label>
                  <input type="text"
                   name ="City"  
                   placeholder ="City" 
                   value = {City}
                    onChange ={handleChange('City')} />
              </label>
              <label>
                  <input type="text"
                   name ="State"  
                   placeholder ="State" 
                   value ={State}
                    onChange ={handleChange('State')} />
              </label>
              <label>
                  <input type="text"
                   name ="ZipCode"  
                   placeholder ="ZipCode" 
                   value = {ZipCode}
                    onChange ={handleChange('ZipCode')} />
              </label>
              <label>
                  <input type="text"
                   name ="PhoneNumber"  
                   placeholder ="PhoneNumber" 
                   value ={PhoneNumber}
                    onChange ={handleChange('PhoneNumber')} />
              </label>
              <button className = "Next" onClick= {this.back}>
              Back
              </button>
              <button className = "Next" onClick= {this.continue}>
              Next
              </button>
              </>
          );
      }
}

export default ShipAddress;
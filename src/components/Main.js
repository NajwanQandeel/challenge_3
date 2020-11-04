import React, {component} from 'react';
import PersonalInfo from './PersonalInfo';
import ShipAddress from './ShipAddress';
     
class Main extends component {
    state = {
        step1: 1,

        //step1
        FullName: "",
        Email: "",
        Password: '',

       //step2
        AddressLineOne: "",
        AddressLineTwo: "",
        City: "",
        State: "",
        ZipCode: "",
        PhoneNumber: "",

        //step3
        CreditCardExpiryDate: "",
        CreditCardCCV: "",
        PilingZipCode: "",
    }

  nextStep = () => {
    const {step} = this.state;
    this.state({
        step : step + 1 
        });
  }

  prevStep = () => {
    const {step} = this.state;
    this.state({
        step : step - 1 
        });
  }


  handleChange = (e) => {
  this.setState({[input]: e.target.value})
  }
  showStep = () => {
      const {step,FullName,Email,Password,AddressLineOne,AddressLineTwo,City,State,ZipCode,PhoneNumber} = this.state;
      if(step === 1){
         return (<PersonalInfo
                handleChange = {this.handleChange}
                nextStep = {this.nextStep}
                FullName = {FullName}
                Email = {Email}
                Password = {Password}
            /> )};
        if(step === 2){
            return (<ShipAddress
                handleChange = {this.handleChange}
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                AddressLineOne = {AddressLineOne}
                AddressLineTwo = {AddressLineTwo}
                City = {City}
                State = {State}
                ZipCode = {ZipCode}
                PhoneNumber = {PhoneNumber}
            />);
        }
  }





    render() {
        const {step} = this.state;
        return (
            <> 
            <h2> MultiCheck {step} from  3 .</h2>
            {this.showStep()}
             </>
        );
    }
}

export default Main;
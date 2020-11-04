import React, {Component} from 'react';
class AllInfo extends Component{
    back =  e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {FullName,Email,Password,AddressLineOne,AddressLineTwo,City,State,ZipCode,PhoneNumber}=this.state;
        return (
          <>
         <h2>This is all information you entered :</h2>
        FullName = <b>{FullName}</b> <br/>
        Email : <b>{Email}</b><br/>
        Password : <b>{Password}</b><br/>
        AddressLineOne : <b>{AddressLineOne}</b><br/>
        AddressLineTwo : <b>{AddressLineTwo}</b><br/>
        City : <b>{City}</b><br/>
        State : <b>{State}</b><br/>
        ZipCode :  <b>{ZipCode}</b><br/>
        PhoneNumber  : <b>{PhoneNumber}</b><br/>
        <button className="back" onClick="this.back">
            Back
        </button>
       
          </>
        )
    }
}
export default AllInfo;
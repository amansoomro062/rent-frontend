import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

    state= {
      g_bill  : '',
      e_bill : '',
      collected_rent  : '',
      amount_cllection : '',
      aggreement_end_date : '',
      aggreement_start_date : '',
      rent_total : '',
      cnic : '',
      lastname : '',
      firstname : ''
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      
      const person = {
        g_bill  : this.state.g_bill,
        e_bill : this.state.e_bill,
        collected_rent  : this.state.collected_rent,
        amount_cllection : this.state.amount_cllection,
        aggreement_end_date : this.state.aggreement_end_date,
        aggreement_start_date : this.state.aggreement_start_date,
        rent_total : this.state.rent_total,
        cnic : this.state.cnic,
        lastname : this.state.lastname,
        firstname : this.state.firstname,
      }
      
      formData.append('person', JSON.stringify(person));
      for(const pair of formData.entries()) {
          console.log(pair[0]+ ', '+ pair[1]); 
      }
     
      console.log(person);

          axios({
              method: "POST",
              url: "http://localhost:5000/api/v1/person",
              data: person,
          }).then((response) => {
              console.log(response.status);
              if (response.status === 201 || response.status === 200 ) {
                  this.setState({addNewProduct: false});   
                  this.setState({editProduct: false});
                  this.resetForm();
              } else {
                  
                  console.log("Error");
                  alert("Error")
              }
          })

  }
  resetForm(){  
    alert("saved");
  }
    onFirstNameChange(event) {
      this.setState({firstname: event.target.value });
    }

    onLastNameChange(event) {
      this.setState({lastname: event.target.value});
    }
    onCnicChange(event){
      this.setState({cnic: event.target.value});
    }
    onRentTotalChange(event) {
      this.setState({rent_total: event.target.value});
    }
    onAggreementEndDateChange(event){
      this.setState({aggreement_end_date: event.target.value});
    }
    onAggreementStartDateChange(event){
      this.setState({aggreement_start_date: event.target.value});
    }
    onAmountCllectionChange(event) {
      this.setState({amount_cllection: event.target.value});
    }
    onCollectedRentChange(event){
      this.setState({collected_rent: event.target.value});
    }
    onEbillChange(event){
      this.setState({e_bill: event.target.value});
    }
    onGbillChange(event) {
      this.setState({g_bill: event.target.value});
    }

    
    render () {

        return (
            
        <div className="album py-5 bg-light" id="new">
        <div className="container">
          <div className="row">

          <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Getting Information</h4>
        <form id="productForm" name="addNewProduct" onSubmit={this.handleSubmit.bind(this)} method="POST" >
                       
          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input type="text" 
              className="form-control" required="required" 
              id="firstName" placeholder="firstName" 
              value={this.state.firstname} onChange={this.onFirstNameChange.bind(this)}/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="lastName">Last name  <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" required="required" value={this.state.lastname} onChange={this.onLastNameChange.bind(this)} id="lastName" placeholder="lastName"/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="username">CNIC Number</label>
            <div className="input-group">
              <input type="text" className="form-control" required="required" value={this.state.cnic} onChange={this.onCnicChange.bind(this)}id="username" placeholder="Enter CNIC" required=""/>
              <div className="invalid-feedback" >
                Your username is required.
              </div>
            </div>
          </div>


          <div className="mb-3">
            <label for="text">Fix the Rent</label>
            <div className="input-group">
              <input type="text" className="form-control" required="required" value={this.state.rent_total} onChange={this.onRentTotalChange.bind(this)} id="frtext" placeholder="Rent Fix" required=""/>
              <div className="invalid-feedback" >
                Please specify some amount!
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="Date">Starting Date</label>
            <input type="Date" className="form-control" required="required" value={this.state.aggreement_start_date} onChange={this.onAggreementStartDateChange.bind(this)} id="SDate" placeholder="mm/dd/yyyy" required=""/>
            <div className="invalid-feedback">
              Please please provide Agreement start date!
            </div>
          </div>

          <div className="mb-3">
            <label for="Date">Ending Date</label>
            <input type="Date" className="form-control" required="required" value={this.state.aggreement_end_date} onChange={this.onAggreementEndDateChange.bind(this)} id="EDate" placeholder="mm/dd/yyyy" required=""/>
            <div className="invalid-feedback">
              Please please provide Agreement end date!
            </div>
          </div>

          <div className="mb-3">
            <label for="Date">Amount Collection Month</label>
            <input type="Date" className="form-control" required="required" value={this.state.amount_cllection} onChange={this.onAmountCllectionChange.bind(this)} id="EDate" placeholder="mm/dd/yyyy" required=""/>
            <div className="invalid-feedback">
              Please please provide Agreement end date!
            </div>
          </div>
          <hr className="mb-4"/>

          <div className="mb-3">
            <label for="text">Rent paid</label>
            <div className="input-group">
              <input type="text" className="form-control" required="required" value={this.state.collected_rent} onChange={this.onCollectedRentChange.bind(this)} id="rtext" placeholder="paid rent"/>
              <div className="invalid-feedback">
                Please specify some amount!
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="text">Electricity bill</label>
            <div className="input-group">
              <input type="text" className="form-control" required="required" value={this.state.e_bill} onChange={this.onEbillChange.bind(this)} id="etext" placeholder="E-Bill"/>
              <div className="invalid-feedback" >
                Please specify some amount!
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="text">Gas Bill</label>
            <div className="input-group">
              <input type="text" className="form-control" required="required" value={this.state.g_bill} onChange={this.onGbillChange.bind(this)} id="gtext" placeholder="paid rent"/>
              <div className="invalid-feedback" >
                Please specify some amount!
              </div>
            </div>
          </div>

          <hr className="mb-4"/>
          <button className="btn btn-primary btn-lg btn-block" type="submit">Save</button>
        </form>
      </div>


          </div>
        </div>
      </div>

        );
    }

}

export default Form;
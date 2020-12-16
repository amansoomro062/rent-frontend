import React, { Component } from 'react';


class Form extends Component {



    render () {

        return (
            
        <div className="album py-5 bg-light" id="new">
        <div className="container">
          <div className="row">

          <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Getting Information</h4>
        <form className="needs-validation" novalidate="">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="firstName" value="" required=""/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="lastName">Last name  <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="lastName" placeholder="lastName" value=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="username">CNIC Number</label>
            <div className="input-group">
              <input type="text" className="form-control" id="username" placeholder="Enter CNIC" required=""/>
              <div className="invalid-feedback" >
                Your username is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="email">Email <span className="text-muted">(Optional)</span></label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="mb-3">
            <label for="text">Fix the Rent</label>
            <div className="input-group">
              <input type="text" className="form-control" id="frtext" placeholder="Rent Fix" required=""/>
              <div className="invalid-feedback" >
                Please specify some amount!
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="Date">Starting Date</label>
            <input type="Date" className="form-control" id="SDate" placeholder="mm/dd/yyyy" required=""/>
            <div className="invalid-feedback">
              Please please provide Agreement start date!
            </div>
          </div>

          <div className="mb-3">
            <label for="Date">Ending Date</label>
            <input type="Date" className="form-control" id="EDate" placeholder="mm/dd/yyyy" required=""/>
            <div className="invalid-feedback">
              Please please provide Agreement end date!
            </div>
          </div>
          <hr className="mb-4"/>

          <div className="mb-3">
            <label for="text">Rent paid</label>
            <div className="input-group">
              <input type="text" className="form-control" id="rtext" placeholder="paid rent"/>
              <div className="invalid-feedback">
                Please specify some amount!
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="text">Electricity bill</label>
            <div className="input-group">
              <input type="text" className="form-control" id="etext" placeholder="E-Bill"/>
              <div className="invalid-feedback" >
                Please specify some amount!
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="text">Gas Bill</label>
            <div className="input-group">
              <input type="text" className="form-control" id="gtext" placeholder="paid rent"/>
              <div className="invalid-feedback" >
                Please specify some amount!
              </div>
            </div>
          </div>

          <hr className="mb-4"/>
          <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to Save</button>
        </form>
      </div>


          </div>
        </div>
      </div>

        );
    }

}

export default Form;
import React, { Component } from 'react';
import axios from 'axios';
import DateObject from "react-date-object";

const api = axios.create({
    baseURL: `http://localhost:5000/`
})


class Edit extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location.id);
        const theId = this.props.location.id;
        this.state = {
            firstname: '',
            phone_no: '',
            receipt_no: '',
            cnic: '',
            rent_total: '',
            aggreement_start_date: '',
            aggreement_end_date: '',
            amount_cllection_month: '',
            collected_rent: '',
            g_bill: 0,
            e_bill: 0,
            isBill: false,
            id: theId
        }
        this.getPerson();


    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const person = {
            g_bill: this.state.g_bill,
            e_bill: this.state.e_bill,
            collected_rent: this.state.collected_rent,
            amount_cllection_month: this.state.amount_cllection_month,
            aggreement_end_date: this.state.aggreement_end_date,
            aggreement_start_date: this.state.aggreement_start_date,
            rent_total: this.state.rent_total,
            cnic: this.state.cnic,
            phone_no: this.state.phone_no,
            receipt_no: this.state.receipt_no,
            firstname: this.state.firstname,
            id: null
        }

        formData.append('person', JSON.stringify(person));
        for (const pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        console.log(person);

        axios({
            method: "PUT",
            url: "http://localhost:5000/api/v1/person/"+this.state.receipt_no,
            data: person,
        }).then((response) => {
            console.log(response.status);
            if (response.status === 201 || response.status === 200) {
                this.getPerson();
                alert("ok");
            } else {

                console.log("Error");
                alert("Error")
            }
        })

    }

    getPerson = async () => {
        try {
            let data = await api.get('api/v1/person/' + this.state.id).then(({ data }) => data);
            console.log(data[0]);
            this.setState({ firstname: data[0].firstname });
            this.setState({ phone_no: data[0].phone_no });
            this.setState({ receipt_no: data[0].receipt_no });
            this.setState({ cnic: data[0].cnic });
            this.setState({ rent_total: data[0].rent_total });

            //date one formating
            var d = new DateObject(data[0].aggreement_start_date );
            let dateFormated = d.format("YYYY-MM-dd");
            this.setState({ aggreement_start_date: dateFormated });
            //date two
            d = new DateObject(data[0].aggreement_end_date );
            dateFormated = d.format("YYYY-MM-dd");
            
            this.setState({ aggreement_end_date: dateFormated });

            //date two
            d = new DateObject(data[0].amount_cllection_month );
            dateFormated = d.format("YYYY-MM-dd");
            this.setState({ amount_cllection_month: dateFormated });

            this.setState({ collected_rent: data[0].collected_rent });
            this.setState({ g_bill: data[0].g_bill });
            this.setState({ e_bill: data[0].e_bill });

            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    resetForm() {
        alert("saved");
    }
    handleBillCheckbox(event) {
        this.setState({ isBill: event.target.checked });
    }
    onFirstNameChange(event) {
        this.setState({ firstname: event.target.value });
    }

    onReceiptNoChange(event) {
        this.setState({ receipt_no: event.target.value });
    }
    onPhoneNoChange(event) {
        this.setState({ phone_no: event.target.value });
    }
    onCnicChange(event) {
        this.setState({ cnic: event.target.value });
    }
    onRentTotalChange(event) {
        this.setState({ rent_total: event.target.value });
    }
    onAggreementEndDateChange(event) {
        this.setState({ aggreement_end_date: event.target.value });
    }
    onAggreementStartDateChange(event) {
        this.setState({ aggreement_start_date: event.target.value });
    }
    onAmountCllectionChange(event) {
        this.setState({ amount_cllection_month: event.target.value });
    }
    onCollectedRentChange(event) {
        this.setState({ collected_rent: event.target.value });
    }
    onEbillChange(event) {
        this.setState({ e_bill: event.target.value });
    }
    onGbillChange(event) {
        this.setState({ g_bill: event.target.value });
    }


    render() {

        return (

            <div className="album py-5 bg-light" id="new">
                <div className="container">
                    <div className="row">

                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Edit information</h4>
                            <form id="productForm" name="addNewProduct" onSubmit={this.handleSubmit.bind(this)} method="POST" >

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="firstName">First name</label>
                                        <input type="text"
                                            className="form-control" required="required"
                                            id="firstName" placeholder="firstName"
                                            value={this.state.firstname} onChange={this.onFirstNameChange.bind(this)} />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
              </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="lastName">Phone Number  <span className="text-muted"></span></label>
                                        <input type="number" className="form-control" required="required" value={this.state.phone_no} onChange={this.onPhoneNoChange.bind(this)} id="phone" placeholder="Phone number" />
                                        <div className="invalid-feedback">
                                            Valid phone is required.
              </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="receiptno">Receipt No</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" disabled value={this.state.receipt_no} onChange={this.onReceiptNoChange.bind(this)} id="username" placeholder="Enter Receipt" required="" />
                                        <div className="invalid-feedback" >
                                            receipt no is required.
              </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="username">CNIC Number</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" required="required" value={this.state.cnic} onChange={this.onCnicChange.bind(this)} id="username" placeholder="Enter CNIC" required="" />
                                        <div className="invalid-feedback" >
                                            Your username is required.
              </div>
                                    </div>
                                </div>


                                <div className="mb-3">
                                    <label for="text">Fix the Rent</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" required="required" value={this.state.rent_total} onChange={this.onRentTotalChange.bind(this)} id="frtext" placeholder="Rent Fix" required="" />
                                        <div className="invalid-feedback" >
                                            Please specify some amount!
              </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="Date">Starting Date</label>
                                    <input type="Date" className="form-control" required="required" value={this.state.aggreement_start_date} onChange={this.onAggreementStartDateChange.bind(this)} id="SDate" placeholder="mm/dd/yyyy" required="" />
                                    <div className="invalid-feedback">
                                        Please please provide Agreement start date!
            </div>
                                </div>

                                <div className="mb-3">
                                    <label for="Date">Ending Date</label>
                                    <input type="Date" className="form-control" required="required" value={this.state.aggreement_end_date} onChange={this.onAggreementEndDateChange.bind(this)} id="EDate" placeholder="mm/dd/yyyy" required="" />
                                    <div className="invalid-feedback">
                                        Please please provide Agreement end date!
            </div>
                                </div>

                                <div className="mb-3">
                                    <label for="Date">Amount Collection Month</label>
                                    <input type="Date" className="form-control" required="required" value={this.state.amount_cllection_month} onChange={this.onAmountCllectionChange.bind(this)} id="EDate" placeholder="mm/dd/yyyy" required="" />
                                    <div className="invalid-feedback">
                                        Please please provide Agreement end date!
            </div>
                                </div>
                                <hr className="mb-4" />

                                <div className="mb-3">
                                    <label for="text">Rent paid</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" required="required" value={this.state.collected_rent} onChange={this.onCollectedRentChange.bind(this)} id="rtext" placeholder="paid rent" />
                                        <div className="invalid-feedback">
                                            Please specify some amount!
              </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <label for="text">Electricity bill</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" required="required" value={this.state.e_bill} onChange={this.onEbillChange.bind(this)} id="etext" placeholder="E-Bill" />
                                            <div className="invalid-feedback" >
                                                Please specify some amount!
            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="text">Gas Bill</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" required="required" value={this.state.g_bill} onChange={this.onGbillChange.bind(this)} id="gtext" placeholder="paid rent" />
                                            <div className="invalid-feedback" >
                                                Please specify some amount!
            </div>
                                        </div>
                                    </div>

                                </div>



                                <hr className="mb-4" />
                                <button className="btn btn-primary btn-lg btn-block" type="submit">Save</button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>

        );
    }

}

export default Edit;
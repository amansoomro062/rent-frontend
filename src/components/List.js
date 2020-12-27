import {
  Link
} from "react-router-dom";

import React, { Component } from 'react';
import axios from 'axios';


const api = axios.create({
  baseURL: `http://localhost:5000/`
})



class List extends Component {

  state = {
    personList: [],
    hi: 'aman',
    id: null,
    searchNIC: null
  }

  constructor() {
    super();
    this.getPersonList();
    this.selectProduct = this.selectProduct.bind(this);
    this.deletePerson = this.deletePerson.bind(this);

    this.clear = this.clear.bind(this);

    this.search = this.search.bind(this);
    this.onNICChange = this.onNICChange.bind(this);


  }
  onNICChange(event) {
    this.setState({ searchNIC: event.target.value });
  }
  search(event) {
    event.preventDefault();
    if(this.state.searchNIC != undefined) {
      this.searchPersonList();
    } else {
      this.getPersonList();
    }
  }

  clear(event) {
    this.state.searchNIC=0;
    this.getPersonList();
  }

  deletePerson = async (id) => {
    try {
      let data = await api.delete(`/api/v1/person/${id}`).then(({ data }) => data);
      // this.setState({ products: data })
      console.log(data);
      this.getPersonList();
      alert("Product has been deleted!!!!!");
    } catch (err) {
      console.log(err);
    }
  }

  selectProduct() {
    console.log("okay");
  }

  searchPersonList = async () => {
    try {
      let data = await api.get('/api/v1/person/cnic/'+this.state.searchNIC).then(({ data }) => data);
      this.setState({ personList: data });
    } catch (err) {
      alert("error occured")
      console.log(err);
    }
  }

  getPersonList = async () => {
    try {
      let data = await api.get('/api/v1/person').then(({ data }) => data);
      this.setState({ personList: data });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }


  render() {

    return (

      <div className="album py-5 bg-light" id="list">
        <div className="container">

          <form className="row p-3" onSubmit={this.search.bind(this)} >

            <input className="form-control col-9" onChange={this.onNICChange} value={this.state.searchNIC} type="text" placeholder="Enter CNIC to search" />
            <button className="btn btn-primary col-1" type="submit">Search</button>
            <button className="btn btn-danger col-1" type="button" onClick={this.clear}> Clear</button>
          </form>
          <div className="row">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Receipt No</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Cnic</th>
                  <th scope="col">Rent</th>
                  <th scope="col">Paid rent</th>
                  <th scope="col">E-bill</th>
                  <th scope="col">G-bill</th>
                  <th scope="col">Remaining rent</th>
                  <th scope="col">Receiving date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.personList.map(p =>
                  <tr key={p.receipt_no} >
                    <th scope="row">{p.receipt_no}</th>
                    <td>{p.firstname}</td>
                    <td>{p.phone_no}</td>
                    <td>{p.cnic}</td>
                    <td>{p.rent_total}</td>
                    <td>{p.collected_rent}</td>
                    <td>{p.e_bill}</td>
                    <td>{p.g_bill}</td>
                    <td>0</td>
                    <td>{p.amount_cllection_month}</td>
                    <td>

                      <Link to={
                        {
                          pathname: '/edit',
                          id: p.receipt_no
                        }
                      }>

                        <button className="btn btn-primary">
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>

    );
  }

}

export default List;
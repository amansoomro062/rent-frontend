import React, { Component } from 'react';
import axios from 'axios';


const api = axios.create({
  baseURL: `http://localhost:5000/`
})



class List extends Component {

    state = {
      personList: [],
      hi: 'aman'
    }

    constructor() {
      super();
      this.getPersonList();
      this.selectProduct = this.selectProduct.bind(this); 
      this.deletePerson = this.deletePerson.bind(this); 
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
    getPersonList = async () => {
      try {
          let data = await api.get('/api/v1/person').then(({ data }) => data);
          this.setState({personList: data});
          console.log(data);
      } catch (err) {
          console.log(err);
      }
  }

    render () {

        return (
            
        <div className="album py-5 bg-light" id="list">
        <div className="container">

          <div className="row">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Cnic</th>
                </tr>
              </thead>
              <tbody>
              {this.state.personList.map(p =>
             <tr key={p.Id} onClick={() => this.selectProduct(p.Id)} >
             <th scope="row">{p.Id}</th>
             <td>{p.firstname}</td>
             <td>{p.lastname}</td>
             <td>{p.cnic}</td>
             <td>
               <button className="btn btn-danger" onClick={()=> this.deletePerson(p.Id)}>
                 Delete
               </button>
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
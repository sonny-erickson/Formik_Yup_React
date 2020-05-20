import React, { Component } from 'react';
import { Formik } from 'formik';
import './App.css';

class App extends Component {

  submit = (values) =>{
    console.log(values)
  }
  render(){
    return (
    <div className="App container-fluid d-flex flex-column justify-content-center align-items-center">
      <Formik
        onSubmit={ this.submit }
        initialValues={{name:'', email:'', password: ''}}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting
        }) => (
            <form onSubmit={handleSubmit} className="d-flex flex-column p-5 border">
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control"></input>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}type="email" className="form-control"></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}type="password" className="form-control"></input>
              </div>
              <button type="submit" className="btn btn-small btn-primary mt-3" disabled={isSubmitting}>Submit</button>
            </form>
        )}
      </Formik>
    </div>
  );
  }
  
}

export default App;

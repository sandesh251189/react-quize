import React , {Component} from 'react';
import {Field , reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {CreateUser} from '../actions';
class GetUserDetails extends Component{
  renderfield(field){
    return(
      <div className="form-group">
          <input className="form-control" type="text"
          {...field.input}
           />
      </div>

    )
  }
  onSubmit(values){
    this.props.history.push('/quize')
    this.props.CreateUser(values);

  }
  render(){
    const {handleSubmit} = this.props;
    return(
      <div>
      <h1>Enter Your User Name</h1>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
        name="username"
        component={this.renderfield}
        />
        <button type="submit" className="btn btn-primary">Start Quize</button>
      </form>
      </div>
    )
  }
}
export default reduxForm({
  form:'GetUserForm'
})(
  connect(null,{CreateUser})(GetUserDetails)
)

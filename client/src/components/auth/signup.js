import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}

class Signup extends Component {
    handleFormSubmit({ email, username, password }) {
        this.props.signupUser({ email, username, password });
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="form-group">
                    <label>Email:</label>
                    <Field name="email" type="email" component={renderInput} />
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <Field name="username" type="username" component={renderInput} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <Field name="password" type="password" component={renderInput} />
                </div>
                <button action="submit" className="btn btn-primary">Sign up!</button>
            </form>
        );
    }
}


function mapStateToProps(state) {
  return { };
}

Signup = connect(mapStateToProps, actions)(Signup);
Signup = reduxForm({
 form: 'signup'
})(Signup);
export default Signup;

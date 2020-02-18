import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// connect component to redux
import { connect } from 'react-redux';

// action. have to pass action into connect to use it.
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
// import proptypes
import PropTypes from 'prop-types';

// props allow to setAlert. destructoring to get the alert i need.
export const Register = ({ setAlert, register, isAuthenticated }) => {
  // useState Hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  // to be used throughout the form uses the name='xxx' to assign the correct value to the correct attribute
  // very cool.
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      // pass as message to message for dispatch, danger is for css for alerttype
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if loggedin
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired, //ptfr
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool //ptb
};

// get auth state
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

// connection takes any state you want to map and object with any actions
export default connect(mapStateToProps, { setAlert, register })(Register);

import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p className="box-layout__text">Quick start project!</p>
      <button
        className="btn btn--green"
        onClick={startLogin}
      >
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(null, mapDispatchToProps)(LoginPage);
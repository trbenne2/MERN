import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// for jsx mapping makes a list so much have unique key id
// the class name is dynamically choosing the css
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

// because using proptype: racfp
Alert.propTypes = {
  alerts: PropTypes.array.isRequired //ptar
};

// get alert state. mapping the redux state to a prop to gain access
const mapStateToProps = state => ({
  // from root reducer
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);

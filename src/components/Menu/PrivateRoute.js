import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthorization } from '../../redux/authorization/authorizationSelectors'

const PrivateRoute = ({
    component: Component,
    isAuthorized,
    ...routeProps
}) => {
    return (
        <Route {...routeProps} render={props =>
            isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
        }
        />
    )
}

const mapStateToProps = state => {
  return {
    isAuthorized: getAuthorization(state)
  };
};

export default connect(mapStateToProps, null)(PrivateRoute)
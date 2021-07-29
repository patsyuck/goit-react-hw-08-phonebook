import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthorization } from '../../redux/authorization/authorizationSelectors'

const PublicRoute = ({
    component: Component,
    isAuthorized,
    ...routeProps
}) => {
    return (
        <Route {...routeProps} render={props =>
            isAuthorized && routeProps.restricted ? <Redirect to="/contacts" /> : <Component {...props} />
        }
        />
    )
}

const mapStateToProps = state => {
  return {
    isAuthorized: getAuthorization(state)
  };
};

export default connect(mapStateToProps, null)(PublicRoute)
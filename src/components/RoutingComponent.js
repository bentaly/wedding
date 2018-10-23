import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class RoutingComponent extends Component {
  render() {
    return (
      <div>
        {this.props.routes.map(route => (
          <Route
            key={route.route}
            exact={true}
            path={route.route}
            render={() => route.component}
          />
        ))}
      </div>
    );
  }
}

export default RoutingComponent;

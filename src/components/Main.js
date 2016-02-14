require('normalize.css');
require('styles/App.css');

import React from 'react';
import keymakerToolbox from 'keymaker-toolbox';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      password: '',
      salt: '',
      iterations: props.iterations,
      keylen: props.keylen,
      lower: props.lower,
      upper: props.upper,
      number: props.number,
      special: props.special
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      key: keymakerToolbox.makeKey(this.state.password,
                                   this.state.salt,
                                   this.state.iterations,
                                   this.state.keylen,
                                   this.state.lower,
                                   this.state.upper,
                                   this.state.number,
                                   this.state.special)
    });
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleSaltChange = (e) => {
    this.setState({salt: e.target.value});
  }

  render() {
    return (
      <div className="container">
        <form className="keymakerForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="sr-only">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <label className="sr-only">Salt</label>
            <input
              className="form-control"
              type="password"
              placeholder="Salt"
              value={this.state.salt}
              onChange={this.handleSaltChange}
            />
          </div>
          <div className="form-group">
            <label className="sr-only">Code</label>
            <input
              className="form-control"
              type="text"
              value={this.state.key}
              disabled="true"
            />
          </div>
          <button type="submit" className="btn btn-default">Key</button>
        </form>
      </div>
    );
  }
}

AppComponent.defaultProps = {
  iterations: 100000,
  keylen: 32,
  lower: true,
  upper: true,
  number: true,
  special: true
};

export default AppComponent;

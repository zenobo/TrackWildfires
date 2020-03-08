import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { singleFire } = this.props.items;
    return (
      <div className="nav-links">
        {singleFire.name && <a href="/" className="nav-home">Back to home</a>}
        <a href="https://github.com" className="nav-missing-info">Missing info? Suggest an update</a>
      </div>
    );
  }
}


Nav.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

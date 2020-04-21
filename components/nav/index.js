import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

const Nav = ({ items }) => {
  const { singleFire } = items;
  return (
    <div className="nav-links">
      {singleFire.name && <a href="/" className="nav-home">Back to directory</a>}
      <a href="https://github.com/zenobo/TrackWildfires/blob/master/data/constants.js" className="nav-missing-info">Missing info? Suggest an update</a>
    </div>
  );
}


Nav.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

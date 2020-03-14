import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

import { entryDate } from 'utility';

const FireDetails = ({ items }) => {

  let { singleFire } = items;
  console.log(singleFire)
  return (
    <div className="fire-details-container">
      <h2>
        About {singleFire.name}
        <a href="/" className="fire-details-learn">
          Learn more
        </a>
      </h2>
      <div className="fire-details-inner">
        <div className="fire-details-left">
          <p>Country: {singleFire.country}</p>
          <p>Started: {entryDate(singleFire.fromDate)}</p>
        </div>
        <div className="fire-details-right">
          <p>Sources: </p>
          <p>1) Wikipedia.com</p>
        </div>
      </div>
    </div>
  )
};


FireDetails.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(FireDetails);

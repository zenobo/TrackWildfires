/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

import { entryDate } from 'utility';

const FireDetails = ({ items }) => {
  const getSource = (source) => {
    const tlds = ['.com/', '.wiki/', '.org/'];
    let shortSource = '';
    // Check all tlds
    tlds.map((tld) => {
      if (source.includes(tld)) {
        shortSource = source.split(tld)[0] + tld.replace('/', '');
      }
      return source;
    });
    return shortSource;
  };

  const {
    singleFire: {
      name, country, fromDate, sources,
    },
  } = items;

  return (
    <div className="fire-details-container">
      <h2>
        About {name}
        <a href={sources[0]} className="fire-details-learn">
          Learn more
        </a>
      </h2>
      <div className="fire-details-inner">
        <div className="fire-details-left">
          <p>Country: {country}</p>
          <p>Started: {entryDate(fromDate)}</p>
        </div>
        <div className="fire-details-right">
          <p>Sources: </p>
          {sources.map((val, index) => (
            <a
              key={val}
              href={val}
              target="_blank"
              rel="noopener noreferrer"
            >
              {index + 1}) {getSource(val)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


FireDetails.propTypes = {
  items: PropTypes.shape(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(FireDetails);

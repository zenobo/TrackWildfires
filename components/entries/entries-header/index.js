import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EntriesHeader = () => {
  return (
    <h2 className="entries-header-container">
      Biggest fires over past 20 years
      {/**<span>
        Filter Worldwide <img src="/images/down.svg" />
      </span>**/}
    </h2>
  );
}


EntriesHeader.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(EntriesHeader);

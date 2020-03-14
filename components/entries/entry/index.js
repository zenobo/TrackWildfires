import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { cleanName, entryDate, entrySize } from 'utility';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { entry } = this.props;
    return (
      <a href={`/${cleanName(entry.name)}`} className="entries-item entries-dark">
        <h1>
          {entry.name}
        </h1>
        <p className="entries-size">
          {entrySize(entry.size)} Acres
        </p>
        <p>
          {entryDate(entry.fromDate)} - {entry.country}
        </p>
      </a>
    );
  }
}


Entry.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Entry);

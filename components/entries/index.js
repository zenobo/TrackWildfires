import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

import EntriesHeader from './entries-header';
import Entry from './entry';

const Entries = ({items}) => {
  return (
    <div className="entries-container">
      <Warning />
      <EntriesHeader />

      <div className="entries-table">
        {items.map((entry, index) => (
          <Entry key={entry.name} entry={entry} />
        ))}
      </div>

    </div>
  );
}

const Warning = () => (
  <div className="warning-container">
    There are thousands of fires that occur every year which are not
    indexed here. This website only tracks large scale wildfires.
    View the database on <a href="https://github.com/zenobo/TrackWildfires/blob/master/data/constants.js">github</a>.
  </div>
);

Entries.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items.fires
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Entries);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

import Header from 'components/header';
import Entries from 'components/entries';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { single } = this.props;
    return (
      <div>
        <Header single={single} />
        {!single && <Entries />}
      </div>
    );
  }
}


Body.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Body);

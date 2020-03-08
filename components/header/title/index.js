import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Title extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { singleFire } = this.props.items;
    return (
      <h1>
        Damage From {singleFire.name ? singleFire.name : 'Biggest Wildfires'}
      </h1>
    );
  }
}

Title.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Title);

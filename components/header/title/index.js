import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Title = ({items}) => {
  const { singleFire } = items;
  return (
    <h1>
      <span>Damage From</span>
      {singleFire.name ? singleFire.name : 'Biggest Wildfires'}
    </h1>
  );
}

Title.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Title);

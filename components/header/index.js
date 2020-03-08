import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

import BarChart from './barchart';
import Nav from 'components/nav';
import Title from './title';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { total, singleFire } = this.props.items;
    const { fireIndex } = singleFire;
    return (
      <div className="header-container">
        <Nav />

        <div className="header-inner">
          <Title />
          <h2>
            {singleFire.name ? singleFire.size.toLocaleString() : total.toLocaleString()} Acres
            <span>
              {fireIndex ? `#${fireIndex} Biggest` : 'Total'}
            </span>
          </h2>
          <LinkText />

          <BarChart />
        </div>
      </div>
    );
  }
}

const LinkText = () => (
  <h3>on trackwildfires.com</h3>
);

Header.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from 'react';
import { connect } from 'react-redux';

// CSS
import './style.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer-left">
          <a href="https://github.com/zenobo/TrackWildfires/blob/master/data/constants.js">Database</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-middle">
          <a href="/">
            trackwildfires.com
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

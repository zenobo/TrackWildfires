import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import MetaData from 'components/meta-data';
import Body from 'components/body';
import Faq from 'components/faq';

// Redux
import * as itemActions from '../../redux/items/actions/index';

// CSS
import 'style/theme/main.scss';

class Home extends React.Component {
  static async getInitialProps({ query, store }) {
    await Promise.all([
      store.dispatch(itemActions.ProcessRawData()),
    ]);
    return {  };
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="app">
        <MetaData />
        <Body />
        <Faq />
      </div>

    );
  }
}

Home.propTypes = {
};

const mapStateToProps = (state) => ({
  fires: state.items.fires,
});

const mapDispatchToProps = (dispatch) => ({
  ProcessRawData: () => dispatch(itemActions.ProcessRawData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

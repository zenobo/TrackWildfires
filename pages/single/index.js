import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux
import * as itemActions from '../../redux/items/actions/index';

// Components
import MetaData from 'components/meta-data';
import Body from 'components/body';

// CSS
import 'style/theme/main.scss';

class Single extends React.Component {
  static async getInitialProps({ query, store }) {
    const { fire } = query;
    await Promise.all([
      store.dispatch(itemActions.ProcessRawData()),
      store.dispatch(itemActions.SetFireName(fire)),
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
        <Body single={true} />
      </div>

    );
  }
}

Single.propTypes = {
};

const mapStateToProps = (state) => ({
  fires: state.items.fires,
});

const mapDispatchToProps = (dispatch) => ({
  ProcessRawData: () => dispatch(itemActions.ProcessRawData()),
  SetFireName: (fire) => dispatch(itemActions.SetFireName(fire)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Single);
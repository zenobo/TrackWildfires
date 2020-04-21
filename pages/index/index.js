import React from 'react';
import { connect } from 'react-redux';

// Components
import MetaData from 'components/meta-data';
import Body from 'components/body';
import Faq from 'components/faq';
import Footer from 'components/footer';

// Redux
import * as itemActions from '../../redux/items/actions/index';

// CSS
import 'style/theme/main.scss';

const Home = () => (
  <div className="app">
    <MetaData />
    <Body />
    <Faq />
    <Footer />
  </div>
);

Home.getInitialProps = async ({ store }) => {
  await Promise.all([
    store.dispatch(itemActions.ProcessRawData()),
  ]);
  return {};
};

const mapStateToProps = (state) => ({
  fires: state.items.fires,
});

const mapDispatchToProps = (dispatch) => ({
  ProcessRawData: () => dispatch(itemActions.ProcessRawData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

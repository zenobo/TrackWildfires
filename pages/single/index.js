import React from 'react';
import { connect } from 'react-redux';

// Components
import MetaData from 'components/meta-data';
import Body from 'components/body';
import Faq from 'components/faq';
import FireDetails from 'components/fire-details';
import Footer from 'components/footer';

// Redux
import * as itemActions from '../../redux/items/actions/index';

// CSS
import 'style/theme/main.scss';

const Single = () => {
  return (
    <div className="app">
      <MetaData />
      <Body single />
      <FireDetails />
      <Faq />
      <Footer />
    </div>
  );
}

Single.getInitialProps = async ({ query, store }) => {
  const { fire } = query;
  await Promise.all([
    store.dispatch(itemActions.ProcessRawData()),
    store.dispatch(itemActions.SetFireDetails(fire)),
  ]);
  return { };
}

const mapStateToProps = (state) => ({
  fires: state.items.fires,
});

const mapDispatchToProps = (dispatch) => ({
  ProcessRawData: () => dispatch(itemActions.ProcessRawData()),
  SetFireDetails: (fire) => dispatch(itemActions.SetFireDetails(fire)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Single);

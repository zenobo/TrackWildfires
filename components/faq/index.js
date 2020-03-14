import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Data
import { faq } from '../../data/faq';

import FaqRow from './faq-row';

import './style.scss';

const Faq = () => {
  const [items, setItem] = React.useState(faq);

  return (
    <div className="faq-container">
      {
        faq.map((item) => (
          <FaqRow item={item} />
        ))
      }
    </div>
  )
};


Faq.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Faq);

import React from 'react';
import { connect } from 'react-redux';

// Data
import { faq } from '../../data/faq';

import FaqRow from './faq-row';

import './style.scss';

const Faq = () => (
  <div className="faq-container">
    {
      faq.map((item, index) => (
        <FaqRow key={index} item={item} />
      ))
    }
  </div>
);

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Faq);

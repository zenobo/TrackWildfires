import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FaqRow = ({ item }) => {
  const [open, setOpen] = React.useState(true);

  const parseLink = (link) => (
    link.replace('[', '').replace(']', '')
  );

  const getLink = (part) => (
    `<a href="${parseLink(part[1])}" target="_blank">
      ${parseLink(part[0])}
    </a>`
  );

  const getContent = (html) => {
    const matches = html.match(/\[(.*?)\]/g, '$1');

    if (matches) {
      matches.map((val) => {
        const part = val.split(',');
        // link exists
        if (html && part[0] && part[1]) {
          // Create link
          html = html.replace(val, getLink(part));
        }
      });
    }

    return html;
  };

  return (
    <div>
      <h2
      onClick={() => {
        setOpen(!open);
      }}>
        {item.name}
        <img
          src={`/images/arrow-${open ? 'down' : 'up'}.svg`}
          className="faq-arrow"
          alt="FAQ toggle row arrow" />
      </h2>
      {open && <p dangerouslySetInnerHTML={{ __html: getContent(item.content) }}></p>}
    </div>
  );
};


FaqRow.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(FaqRow);

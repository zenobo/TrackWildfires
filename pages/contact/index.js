//es-lint-disable-react-line react/no-danger
import React from 'react';
import { connect } from 'react-redux';

// Components
import MetaData from 'components/meta-data';

// CSS
import 'style/theme/main.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="app">
        <MetaData />
        <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
        <style type="text/css" dangerouslySetInnerHTML={{ __html: `html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; }` }} />
        <iframe type="contact-form" width="100%" height="100%" frameBorder="0" src="https://formsandforms.typeform.com/to/ailCai" />
      </div>

    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

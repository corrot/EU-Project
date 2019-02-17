/**
 *
 * CarreerPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCarreerPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class CarreerPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>CarreerPage</title>
          <meta name="description" content="Description of CarreerPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

CarreerPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  carreerPage: makeSelectCarreerPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carreerPage', reducer });
const withSaga = injectSaga({ key: 'carreerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CarreerPage);

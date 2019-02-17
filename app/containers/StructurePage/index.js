/**
 *
 * StructurePage
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
import makeSelectStructurePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class StructurePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>StructurePage</title>
          <meta name="description" content="Description of StructurePage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

StructurePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  structurePage: makeSelectStructurePage(),
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

const withReducer = injectReducer({ key: 'structurePage', reducer });
const withSaga = injectSaga({ key: 'structurePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StructurePage);

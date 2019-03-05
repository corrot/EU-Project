/* eslint-disable no-nested-ternary */
/**
 *
 * ToggleOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

const ToggleOption = ({ value, message, image, intl }) => (
  <option value={value}>
    {image ? (
      <img src={image} alt={value} />
    ) : message ? (
      intl.formatMessage(message)
    ) : (
      value
    )}
  </option>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  intl: intlShape.isRequired,
  image: PropTypes.string,
};

export default injectIntl(ToggleOption);

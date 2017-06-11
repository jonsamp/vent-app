import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SpinnerIcon from './SpinnerIcon'

const Spinner = (props) => {
  const { size, className, fill } = props;
  const styles = cx('spinner', className)
  return (
    <SpinnerIcon className={styles} fill={fill} height={size} width={size} />
  );
};

Spinner.defaultProps = {
  size: '16px',
  fill: '#FFFFFF'
};

Spinner.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string
};

export default Spinner;

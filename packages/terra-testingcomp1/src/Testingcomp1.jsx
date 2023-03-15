import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Testingcomp1.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const Testingcomp1 = ({ name, ...customProps }) => {
  const theme = React.useContext(ThemeContext);
  const Testingcomp1ClassNames = classNames(
    cx([
      'testingcomp1',
    theme.className,
  ]),
    customProps.className,
  );

  return (<button {...customProps} className={Testingcomp1ClassNames}>{name}</button>);
};

Testingcomp1.propTypes = propTypes;
Testingcomp1.defaultProps = defaultProps;

export default Testingcomp1;

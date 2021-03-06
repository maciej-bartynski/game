import PropTypes from 'prop-types';
import stylesType from 'utils/stylesType';
import ComponentExample from './component-example';

ComponentExample.propTypes = {
  label: PropTypes.string,
  styles: PropTypes.shape({
    root: stylesType,
  })
};

ComponentExample.defaultProps = {
  label: 'default label',
  styles: {}
};

export default ComponentExample;

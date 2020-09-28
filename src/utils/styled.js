import React from 'react';

/* eslint-disable react/jsx-props-no-spreading */
const styled = (defaultStyles) => (Wrapped) => {
  return (props) => {
    const { styles, ...restProps } = props;
    if (typeof styles === 'object') {
      const mergedStyles = {
        ...defaultStyles,
        ...styles
      };
      return (
        <Wrapped
          {...restProps}
          styles={mergedStyles}
        />
      );
    }
    return (
      <Wrapped
        {...props}
        styles={defaultStyles}
      />
    );

  };
};

export default styled;

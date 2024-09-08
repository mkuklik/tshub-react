
import React from 'react';
import styled from 'styled-components';
import { Callout } from '@blueprintjs/core';
import types from 'prop-types';


const StyledCallout = styled(Callout)`
margin-bottom: 5px;
text-overflow: ellipsis;
`;

const AnalyticsErrors = (props) => {
  const { errors } = props;
  const renderedErrors = errors.map(
    (x, inx) => <StyledCallout key={inx} intent="danger">{(typeof x === 'object') ? x.message || null : String(x)}</StyledCallout>,
  );

  return (
    <>
      { renderedErrors }
    </>
  );
};

AnalyticsErrors.defaultProps = {
  errors: [],
};

AnalyticsErrors.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  errors: types.array,
};

export default AnalyticsErrors;

import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexView from 'react-flexview';
import { Spinner } from '@blueprintjs/core';


const OverviewContainer = styled.div`
  margin-top: 14px;
  padding: 14px;
`;

const TimeseriesOverviewTab = (props) => {
  const { ts } = props;
  const loading = (ts === undefined);
  let title = <br />;
  let description = <br />;
  if (ts !== undefined) {
    title = (ts.title !== undefined) ? <p>{ts.title}</p> : <p><i>No title provided.</i></p>;
    description = (ts.description !== undefined)
      ? <p>{ts.description}</p>
      : <p><i>No description provided.</i></p>;
  }

  return (
    <>
      {loading && (
      // <Segment basic style={{ minHeight: '400px' }}>
      <FlexView
        hAlignContent="center"
        vAlignContent="center"
        height="400px"
        // width="100%"
        // style={{ zIndex: 100, position: 'absolute' }}
      >
        <Spinner />
      </FlexView>
      // </Segment>
      )}

      {!loading && (
      // <Segment basic loading={ts === undefined}>
      <OverviewContainer>
        <h5 className="ui header dividing">Data Type</h5>
        <p>{(ts !== undefined) ? ts.dtype : <br />}</p>
        <h5 className="ui header dividing">
          Frequency
        </h5>
        <p>{(ts !== undefined) ? ts.freq : <br />}</p>
        <h5 className="ui header dividing">
          Title
        </h5>
        {title}
        <h5 className="ui header dividing">
          Description
        </h5>
        {description}
      </OverviewContainer>
      // </Segment>
      )}
    </>
  );
};


TimeseriesOverviewTab.defaultProps = {

};

TimeseriesOverviewTab.propTypes = {
  // eslint-disable-next-line react/require-default-props
  ts: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    dtype: PropTypes.string,
    freq: PropTypes.string,
  }),
};

export default TimeseriesOverviewTab;

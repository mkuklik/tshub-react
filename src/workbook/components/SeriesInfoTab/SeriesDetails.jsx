import * as React from 'react';

import * as TimeseriesTypes from '../../../viewer/types/Timeseries';
import { InformationField } from './InformationField';

const SeriesDetails = ({ information }) => (
  <div>
    <InformationField
      label="Name"
      value={information.name}
    />

    <InformationField
      label="Data Type"
      value={information.dtype}
    />

    <InformationField
      label="Frequency"
      value={information.freq}
    />

    <InformationField
      label="Title"
      value={information.title}
      noValueText="No title provided"
    />

    <InformationField
      label="Description"
      value={information.description}
      noValueText="No description provided"
    />

    <InformationField
      label="Timeseries ID"
      value={information.tsid}
    />

    <InformationField
      label="Collection ID"
      value={information.collId}
    />
  </div>
);

SeriesDetails.propTypes = {
  // eslint-disable-next-line react/require-default-props
  information: TimeseriesTypes.TimeseriesDetailsType,
};

// eslint-disable-next-line import/prefer-default-export
export { SeriesDetails };

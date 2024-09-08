import * as React from 'react';
import styled from 'styled-components';
import { Tag as TagBase } from '@blueprintjs/core';

import * as SpaceTypes from '../../../../types/Spaces';
import { InformationField } from '../../Common/InformationField';

const Tag = styled(TagBase)`
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

const SpaceDetails = ({ information }) => (
  <div>
    <InformationField
      label="Name"
      value={information.name}
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
      label="Visibility"
      value={information.visibility}
    />

    <InformationField
      label="Tags"
      value={information.tags.length > 0
        ? information.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))
        : 'No tags provided'}
    />

    <InformationField
      label="Space ID"
      value={information.spaceId}
    />
  </div>
);

SpaceDetails.propTypes = {
  // eslint-disable-next-line react/require-default-props
  information: SpaceTypes.SpaceDetailsType,
};

// eslint-disable-next-line import/prefer-default-export
export { SpaceDetails };

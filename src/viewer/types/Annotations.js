import types from 'prop-types';

import { FrequencyType } from './Timeseries';

const TargetTypes = types.oneOfType([
  types.shape({
    index: types.number.isRequired,
    freq: FrequencyType.isRequired,
  }),
  types.shape({
    tsid: types.string.isRequried,
  }),
  types.shape({
    index: types.number.isRequired,
    freq: FrequencyType.isRequired,
    tsid: types.string.isRequried,
  }),
]);

const AnnotationTarget = types.shape({
  index: types.number.isRequired,
  freq: FrequencyType.isRequired,
  tsid: types.string.isRequried,
});

const AnnotationType = types.shape({
  aid: types.string.isRequired,
  collId: types.string.isRequired,
  text: types.string.isRequired,
  symbol: types.string.isRequired,
  format: types.string,
  targets: types.arrayOf(TargetTypes).isRequired,
});

const AnnotationListType = types.arrayOf(AnnotationType);

const AnnotationAllType = types.objectOf(AnnotationListType);
// collId -> [Annotation, Annotation, ...]

const TargetsMapDateType = types.objectOf(types.arrayOf(types.shape({
  index: types.number,
  freq: FrequencyType,
  tsid: types.string,
  annotation: AnnotationType.isRequired,
})));

const IndexToTargetsByCollIdType = types.objectOf(TargetsMapDateType);

export {
  AnnotationType,
  AnnotationAllType,
  TargetTypes,
  AnnotationListType,
  AnnotationTarget,
  TargetsMapDateType,
  IndexToTargetsByCollIdType,
};

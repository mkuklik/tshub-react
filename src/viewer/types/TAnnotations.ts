import { FrequencyType } from './TTimeseries';

// const TargetTypes = types.oneOfType([
//   types.shape({
//     index: types.number.isRequired,
//     freq: FrequencyType.isRequired,
//   }),
//   types.shape({
//     tsid: types.string.isRequried,
//   }),
//   types.shape({
//     index: types.number.isRequired,
//     freq: FrequencyType.isRequired,
//     tsid: types.string.isRequried,import { FrequencyType } from './Timeseries';

// Define the different shapes that TargetTypes can take
interface TargetTypeIndexFreq {
  index: number;
  freq: FrequencyType;
}

interface TargetTypeTsid {
  tsid: string; // Corrected typo: isRequried -> isRequired
}

interface TargetTypeIndexFreqTsid {
  index: number;
  freq: FrequencyType;
  tsid: string; // Corrected typo: isRequried -> isRequired
}

// Union type for TargetTypes
type TargetTypes = TargetTypeIndexFreq | TargetTypeTsid | TargetTypeIndexFreqTsid;

interface AnnotationTarget {
  index: number;
  freq: FrequencyType;
  tsid: string; // Corrected typo: isRequried -> isRequired
}

interface AnnotationType {
  aid: string;
  collId: string;
  text: string;
  symbol: string;
  format?: string;
  targets: TargetTypes[];
}

type AnnotationListType = AnnotationType[];

type AnnotationAllType = { [key: string]: AnnotationListType };
// collId -> [Annotation, Annotation, ...]

interface TargetWithAnnotation {
  index?: number;
  freq?: FrequencyType;
  tsid?: string;
  annotation: AnnotationType;
}

type TargetsMapDateType = { [key: string]: TargetWithAnnotation[] };

type IndexToTargetsByCollIdType = { [key: string]: TargetsMapDateType };

export {
  AnnotationType,
  AnnotationAllType,
  TargetTypes,
  AnnotationListType,
  AnnotationTarget,
  TargetsMapDateType,
  IndexToTargetsByCollIdType,
};

//   }),
// ]);

// const AnnotationTarget = types.shape({
//   index: types.number.isRequired,
//   freq: FrequencyType.isRequired,
//   tsid: types.string.isRequried,
// });

// const AnnotationType = types.shape({
//   aid: types.string.isRequired,
//   collId: types.string.isRequired,
//   text: types.string.isRequired,
//   symbol: types.string.isRequired,
//   format: types.string,
//   targets: types.arrayOf(TargetTypes).isRequired,
// });

// const AnnotationListType = types.arrayOf(AnnotationType);

// const AnnotationAllType = types.objectOf(AnnotationListType);
// // collId -> [Annotation, Annotation, ...]

// const TargetsMapDateType = types.objectOf(types.arrayOf(types.shape({
//   index: types.number,
//   freq: FrequencyType,
//   tsid: types.string,
//   annotation: AnnotationType.isRequired,
// })));

// const IndexToTargetsByCollIdType = types.objectOf(TargetsMapDateType);

// export {
//   AnnotationType,
//   AnnotationAllType,
//   TargetTypes,
//   AnnotationListType,
//   AnnotationTarget,
//   TargetsMapDateType,
//   IndexToTargetsByCollIdType,
// };

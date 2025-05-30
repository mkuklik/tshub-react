import moment from 'moment';

interface CollectionType {
  collId: string;
  name: string;
  tags?: string[]; 
}

type CollectionListType = CollectionType[];
type CollectionListMapType = { [key: string]: CollectionListType };

type CollectionErrorMapType = { [key: string]: string };

interface CollectionDetailsType {
  collId: string;
  name: string;
  title?: string;
  description?: string;
  visibility?: string;
  tags: string[];
  realStart: moment.Moment;
  realEnd: moment.Moment;
}

export {
  CollectionType,
  CollectionListType,
  CollectionListMapType,
  CollectionErrorMapType,
  CollectionDetailsType,
};

// import moment from 'moment';
// import {
//   shape, string, objectOf, arrayOf, instanceOf,
// } from 'prop-types';

// const CollectionType = shape({
//   collId: string.isRequired,
//   name: string.isRequired,
//   tags: arrayOf(string),
// });

// const CollectionListType = arrayOf(CollectionType);
// const CollectionListMapType = objectOf(CollectionListType);

// const CollectionErrorMapType = objectOf(string);

// const CollectionDetailsType = shape({
//   collId: string.isRequired,
//   name: string.isRequired,
//   title: string,
//   description: string,
//   visibility: string,
//   tags: arrayOf(string).isRequired,
//   realStart: instanceOf(moment).isRequired,
//   realEnd: instanceOf(moment).isRequired,
// });

// export {
//   CollectionType,
//   CollectionListType,
//   CollectionListMapType,
//   CollectionErrorMapType,
//   CollectionDetailsType,
// };

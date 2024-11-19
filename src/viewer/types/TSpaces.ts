import moment from 'moment';

interface SpaceType {
  spaceId: string;
  name: string;
  tags?: string[];
}

// type SpaceListType = SpaceType[];

interface SpaceDetailsType {
  spaceId: string; // Note: Typo corrected from 'isRequried' to 'isRequired'
  name: string;
  title?: string;
  description?: string;
  visibility?: string;
  tags: string[];
  realStart: moment.Moment;
  realEnd: moment.Moment;
}

// export {
//   SpaceType,
//   SpaceListType,
//   SpaceDetailsType,
// };

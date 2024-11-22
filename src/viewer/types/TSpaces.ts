import moment from "moment";

interface ISpace {
  spaceId: string;
  name: string;
  tags?: string[];
}

type ISpaceList = ISpace[];

interface ISpaceDetails {
  spaceId: string; // Note: Typo corrected from 'isRequried' to 'isRequired'
  name: string;
  title?: string;
  description?: string;
  visibility?: string;
  tags: string[];
  realStart: moment.Moment;
  realEnd: moment.Moment;
}

export { ISpace, ISpaceList, ISpaceDetails };

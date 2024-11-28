import moment from "moment";
import { shape, string, arrayOf, instanceOf } from "prop-types";

const SpaceType = shape({
  spaceId: string.isRequired,
  name: string.isRequired,
  tags: arrayOf(string),
});

const SpaceListType = arrayOf(SpaceType);

const SpaceDetailsType = shape({
  spaceId: string.isRequried,
  name: string.isRequired,
  title: string,
  description: string,
  visibility: string,
  tags: arrayOf(string).isRequired,
  realStart: instanceOf(moment).isRequired,
  realEnd: instanceOf(moment).isRequired,
});

export { SpaceType, SpaceListType, SpaceDetailsType };

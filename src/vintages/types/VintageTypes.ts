import types from "prop-types";

export const UploadMessageType = types.shape({
  code: types.string,
  message: types.string,
  data: types.object,
  row: types.number,
  column: types.number,
});

export const VintageSummaryType = types.shape({
  coll_id: types.string,
  vid: types.string.isRequired,
  name: types.string,
  description: types.string,
  tsids: types.arrayOf(types.string),
  realtime: types.instanceOf(Date),

  realStart: types.instanceOf(Date),
  realEnd: types.instanceOf(Date),
});

export const VintageType = types.shape({
  ...VintageSummaryType,
  metadata: types.object,
});

export interface IUploadMessage {
  code?: string;
  message?: string;
  data?: object;
  row?: number;
  column?: number;
}

export interface IVintageSummary {
  vid: string;
  coll_id?: string;
  name?: string;
  description?: string;
  tsids?: string[];
  realtime?: Date;
  realStart?: Date;
  realEnd?: Date;
}

export interface IVintage extends IVintageSummary {
  metadata?: object;
}

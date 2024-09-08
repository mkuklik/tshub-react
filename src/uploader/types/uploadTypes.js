import types from 'prop-types';


export const UploadMessageType = types.shape({
  code: types.string,
  message: types.string,
  data: types.object,
  row: types.number,
  column: types.number,
});


export const UploadType = types.shape({
  uploadId: types.string.isRequired,
  coll_id: types.string,

  description: types.string,
  filename: types.string,
  filetype: types.string,
  filesize: types.number,
  filelastmodified: types.instanceOf(Date),

  status: types.string,
  errors: types.arrayOf(UploadMessageType),
  warnings: types.arrayOf(UploadMessageType),
  infos: types.arrayOf(UploadMessageType),

  created_on: types.instanceOf(Date),
  uploaded_on: types.instanceOf(Date),
  processed_on: types.instanceOf(Date),
  updated_on: types.instanceOf(Date),
  commited_on: types.instanceOf(Date),
  created_by: types.string,
});

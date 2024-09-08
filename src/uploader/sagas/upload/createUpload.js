import { omit } from 'ramda';


export const apiCreateUpload = (
  collId,
  method,
  filename,
  fileType,
  fileSize,
  lastModified,
  vintageName,
  description,
  createMissing,
  dropnan,
  trimLeftEnd,
  trimRightEnd,
  freq,
  format,
) => {
  const opts = {
    collId,
    method,
    description,
    vintageName,
    filename,
    fileType,
    fileSize,
    lastModified,
    createMissing,
    dropnan,
    trimLeftEnd,
    trimRightEnd,
    freq,
    format,
  };
  return (
    new Promise((resolve, reject) => {
      window._chronosdb.rawUploadApi.appApiUploadCreate(
        opts,
        (error, data) => (error ? reject(error) : resolve({ ...omit(['upload_id'], data), uploadId: data.upload_id })),
      );
    })
  );
};

export default function* createUpload() {
  
}

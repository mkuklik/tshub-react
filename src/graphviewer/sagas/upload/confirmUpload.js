/* eslint-disable import/prefer-default-export */
/* eslint-disable no-multiple-empty-lines */
import { omit } from 'ramda';


export const apiConfirmUpload = (uploadId) => new Promise((resolve, reject) => {
  window._chronosdb.rawUploadApi.appApiUploadConfirmUpload(
    uploadId,
    (error, data) => (error ? reject(error) : resolve({ ...omit(['upload_id'], data), uploadId: data.upload_id })),
  );
});


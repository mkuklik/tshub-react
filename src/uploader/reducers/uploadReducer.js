import { mergeAll, map } from 'ramda';
import {
  UPLOAD_SAVE_OBJECT,
  UPLOAD_SAVE_LIST,
  UPLOAD_INITIATE,
  UPLOAD_SAVE_HAS_PERMISSION,
  UPLOAD_FETCH_PENDING,
} from '../actions/ActionTypes';


const initialState = {
  objects: {}, // { // uploadId }
  collId: undefined,
  hasPermission: true,
  fetchPending: false,
  //   dsfdsfsdfds: {
  //     uploadId: "dsfdsfsdfds",
  //     coll_id: "dsf332nj3k12jk",

  //     description: "dksfjdsl klsdjfkldsjkfds kjdslkfldsk",
  //     filename: "dsfdsf.csv",
  //     filetype: "text/json",
  //     filesize: 12321,
  //     filelastmodified: new Date('December 17, 1995 03:24:00'),

  //     status: "processing_failed",
  //     errors: [
  //       {
  //         code: 12,
  //         message: "this is horrible error",
  //         data: undefined,
  //         row: 12,
  //         column: 1,
  //       },
  //       {
  //         code: 13,
  //         message: "another bad error",
  //         data: undefined,
  //         row: 12,
  //         column: 1,
  //       },
  //       {
  //         code: 13,
  //         message: "wow what is this",
  //         data: undefined,
  //         row: 43,
  //         column: 2,
  //       },
  //     ],
  //     warnings: [],
  //     infos: [],
  //     createdOn: new Date('December 17, 1995 03:24:00'),
  //     uploadedOn: new Date('December 17, 1995 03:29:00'),
  //     processedOn: new Date('December 17, 1995 03:34:00'),
  //     updatedOn: new Date('December 17, 1995 03:34:00'),
  //     commitedOn: undefined,
  //     created_by: "nkj34jk32kj432kj",
  //   },
  //   saa2da2e32dfas: {
  //     uploadId: "saa2da2e32dfas",
  //     coll_id: "dsf332nj3k12jk",

  //     description: "dksfjdsl klsdjfkldsjkfds kjdslkfldsk",
  //     filename: "dsfdsf.csv",
  //     filetype: "text/json",
  //     filesize: 12321,
  //     filelastmodified: new Date('December 17, 1995 03:24:00'),

  //     status: "processing_failed",
  //     errors: [
  //       {
  //         code: 12,
  //         message: "this is horrible error",
  //         data: undefined,
  //         row: 12,
  //         column: 1,
  //       },
  //       {
  //         code: 13,
  //         message: "another bad error",
  //         data: undefined,
  //         row: 12,
  //         column: 1,
  //       },
  //       {
  //         code: 13,
  //         message: "wow what is this",
  //         data: undefined,
  //         row: 43,
  //         column: 2,
  //       },
  //     ],
  //     warnings: [],
  //     infos: [],
  //     createdOn: new Date('December 17, 1995 03:24:00'),
  //     uploadedOn: new Date('December 17, 1995 03:29:00'),
  //     processedOn: new Date('December 17, 1995 03:34:00'),
  //     updatedOn: new Date('December 17, 1995 03:34:00'),
  //     commitedOn: undefined,
  //     createdBy: "nkj34jk32kj432kj",
  //   },
  // },
};

const upload = (state = initialState,
  action) => {
  switch (action.type) {
    case UPLOAD_INITIATE:
    {
      return {
        ...initialState,
        collId: action.collId,
      };
    }
    case UPLOAD_SAVE_HAS_PERMISSION:
    {
      return {
        ...state,
        hasPermission: action.payload,
      };
    }
    case UPLOAD_SAVE_OBJECT:
    {
      return {
        ...state,
        objects: {
          ...state.objects,
          [action.payload.uploadId]: action.payload,
        },
      };
    }
    case UPLOAD_SAVE_LIST:
    {
      return {
        ...state,
        total: action.payload.total,
        offset: action.payload.total,
        limit: action.payload.limit,
        objects: {
          ...state.objects,
          ...mergeAll(map((x) => ({ [x.uploadId]: x }), action.payload.result)),
        },
      };
    }
    case UPLOAD_FETCH_PENDING:
    {
      return {
        ...state,
        fetchPending: action.payload.fetchPending,
      };
    }
    default:
      return state;
  }
};

export default upload;

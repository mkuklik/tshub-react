import reducer, { alter, annotationsToTargets } from './annotationsReducer';
import * as actions from '../actions/annotationActions';

describe('Annotation Reducer', () => {
  const initialState = {
    annotations: {},
    indexToTargetsByCollId: {},
    annotationDeleteRequestStatus: '',
    annotationTargetRequestStatus: '',
    statusOfUpdatingAnnotaion: '',
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle SAVE_ANNOTATIONS', () => {
    const annotations = [
      { aid: '1', targets: [{ index: 1, freq: 1 }] },
      { aid: '2', targets: [{ index: 2, freq: 2 }] },
    ];
    const collId = 'testCollId';
    const action = actions.saveAnnotationsAction({ collId, annotations });
    const expectedState = {
      ...initialState,
      annotations: { [collId]: annotations },
      indexToTargetsByCollId: {
        [collId]: {
          1: [{ index: 1, freq: 1, annotation: annotations[0] }],
          2: [{ index: 2, freq: 2, annotation: annotations[1] }],
        },
      },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CREATE_ANNOTATION_SUCCESS', () => {
    const annotation = { aid: '1', targets: [{ index: 1, freq: 1 }], collId: 'testCollId' };
    const action = actions.createAnnotationSuccessAction(annotation);
    const expectedState = {
      ...initialState,
      annotations: { testCollId: [annotation] },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_ANNOTATION_SUCCESS', () => {
    const existingAnnotation = { aid: '1', targets: [{ index: 1, freq: 1 }], collId: 'testCollId' };
    const stateWithExisting = {
      ...initialState,
      annotations: { testCollId: [existingAnnotation] },
      indexToTargetsByCollId: {
        testCollId: {
          1: [{ index: 1, freq: 1, annotation: existingAnnotation }],
        },
      },
    };
    const action = actions.deleteAnnotationSuccessAction({ collId: 'testCollId', aid: '1' });
    const expectedState = {
      ...stateWithExisting,
      annotations: { testCollId: [] },
      annotationDeleteRequestStatus: 'success',
    };
    expect(reducer(stateWithExisting, action)).toEqual(expectedState);
  });

  it('should handle SET_DELETE_DIALOG_STATUS', () => {
    const action = actions.setDeleteDialogStatusAction();
    const expectedState = {
      ...initialState,
      annotationDeleteRequestStatus: 'false',
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_ANNOTATION_TARGET_SUCCESS', () => {
    const existingAnnotation = { aid: '1', targets: [{ index: 1, freq: 1 }], collId: 'testCollId' };
    const stateWithExisting = {
      ...initialState,
      annotations: { testCollId: [existingAnnotation] },
      indexToTargetsByCollId: {
        testCollId: {
          1: [{ index: 1, freq: 1, annotation: existingAnnotation }],
        },
      },
    };
    const newTarget = { index: 2, freq: 2 };
    const action = actions.addAnnotationTargetSuccessAction({
      target: newTarget,
      collId: 'testCollId',
      aid: '1',
    });
    const updatedAnnotation = {
      ...existingAnnotation,
      targets: [...existingAnnotation.targets, newTarget],
    };
    const expectedState = {
      ...stateWithExisting,
      annotations: { testCollId: [updatedAnnotation] },
      indexToTargetsByCollId: {
        testCollId: {
          1: [{ index: 1, freq: 1, annotation: updatedAnnotation }],
          2: [{ index: 2, freq: 2, annotation: updatedAnnotation }],
        },
      },
      annotationTargetRequestStatus: 'success',
    };
    expect(reducer(stateWithExisting, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_ANNOTATION_SUCCESS (text)', () => {
    const existingAnnotation = { aid: '1', targets: [{ index: 1, freq: 1 }], text: 'old', collId: 'testCollId' };
    const stateWithExisting = {
      ...initialState,
      annotations: { testCollId: [existingAnnotation] },
      indexToTargetsByCollId: {
        testCollId: {
          1: [{ index: 1, freq: 1, annotation: existingAnnotation }],
        },
      },
    };
    const action = actions.updateAnnotationSuccess({
      toBeUpdateValue: { text: 'new' },
      collId: 'testCollId',
      aid: '1',
    });
    const updatedAnnotation = { ...existingAnnotation, text: 'new' };
    const expectedState = {
      ...stateWithExisting,
      annotations: { testCollId: [updatedAnnotation] },
    };
    expect(reducer(stateWithExisting, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_ANNOTATION_SUCCESS (symbol)', () => {
    const existingAnnotation = { aid: '1', targets: [{ index: 1, freq: 1 }], symbol: 'old', collId: 'testCollId' };
    const stateWithExisting = {
      ...initialState,
      annotations: { testCollId: [existingAnnotation] },
      indexToTargetsByCollId: {
        testCollId: {
          1: [{ index: 1, freq: 1, annotation: existingAnnotation }],
        },
      },
    };
    const action = actions.updateAnnotationSuccess({
      toBeUpdateValue: { symbol: 'new' },
      collId: 'testCollId',
      aid: '1',
    });
    const updatedAnnotation = { ...existingAnnotation, symbol: 'new' };
    const expectedState = {
      ...stateWithExisting,
      annotations: { testCollId: [updatedAnnotation] },
    };
    expect(reducer(stateWithExisting, action)).toEqual(expectedState);
  });

  it('should handle SAVE_STATUS_OF_UPDATING_ANNOTATION', () => {
    const action = actions.saveStatusOfUpdatingAnnotationAction('success');
    const expectedState = {
      ...initialState,
      statusOfUpdatingAnnotaion: 'success',
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET', () => {
    const existingAnnotation = {
      aid: '1',
      targets: [{ index: 1, freq: 1 }, { index: 2, freq: 2 }],
      collId: 'testCollId',
    };
    const stateWithExisting = {
      ...initialState,
      annotations: { testCollId: [existingAnnotation] },
      indexToTargetsByCollId: {
        testCollId: {
          1: [{ index: 1, freq: 1, annotation: existingAnnotation }],
          2: [{ index: 2, freq: 2, annotation: existingAnnotation }],
        },
      },
    };
    const action = actions.saveStatusOfDeleteAnnotationTarget({
      target: { index: 1, freq: 1 },
      collId: 'testCollId',
      aid: '1',
    });
    const updatedAnnotation = { ...existingAnnotation, targets: [{ index: 2, freq: 2 }] };
    const expectedState = {
      ...stateWithExisting,
      annotations: { testCollId: [updatedAnnotation] },
      indexToTargetsByCollId: {
        testCollId: {
          2: [{ index: 2, freq: 2, annotation: updatedAnnotation }],
        },
      },
    };
    expect(reducer(stateWithExisting, action)).toEqual(expectedState);
  });

  describe('alter function', () => {
    it('should update targets of a specific annotation', () => {
      const annotations = [
        { aid: '1', targets: [{ index: 1, freq: 1 }] },
        { aid: '2', targets: [{ index: 2, freq: 2 }] },
      ];
      const newTargets = [{ index: 3, freq: 3 }];
      const expected = [
        { aid: '1', targets: newTargets },
        { aid: '2', targets: [{ index: 2, freq: 2 }] },
      ];
      expect(alter(newTargets, '1', annotations)).toEqual(expected);
    });
  });

  describe('annotationsToTargets function', () => {
    it('should transform annotations to targets grouped by index', () => {
      const annotations = [
        { aid: '1', targets: [{ index: 1, freq: 1 }, { index: 2, freq: 2 }] },
        { aid: '2', targets: [{ index: 2, freq: 2 }, { index: 3, freq: 3 }] },
      ];
      const expected = {
        1: [{ index: 1, freq: 1, annotation: annotations[0] }],
        2: [
          { index: 2, freq: 2, annotation: annotations[0] },
          { index: 2, freq: 2, annotation: annotations[1] },
        ],
        3: [{ index: 3, freq: 3, annotation: annotations[1] }],
      };
      expect(annotationsToTargets(annotations)).toEqual(expected);
    });
  });
});

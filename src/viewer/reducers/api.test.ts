import api from './api';
import { API_SAVE_PARAMETERS, API_SET_JWT } from '../actions/ActionTypes';
import ApiClient from '../../client/ApiClient';

describe('api reducer', () => {
  it('should return the initial state', () => {
    expect(api(undefined, {} as any)).toEqual({
      spaceId: undefined,
      collId: undefined,
      tsid: undefined,
      client: ApiClient.instance,
      jwt: undefined,
      host: undefined,
      port: undefined,
      wid: undefined,
      chronos_address: undefined,
      analytics_address: undefined,
    });
  });

  it('should handle API_SAVE_PARAMETERS', () => {
    const action = {
      type: API_SAVE_PARAMETERS,
      payload: {
        jwt: 'test_jwt',
        spaceId: 'test_spaceId',
        collId: 'test_collId',
        tsid: 'test_tsid',
        wid: 'test_wid',
        chronos_address: 'test_chronos_address',
        analytics_address: 'test_analytics_address',
      },
    };
    const state = api(undefined, action);

    expect(state.jwt).toBe('test_jwt');
    expect(state.spaceId).toBe('test_spaceId');
    expect(state.collId).toBe('test_collId');
    expect(state.tsid).toBe('test_tsid');
    expect(state.wid).toBe('test_wid');
    expect(state.chronos_address).toBe('test_chronos_address');
    expect(state.analytics_address).toBe('test_analytics_address');
    // Check if jwt is set in ApiClient.instance.authentications.jwt
    expect(ApiClient.instance.authentications.jwt.accessToken).toBe('test_jwt');
  });

  it('should handle API_SET_JWT', () => {
    const action = {
      type: API_SET_JWT,
      jwt: 'new_jwt',
    };
    const state = api(undefined, action);

    expect(state.jwt).toBe('new_jwt');
  });
});

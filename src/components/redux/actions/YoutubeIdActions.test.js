import  {youtubeIdUpdate} from './YoutubeIdActions'
import * as types from './types'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

export const mockStore = configureMockStore([thunkMiddleware]);

describe('YoutubeIdActions', () => {
  it('should create an action to search', () => {
    const text = 'Birds'
    const expectedAction = {
      type: types.YOUTUBEID_UPDATE,
      payload: text
    }
    expect(youtubeIdUpdate(text)).toEqual(expectedAction)
  })
})
import {YoutubeReducer} from './YoutubeReducer'
import { YOUTUBEID_UPDATE } from "../actions/types";


describe('Youtube reducer', () => {

  const INITIAL_STATE = {
    youtubeId: "x",
    videoIdState: false
  };
  const INITIAL_PAYLOAD = {x: "x", y: "y", z:"z"};
  it('should handle YOUTUBEID_UPDATE action', () => {
    expect(
      YoutubeReducer(INITIAL_STATE, {
        type: YOUTUBEID_UPDATE,
        payload: INITIAL_PAYLOAD,

      })
    ).toEqual(
      {
       ...INITIAL_PAYLOAD,
        loading: false
      }
    )
  })

})
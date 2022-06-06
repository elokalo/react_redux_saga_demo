import { call, put } from "redux-saga/effects";
import { setPost } from "../../docs/post";
import { requestGetPost } from "../requests/post";

export function* handleGetPost(action) {
  try {
    /**
     * 1 - make a request yielding the call effect
     * 2 - get the data of the request
     * 3 - store the data inside of the correspond reducer
     */
    const response = yield call(requestGetPost);
    const { data } = response;
    yield put(setPost(data));
  } catch (error) {
    console.log(error);
  }
}

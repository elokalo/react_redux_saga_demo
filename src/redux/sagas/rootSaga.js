import { takeEvery } from "redux-saga/effects";
import { GET_POST } from "../docs/post";
import { handleGetPost } from "./handlers/post";

/**
 * When a getPost action is dispatched our watcherSaga
 * will take that action and call handleGetPost after
 * call the requestGetPost and return data.
 * Finally when get a response of this request "put"
 * it will dispatch redux action that will set the post
 * data.
 */
export function* watcherSaga() {
  yield takeEvery(GET_POST, handleGetPost);
};
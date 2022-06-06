export const GET_POST = "GET_POST";
export const SET_POST = "SET_POST";

export const getPost = () => ({
  type: GET_POST,
});

export const setPost = (post) => ({
  type: SET_POST,
  post,
});

const initialState = {
  post: undefined,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      const { post } = action;
      return {
        ...state,
        post,
      };
    default:
      return initialState;
  }
};

export default postReducer;


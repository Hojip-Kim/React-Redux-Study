import axios from 'axios';

export const getchPosts = (): any => async (dispatch: any, getState: any) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

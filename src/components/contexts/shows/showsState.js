import { useReducer } from 'react';
import ShowsContext from './ShowsContext';
import showsReducer from './showsReducer';
import axios from 'axios';
import {
  SEARCH_SHOWS,
  CLEAR_SINGLE_SHOW,
  SET_LOADING,
  SET_SINGLE_SHOW,
} from '../types';

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(showsReducer, initialState);
  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  const getSingleShow = async (id) => {
    dispatch({ type: SET_LOADING });
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    dispatch({ type: SET_SINGLE_SHOW, payload: data });
    console.log(data);
  };
  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;

import {
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  CHANGE_TAB,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_LOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        authors: action.payload.users,
        authorsCount: action.payload.usersCount,
        currentPage: action.page
      };
    case APPLY_TAG_FILTER:
      return {
        ...state,
        pager: action.pager,
        authors: action.payload.users,
        authorsCount: action.payload.usersCount,
        tab: null,
        tag: action.tag,
        currentPage: 0
      };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        tags: action.payload[0].tags,
        authors: action.payload[1].users,
        authorsCount: action.payload[1].usersCount,
        currentPage: 0,
        tab: action.tab
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {
        ...state,
        pager: action.pager,
        authors: action.payload.users,
        authorsCount: action.payload.usersCount,
        tab: action.tab,
        currentPage: 0,
        tag: null
      };
    case PROFILE_PAGE_LOADED:
    case PROFILE_FAVORITES_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        authors: action.payload[1].users,
        authorsCount: action.payload[1].usersCount,
        currentPage: 0
      };
    case PROFILE_PAGE_UNLOADED:
    case PROFILE_FAVORITES_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};

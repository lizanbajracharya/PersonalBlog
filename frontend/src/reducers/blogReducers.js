import {
  BLOG_LIST_SUCCESS,
  BLOG_LIST_REQUEST,
  BLOG_LIST_FAIL,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_CREATE_RESET,
  BLOG_CREATE_FAIL,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_REQUEST,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_UPDATE_RESET,
  MY_BLOG_LIST_REQUEST,
  MY_BLOG_LIST_FAIL,
  MY_BLOG_LIST_SUCCESS,
} from "../constants/blogConstants";

export const blogListReducer = (state = { blogs: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_LIST_REQUEST:
      return {
        blogs: [],
        loading: true,
      };
    case BLOG_LIST_SUCCESS:
      return {
        loading: false,
        blogs: payload.blogs,
      };
    case BLOG_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const blogMyListReducer = (state = { myblogs: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case MY_BLOG_LIST_REQUEST:
      return {
        myblogs: [],
        loading: true,
      };
    case MY_BLOG_LIST_SUCCESS:
      return {
        loading: false,
        myblogs: payload.blog,
      };
    case MY_BLOG_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const blogDetailReducer = (state = { blog: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BLOG_DETAILS_SUCCESS:
      return {
        loading: false,
        blog: payload,
      };
    case BLOG_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const blogDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_DELETE_REQUEST:
      return {
        loading: true,
      };
    case BLOG_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case BLOG_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const blogCreateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_CREATE_REQUEST:
      return {
        loading: true,
      };
    case BLOG_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        blog: payload,
      };
    case BLOG_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BLOG_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const blogUpdateReducer = (state = { blog: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case BLOG_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        blog: payload,
      };
    case BLOG_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BLOG_UPDATE_RESET:
      return { blog: {} };
    default:
      return state;
  }
};

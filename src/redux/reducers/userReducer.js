import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_LOGOUT,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILED,
  POST_LEAVE_REQUEST,
  POST_LEAVE_SUCCESS,
  POST_LEAVE_FAILED,
  GET_LEAVES_REQUEST,
  GET_LEAVES_SUCCESS,
  GET_LEAVES_FAILED,
  POST_SPECIAL_REQUEST,
  POST_SPECIAL_SUCCESS,
  POST_SPECIAL_FAILED,
  GET_SPECIAL_REQUESTS_REQUEST,
  GET_SPECIAL_REQUESTS_SUCCESS,
  GET_SPECIAL_REQUESTS_FAILED,
  POST_SHIFT_REPLACE_REQUEST,
  POST_SHIFT_REPLACE_SUCCESS,
  POST_SHIFT_REPLACE_FAILED,
  ADD_AVAILABILITY_REQUEST,
  ADD_AVAILABILITY_SUCCESS,
  ADD_AVAILABILITY_FAILED,
  GET_AVAILABILITY_REQUEST,
  GET_AVAILABILITY_SUCCESS,
  GET_AVAILABILITY_FAILED
} from '../constants/userConstants'


//    SIGNIN REDUCER    
export const userSigninReducer = (
  state = {
    loading: false,
    userInfo: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        userInfo: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        userInfo: action.payload

      }
    case USER_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload
      }

    case USER_LOGOUT:
      return {
        userInfo: null
      }
    default:
      return state
  }
}

//get single user
export const getSingleUserReducer = (
  state = {
    loading: false,
    user: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        user: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        user: action.payload

      }
    case GET_SINGLE_USER_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//request leave
const requestLeaveState = {
  loading: false,
  leave: null,
  error: null,
  isAuthenticated: false
}
export const requestLeaveReducer = (state = requestLeaveState, action) => {
  switch (action.type) {
    case POST_LEAVE_REQUEST:
      return {
        ...state,
        leave: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case POST_LEAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        leave: action.payload

      }
    case POST_LEAVE_FAILED:
      return {
        ...state,
        loading: false,
        leave: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//get leaves
const getLeavesState = {
  loading: false,
  leaves: null,
  error: null,
  isAuthenticated: false
}
export const getLeavesReducer = (state = getLeavesState, action) => {
  switch (action.type) {
    case GET_LEAVES_REQUEST:
      return {
        ...state,
        leaves: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case GET_LEAVES_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        leaves: action.payload

      }
    case GET_LEAVES_FAILED:
      return {
        ...state,
        loading: false,
        leaves: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//request special
const requestSpecialState = {
  loading: false,
  special: null,
  error: null,
  isAuthenticated: false
}
export const requestSpecialReducer = (state = requestSpecialState, action) => {
  switch (action.type) {
    case POST_SPECIAL_REQUEST:
      return {
        ...state,
        special: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case POST_SPECIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        special: action.payload

      }
    case POST_SPECIAL_FAILED:
      return {
        ...state,
        loading: false,
        special: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//get special requests
const getSpecialRequestsState = {
  loading: false,
  specialRequests: null,
  error: null,
  isAuthenticated: false
}
export const getSpecialRequestsReducer = (state = getSpecialRequestsState, action) => {
  switch (action.type) {
    case GET_SPECIAL_REQUESTS_REQUEST:
      return {
        ...state,
        specialRequests: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case GET_SPECIAL_REQUESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        specialRequests: action.payload

      }
    case GET_SPECIAL_REQUESTS_FAILED:
      return {
        ...state,
        loading: false,
        specialRequests: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//request shift replace
const requestShiftReplaceState = {
  loading: false,
  shiftReplace: null,
  error: null,
  isAuthenticated: false
}
export const requestShiftReplaceReducer = (state = requestShiftReplaceState, action) => {
  switch (action.type) {
    case POST_SHIFT_REPLACE_REQUEST:
      return {
        ...state,
        shiftReplace: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case POST_SHIFT_REPLACE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        shiftReplace: action.payload

      }
    case POST_SHIFT_REPLACE_FAILED:
      return {
        ...state,
        loading: false,
        shiftReplace: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//add availability
const addAvailabilityState = {
  loading: false,
  availability: null,
  error: null,
  isAuthenticated: false
}
export const addAvailabilityReducer = (state = addAvailabilityState, action) => {
  switch (action.type) {
    case ADD_AVAILABILITY_REQUEST:
      return {
        ...state,
        availability: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case ADD_AVAILABILITY_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        availability: action.payload

      }
    case ADD_AVAILABILITY_FAILED:
      return {
        ...state,
        loading: false,
        availability: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//get availabilities
const getAvailabilityState = {
  loading: false,
  availabilities: null,
  error: null,
  isAuthenticated: false
}
export const getAvailabilityReducer = (state = getAvailabilityState, action) => {
  switch (action.type) {
    case GET_AVAILABILITY_REQUEST:
      return {
        ...state,
        availabilities: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case GET_AVAILABILITY_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        availabilities: action.payload

      }
    case GET_AVAILABILITY_FAILED:
      return {
        ...state,
        loading: false,
        availabilities: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}
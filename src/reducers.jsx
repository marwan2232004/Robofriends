const initialStateSearch = {
  searchField: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateRobots = {
  robots:[],
  IsPending: false ,
  err: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case "REQUEST_ROBOTS_PENDING":
      return Object.assign({}, state, { IsPending: true });
    case "REQUEST_ROBOTS_SUCCESS":
      return Object.assign({}, state, {
        robots: action.payload,
        IsPending: false,
      });
    case "REQUEST_ROBOTS_FAILED":
      return Object.assign({}, state, { err: action.payload, IsPending: false });
    default:
      return state;
  }
};

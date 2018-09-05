// action types
const LOAD_PROJECTS_REQUEST = "LOAD_PROJECTS_REQUEST";
const LOAD_PROJECTS_SUCCESS = "LOAD_PROJECTS_SUCCESS";
const LOAD_PROJECTS_FAILURE = "LOAD_PROJECTS_FAILURE";
const UPDATE_SELECTEDPROJECT = "UPDATE_SELECTEDPROJECT";

// reducer with initial state
const initialState = {
  fetching: false,
  projects: [],
  error: null,
  selectedProject: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS_REQUEST:
      return { ...state, fetching: true, error: null };
    case LOAD_PROJECTS_SUCCESS:
      return { ...state, fetching: false, projects: action.projects, selectedProject: action.selectedProject };
    case LOAD_PROJECTS_FAILURE:
      return { ...state, fetching: false, projects: null, error: action.error };
    case UPDATE_SELECTEDPROJECT:
      return { ...state, selectedProject: action.selectedProject};
    default:
      return state;
  }
}

export const getProjects = state => state.projects;
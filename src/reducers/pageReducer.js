import { CHANGE_ACTIVE_PAGE, RESET_PAGES, ADD_PAGE_ITEM, SET_RESULTS_LENGTH, SET_TOTAL_PAGES, TOGGLE_TAB } from '../action/types'

const initialState = {
    activePage: 0,
    pages: [],
    resultsLength: 0,
    totalPages: 0,
    activeTab: 0,
  };
  
export default function(state = initialState, action) {
  switch(action.type){
  
      case CHANGE_ACTIVE_PAGE:
        return {
          ...state,
          activePage:action.payload
        }

        case RESET_PAGES:
        return {
            ...state,
            pages:action.payload
        }

        case ADD_PAGE_ITEM:
        return {
            ...state,
            pages:action.payload
        }

        case SET_RESULTS_LENGTH:
        return {
            ...state,
            resultsLength:action.payload
        }

        case SET_TOTAL_PAGES:
        return {
            ...state,
            totalPages:action.payload
        }

        case TOGGLE_TAB:
        return {
            ...state,
            activeTab:action.payload
        }

      default:
        return state;
    }
  }
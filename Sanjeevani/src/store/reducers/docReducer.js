const initialState = {
  error:null, info:null
}

const DocInfo = (state = initialState, action) => {
    switch(action.type)
    {
      case 'DOC_FETCHING':
        return {
          ...state,
          error:null,
          info:action.payload
        }
      case 'DOC_PROFILE_FETCHED':
        return {
          ...state,
          info:action.payload,
          error:null,
        }
      case 'DOC_PROFILE_FAILURE':
        return {
          ...state,
          error:action.payload,
          info:null,
        }
      default:
        return initialState
    }
}

export default DocInfo;
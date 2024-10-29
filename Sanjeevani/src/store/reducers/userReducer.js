const initialState = {
    info:[],
    error:null
}

const UserInfo = (state = initialState, action) => {
    switch(action.type)
    {
      case 'DOC_LIST_FETCHING':
        return initialState
      case 'DOC_PROFILE_LIST_FETCHED':
        return {
          ...state,
          info:action.payload,
          error:null,
        }
      case 'DOC_PROFILE_LIST_FAILURE':
        return {
          ...state,
          error:action.payload,
          info:null,
        }
      default:
        return state
    }

}

export default UserInfo
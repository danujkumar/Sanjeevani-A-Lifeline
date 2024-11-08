const initialInfo = {
    info:{name:""},
    error:null
}

const UserInformation = (state = initialInfo, action) => {
    switch(action.type)
    {
      case 'USER_FETCHING':
        return initialInfo
      case 'USER_PROFILE_FETCHED':
        return {
          ...state,
          info:action.payload,
          error:null,
        }
      case 'USER_PROFILE_FAILURE':
        return initialInfo
      default:
        return state
    }

}

export default UserInformation
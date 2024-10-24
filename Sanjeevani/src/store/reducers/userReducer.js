const UserInfo = (state = {}, action) => {
    if(action.type == 'docinfo')
        {
            //api will be called here to update the state and to get the info of currently logged doctor
        }
        else if (action.type == 'docappoint')
        {
            //api will be called here to update the state and to get the approved appointments
        }
        else if (action.type == 'docapprov')
        {
            //to get non-approval list
        }
        else
        {
            return state;
        }
}

export default UserInfo
export const getDocInfo = (token)=>{
    return (dispatch) => {
        dispatch({
            type:"docinfo",
            payload: token
        })
    }
}

export const getDocAppoints = (token)=>{
    return (dispatch) => {
        dispatch({
            type:"docappoint",
            payload: token
        })
    }
}

export const getDocApproval = (token)=> {
    return (dispatch) => {
        dispatch({
            type:"docapprov",
            payload: token
        })
    }
} 
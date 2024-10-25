export const getDocInfo = ()=>{
    return async (dispatch) => {
        dispatch({
            type:"DOC_FETCHING",
            payload:{
                info:"Fetching doctor profile..."
            }
        })
        const token = localStorage.getItem("token");
        let url = "http://localhost:3000/profile";
        if (localStorage.getItem("doctor") === 'true') {
            url = "http://localhost:3000/doctor/profile";
        }
        const response = await fetch(url, {
            method:"GET",
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        if(response.ok){
            const data = await response.json();
            dispatch({
                type:"DOC_PROFILE_FETCHED",
                payload:data
            })
        }else{
            dispatch({
                type:"DOC_PROFILE_FAILURE",
                payload:{error:"Fail to fetch"}
            })
        }
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

export const getDocList = ()=>{
    return async (dispatch) => {
        dispatch({
            type:"DOC_LIST_FETCHING",
            payload:{
                info:"Fetching doctor lists..."
            }
        })
        let url = "http://localhost:3000/doctor";
        
        const response = await fetch(url, {
            method:"GET",
        })

        if(response.ok){
            const data = await response.json();
            dispatch({
                type:"DOC_PROFILE_LIST_FETCHED",
                payload:data
            })
        }else{
            dispatch({
                type:"DOC_PROFILE_LIST_FAILURE",
                payload:{error:"Fail to fetch"}
            })
        }
    }
}
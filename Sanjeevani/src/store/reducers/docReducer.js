const DocInfo = (state = {}, action) => {
    if (action.type == 'docinfo') {
      console.log(action)
        //api will be called here to update the state and to get the info of currently logged doctor
        try {
          console.log("from redux",action.payload)
            let url = "http://localhost:3000/profile"
            localStorage.getItem("doctor") === 'true' ? url = "http://localhost:3000/doctor/profile" : url = "http://localhost:3000/profile";
            const response = fetch(url, {
                method: "GET", headers: {
                    Authorization: `Bearer ${action.payload}`
                }
            }).catch((error) => { console.log(error); return state})

            

            // if (response.ok) {
            //     // const data = await response.json();
            //     console.log("is coming from redux: ", );
            //     return {};
            // }
            // else {
            //   console.log('Not from redux');
            //   return state;
            // }
            return response;
        } catch (error) {
            console.log(error)
            return {}
        }
    }


    else if (action.type == 'docappoint') {
        //api will be called here to update the state and to get the approved appointments
    }
    else if (action.type == 'docapprov') {
        //to get non-approval list
    }
    else {
        return state;
    }
}

export default DocInfo;
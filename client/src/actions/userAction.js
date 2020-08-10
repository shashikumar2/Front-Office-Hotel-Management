import axios from 'axios'

export const setUser = (user) => {
    return {type : 'SET_USER', payload : user}
}


export const startUserRegister = (formData, redirect) => {
    return(dispatch) => {
        console.log(formData, 'startRegisterUser')
        axios.post('users/register', formData)
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            } else {
                alert('You has successfully registered')
                redirect()
            }
        })

        .catch((err) => {
            console.log(err)
        })
    }
}

export const startUserLogin = (userLoginData, redirect) => {
    return (dispatch) => {
        axios.post('/users/login', userLoginData)
            .then(response => {
                 console.log('userLoginAction', response.data)
                 if(response.data.token){
                localStorage.setItem('token',response.data.token)
                dispatch(startGetUser())
                redirect()

              }else {
                  alert('Login failed')
              }
                          
            })
            .catch((err)=>{
                console.log(err)
            })
       }
   }

export const startGetUser = ()=>{
    return (dispatch)=>{
      axios.get('/users/account', {
          headers : {
              'Authorization' : localStorage.getItem('token')
          }
      })
      .then((response)=>{
          
          console.log('userAccountAction', response.data)
          const user = response.data 
          dispatch(setUser(user))
          
      })
      .catch((err)=>{
          console.log(err)
      })
     }
          
 }






 export const startUserLogout = () => {
    return (dispatch) => {
            axios.delete('/users/logout', {
                headers : {
                    'Authorization' : localStorage.getItem('token')
                 }
            })
            .then(response => {
                 console.log('userLogoutAction', response.data)
               // const token = response.data 
               if(response.data.notice) {
                 alert(response.data.notice)
                localStorage.removeItem('token')
                
                dispatch(setUser({}))
                window.location.href = "/"

                 
            }              
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
/*export const startUserLogout = () => {
    return (dispatch) => {
        axios.delete('/users/logout', {
        headers : {
            'Authorization' : localStorage.getItem('token')
         }
        })

            .then(response => {
                 console.log('userLogoutAction', response.data)
               // const token = response.data 
               if(response.data.notice) {
                 alert(response.data.notice)
                localStorage.removeItem('token')
                
                dispatch(setUser({}))
                window.location.href = "/"

                 
            }              
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}*/

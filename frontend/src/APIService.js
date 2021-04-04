export default class APIService{
    static LoginInvestor(body){
        return fetch(`http://127.0.0.1:8000/api-token-auth/`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }
    static RegisterInvestor(body){
        return fetch(`http://127.0.0.1:8000/soi/investor/signup/`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(body),
        }).then(resp=>resp.json())
    }
    static LoginStartup(body){
        return fetch(`http://127.0.0.1:8000/api-token-auth/`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }
    static RegisterStartUp(body){
        return fetch(`http://127.0.0.1:8000/soi/startup/signup/`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(body),
        }).then(resp=>resp.json())
    }
    static UpdateDescriptionStartUp(body,pk){
        return fetch('http://127.0.0.1:8000/soi/startup/signup/'+pk+'/',{
            method:'PATCH',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(body),
        }).then(resp=>resp.json())
    }
    static ProfileSubmit(body){
        return fetch(`http://127.0.0.1:8000/soi/startup/profile/`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(body),
        }).then(resp=>resp.json())
    }
    static NotifSubmit(s_pk,i_pk){
       
        return fetch('http://127.0.0.1:8000/startup/add/'+s_pk+'/'+i_pk,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
            },
        }).then()
    }
    static NotifRemove(s_pk,i_pk){
       
        return fetch('http://127.0.0.1:8000/startup/remove/'+s_pk+'/'+i_pk,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
            },
        }).then()
    }
    static getNotifInvestors(s_pk){
        return fetch('http://127.0.0.1:8000/soi/startup/signup/'+s_pk+'/',{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
            },
        
        }).then(resp=>resp.json())
    }
}
export default class APIService{
    static LoginInvestor(body){
        return fetch(`http://127.0.0.1:8000/auth/`,{
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
        return fetch(`http://127.0.0.1:8000/auth/`,{
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
}
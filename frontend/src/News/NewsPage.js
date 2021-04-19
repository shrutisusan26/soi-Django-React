import React,{useEffect,useState} from 'react'
import Loading from './Loading.js'
import NewsList from './NewsList'
import {
    TheSidebar,
    TheStartupSidebar,
    TheHeader,
  } from  '../containers/index'

function NewsPage() {
    const [loading, setLoading] = useState(true)
    const [news,setNews]=useState([])
    const type=localStorage.getItem('startup')
    useEffect(()=>{
    setLoading(true)
    fetch('https://finnhub.io/api/v1/news?category=general&token=c0bavkf48v6to0ropqfg',{
            method:'GET',
        }).then(response=> response.json()).then(response=>{ setNews(response);
            setLoading(false);}).catch(error=>console.log(error))
    },[])
  if (loading) {
    return (<section className="background">
      <main className="container" >
         <Loading />
      </main>
      </section >
    )
  }
  return (<div className="bg">
     
     <div className="c-app c-default-layout">
            {type==="false" ? <TheSidebar/> :<TheStartupSidebar/>}
            <div className="c-wrapper">
                <TheHeader/>
            <main>
                <div>
                    <NewsList news={news}/>
                </div>
            </main>
            </div>
  </div>
  </div>)
}

export default NewsPage

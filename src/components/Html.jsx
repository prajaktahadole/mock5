import { useState, useEffect } from "react";
import axios from "axios";
export const HTML = () => {
    const [ data, setData ] = useState([])
    const [ page, setPage ] = useState(1);
  
      const fetchData = async (page=1,sort="desc") => {
          axios({
            method: "get",
            url: "https://api.github.com/search/repositories?q=stars:%3E1+language:html",
            params: {
              per_page: 10,
              page,
              sort
            },
          })
            .then((res) => {
              setData(res.data)
              console.log(res.data)
            })
            .catch((err) => {
              console.log(err)
            });
        };
      
        useEffect(()=>{
          fetchData(page)
        },[page])
  


    return (
        <div>
            <h2>HTML</h2>
            <div id="main">
            {
                  data.items?.map((item)=>{
                    return (
                        <div key={item.id} className="card">
                            <div><img className="imgg" src={item.owner.avatar_url} alt="" srcset="" /></div>
                            <h3 className="title">{item.name}</h3>
                            <h3 className="lang">{item.language}</h3>
                            <div className="flexx">
                                <div> ⭐ - {item.stargazers_count} </div>
                                <div>foks - {item.forks_count}</div>
                            </div>
                        </div>
                    )
                  })
                }
        </div>
        </div>
    )
}
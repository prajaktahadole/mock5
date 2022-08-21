import { useState, useEffect } from "react";
import axios from "axios";

export const CSS = () => {
    const [ data, setData ] = useState([])
    const [ page, setPage ] = useState(1);
    const [loading, setLoading] = useState(true);
  
  
      const fetchData = async (page=1,sort="desc") => {
        setLoading(true);

          axios({
            method: "get",
            url: "https://api.github.com/search/repositories?q=stars:%3E1+language:css",
            params: {
              per_page: 10,
              page,
              sort
            },
          })
            .then((res) => {
                setLoading(false)
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
             {loading && <div  id="load">loading</div>}
            <h2>CSS</h2>
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

        <div className="paginationBox">
          <Pagination currentPage={page} lastPage={20} onPageChange={setPage}/>
          <div className="btnBox">
          <button className="btn" disabled={page===1} onClick={() => setPage(page-1)}>Prev</button>
          <button className="btn"  onClick={() => setPage(page+1)}>Next</button>
          </div>
          </div>
        </div>
    )
}


const Pagination = ({
  currentPage,
  lastPage,
  onPageChange
}) =>{
  const arr = new Array(lastPage).fill(0);
  
  return(
    <div>
      {
        arr.map((item,page) =>
        <button className="btn" onClick={() => onPageChange(page+1)} disabled={(page+1)===currentPage}>{page+1}</button>)
      }
    </div>
  )
}
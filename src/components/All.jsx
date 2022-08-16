import { useState, useEffect } from "react";
import axios from "axios";

export const All = () => {
    const [ data, setData ] = useState([])
  const [ page, setPage ] = useState(1);

    const fetchData = async (page=1,sort="desc") => {
        axios({
          method: "get",
          url: "https://api.github.com/search/repositories?q=stars:%3E1+language:all",
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
        <div className="main_container">
          
          {data.map((items) => (
        <div >

        <div key={items.id} className="main_div">
       
        <h1>{items.name}</h1>
      
        <h4>Type :  {items.language}</h4>
        <h4>forks_count :  {items.forks_count}</h4>
        <h4>star_count :  {items.stargazers_count}</h4>
        
      </div>
        </div>
        ))}
          
        </div>
    )
}




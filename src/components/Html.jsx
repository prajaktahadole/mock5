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
        </div>
    )
}
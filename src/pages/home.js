import React, { useEffect, useState } from 'react';
import {RWebShare} from 'react-web-share'
import axios from 'axios';


const Readmore=({children})=>{
  const text=children;
  const [readmore,setReadmore]=useState(true);
  return(
   <>
       {readmore ? text.slice(0,600):text}
       <span >{readmore ? "....":""} <h5><h5 onClick={()=>setReadmore(!readmore)}>{readmore ? "READ MORE": " READ LESS"}</h5></h5> </span>
       
   </>
  )
}

function Getdata(){
  const [blog,setBlog]=useState([]);
  const [search ,setSearch]=useState("");

  const calldata=async()=>{
    const{data}=await axios.get("https://anujblogbackend.herokuapp.com/home");
    setBlog(data);
  }
  useEffect(()=>{
    calldata();
  },[])
  
  const Blog=[...blog].reverse();
  
  return(
    <>
    <form className='forma' >
      <label><input type="search" className='form' onChange={(e)=>setSearch(e.target.value)}  placeholder="Search here in Small letter..."></input></label>
       
    </form>
    <div className='mainbody'>
    {Blog.filter((data)=>{
      return search.toLocaleLowerCase() === ''? data:data.title.toLocaleLowerCase().includes(search)
    }).map((data)=>(
      <>

      <div><img className='img' alt="Image Loading..." src={data.imgurL}></img></div>
      <h2>{data.title}</h2>
      <h4>{data.date}</h4>
      
       <p> 
        
        <Readmore>
       {data.content}
        </Readmore>
          
       </p>
      
        <RWebShare data={{
          url:"https://anujblog.netlify.app"
        }}>
           <h3>SHARE</h3>
        </RWebShare>
        
      
      </>
      
      ))}
      
    </div>
    </>
  )
}

export default Getdata

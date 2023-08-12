import { useState , useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";


const Content = () => {
  
    const {data:blogs , isPending , error  }=useFetch("http://localhost:8000/blogs"); 

    return (         
        <div> 
            {error && 
                <div className=" container  mx-auto bg-sky-50 my-2 w-full lg:w-2/3 self-center  rounded-lg px-3 drop-shadow-xl py-2 flex flex-col items-center" >
                     <h1 className="text-red-500 font-semibold text-lg text-center py-6 items-center">{error}</h1>
                </div>
            }
            {isPending && 
                <div className="  container  mx-auto bg-sky-50 my-2 w-full lg:w-2/3 self-center  rounded-lg px-3 drop-shadow-xl py-2 flex flex-col items-center" >
                     <h1 className="text-red-500 font-semibold text-lg text-center py-6 items-center">loading ...</h1>
                </div>
            }
            {blogs && <BlogList blogs={blogs} title="All Blog's !"  /> }     
            {blogs &&  <BlogList blogs={blogs.filter((blog) => blog.autor ==="Mahmoout Train")} title="Mahmoout le train Blog's" />}
        </div>                  
    );
} 
 
export default Content;

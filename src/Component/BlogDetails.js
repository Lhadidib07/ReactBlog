import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";
import { useHistory  } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blogs , isPending , error  }=useFetch("http://localhost:8000/blogs/"+id); 
    const history = useHistory();

    const handleClick= () =>{ 
        fetch('http://localhost:8000/blogs/'+ blogs.id,{ 
            method:'DELETE'
        }).then(() => { 
            history.push('/');
        })
    }
    return ( 
        <div className="container mx-auto bg-sky-50 my-2 w-full lg:w-2/3 self-center hover:bg-blue-100 rounded-lg px-3 hover:drop-shadow-xl py-2 flex flex-col" >
             {/*<h3 className="text-2xl text-sky-500 font-semibold "> {blog.title} </h3>
             <p className="text-xl  font-semibold  pt-1 pb-2">  by {blog.autor} </p>
             <p>{blog.body}</p>*/}
             {error && <h1 className="text-red-500 font-semibold text-lg text-center py-6">{error}</h1>}
             {isPending && <h1 className="text-red-500 font-semibold text-lg text-center py-6">loading ...</h1>}
             {blogs &&  
             <div> 
                <h3 className="text-2xl text-sky-500 font-semibold "> {blogs.title}  </h3>
                <p className="text-xl  font-semibold  pt-1 pb-2">  by  {blogs.autor} </p>
                <p> {blogs.body} </p>
                <button onClick={handleClick}> delete me : N'OUBLIE PAS DE M'AJOUTER UN STYLE STP  </button>
             </div>              
                
             }

             
        </div>
            
    )
}
 
export default BlogDetails;
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
   

    return (  
        <div className=" container  mx-auto flex flex-col bg-sky-100 pt-4 "> 
            <h2 className="w-full lg:w-2/3 text-3xl text-sky-500 font-bold self-center px-2 py-4"> {title}</h2>
            <div className="flex flex-col"> 
                {blogs.map((blog)=> ( 
                <div className="bg-sky-50 my-2 w-full lg:w-2/3 self-center hover:bg-blue-100 rounded-lg px-3 hover:drop-shadow-xl py-2 flex flex-col" key={blog.id}>
                    <Link to={`/BlogDetails/${blog.id}`}> 
                        <h3 className="text-2xl text-sky-500 font-semibold "> {blog.title} </h3>
                        <p className="text-lg  font-medium  pt-1 pb-2">  by {blog.autor} </p>
                    </Link>
                </div>
                 ))}
            </div>
        </div>   
      

     );
}
 
export default BlogList;
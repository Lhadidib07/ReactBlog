import { useState } from "react";
import { useHistory  } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title , seTitle]=useState(''); 
    const [body ,setBody]=useState('');
    const [autor ,setAutor]=useState('');
    const [isPending,setIsPeding]=useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) =>{ 
        setIsPeding(true)
        e.preventDefault();
        const blog = {title , autor ,body}; 
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-type": "application/json"}, 
            body : JSON.stringify(blog)
    }).then(()=>{ 
        console.log("new blog added "); 
        setIsPeding(false);
        history.push('/');
    })
    }

    return ( 
        <div className="container mx-auto bg-blue-100 my-2 w-full lg:w-3/5 self-center rounded-lg px-3 drop-shadow-xl py-2 flex flex-col " >
            <h1 className="self-center text-sky-500 font-semibold text-2xl "> add new Blog </h1> 
            <form className="flex flex-col" onSubmit={handleSubmit}> 
                <label className=" text-sky-500 font-semibold text-lg pt-2"> blog title : </label>
                <input 
                type="text" required className="rounded-lg h-7 px-2 py-2  focus:outline-none focus-visible:ring"
                value={title}
                onChange={(e) => seTitle(e.target.value)} 
                />
                
                <label className=" text-sky-500 font-semibold text-lg pt-2"> blog body : </label>
                <textarea required className="h-40 px-2 py-1 rounded-lg focus:outline-none focus-visible:ring" 
                value={body}
                onChange={(e) =>setBody(e.target.value)}
                > 
                
                </textarea> 
                <label className=" text-sky-500 font-semibold text-lg pt-2"> blog autor : </label>
                <input type="text" required className="  rounded-lg h-7 px-2 py-2  focus:outline-none focus-visible:ring "
                value={autor}
                onChange={(e) =>setAutor(e.target.value)}
                >                
                
                </input> 
                {!isPending &&  <button className=" text-sky-500 font-semibold text-lg  rounded-xl  w-40 py-2 items-center self-center mt-4 mb-2 bg-sky-50 hover:bg-sky-200 " >Add blog </button>}
                {isPending && <button className=" text-sky-500 font-semibold text-lg  rounded-xl  w-40 py-2 items-center self-center mt-4 mb-2 bg-sky-50 hover:bg-sky-200 " >loading... </button>}  
            </form>
        </div>
     );
}
 
export default Create;

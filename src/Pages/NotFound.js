import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="text-red-500 font-semibold text-lg text-center py-6 container  mx-auto bg-sky-50 my-2 w-full lg:w-2/3 self-center  rounded-lg px-3 drop-shadow-xl  flex flex-col items-center"> 
            hey yo how are yoou bababoy Sorry we dont fond the pages you'r looking for <b/> 
            <Link to="/" className='px-4 font-medium text-sky-800 hover:text-sky-500'> go to the home page </Link>
        </div>
     );
}
 
export default NotFound;
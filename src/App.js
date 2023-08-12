import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import About from './Component/About';
import Create from './Component/Create';
import BlogDetails from './Component/BlogDetails';
import Footer from './Component/Footer';
import NotFound from './Pages/NotFound';



function App() {
  return (
    <Router> 
      <Header/> 
      <div className="bg-sky-100 flex-grow p-4 overflow-y-auto min-h-[calc(100vh-6.5rem)] " > 
      {/* calc(100vh-6.5rem) pour que le main prenne toute le height moins le height du header et du footer  */}
        <Switch>
          <Route exact path="/">
             <Content/>
          </Route>
          <Route exact path="/About">
             <About/>
          </Route>
          <Route exact path="/Create">
            <div className=' flex-grow min-h-[calc(100vh-15.5rem)] flex items-center '>
              <Create/>
            </div>
          </Route>
          <Route exact path="/BlogDetails/:id">
             <BlogDetails/>
          </Route>
          <Route  path="*">
             <NotFound/>
          </Route>

        </Switch>
      </div>
      <Footer/> 
    </Router>

  );
}

export default App;

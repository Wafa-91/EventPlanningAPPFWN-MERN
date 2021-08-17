import {useEffect} from "react";
import SignIn from './components/connection/SignIn';
import {Switch, Route} from "react-router-dom";
import Footer from './components/Footer'
import About from './components/About'
import Gallery from './components/Gallery'
import Anniversaires from './components/services/Anniversaires'

import {useDispatch,useSelector} from "react-redux";
import { current } from './js/actions/user';
import './App.css';
import  Navbar  from "./components/Navbar";
import Home from "./components/Home"
import Services from "./components/services/Services"
// import Marriageee from "./components/services/Marriageee";
 import Marriages from "./components/services/Marriages";
import Contact from "./components/Contact"
import Dashbord from "./components/admin/Dashbord";
import UserProfile from "./components/admin/UserProfile"
import Basket from "./components/services/reservation/Basket"
import EditRes from "./components/services/reservation/EditRes"
import PrivateRouteA from "./components/router/PrivateRouteA"
import PrivateRouteP from "./components/router/PrivateRouteP"
import Avis from "./components/Avis"
import Message from "./components/Message"
import UserTab from "./components/admin/UserTab"
import Devis from "./components/services/reservation/Devis"
import FeteNaissance from "./components/services/FeteNaissance";
import Conferences from "./components/services/Conferences";
import Fiançailles from "./components/services/Fiançailles"
import AvisHome from "./components/AvisHome";

import DevisFinal from "./components/services/reservation/DevisFinal"
import About2 from "./components/About2";








function App() {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(current());
 }, []);




  return (
    <div className="App">
 
     <Navbar />
     {/* <  FileUpload/> */}
   
 <Switch>

       <Route exact path="/" component={Home} />
       <Route  path="/contact" component={Contact} />   
        
       <Route  path="/signIn" component={SignIn} />    
       <Route  path="/services" component={Services}/>  
  
       <Route  path="/marriages" component={Marriages} /> 
       <PrivateRouteA  path="/dashbord" component={Dashbord}/> 
       <PrivateRouteP  exact path="/userProfile" component={UserProfile}/> 
      
       <PrivateRouteP  path="/basket" component={Basket}/>  
       <Route  path="/gallery" component={Gallery} /> 
       <Route  path="/about" component={About} /> 
       <Route  path="/edit" component={EditRes} /> 
       <Route  path="/avis" component={Avis} /> 
       {/* <Route  path="/carousel" component={Carousel} />  */}
       <Route  path="/userTab" component={UserTab} /> 
       <Route path="/devisFinal" component={DevisFinal}/>
       <Route path="/Anniversaires" component={Anniversaires}/>
       <Route path="/Fiançailles" component={Fiançailles}/>
       <Route path="/Fêtes de naissance" component={FeteNaissance}/>
       <Route path="/Conférences" component={Conferences}/>
       <Route path="/avisHome" component={AvisHome}/>
       <Route path="/about2" component={About2}/>
     
 

    


  </Switch>
    </div>
  );
}

export default App;

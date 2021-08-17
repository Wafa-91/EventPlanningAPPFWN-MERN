import React from 'react'
import {useEffect,useState} from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { postCard} from '../../js/actions/card'
import {Link} from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import {editUser,current} from "../../js/actions/user"



function EditProfile() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()


//   const [user, setUser] = useState({name:"",lastName:"",email:"",password:"",imageUrl:"",isAdmin:false,phone:""})
 
/*   useEffect(() => {
    setCard({titleCard:"",agentName:"",cardImg:"",details:[],category:[],prix:0})
  
  }, [card,cardReducer]) */
  const user = useSelector(state => state.userReducer.user)
  const [name, setName] = useState(user.name)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
//   const [imageUrl, setImageUrl] = useState()
const [isAdmin, setIsAdmin] = useState(user.isAdmin)
const [phone, setPhone] = useState(user.phone)

 
  const [imageUrl, setImageUrl] = useState(false)
  const [loading, setLoading] = useState(false)
  
  

  const styleUpload = {
      display: imageUrl ? "block" : "none"
  }

  const handleUpload = async e =>{
      e.preventDefault()
      try {
         
          const file = e.target.files[0]
          if(!file) return alert("File not exist.")
          
          if(file.size > 1024 * 1024) // 1mb
              return alert("Size too large!")

          if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
              return alert("File format is incorrect.")

          let formData = new FormData()
          formData.append('file', file)
          setLoading(true)
          const res = await axios.post('/upload', formData, {
              headers: {'content-type': 'multipart/form-data'}
          })

          setLoading(false)
          setImageUrl(res.data)   
                
         }
          

       catch (err) {
          alert(err.response.data.msg)
      }
  }

  const handleDestroy = async () => {
      try {
        
          setLoading(true)
          await axios.post('/destroy', {public_id: imageUrl.public_id})
          setLoading(false)
          setImageUrl(false)
      } catch (err) {
          alert(err.response.data.msg)
      }
  }

  
return (
    <div>
     
            <button className="btn btn-primary" onClick={handleShow} >Modifier votre profil</button>
 
       <Modal  show={show} onHide={handleClose}
          size="lg">
         <Modal.Header closeButton>
         <Modal.Title>Ajouter photo</Modal.Title>
         </Modal.Header>
         <Modal.Body >

                 {/*  <select>   <option selected>salles des fêtes</option>
           <option>photographes</option>
           <option>habillement</option>
           <option>Beauté</option>
           <option>gastronomie</option>
           <option>troupes musicales</option>
            <option>Cartes d'invitation</option>
             <option>décoration</option>

           </select> */}
         <table>
        
        
         <tr><td><label>image</label></td><td> <input type="file" name="file" id="file_up" onChange={handleUpload} />
                <div id="file_img" style={styleUpload}>
                        <img style={{width:300,height:300}}src={imageUrl ? imageUrl.url : ''} alt=""/>
                    
                    </div>
                    {console.log(imageUrl.url)}
                      
                     </td></tr>
                     <tr><td><label>Prénom</label></td><td><input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} ></input></td></tr>
         <tr><td><label>Nom</label></td><td><input type="text" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} ></input></td></tr>
         <tr><td><label>email</label></td><td><input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input></td></tr>
         <tr><td><label>téléphone</label></td><td><input type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}  ></input></td></tr>
         </table>
         
         </Modal.Body>
         <Modal.Footer>
           
           <Link to="/userProfile">
           <Button  style={{width:120,fontWeight:"bold", height:36,backgroundColor:"rgb(222 113 113)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none"}} onClick={()=> {dispatch(editUser(user._id,{name,lastName,email,password,imageUrl:imageUrl.url,isAdmin,phone}));dispatch(current());handleClose() }} >
             
          Modifier
           </Button>
           </Link>
         </Modal.Footer>
       </Modal>
       </div>
   );


    
}

export default EditProfile

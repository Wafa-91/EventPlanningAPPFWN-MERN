import React from 'react'
import {useEffect,useState} from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { postCard} from '../../js/actions/card'
import {Link} from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {postCategory} from '../../js/actions/category'
import axios from "axios"


function AddCategory() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)


  const [category, setCategory] = useState({typeCategory:"",description:"",categoryImage:""})
  const categoryReducer = useSelector(state => state.categoryReducer.category)
 
/*   useEffect(() => {
    setCard({titleCard:"",agentName:"",cardImg:"",details:[],category:[],prix:0})
  
  }, [card,cardReducer]) */
  const handlechange=(e)=>{
    e.preventDefault();
    setCategory({...category,[e.target.name]:e.target.value})
}


const [categoryImage, setCategoryImage] = useState(false)
const [loading, setLoading] = useState(false)



const styleUpload = {
    display: categoryImage ? "block" : "none"
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
        setCategoryImage(res.data)   
              
       }
        

     catch (err) {
        alert(err.response.data.msg)
    }
}

const handleDestroy = async () => {
    try {
      
        setLoading(true)
        await axios.post('/destroy', {public_id: categoryImage.public_id})
        setLoading(false)
        setCategoryImage(false)
    } catch (err) {
        alert(err.response.data.msg)
    }
}

  
  
  



  
return (
    <div>
       {(user && user.isAdmin)?
    <Button bsPrefix="add_btn"  onClick={handleShow}  > 
    
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>
            </Button> :null}
 
       <Modal  show={show} onHide={handleClose}
          size="lg">
         <Modal.Header closeButton>
         <Modal.Title>Ajouter catégorie</Modal.Title>
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
         <tr><td style={{width:200, height:20, marginRight:20}}><label >Type de l'évenement:</label></td><td><input type="text" name="typeCategory"  onChange={handlechange}  ></input></td></tr>
    
         <tr><td><label>Description:</label></td><td><input type="text" name="description" onChange={handlechange}  ></input></td></tr>
         <tr><td><label>image</label></td><td> <input type="file" name="file" id="file_up" onChange={handleUpload} />
                <div id="file_img" style={styleUpload}>
                        <img style={{width:300,height:300}} src={categoryImage ? categoryImage.url : ''} alt=""/>
                        {/* <button onClick={handleDestroy}>X</button> */}
                    </div>
                    {console.log(categoryImage.url)}
                      
                     </td></tr>
        
         </table>
         
         </Modal.Body>
         <Modal.Footer>
           
           <Link to="/services">
           <Button style={{width:120,fontWeight:"bold", height:36,backgroundColor:"rgb(222 113 113)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none"}} onClick={()=>{dispatch(postCategory({...category,categoryImage:categoryImage.url}));handleClose()}}>
             
          Ajouter
           </Button>
           </Link>
         </Modal.Footer>
       </Modal>
       </div>
   );


    
}

export default AddCategory

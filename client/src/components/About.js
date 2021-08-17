import React from 'react'
import './about.css'
import Footer from "./Footer"
function About() {
    return (
 
                <div >
           <div className="admin1">
               <div style={{marginLeft:20}}>
               <img style={{width:400,height:600,paddingLeft:50,paddingTop:150}}src="https://media.istockphoto.com/photos/young-female-professional-picture-id153153955"/>
               </div>
               <div style={{paddingTop:80,marginTop:150,marginLeft:130,width:500,backgroundColor:"#f2f3f5",height:455}}>
                   <div>
                   <span className="realis">Réalisation des rêves</span>
                   </div>
                   <div style={{paddingTop:50,width:500,paddingLeft:20}}>
                   <p>Qui sommes nous?
Bel Event est  est le premier guide de planification des évenements aujourd'hui à notre région Gabes. Il permet aux web visiteurs à explorer des centaines de fournisseurs de services des évenements dans leur marché local et de les contacter directement et efficacement d'une façon simple et pratique pour obtenir les meilleurs prix et offres.</p>
                   </div>
                   <div style={{paddingTop:80,color:"rgb(182, 80, 80)"}}>
               <span > Fatma Ben Aissa</span>
               </div>
               </div>
           </div>
        
        
          <div className="admin2">
          
               <div style={{paddingTop:80,marginTop:150,marginLeft:50,width:500,backgroundColor:"#f2f3f5",height:455}}>
                   <div>
                   <span className="realis">Réalisation des rêves</span>
                   </div>
                   <div style={{paddingTop:50,width:500,paddingLeft:20}}>
                   
                   </div>
                   <div style={{paddingTop:80,color:"rgb(182, 80, 80)"}}>
               <span > Nermine Bouabdellah</span>
               </div>
               </div>
               <div style={{marginLeft:220}}>
               <img style={{width:400,height:600,paddingTop:150, marginLeft:-122}}src="https://p5.storage.canalblog.com/50/89/1228697/127715041.jpg"/>
               </div>
          </div>

          {/* <img style={{width:400,height:600,paddingLeft:50,paddingTop:150,marginLeft:130}}src="https://resize-public.ladmedia.fr/img/var/public/storage/images/toutes-les-photos/l-oreal-paris-choisit-une-jeune-femme-voilee-magnifique-pour-sa-nouvelle-campagne-elseve-1456568/l-oreal-paris-choisit-une-jeune-femme-voilee-magnifique-pour-sa-nouvelle-campagne-elseve-1456571/38345935-1-fre-FR/L-Oreal-Paris-choisit-une-jeune-femme-voilee-magnifique-pour-sa-nouvelle-campagne-Elseve.jpg"/> */}
        
          <div className="admin1">
               <div style={{marginLeft:20}}>
               <img style={{width:400,height:600,paddingLeft:50,paddingTop:150}}src="https://media.istockphoto.com/photos/young-female-professional-picture-id153153955"/>
               </div>
               <div style={{paddingTop:80,marginTop:150,marginLeft:130,width:500,backgroundColor:"#f2f3f5",height:455}}>
                   <div>
                   <span className="realis">Réalisation des rêves</span>
                   </div>
                   <div style={{paddingTop:50,width:500,paddingLeft:20}}>
                  
                   </div>
                   <div style={{paddingTop:80,color:"rgb(182, 80, 80)"}}>
               <span > Wafa Hrizi</span>
               </div>
               </div>
           </div>
           <Footer/> 
        
                </div>
            )
        }
        
        export default About

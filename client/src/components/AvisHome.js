import React from 'react'
import './avisHome.css'
import {Link} from "react-router-dom"

function AvisHome() {
    return (
        <div style={{marginTop:"100px"}}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Untitled</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <div className="testimonials-clean">
          <div className="container">
         
            <div className="row people">
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">Travailler avec vous a été la meilleure décision que nous ayons jamais prise.</p>
                </div>
                <div className="author"><img className="rounded-circle" src="https://epicbootstrap.com/freebies/snippets/testimonials/assets/img/1.jpg" />
                  <h5  className={{marginTop:20}}>Ben Johnson</h5>
                  <p className="title">CEO of Company Inc.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description"> Un anniversaire en or, je recommande à 100%!</p>
                </div>
                <div className="author"><img className="rounded-circle" src="https://epicbootstrap.com/freebies/snippets/testimonials/assets/img/2.jpg" />
                  <h5 >Carl Kent</h5>
                  <p className="title">Founder of Style Co.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description"> Merci Bel Event d'avoir fait partie de notre histoire.</p>
                </div>
                <div className="author"><img className="rounded-circle" src="https://epicbootstrap.com/freebies/snippets/testimonials/assets/img/3.jpg" />
                  <h5 style={{marginTop:20}} >Emily Clark</h5>
                  <p className="title">Owner of Creative Ltd.</p>
                </div>
              </div>
           <Link to="/avis">  <button style={{backgroundColor:"rgb(222, 113, 113)",color:"white"}}>Voir Plus</button></Link> 
            </div>
          </div>
        </div>
      </div>
    )
}

export default AvisHome

import React from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';



function FormaEvidencija({zaposlen, user_id, show}) {
 let navigate=useNavigate();
 const [vremeOd, setVremeOd]=useState();
 const[evid_id, setEvid_id]=useState(0);

 function dodaj(e){
  setVremeOd(e.target.value) ;
 
 }

  function evidentiraj(e){
    e.preventDefault();
    
    let t= window.sessionStorage.getItem("token");
    let podaciZaEvid = {
      vremeOd:vremeOd,
      zaposleni_id: zaposlen,
      user_id: user_id,
    };
    {zaposlen == 0 ?  console.log("Vrednost nije prosledjena") :
    axios.post("http://127.0.0.1:8000/api/evidencija", podaciZaEvid, {
      headers: {
        Authorization: `Bearer ${t}`,
      },
    }).then((res) =>{
     
      if(res.data.success=== true) {
       
        alert("Uspesno evidentirano" );
window.location.reload(true);
        //navigate("/");
    
        console.log(res.data);
       

      } else {
        alert("Vreme nije uneto u dobrom formatu!" );
    
      }
    }).catch((e)=>{
      console.log(e);
    
      
    });
    
  }
    }

  return (
    
   
    <MDBContainer fluid  className={show}>

    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol>

        <MDBCard className='my-4'>

          <MDBRow className='g-0'>

            <MDBCol md='6' className="d-none d-md-block">
              <MDBCardImage src="../slike/ova.png" alt="Sample photo" width={900+'px'} className="rounded-start" fluid/>
            </MDBCol>

            <MDBCol md='6'>

              <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                <h3 className="mb-5 text-uppercase fw-bold">Dolasci zaposlenog</h3>

                <MDBInput wrapperClass='mb-4' placeholder='HH:mm:ss' label='Vreme dolaska na posao:'  onInput={dodaj} name= "name" size='lg' id='form3' type='text'/>
               
               
                <div className="d-flex justify-content-end pt-3">
                  <button className='ms-2' color='warning' size='lg' onClick={evidentiraj}>Evidentiraj prisustvo</button>
                </div>


              </MDBCardBody>

            </MDBCol>
          </MDBRow>

        </MDBCard>

      </MDBCol>
    </MDBRow>

  </MDBContainer>
  
  )
}

export default FormaEvidencija

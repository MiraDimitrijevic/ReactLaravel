import React from 'react';

import { useState } from 'react';
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
} from 'mdb-react-ui-kit';



function FormaOdlazak({evid_id,  show2 , evidVremeOd}) {
 let navigate=useNavigate();
 const [vremeDo, setVremeDo]=useState();

 function dodaj(e){
  setVremeDo(e.target.value) ;
 
 }

  function evidentirajOdlazak(e){
    e.preventDefault();
    
    let t= window.sessionStorage.getItem("token");
    let podaciZaEvid = {
      vremeDo:vremeDo,
    
    }; if(vremeDo > evidVremeOd){
    {evid_id == 0 ?  console.log("Vrednost nije prosledjena") :
    axios.put("http://127.0.0.1:8000/api/evidencija/"+evid_id, podaciZaEvid, {
      headers: {
        Authorization: `Bearer ${t}`,
      },
    }).then((res) =>{
     
      if(res.data.success=== true) {
       
        alert("Uspesno evidentiran odlazak" );
//window.location.reload(true);
        navigate("");
    
        console.log(res.data);
       

      } else {
        alert("Vreme nije uneto u dobrom formatu!" );
    
      }
    }).catch((e)=>{
      console.log(e);
    
      
    });
    
  }
} else alert("Vreme odlaska mora biti veće od vremena dolaska");
    }

  return (
    
   
    <MDBContainer fluid  className={show2}>

    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol>

        <MDBCard className='my-4'>

          <MDBRow className='g-0'>

            <MDBCol md='6' className="d-none d-md-block">
              <MDBCardImage src="../slike/s2.jpg" alt="Sample photo" width={500+'px'} className="rounded-start" fluid/>
            </MDBCol>

            <MDBCol md='6'>

              <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                <h3 className="mb-5 text-uppercase fw-bold">Forma za odlazak sa posla</h3>

                <MDBInput wrapperClass='mb-4' placeholder='HH:mm:ss' label='Vreme odlaska sa posla:'  onInput={dodaj} name= "name" size='lg' id='form3' type='text'/>
               
               
                <div className="d-flex justify-content-end pt-3">
                  <button className='btnForma' color='warning' size='lg' onClick={evidentirajOdlazak}>Evidentiraj odlazak</button>
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

export default FormaOdlazak

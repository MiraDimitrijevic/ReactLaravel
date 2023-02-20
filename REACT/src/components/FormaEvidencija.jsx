import React from 'react';

import { useState } from 'react';
import axios from 'axios';
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



function FormaEvidencija({evidentiraj, dodaj, show}) {


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
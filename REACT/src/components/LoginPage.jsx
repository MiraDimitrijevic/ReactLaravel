import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


    import {
      MDBBtn,
      MDBContainer,
      MDBCard,
      MDBCardBody,
      MDBCardImage,
      MDBRow,
      MDBCol,
      MDBIcon,
      MDBInput
    }
    from 'mdb-react-ui-kit';

const LoginPage = (props) => {
 

 
  
  return (
  
        <MDBContainer className="my-5">
    
          <MDBCard>
            <MDBRow className='g-0'>
    
              <MDBCol md='6'>
                <MDBCardImage src="../slike/ova.png" alt="login form" className='rounded-start w-100'/>
              </MDBCol>
    
              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>
    
                  <div className='d-flex flex-row mt-2'>
                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                    <span className="h1 fw-bold mb-0">ShiftOn</span>
                  </div>
    
                  <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Ulogujte se</h5>
    
                    <MDBInput wrapperClass='mb-4' label='Email adresa' id='formControlLg' type='email' name="email" size="lg" onInput={props.dodajMejl} />
                    <MDBInput wrapperClass='mb-4' label='Lozinka' id='formControlLg' type='password' name='password' size="lg" onInput={props.dodajLozinku}/>
    
                  <button className="btnLogin"  type='submit' size='lg' onClick={props.login}>Login</button>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Nemate nalog? <a href="/register" style={{color: '#393f81'}}>Registrujte se</a></p>
    
                  
    
                </MDBCardBody>
              </MDBCol>
    
            </MDBRow>
          </MDBCard>
    
        </MDBContainer>
      
  );
}

export default LoginPage


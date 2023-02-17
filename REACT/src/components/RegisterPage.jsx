import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio
}
from 'mdb-react-ui-kit';

function RegisterPage() {
  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src="../slike/ova.png" alt="Sample photo" width={900+'px'} className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Student registration form</h3>

                  <MDBInput wrapperClass='mb-4' label='Ime i Prezime' size='lg' id='form3' type='text'/>
                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form1' type='text'/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Lozinka' size='lg' id='form2' type='text'/>
                    </MDBCol>

                  </MDBRow>


                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Zensko' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Musko' inline />
                  </div>

                  <MDBRow>

                    <MDBCol md='6'>
                    <select class="form-select" aria-label="Default select example"><option selected>Open this select menu</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select>
                    </MDBCol>

                  </MDBRow>

                  <div className="d-flex justify-content-end pt-3">
                    <button className='ms-2' color='warning' size='lg'>Registruj se</button>
                  </div>

                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Imate nalog? <a href="#!" style={{color: '#393f81'}}>Prijavite se</a></p>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}



export default RegisterPage

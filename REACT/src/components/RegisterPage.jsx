import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import jQuery from 'jquery';
import $ from 'jquery';
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
}
from 'mdb-react-ui-kit';

function RegisterPage() {
const[odeljenje, setOdeljenje]=useState(1);
$('#odelj').change(function(){
})



  const [podaciZaRegistraciju, setPodaciZaRegistraciju]=useState({
    name:"",
    email: "",
    password: "",
    pol:"m",
    odeljenje_id:"",
    admin:0,
    
  });
  function getSelected(){
    var UserOption  = document.getElementById('odelj').value;
    console.log(UserOption);
    setPodaciZaRegistraciju[odeljenje]=UserOption;
  
  }

  function vratiPol(e){

let data=podaciZaRegistraciju;
data[e.target.id]=e.target.value;
console.log(data);
setPodaciZaRegistraciju(data);
  }

  function dodaj(e){
    let data=podaciZaRegistraciju;
    if(e.target.name == 'odeljenje') {
      var odelj_id=Number(e.target.value);
      data['odeljenje_id']= odelj_id;
      if(e.target.value==1){
        data.admin=1;
      } else {
        data.admin=0;
      }
    } else {
      data[e.target.name]=e.target.value;
    }
    console.log(data);
    setPodaciZaRegistraciju(data);

  }
  let navigate=useNavigate();

  function register(e){
    getSelected();
    e.preventDefault();
axios.post("http://127.0.0.1:8000/api/register", podaciZaRegistraciju).then((res) =>{
  console.log(res.data);
  if(res.data.success === true) {
window.sessionStorage.setItem("token_reg", res.data.access_token );
navigate("/login");

  } else {
    alert("Neuspesna registracija, pokušajte ponovo" );

  }
}).catch((e)=>{
  console.log(e);

  
});
  }
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
                  <h3 className="mb-5 text-uppercase fw-bold">Forma za registraciju zaposlenih</h3>

                  <MDBInput wrapperClass='mb-4' label='Ime i Prezime'  onInput={dodaj} name= "name" size='lg' id='form3' type='text'/>
                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Email'  name= "email"  onInput={dodaj} size='lg' id='form1' type='text'/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Lozinka'  name= "password"  onInput={dodaj} size='lg' id='form2' type='text'/>
                    </MDBCol>

                  </MDBRow>


                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='pol'  onChange={vratiPol} value='z' label='Zensko'inline />
                    <MDBRadio name='inlineRadio' id='pol' onChange={vratiPol} checked="checked" value='m' label='Musko' inline />
                  </div>

                  <MDBRow>

                    

                    <MDBCol md='6'>
                    <select class="form-select"  id= "odelj" onChange={dodaj} name= "odeljenje" aria-label="Default select example"><option disabled='true' selected>Izaberite odeljenje</option><option value="1">Administrator</option><option value="2">Finansije</option><option value="3">Marketing</option></select>
                    </MDBCol>

                  </MDBRow>

                  <div className="d-flex justify-content-end pt-3">
                    <button className='ms-2' color='warning' size='lg' onClick={register}>Registruj se</button>
                  </div>

                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Imate nalog? <a href="/login" style={{color: '#393f81'}}>Prijavite se</a></p>

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

import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Zaposleni from './components/Zaposleni';
import RegisterPage from './components/RegisterPage';
import React from "react";
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import NavBar from './components/NavBar';
import { useState ,useEffect } from 'react';
import FormaEvidencija from './components/FormaEvidencija';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import Unos from './components/Unos';



function App() {
  const navigate=useNavigate();

  const[token, setToken]= useState("");
  const[zaposlen, setZaposlen]=useState(0);
  const[user_id, setUser_id]= useState(0);
 const[show, setShow]= useState('ghost');
  const [zaposleni, setZaposleni]= useState();
  function  addToken(token){
    setToken(window.sessionStorage.getItem("token"));
  }

  const logout = () => {
    console.log("asd", token);
    window.sessionStorage.setItem("token","");

    axios.post("http://127.0.0.1:8000/api/logout", "", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(function () {
        setToken("");
        window.sessionStorage.setItem("token","");
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
      window.sessionStorage.setItem("token","");

  };

  const [podaciZaPrijavu, setPodaciZaPrijavu]=useState({
    email: "",
    password: "",
    
  });

 async function setZapID(x) {
 setZaposlen(x);
}

  function dodajMejl(e){
    let data=podaciZaPrijavu;
    data[e.target.name]=e.target.value;
    console.log(data);
    setPodaciZaPrijavu(data);
  }
  function dodajLozinku(e){
    let data=podaciZaPrijavu;
    data[e.target.name]=e.target.value;
    console.log(data);

    setPodaciZaPrijavu(data);
  }
  function login(e){
    e.preventDefault();
axios.post("http://127.0.0.1:8000/api/login", podaciZaPrijavu).then((res) =>{
  console.log(res.data);
  if(res.data.success=== true) {
window.sessionStorage.setItem("token", res.data.access_token );
addToken(res.data.access_token);
setUser_id(res.data.user_id);
navigate("/");
  } else {
    alert("Pogresi kredencijali! Pokusajte ponovo");

  }
}).catch((e)=>{
  console.log(e);
 
  
});
  }


 
  $(document).ready( 
    function () {
        
        console.log(zaposleni);

        $('#table').DataTable( {

            "bDestroy": true,
            columnDefs: [{
                "defaultContent": "-",
                "targets": "_all"
              }],
              buttons: [
                'copy', 'excel', 'pdf'
            ],
            data: zaposleni,
            columns: [
              {"data":"id"},
                { "data": "name" },
                { "data": "email"},
                { "data": "pol" },
                { "data": "odeljenje.naziv" },
                {"data":null , defaultContent:"<button class='btn' variant='primary'   >evidentiraj dolazak</button> <button class='btn'>evidentiraj odlazak</button><button class='btn'>obrisi zaposlenog</button>" , targets:-1
                  }
               
          ]},
        );
        $('#table .btn ').on('click', function(){
          let z = $('#table').DataTable().row($(this).closest('tr')).data();
  console.log(z.id);
setZapID(z.id);
setShow('normal');
  

  //navigate("dodajEvidenciju");
 // window.location.reload(false);

         
     
         
        });
       

} );  

useEffect(()=>{
    if(zaposleni == null) {
        axios.get("http://127.0.0.1:8000/api/zaposleni").then((res) =>{
          //  console.log(res.data);
          // console.log(res.data.zaposleni);
            setZaposleni(res.data.zaposleni);
            // msm da je ovo wrap prom

          

     }, [zaposleni] );
    }
});

useEffect(() => {

 
       




      }, [zaposlen]);









  return (
    <>
    
    
   
    
      <Routes>
      <Route path='/login' element={ <LoginPage addToken={addToken}  dodajLozinku={dodajLozinku}  dodajMejl = {dodajMejl} login={login}  podaciZaPrijavu={podaciZaPrijavu}/>}></Route>
      
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/' element={<NavBar token={token} logout={logout}/>}>
       
     <Route path='zaposleni' element={<Unos user_id={user_id} show={show}  zaposlen={zaposlen}></Unos>}></Route>
     
       
      </Route>
      
      </Routes>
    
    </>
  );
 
}

export default App;

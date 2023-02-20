import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import React from "react";
import { Routes, Route}  from "react-router-dom";
import NavBar from './components/NavBar';
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import Unos from './components/Unos';
import Odlazak from './components/Odlazak';
import ZaposleniEvidencija from './components/ZaposleniEvidencija';




function App() {
  const navigate=useNavigate();

  const[token, setToken]= useState("");
  const[admin , setAdmin]= useState(0);
  const[zaposlen, setZaposlen]=useState(0);
  const[user_id, setUser_id]= useState(0);
 const[show, setShow]= useState('ghost');
 const[show2, setShow2]= useState('ghost');
 const [vremeOd, setVremeOd]=useState();
  const [zaposleni, setZaposleni]= useState();
  const[evidencije, setEvidencije]= useState();
  const[evidencijaZaposlenog, setEvidencijaZaposlenog]= useState();
  const[evidID, setEvidID] = useState(0);
  const[evidVremeOd, setEvidVremeOd]=useState();
  const[ zapBris, setZapBris]= useState(0);
  const[dat, setDat]=useState({
    day:"",
    month:"",
    year:"",
  });

  function  addToken(token){
    setToken(window.sessionStorage.getItem("token"));
  }

  const logout = () => {
    console.log("asd", token);

    axios.post("http://127.0.0.1:8000/api/logout", "", {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      }).then(function () {
       
      })
      .catch(function (error) {
        console.log(error);
      });
      setToken(null);
      window.sessionStorage.setItem("token","");
      window.sessionStorage.setItem("isAdmin", 0);
      window.sessionStorage.setItem("user_id", 0 );
      window.sessionStorage.setItem("token_reg","");
      navigate("/login");

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
window.sessionStorage.setItem("isAdmin", res.data.admin);
window.sessionStorage.setItem("user_id", res.data.user_id);
setAdmin(res.data.admin);
navigate("/zaposleni");
//window.location.reload(true);
  } else {
    alert("Pogresi kredencijali! Pokusajte ponovo");

  }
}).catch((e)=>{
  console.log(e);
 
  
});
  }


 
  $(document).ready( 
    function () {
        
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
                {"data":null , defaultContent:"<button class='btn' variant='primary'   >evidentiraj dolazak</button><button class='btn3'>obrisi zaposlenog</button>" , targets:-1
                  }
               
          ]},
        );
        $('#table .btn ').on('click', function(){
        console.log(dat);
          if(window.sessionStorage.getItem("isAdmin")==0)  { alert("Nisu vam dostupne ove opcije");
          $(this).class='ghost';
        }  else{
          
          let z = $('#table').DataTable().row($(this).closest('tr')).data();
  //console.log(z.id);
setZapID(z.id);
setShow('normal');
  
    }});
   $('#table .btn3 ').on('click', function(){
    if(window.sessionStorage.getItem("isAdmin")==0)  { alert("Nisu vam dostupne ove opcije");}  else{
      if(zapBris!=0) alert("Ne mogu se obrisati 2 zaposlena odjednom");
    let zap_bris = $('#table').DataTable().row($(this).closest('tr')).data();

    console.log(zap_bris);
    console.log(zap_bris.id);
    setZapBris(zap_bris.id);
  
    }});      

} );  

$(document).ready( 
  function () {
      
      $('#tableE').DataTable( {

          "bDestroy": true,
          columnDefs: [{
              "defaultContent": "-",
              "targets": "_all"
            }],
            buttons: [
              'copy', 'excel', 'pdf'
          ],
          data: evidencije,
          columns: [
            {"data":"id"},
              { "data": "datum" },
              { "data": "vremeOd"},
              { "data": "vremeDo" },
              { "data": "zaposleni.name" },
              { "data": "evidentirao/la.name" },
              {"data":null , defaultContent:"<button class='btn2' variant='primary'   >evidentiraj odlazak</button> "
                }
             
        ]},
      );
      $('#tableE .btn2 ').on('click', function(){
        if(window.sessionStorage.getItem("isAdmin")===0)  { alert("Nisu vam dostupne ove opcije");}  else{
        let evid = $('#tableE').DataTable().row($(this).closest('tr')).data();

setEvidID(evid.id);
setEvidVremeOd(evid.vremeOd);
setShow2('normal');
  
  }});
     

} );  
$(document).ready( 
  function () {
      
      $('#tableZE').DataTable( {

          "bDestroy": true,
          columnDefs: [{
              "defaultContent": "-",
              "targets": "_all"
            }],
            buttons: [
              'copy', 'excel', 'pdf'
          ],
          data: evidencijaZaposlenog,
          columns: [
              { "data": "datum" },
              { "data": "vremeOd"},
              { "data": "vremeDo" },
             
             
        ]},
      );
     

} );  

useEffect(()=>{
  if( window.sessionStorage.getItem("token") !== "" && window.sessionStorage.getItem("token") !== null){
    if(zaposleni == null) {
        axios.get("http://127.0.0.1:8000/api/zaposleni").then((res) =>{
            setZaposleni(res.data.zaposleni);

          

     }, [zaposleni] );
    }
    if(evidencijaZaposlenog == null) {
      axios.get("http://127.0.0.1:8000/api/zaposleni/"+window.sessionStorage.getItem("user_id")+"/evidencije" , {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
        },
      }).then((res) =>{
          setEvidencijaZaposlenog(res.data.evidencije);

        

   }, [evidencijaZaposlenog] );
  }
    if(evidencije == null) {
      axios.get("http://127.0.0.1:8000/api/evidencija" , {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
        },
      }).then((res) =>{
        setEvidencije(res.data.evidencije);

        

   }, [evidencije] );
  

  if(zapBris!=0) {
    console.log(zapBris);
    { zapBris== window.sessionStorage.getItem("user_id") ?  console.log("Vrednost nije prosledjena") :
     axios.delete("http://127.0.0.1:8000/api/zaposleni/"+zapBris, {
       headers: {
         Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
       },
     }).then((res) =>{
      
       if(res.data.success=== true) {
        
         alert("Uspesno obrisan zaposleni" );
  window.location.reload(true);
         //navigate("/");
     
         console.log(res.data);
  
       } else {
         alert("Doslo je do greske, zaposleni nije obrisan" );
     
       }
     }).catch((e)=>{
       console.log(e);
     
       
     });
     
   }
  }}


  }

  if(dat.day=="") {
 
     axios.get("https://www.timeapi.io/api/Time/current/ip?ipAddress=237.71.232.203")
      .then((res) => {
        setDat({
      year:res.year,
      month:res.month,
      day:res.day,
  
  
  
        });

        console.log(dat.day);
      
      },[dat])
       .catch((e) => console.log(e));
    
  

  }

});

function dodaj(e){
 setVremeOd(e.target.value) ;

}



 function evidentiraj(e){
   e.preventDefault();
   let podaciZaEvid = {
     vremeOd:vremeOd,
     zaposleni_id: zaposlen,
     user_id:window.sessionStorage.getItem("user_id"),
   };
   console.log(user_id , podaciZaEvid.zaposleni_id, podaciZaEvid.vremeOd );

   {zaposlen == 0 ?  console.log("Vrednost nije prosledjena") :
   axios.post("http://127.0.0.1:8000/api/evidencija", podaciZaEvid, {
     headers: {
       Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
     },
   }).then((res) =>{
    
     if(res.data.success=== true) {
      
       alert("Uspesno evidentirano" );
window.location.reload(true);
       navigate("/");
   
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
    <>
    
    
   
    
      <Routes>
      <Route path='/login' element={ <LoginPage addToken={addToken}  dodajLozinku={dodajLozinku}  dodajMejl = {dodajMejl} login={login}  podaciZaPrijavu={podaciZaPrijavu}/>}></Route>
      
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/' element={<NavBar dat={dat}  token={token} logout={logout} admin={admin}/>}>
       
     <Route path='zaposleni' element={<Unos evidentiraj={evidentiraj} show={show}  dodaj={dodaj}></Unos>}></Route>
     <Route path='evidencije' element={ <Odlazak   evid_id={evidID} show2={show2} evidVremeOd={evidVremeOd}    ></Odlazak>   }>   </Route>
     <Route path='mojeEvidencije' element={<ZaposleniEvidencija></ZaposleniEvidencija>} ></Route>

      </Route>
      
      </Routes>
    
    </>
  );
 
}

export default App;

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


function NavBar(props) {
  const[tok,setTok]=useState(props.token);
    
    

    function setToken(){
    setTok(window.sessionStorage.getItem("token"));
    window.location.reload(false);
    }

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">ShiftOn</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
        { "" != window.sessionStorage.getItem("token") ? ( <a className="nav-link active"  onClick={setToken} aria-current="page" href="/zaposleni">Svi zaposleni</a> ) :  ( <a  className="nav-link disabled"  onClick={setToken} aria-current="page"  tabindex="-1" aria-disabled="true" href="/zaposleni">Svi zaposleni</a> ) }
          </li>
          <li className="nav-item">
          { "" != window.sessionStorage.getItem("token") && window.sessionStorage.getItem("isAdmin")==1 ? ( <a className="nav-link active"  onClick={setToken} aria-current="page" href="/evidencije">Sve evidencije</a>)  :    ( <a  className="nav-link disabled"  onClick={setToken} aria-current="page"  tabindex="-1" aria-disabled="true" href="/evidencije">Sve evidencije</a>)  }
          </li>
          <li className="nav-item">
          { "" != window.sessionStorage.getItem("token") && window.sessionStorage.getItem("isAdmin")==0 ? ( <a className="nav-link active"  onClick={setToken} aria-current="page" href="/mojeEvidencije">Moje evidencije</a>)  :    ( <a  className="nav-link disabled"  onClick={setToken} aria-current="page"  tabindex="-1" aria-disabled="true" href="/evidencije">Moje evidencije</a>)  }
          </li>
          
          <li className="nav-item">
          {("" == window.sessionStorage.getItem("token") || window.sessionStorage.getItem("token")==null) ? (<a className="nav-link" href="/login" >Login</a>) : (<a className="nav-link"  onClick={props.logout} href="/login">Logout</a> )}          </li>
          <li className="nav-item dropdown">
            
            
          </li>
          <li className="nav-item">
          </li>
        </ul>
       <div>   <p  onClick={props.api}> Kada je sledeći državni praznik? {props.dat.pNaziv} :{props.dat.pDatum} </p></div>
      </div>
    </div>
  </nav>
  <Outlet/>{("" == window.sessionStorage.getItem("token")) ? (<div>Kako biste pristupili funkcionalnostima ShiftOn sajta ulogujte se!</div>) : (<></> )}</div>
 
  )
}

export default NavBar

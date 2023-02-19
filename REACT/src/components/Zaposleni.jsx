import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useNavigate } from 'react-router-dom';




function Zaposleni(props) {
   

 
  return (<>
 
    <table id="table" class="display" >
    <thead><tr>
      <th id="idZap">Zaposleni ID</th>
        <th>Ime i prezime</th>
        <th>Email</th>
        <th>Pol</th>
        <th>Odeljenje</th>
        <th>Evidencije</th>
        </tr>
        </thead>

    
</table>


</>
  )
}

export default Zaposleni

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import DataTables from 'datatables.net';



function Zaposleni() {
    $(document).ready( function () {
        $('#table').DataTable();
    } );
    
    const[zaposleni, setZaposleni]= useState();
    useEffect(()=>{
        if(zaposleni == null) {
            axios.get("http://127.0.0.1:8000/api/zaposleni").then((res) =>{
                console.log(res.data);
                setZaposleni(res.data.zaposleni);
                // msm da je ovo wrap prom
         } );
        }
    });
  
  return (
    <table id="table" class="display">
    <thead>
        <tr>
            <th>Ime i prezime</th>
            <th>Kontakt email</th>
            <th>Pol</th>
            <th>Odeljenje</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td> 
             <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
        </tr>
    </tbody>
</table>
  )
}

export default Zaposleni

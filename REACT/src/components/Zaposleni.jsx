import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import DataTables from 'datatables.net';



function Zaposleni() {
    const[zaposleni, setZaposleni]= useState();

   


    $(document).ready( 
        function () {
            
            console.log(zaposleni);

            $('#table').DataTable( {

                "bDestroy": true,
                columnDefs: [{
                    "defaultContent": "-",
                    "targets": "_all"
                  }],
                data: zaposleni,
                columns: [
                    { "data": "name" },
                    { "data": "email"},
                    { "data": "pol" },
                    { "data": "odeljenje.naziv" }
                   
              ]},
            );
    
      

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
  const results=[];

 
  return (
    <table id="table" class="display" >
    <thead><tr>
        <th>Ime i prezime</th>
        <th>Email</th>
        <th>Pol</th>
        <th>Odeljenje</th>
        </tr>
        </thead>

    
</table>
  )
}

export default Zaposleni

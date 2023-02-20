import React from 'react';

import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";




function Evidencije() {
   

 
  return (<>
 
    <table id="tableE" class="display" >
    <thead><tr>
      <th id="idZap">Evidencija ID</th>
        <th>Datum</th>
        <th>Vreme dolaska</th>
        <th>Vreme odlaska</th>
        <th>Zaposleni</th>
        <th>Administrator</th>
        <th>Unos odlaska</th>
        </tr>
        </thead>

    
</table>


</>
  )
}

export default Evidencije

import React from 'react';

import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";




function ZaposleniEvidencija() {
   

 
  return (<>
 
    <table id="tableZE" class="display" >
    <thead><tr>
        <th>Datum</th>
        <th>Vreme dolaska</th>
        <th>Vreme odlaska</th>
        </tr>
        </thead>

    
</table>


</>
  )
}

export default ZaposleniEvidencija
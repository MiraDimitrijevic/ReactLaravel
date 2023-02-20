import React from 'react'
import Evidencije from './Evidencije';
import FormaOdlazak from './FormaOdlazak';

function Odlazak({evid_id , show2, evidVremeOd} ) {
  return (<div>
  <Evidencije></Evidencije>
  <FormaOdlazak  evid_id={evid_id} show2={show2} evidVremeOd={evidVremeOd}  ></FormaOdlazak>
  </div>
  )
}

export default Odlazak
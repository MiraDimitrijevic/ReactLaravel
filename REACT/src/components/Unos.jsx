import React from 'react'
import Zaposleni from './Zaposleni';
import FormaEvidencija from './FormaEvidencija';

function Unos({zaposlen , user_id ,show} ) {
  return (<div>
  <Zaposleni></Zaposleni>
  <FormaEvidencija  zaposlen={zaposlen} user_id={user_id} show={show}  ></FormaEvidencija>
  </div>
  )
}

export default Unos

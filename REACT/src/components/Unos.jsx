import React from 'react'
import Zaposleni from './Zaposleni';
import FormaEvidencija from './FormaEvidencija';

function Unos({evidentiraj , dodaj,show} ) {
  return (<div>
  <Zaposleni></Zaposleni>
  <FormaEvidencija  dodaj={dodaj} evidentiraj={evidentiraj} show={show}  ></FormaEvidencija>
  </div>
  )
}

export default Unos

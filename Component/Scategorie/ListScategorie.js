import React, { useEffect } from 'react'
import { useState } from 'react' 
import axios from 'axios'


export default function ListScategorie() {

  const [listScategorie,setlistScategorie]=useState([])

  
  useEffect(()=>{
     axios.get("http://localhost:3001/api/scategories").then(res=>{
      setlistScategorie(res.data);
      
     })
  })
  return (
    <div>
      List des sous categories
      <table border={2}>
      <thead>
        <th>Id</th>
        <th>categorieID</th>
        <th>imagescat</th>
        <th>nomscategorie</th>
        
        <th collspan="2">Action</th>
      </thead>
      <tbody>
        {listScategorie.map((art,i)=>
        <tr key={i}>
          <td>{art._id}</td>
          
          <td><img src={art.imagescat} alt={art.id} width={200} height={200}/></td>
          <td>{art.nomscategorie}</td>
          
          <td>modifier supprimer</td>
        </tr>
        )}
      </tbody>
    </table>
    </div>
  )
}

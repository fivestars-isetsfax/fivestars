import React, { useEffect } from 'react'
import { useState } from 'react' 
import axios from 'axios'

export default function Listcategorie() {

  const [listcategorie,setlistcategorie]=useState([])

  
  useEffect(()=>{
     axios.get("http://localhost:3001/api/categories").then(res=>{
      setlistcategorie(res.data);
      
     })
  })
  return (
    <div>
      Liste des categories
    <table  border={1}>
      <thead>
        <th>Id</th>
        <th>images</th>
        <th>nomcategorie</th>
        <th collspan="2">action</th>
        
      </thead>
      <tbody>
        {listcategorie.map((art,i)=>
        <tr key={i}>
          <td>{art.id}</td>
          <td><img src={art.imagecategorie} alt={art.id} width={200} height={200}/></td>
          
          <td>{art.nomcategorie}</td>
          <td>modifier supprimer</td>
        </tr>
        )}
      </tbody>
    </table>
    </div>
  )
}

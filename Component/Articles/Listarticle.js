import React, { useEffect } from 'react'
import { useState } from 'react' 
import axios from 'axios'
export default function Listarticle() {
  const [listarticles,setlistarticles]=useState([])

  
  useEffect(()=>{
     axios.get("http://localhost:3001/api/articles")
     .then(res=>{
      setlistarticles(res.data);
      
     })
  })
  return (
    <div>
      Liste des articles
    <table border={1}>
      <thead>
        <th>Image</th>
        <th>referance</th>
        <th>designation</th>
        <th>QTé stocke</th>
        <th>Prix de ventes</th>
        <th collspan="2">Action</th>
      </thead>
      <tbody>
        {listarticles.map((art,i)=>
        <tr key={i}>
          <td><img src={art.imageartpetitf} alt={art.reference} width={200} height={200}/></td>
          <td>{art.reference}</td>
          <td>{art.designatio}</td>
          <td>{art.qtestock}</td>
          <td>{art.prixVente}</td>
          <td>modifier supprimer</td>
        </tr>
        )}
      </tbody>
    </table>
    </div>
  )
}


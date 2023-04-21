import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Country.module.css'

const Country = () => {
  const [current, setCurrent] = useState();
  const {name} = useParams();
  console.log(name);

  useEffect(()=>{
     getCountryByName();
  },[])

  const getCountryByName = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    setCurrent(data[0]);
  };

  console.log(current)

  

  if(!current) return "Loading...."

  
  return (
    <div className={styles.container}>
       <div className={styles.border}> 
        <img className={styles.image} src={current.coatOfArms.svg} alt={current.name.official}/>
        <h1 className={styles.header}>{current.name.official}</h1>
        <h2 className={styles.header}>{current.capital}</h2>
        <h3 className={styles.header}>{current.continents}</h3>
       </div> 
    </div>
  
  )
}

export default Country
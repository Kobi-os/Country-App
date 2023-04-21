import React, { useEffect, useState } from 'react'

const Country = () => {
  const [current, setCurrent] = useState();

  useEffect(()=>{
     getCountryByName();
  },[])

  const getCountryByName = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/Poland`);
    const data = await response.json();
    setCurrent(data[0]);
  };

  console.log(current)

  return (
    <div>Country</div>
  )
}

export default Country
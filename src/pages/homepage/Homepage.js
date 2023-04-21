import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import styles from './Homepage.module.css'

const Homepage = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = async() => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();
        setCountries(data)
    }

    const sortBy = (e) => {
        const mode = e.taraget.value;

        switch(mode) {
            case 'letter-asc' :
                setCountries(countries.sort((a,b) => {
                    if(a.name.original > b.name.original) return 1;
                    if(a.name.original < b.name.original) return -1;

                })) 
                break;
                default:
                    console.log(1223);
                    break;
        }
    }
 
    console.log(countries)

  return (
    <div>
      <h1 className={styles.header}>All countries</h1>

      {/* <select onChange={sortBy}>
        <option value="letter-asc">Sortuj po nazwie A-z</option>
        <option value="letter-desc">Sortuj po nazwie Z-A</option>
      </select> */}

      <div className={styles.wrapper}>
        {countries.map((item) => <Card key={item.name.common} country={item}/>)}
      </div>
    </div>
  )
}

export default Homepage

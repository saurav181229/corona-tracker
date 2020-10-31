import React,{useState,useEffect} from 'react';
import {Cards,Chart,CountryPicker} from './components';
import Styles from './App.module.css';
import {fetchData} from './api/'
import Image from './images/COVID-19.jpg';
const App = ()=>{

    const [value, setValue] = useState({
        data:{},
        country:''
    });
    
   useEffect ( ()=>{
     (async ()=>{      // used iffe for asyn await inside useEffect
        const val = await fetchData();
        //console.log(val)
        setValue({
            ...value,
            data:val,
        })
        })() ;
        //console.log(data);

    },[setValue]);
    
    const handleCountryChange = async(country)=>{
       const fetchedData = await fetchData(country);
       console.log(fetchedData);
       setValue({
           ...value,
           data:fetchedData,
           country:country
       })
     
    }
    const { data,country} = value
   
    return(
        <div className={Styles.container}>
            <img className={Styles.image} src={Image} alt="covid-19"  />
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} />
        </div>
    )
}

export default App;
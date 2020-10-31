import React, {useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api/index'
const CountryPicker = ({handleCountryChange})=>{

    const [fetchCountry,setFetchCountry] = useState([])
    useEffect(()=>{
        ( async ()=>{
            const val = await fetchCountries();
            setFetchCountry(val)
            

        }

        )();
     //   console.log(fetchCountry);
    },[setFetchCountry])
    //console.log(fetchCountry);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {fetchCountry.map((country,i)=><option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker    
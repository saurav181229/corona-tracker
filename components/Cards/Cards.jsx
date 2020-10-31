import React from 'react';
import {Card,CardContent,Typography,Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}})=>{

    if(!confirmed){
        return 'Loading...'
    }

    const obj ={confirmed:confirmed,recovered:recovered,deaths:deaths}
    const display = Object.keys(obj).map((state,i)=>(

                <Grid key={i} item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> {state} </Typography>
                            <Typography variant="h5">
                                <CountUp start={0}  end={obj[state].value} duration={3} separator="," />
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of covid </Typography>
                    </CardContent>
                    </Grid>
            ))

    return(
        <div className={styles.container}>
           <Grid container spacing={3} justify="center" >
        {display}
</Grid> 
        </div>
    )
}

export default Cards;

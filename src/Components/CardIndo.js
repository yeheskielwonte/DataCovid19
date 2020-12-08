import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

const Card =({confirmed,recovered,deaths})=>{
    const classes = useStyles();
    return(
        <div>
        <div>
            <React.Fragment>
                <Button variant="contained">Confirmed</Button>
                <Button className={classes.root} color="blue">{confirmed}</Button>
            </React.Fragment>
        </div>  
        <br/>
        <div style={{marginRight:450}}>
            <React.Fragment>
                <Button variant="contained">recovered</Button>
                <Button className={classes.root} color="blue">{recovered}</Button>
            </React.Fragment>
        </div>
        <br/>
        <div style={{marginRight:450}}>
            <React.Fragment>
                <Button variant="contained">deaths</Button>
                <Button className={classes.root} color="blue">{deaths}</Button>
            </React.Fragment></div>
        </div>
    )
}

export default Card;
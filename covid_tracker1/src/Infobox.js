import React from 'react';
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

const Infobox = ({ title, cases, total }) => {
    return (
        <>
        <Card className="infoBox">
            <CardContent>
                <Typography
                    color="textSecondary"  
                    className="infoBox__title"  
                >{ title }</Typography>
                <h2 className="infoBox__total">{ cases }</h2>
                <Typography
                    color="textSecondary"  
                    className="infoBox__total"  
                ><strong>TOTAL:</strong>  { total }</Typography>
            </CardContent>
        </Card> 
        </>
    )
};

export default Infobox;
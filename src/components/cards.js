import * as React from 'react';
import CountUp from "react-countup";
import { CardActionArea,Card,CardContent,Typography } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <div className="cards">
        <Card >
            <CardActionArea >
                <CardContent className='card card1'>
                    <Typography gutterBottom variant="h5" component="div">
                        Total Data Tested
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        <CountUp  start={0} end={4000}duration={2} separator=","/>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card >
            <CardActionArea>
                <CardContent className='card card2'>
                    <Typography gutterBottom variant="h5" component="div">
                        Total Positive Cases
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        <CountUp  start={0} end={2000}duration={2} separator=","/>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card >
            <CardActionArea>
                <CardContent className='card card3'>
                    <Typography gutterBottom variant="h5" component="div">
                        Total Negative Cases 
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        <CountUp  start={0} end={2000}duration={2} separator=","/>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
}

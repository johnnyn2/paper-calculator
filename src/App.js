import './App.css';
import React, { useState } from 'react';
import { TextField, Typography, Box, CardContent, Card } from '@mui/material';

const initState = {
  paperPerHand: 0,
  paperPerShard: 0,
  totalShard: 0,
  totalHandShard: 0,
  totalPaper: 0,
}
function App() {
  const [state, setState] = useState(initState);

  const onChange = (e) => {
    const {name, value} = e.target;
    if (value && value < 0) {
      return;
    }
    console.log('name: ', name);
    console.log('value: ', value);
    
    

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const {
    paperPerHand,
    paperPerShard,
    totalPaper,
  } = state;
  
  const totalShard = paperPerShard !== 0 ? Math.floor(totalPaper / paperPerShard) : 0;
  const totalShardPaper = totalShard * paperPerShard;
  const remainHand = paperPerHand !== 0 ?
    Math.floor((totalPaper - totalShardPaper) / paperPerHand)
    : 0;
  const handPerShard = paperPerHand !== 0 ? Math.floor(paperPerShard / paperPerHand) : 0;
  const remainShardPaper = paperPerShard - handPerShard * paperPerHand;
  const totalRemainHandPaper = remainHand * paperPerHand;
  const remainPaper =  totalPaper - totalShard * paperPerShard - remainHand * paperPerHand;
  return (
    <Box className="outer-container">
      <Card sx={{padding: '2rem'}}>
        <CardContent>
          <Typography sx={{paddingBottom: '1rem'}} variant='h5'>何業成專用印刷換算器</Typography>
          <Box className="container">
            <Typography variant="body2">1手 = </Typography>
            <TextField
              type="number"
              value={paperPerHand !== 0 ? paperPerHand : ''}
              onChange={onChange}
              size="small"
              sx={{marginX: '10px'}}
              InputProps={{
                inputProps: {min: 0}
              }}
              name="paperPerHand"/>
            <Typography variant="body2">張</Typography>
          </Box>
          <Box className="container" sx={{marginY: '10px'}}>
            <Typography variant="body2">1舊 = </Typography>
            <TextField
                type="number"
                value={paperPerShard !== 0 ? paperPerShard : ''}
                onChange={onChange}
                size="small"
                sx={{marginX: '10px'}}
                name="paperPerShard"/>
            <Typography variant="body2">
            張
            </Typography>
          </Box>
          <Box className="container" sx={{marginY: '10px'}}>
            <Typography variant="body2">
              總共有
            </Typography>
            <TextField
                type="number"
                value={totalPaper !== 0 ? totalPaper : ''}
                onChange={onChange}
                size="small"
                sx={{marginX: '10px'}}
                name="totalPaper"/>
            <Typography variant="body2">
              張
            </Typography>
          </Box>
          <div className="divider"></div>
          <Typography sx={{marginTop: '1rem'}}>等於</Typography>
          <Typography>{totalShard}舊 + {remainHand}手 + {remainPaper}張</Typography>
          <Typography>{totalShard}舊 = {totalShardPaper}張</Typography>
          <Typography>{remainHand}手 = {totalRemainHandPaper}張</Typography>
          <Typography>1舊 = {handPerShard}手 + {remainShardPaper}張</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;

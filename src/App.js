import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { TextField, Typography, Box, Horiz, CardContent, Card } from '@mui/material';

const initState = {
  paperPerHand: 0,
  handPerShard: 0,
  totalShard: 0,
  totalHandShard: 0,
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
    handPerShard,
    totalShard,
  } = state;
  const totalPaperShard = paperPerHand * handPerShard;
  const totalPaper = paperPerHand * handPerShard * totalShard;
  return (
    <Box className="outer-container">
      <Card sx={{padding: '2rem'}}>
        <CardContent>
          <Typography sx={{paddingBottom: '1rem'}} variant='h5'>何業成專用印刷換算器</Typography>
          <Box className="container">
            <Typography variant="body2">一手 = </Typography>
            <TextField
              type="number"
              value={paperPerHand}
              onChange={onChange}
              size="small"
              sx={{marginX: '10px'}}
              InputProps={{
                inputProps: {min: 0}
              }}
              name="paperPerHand"/>
            <Typography variant="body2">張紙</Typography>
          </Box>
          <Box className="container" sx={{marginY: '10px'}}>
            <Typography variant="body2">一舊 = </Typography>
            <TextField
                value={handPerShard}
                onChange={onChange}
                size="small"
                sx={{marginX: '10px'}}
                name="handPerShard"/>
            <Typography variant="body2">
            手
            </Typography>
          </Box>
          <Box className="container" sx={{marginY: '10px'}}>
            <TextField
                value={totalShard}
                onChange={onChange}
                size="small"
                sx={{marginRight: '10px'}}
                name="totalShard"/>
            <Typography variant="body2">
            舊
            </Typography>
          </Box>
          <div className="divider"></div>
          <Typography sx={{marginTop: '1rem'}}>總數</Typography>
          <Typography>一舊總共有{totalPaperShard}張紙</Typography>
          <Typography>總共有{totalPaper}張紙</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Home.css';

export default function Home() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '95%',
        backgroundColor: /* '#020509' */ '#2d3033',
        float: 'right',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Gotham',
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '.3rem',
            fontWeight: '500',
            color: 'white'
          }}
        >
          Pablo Carro
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Gotham',
            fontWeight: '500',
            fontSize: '5rem',
            letterSpacing: '-.05em',
          }}
        >
          Developer
        </Typography>
        <h1>
          <span>always be</span>
          <Box class="message">
            <Typography class="word1">close</Typography>
            <Typography class="word2">code</Typography>
            <Typography class="word3">creating</Typography>
          </Box>
        </h1>
      </Box>
    </Box>
  );
}

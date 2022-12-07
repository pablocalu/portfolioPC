import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'

export default function Home() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '95%',
        backgroundColor: 'blue',
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
        <Typography sx={{fontFamily: 'Gotham', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '.3rem', fontWeight: '500'}}>Pablo Carro</Typography>
        <Typography sx={{fontFamily: 'Gotham', fontWeight: '500', fontSize: '5rem', letterSpacing: '-.05em', }}>Developer</Typography>
        <Typography _before={{content: 'hola'}} _after={{content:'chau'}} sx={{}}>Distintas cosas transition</Typography>
      </Box>
    </Box>
  );
}

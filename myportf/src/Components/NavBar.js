import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function NavBar(){
    return (
        <Box>
            <Box sx={{backgroundColor: 'red', width:'5vw', height: '100vh', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center', position: 'fixed'}}>
                <Box>Logo</Box>
                <Typography sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', width:'5vw', backgroundColor: 'green' }}>Proyectos</Typography>
                <Typography sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', width:'5vw'}}>Sobre Mi</Typography>
                <Typography sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', width:'5vw'}}>Contacto</Typography>
                <Typography sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', width:'5vw'}}>LinkedIn</Typography>
                <Typography sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', width:'5vw'}}>Github</Typography>
            </Box>
        </Box>
    )
}
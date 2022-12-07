import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function NavBar(){
    return (
        <Box>
            <Box sx={{backgroundColor: 'red', width:'5vw', height: '100vh', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center', position: 'fixed'}}>
                <Box>Logo</Box>
                <Typography sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', width:'5vw' }}>Proyectos</Typography>
                <Typography sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', width:'5vw'}}>Sobre Mi</Typography>
                <Typography sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', width:'5vw'}}>Contacto</Typography>
                <Typography sx={{}}><GitHubIcon/></Typography>
                <Typography sx={{}}><LinkedInIcon/></Typography>
            </Box>
        </Box>
    )
}
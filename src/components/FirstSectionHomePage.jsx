import { Box, Typography } from '@mui/material';

const FirstSectionHomePage = () => {
    return (
        <Box m={"10rem 0 0"} pb={"10rem"} borderBottom={"1px solid rgba(0,0,0,0.1)"}>
            <Typography variant='h2' component={"h2"} width="90%" textAlign={'center'} m={'0 auto '}>Heartfelt <span>Reflections:</span> Stories of Love, Loss, and Growth</Typography>
            <Typography variant='h5' component={"p"} m={'2rem auto'} width={'70%'} textAlign={'center'}>Revision Welcomes to ultimate source for fresh perspectives! Explore curated content to enlighten, entertain and engage global readers.</Typography>
        </Box>
    );
}

export default FirstSectionHomePage;

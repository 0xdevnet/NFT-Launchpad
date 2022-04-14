import React from 'react';
import NextImage from 'next/image';
import {
    Button,
    Paper,
    Box,
    Stack,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import classes from '../HomePage.module.scss';
import LogoImage from '../../../../public/images/header-logo.png'

const HeaderSection = () => {
    const theme = useTheme();
    return (
        <Stack>
            <Box>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} lg={6} >
                        <Typography
                            variant='h1'
                            sx={{
                                color: (theme) => theme.palette.primary.main,
                                fontWeight: 'bold'
                            }}
                        >
                            FlyPad
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                                // color: (theme) => theme.palette.primary.main,
                                fontWeight: 'bold'
                            }}
                        >
                            <Box>The one stop</Box>
                            <Box>NFT launch</Box>
                            <Box>shop</Box>
                        </Typography>
                        {/*<Typography
                            variant='h6'
                            sx={{
                                fontWeight: 'bold'
                            }}>
                            How fly is too fly?
                        </Typography>
                        <Box>
                            <Button variant="contained" size="large" style={{ marginRight: "10px" }}>Get Started</Button>
                            <Button variant="contained" size="large">Create</Button>
                        </Box>*/}
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box alignItems="center" justifyContent="center">
                            <NextImage src={LogoImage} alt="" width="300px" height="300px" objectPosition="center" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};

export default HeaderSection;

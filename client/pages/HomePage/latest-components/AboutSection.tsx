import React from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    Typography,
    Button
} from '@mui/material';
import Typewriter from "typewriter-effect";
import classes from '../HomePage.module.scss';
import { useTheme } from '@mui/material';


const CoreCard: React.FC = () => {
    const theme = useTheme()
    const isDarkTheme = theme.palette.mode === 'dark'
    return (
        <Card sx={{ height: '100%' }} className={isDarkTheme ? classes.darkCardBackground : ""}>
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(20)
                                .typeString('FlyPad is an NFT Launchpad and incubation service offering the most competitive pricing and services including: launch pad, doxxing packages, brand development, advisory/oversight, marketing/strategic partnerships, and liquidity solutions (beta).<br/><br/> We do shit')
                                .pauseFor(1000)
                                .start();
                        }}
                    />
                </Typography>
            </CardContent>
        </Card>
    );
};

const AboutSection = () => {
    return (
        <Stack spacing={6}>
            <Box>
                <Typography
                    variant="h4"
                    display="inline"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    What is
                    <Box display="inline" sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: 'bold',
                        paddingLeft: '10px'
                    }}>FlyPad</Box>
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid item xs={10} sm={10} lg={10} >
                        <CoreCard />
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};

export default AboutSection;

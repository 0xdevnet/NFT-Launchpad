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
    const renderFullMenu = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <Stack sx={{
            paddingTop: "60px"
        }}>
            <Box>
                <Grid flexDirection={renderFullMenu ? 'row' : 'column-reverse'} container spacing={2} alignItems="center" justifyContent="center" >
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
                                fontWeight: 'bold'
                            }}
                        >
                            <Box>The one stop</Box>
                            <Box>NFT launch</Box>
                            <Box>shop</Box>
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: 'bold'
                            }} my={4}>
                            How fly is too fly?
                        </Typography>
                        <Box>
              <Button
                size="large"
                variant="contained"
                color={'primary'}
                sx={[
                  {
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.main,
                    },
                  },
                  {marginRight: '10px', padding: '15px 30px', color: '#fff'},
                ]}
              >
                Get Started
              </Button>
              <Button
                variant="contained"
                size="large"
                color={'secondary'}
                sx={[
                  {
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                    },
                  },
                  {padding: '15px 50px', color: '#fff'},
                ]}
              >
                Create
              </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box alignItems="center" justifyContent="center">
                            <NextImage src={LogoImage} alt="" width="250px" height="250px" objectPosition="center" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};

export default HeaderSection;

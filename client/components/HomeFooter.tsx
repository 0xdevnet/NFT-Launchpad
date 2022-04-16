import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  ContainerProps,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Instagram, Twitter } from '@mui/icons-material'
import { borderRadius, padding } from '@mui/system'
import DiscordIcon from '../pages/HomePage/components/DiscordIcon';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const links = ['Magic Eden', 'Fly Coin', 'Home', 'About Us']

// const Link = (props) => {
//   const {link} = props
//   return (
//     <Link
//   )
// }

const HomeFooter: React.FC = () => {
  const [scroll, setScroll] = useState(0);
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  const mobileView = useMediaQuery(theme.breakpoints.down('md'))
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", onScroll);
  }
  const goTop = () => {
    if (typeof window !== "undefined") {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    setScroll(0);
  }
  return (
    <Box
      sx={{
        backgroundColor:
          isDarkMode ? 'rgba(0,0,0,0.1)' : 'white',
        padding: theme.spacing(2, 2)
      }}
    >
      <Stack
        direction={mobileView ? 'column' : 'row'}
        gap={10}
        sx={{
          padding: (theme: Object) => ({
            xs: theme.spacing(4, 2),
            sm: theme.spacing(4, 4),
            md: theme.spacing(8, 12),
          }),
        }}
      >
        <Stack
          sx={{
            borderTop: '1px solid' + theme.palette.secondary.light,
            paddingTop: '40px',
          }}
          gap={4}
        >
          <Typography variant="body2"> Get The Latest FlyPad Updates</Typography>
          <TextField
            placeholder="Your Email address"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    color="primary"
                    sx={[
                      {
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                        },
                      },
                      {
                        backgroundColor: theme.palette.secondary.main,
                        color: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                      },
                    ]}
                  >
                    Subscribe
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              paddingRight: 0,
            }}
          >
            <Button
              sx={{
                backgroundColor: theme.palette.secondary.main,
                padding: '10px',
                margin: 0,
                color: 'white',
              }}
            >
              Subscribe
            </Button>
          </TextField>
          Email is safe. We don't spam.
        </Stack>
        <Stack>
          <Typography variant="h5">FlyPad</Typography>
          <Stack gap={2} paddingTop="10px">
            {links?.map((link, index) => {
              return <Link href={link} key={`link-${index}`}>{link}</Link>
            })}
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h5"> Recent Sell Outs</Typography>
        </Stack>
      </Stack>
      <Stack
        direction={mobileView ? 'column' : 'row'}
        justifyContent="space-between"
        sx={{
          borderTop: '1px solid' + theme.palette.secondary.light,
        }}
      >
        <Stack
          direction='row'

          justifyContent={mobileView ? 'center' : 'space-between'}
          sx={{
            padding: mobileView ? theme.spacing(1) : theme.spacing(4, 12),
          }}
          gap={mobileView ? 5 : 1}
        >
          <Box borderRight={mobileView ? '' : "1px solid black"} paddingRight={mobileView ? '' : theme.spacing(3)}>
            Copyright © 2022 FlyPad
          </Box>
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            Terms Privacy Policy
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent='center' gap={1} paddingRight={mobileView ? ' ' : '100px'}>
          <Twitter
            sx={[
              {
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                },
              },
              {
                backgroundColor: isDarkMode
                  ? theme.palette.primary.light
                  : theme.palette.secondary.light,
                borderRadius: '100%',
                padding: '5px',
                cursor: 'pointer',
                fontSize: '35px',
              },
            ]}
          />
          <DiscordIcon />
          <Box display="inline-flex" sx={{ position: "fixed", right: "30px", bottom: "30px", height: "46px!important", width: "46px!important", cursor: "pointer" }} onClick={goTop}>
            <CircularProgress variant="determinate" value={scroll} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={5}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="caption" component="div" color="textSecondary">
                {scroll === 0 ? "" : <ArrowUpwardIcon sx={{ color: theme.palette.primary.main }} />}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default HomeFooter

import React from 'react'
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
} from '@mui/material'
import {Instagram, Twitter} from '@mui/icons-material'
import {borderRadius, padding} from '@mui/system'
import DiscordIcon from '../pages/HomePage/components/DiscordIcon'

const links = ['Magic Eden', 'Fly Coin', 'Home', 'About Us']

// const Link = (props) => {
//   const {link} = props
//   return (
//     <Link
//   )
// }

const HomeFooter: React.FC = () => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.1)' : 'white',
      }}
    >
      <Stack
        direction="row"
        gap={10}
        sx={{
          padding: (theme) => ({
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
                <InputAdornment edge="end" position="end">
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
            {links?.map((link) => {
              return <Link href={link}>{link}</Link>
            })}
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h5"> Recent Sell Outs</Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          borderTop: '1px solid' + theme.palette.secondary.light,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            padding: '30px 100px',
          }}
          gap={5}
        >
          <Box borderRight="1px solid black" paddingRight="30px">
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
        <Stack direction="row" alignItems="center" gap={1} paddingRight="50px">
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
        </Stack>
      </Stack>
    </Box>
  )
}

export default HomeFooter

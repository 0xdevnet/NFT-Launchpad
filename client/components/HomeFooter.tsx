import React from 'react'
import {
  Box,
  Button,
  Container,
  ContainerProps,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme
} from '@mui/material'
import { Instagram, Twitter } from '@mui/icons-material'

const links = ['Magic Eden', 'Fly Coin', 'Home', 'About Us']

// const Link = (props) => {
//   const {link} = props
//   return (
//     <Link
//   )
// }

const HomeFooter: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? 'rgba(0,0,0,0.1)' : 'white',
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
            borderTop: '1px solid ',
            paddingTop: '40px',
          }}
          gap={4}
        >
          <Typography variant="p"> Get The Latest FlyPad Updates</Typography>
          <TextField
            placeholder="Your Email address"
            inputProps={{
              style: {
                padding: 10,
                paddingRight: 0,
                paddingRight: 0,
                margin: 0,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    sx={{
                      backgroundColor: 'black',
                      padding: '10px',
                    }}
                  >
                    Subscribe
                  </Button>
                </InputAdornment>
              ),
            }}
            sx={{
              paddingRight: 0,
            }}
          />
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
          borderTop: '1px solid black',
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
          <Box
            sx={{
              borderRight: '1px solid black',
              paddingRight: '30px',
            }}
          >
            Copyright © 2022 FlyPad
          </Box>
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            Terms Privacy Policy
          </Box>
          <Stack direction="row">
            <Twitter />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default HomeFooter

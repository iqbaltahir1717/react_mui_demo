import { Stack, Button, IconButton, ButtonGroup } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href="https://google.com">Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant="outlined" color="primary" startIcon={<LoginIcon />} >Login</Button>
            <Button variant="outlined" color="secondary">Selengkapnya</Button>
            <Button variant="outlined" color="info">Info</Button>
            <Button variant="text" color="success">Success</Button>
            <Button variant="contained" color="error">Error</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant="contained" size='small'>Small</Button>
            <Button variant="contained" size='medium'>Medium</Button>
            <Button variant="contained" size='large'>Large</Button>
        </Stack>
        <Stack spacing={2} direction='row' display='block'>
            <Button variant='text' startIcon={<AccountCircleIcon />}> Samuel R.</Button>
            <Button variant='contained' endIcon={<AccountCircleIcon />} disableElevation disableRipple onClick={() => alert('Login Before')}> Profile</Button>
            <IconButton aria-label='login' size="small">
                <LoginIcon /> 
            </IconButton>
            <IconButton aria-label='login' color="success" size="small">
                <AccountCircleIcon /> 
            </IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-aria-label="alignment button group">
                <Button onClick={() => alert('before click')}>Before</Button>
                <Button>Next</Button>
                <Button>Last</Button>
            </ButtonGroup>
        </Stack>
    </Stack>
  )
}

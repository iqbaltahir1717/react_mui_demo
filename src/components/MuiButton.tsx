import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import { useState } from "react";

export const MuiButton = () => {
    const [formats, setFormats] = useState<string[]>([])
    console.log({
        formats
    })
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats)
    }
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
            <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label="alignment button group">
                <Button onClick={() => alert('before click')}>Before</Button>
                <Button>Next</Button>
                <Button>Last</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup arial-label='text formatting' value={formats} onChange={handleFormatChange}>
                <ToggleButton value='bold' arial-label='bold'><FormatBold /></ToggleButton>
                <ToggleButton value='italic' arial-label='italic'><FormatItalic /></ToggleButton>
                <ToggleButton value='underlined' arial-label='underlined'><FormatUnderlined /></ToggleButton>
            </ToggleButtonGroup>

        </Stack>
    </Stack>
  )
}

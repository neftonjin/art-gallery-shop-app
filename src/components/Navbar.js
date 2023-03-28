import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';

import Logout from './Logout';

export default function Navbar() {
    return (
      <AppBar position="static">
        <Toolbar>
        <Button variant="h6">Artflow</Button>
          
          
          <Logout />
          <div style={{ flexGrow: 1 }} />
          <IconButton aria-label="SearchTwoToneIcon">
      <SearchTwoToneIcon />
    </IconButton>

    <IconButton aria-label="CottageTwoToneIcon">
      <CottageTwoToneIcon />
    </IconButton>

            </Toolbar>
      </AppBar>
    );
  }
  
import React from "react";
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from '@mui/material/MenuList';
import { useRoutes, Link } from 'raviger';
// import { useRoutes, Link, useQueryParams } from 'raviger';
import { useState } from 'react';
import routes from '../router';


function Navbar() {
    const [check, setCheck] = useState(false);
  function handleClick() {
    if (!check) {
      setCheck(true)
    }
    else {
      setCheck(false)
    }
    console.log(check)
  }
  const routeResult = useRoutes(routes);

    return (
<div>
        <AppBar>
          <MenuIcon onClick={handleClick}>
            
            
          </MenuIcon>
          {check ? (
            
            <Paper>
            <MenuList>
            <Link href="/rankings">Rankings</Link>
            <Link href="/ramblings">Ramblings</Link>
            <Link href="/rumblings">Rumblings</Link>
            {routeResult}
            </MenuList>
            </Paper>
            
          
          ):
          <div></div>
        }
            
        </AppBar>
      </div>
    );
}

export default Navbar;
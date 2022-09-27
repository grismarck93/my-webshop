import React, { useState } from 'react';
import {AppBar, Button, Tab, Tabs, Toolbar} from '@mui/material';
import BuyingButton from './BuyingButton';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/AuthReducer';

const Pages = ["Kategóriák", "Rólunk"];

const Header =(props) => {

    const [value, setValue] = useState();

    const isAuth = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout())
    };

  return (
        <React.Fragment>
            <AppBar sx={{background: '#0e0eaa'}}>
                <Toolbar>                    
                    <h1>Electronics Webshop</h1>
                    <Tabs sx={{marginLeft: '700px'}}
                    textColor="inherit" 
                    value={0} 
                    onChange={(e, value) => setValue(value)}
                    indicatorColor="secondary">
                        {
                            Pages.map((page, index) =>(
                                <Tab key={index} label={page}/>                                
                            ))
                        };
                    <BuyingButton onClick={props.onShowCart} sx={{marginLeft: 'auto'}}/>
                    </Tabs>
                    <Button sx={{marginLeft: 'auto'}}variant="contained" onClick={logoutHandler}>Logout</Button>
                </Toolbar>
            </AppBar>
            <div>
                
            </div>
        </React.Fragment>
  )
}

export default Header;
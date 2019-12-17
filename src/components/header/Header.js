import React from 'react'
import { AppBar, Typography, Toolbar,Fab } from '@material-ui/core';

const style = {
    buttonIdentifier : {
        fontSize: 15,
        marginRight: 15,
        background: 'transparent',
        boxShadow: 'none',
        color: '#E91D3D',
        paddingRight: 20,
        paddingLeft : 20
    },
    buttonConnecter: {
        fontSize: 15,
        marginRight: 15,
        boxShadow: 'none',
        color: '#E91D3D',
        background: '#E91D3D0D',
        paddingRight: 20,
        paddingLeft : 20,
        borderColor : '#E91D3D',
        border : '1px solid',
    }
}
export default function Header() {
    return (
        <div style={{flexGrow: 1}}>
            <AppBar position="static" color="inherit" >
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        <img src={process.env.PUBLIC_URL + '/logo.png'} style={{width:144,height:39}} /> 

                    </Typography>
                    <Fab
                        
                        variant="extended"
                        size="small"
                        color="primary"
                        style={style.buttonIdentifier}
                    >

                        S'IDENTIFIER
                    </Fab >
                    <Fab
                        variant="extended"
                        color="primary"
                        style={style.buttonConnecter}
                    >

                        S'INSCRIRE
                    </Fab >
                </Toolbar>
            </AppBar>
        </div>
    )
}

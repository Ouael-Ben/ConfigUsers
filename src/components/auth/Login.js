import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography, TextField, Fab, Grid, Button } from '@material-ui/core';
import {withStyles} from  '@material-ui/core/styles';


const style = {
    width: '100%'
   };
  
const formStyle = {
    marginTop : 35
  }

const styles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
        textAlign: 'center',
        height: '100%',
        alignItems: 'center'
    },
    buttonConnecter: {
        fontSize: 15,
        marginRight: 15,
        boxShadow: 'none',
        color: '#E91D3D',
        background: '#E91D3D0D',
        paddingRight: 35,
        paddingLeft : 35,
        borderColor : '#E91D3D',
        border : '1px solid',
    }
    
})

export default withStyles(styles) (class Login extends Component {

    state = {
        login: '',
        password: ''
    }
    onChangeInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value + '' + e.target.name);
        console.log(this.state);
      }
    handleSubmit = (e) => {
        e.preventDefault();
        const {login,password} = this.state;
        if(login && password) {
            this.props.history.push('/profile');
        }else {
            alert("Not pass");
        }
        
      }
    render() {
        const {classes} = this.props;
        return (
            <Grid container alignItems="center"  justify="center" style={{height:'100%'}}>
                <Grid item>
                    <Paper className={classes.root}>
                        <Typography variant="h6">
                            Connecter-vous à votre compte
                        </Typography>
                        <form noValidate autoComplete="off" style={formStyle}>
                            <TextField
                                id="username"
                                label="Username"
                                name="login"
                                margin="normal"
                                style={style}
                                type="text"
                                onChange = {this.onChangeInput}
                                variant="outlined"

                            />
                            <TextField
                                id="password"
                                label="Password"
                                margin="normal"
                                name="password"
                                style={style}
                                type="password"
                                onChange = {this.onChangeInput}
                                variant="outlined"
                            />
                            <br/>
                            <br/>
                            <Fab  variant="contained" className={classes.buttonConnecter} onClick={this.handleSubmit}>
                            S'identifier
                            </Fab>
                            
                            <br/>
                            <br/>
                            <Typography variant="caption" display="block" color="primary" style={{textDecoration:'underline'}}>
                                Mot de passe oublier ?
                            </Typography>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
            
        )
    }
})

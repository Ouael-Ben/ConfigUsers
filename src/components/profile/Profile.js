import React, { Component } from 'react'
import { Avatar, Grid, Fab } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {withStyles} from  '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
    card: {
        width: 400,
        minHeight: "350px",
        overflow: "initial",
        textAlign: "center",
        paddingTop : 50
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      avatar : {
        width:144,
        height:144,
        margin: '0 auto',
        top: '50px'
      },
      fullName: {
        fontWeight: 'bold',
        display : 'block',
        fontSize: 22
      },
      adresse :  {
        display : 'block',
        fontSize: 18

      },
      cardContent : {
        paddingLeft: 40,
        paddingRight: 40
      },
      details : {
        color: "#484848",
        letterSpacing: 0,
        lineHeight: 1.2,
        textAlign: 'center',

      },
      button: {
        fontSize: 15,
        boxShadow: 'none',
        color: '#E91D3D',
        background: '#E91D3D0D',
        paddingRight: 35,
        paddingLeft : 35,
        borderColor : '#E91D3D',
        border : '1px solid',
        fontWeight : 'Bold',
        margin: '0 auto',
        display: 'block',
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          backgroundColor: '#E91D3D0D',
          boxShadow: 'none'
        }
    },
    buttonSupprimer: {
      border: 'none',
      background: 'transparent',
      boxShadow: 'none',
      color : '#E91D3D',
      textDecoration: 'underline',
      backgroundColor: 'transparent',
      marginTop: 11,
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }
    }

})
export default withStyles(styles) (class Profile extends Component {
    state = {
        fullName: '',
        adresse: '',
        details: '',
        picture: ''
    }

    componentDidMount(){
      axios.get("https://uinames.com/api/?ext").then((response) => {
        this.setState({
          fullName: response.data.name + ' '+response.data.surname + ', '+response.data.age,
          adresse: '',
          details: '',
          picture: response.data.photo
        })
      }).catch((error)=>{
        console.log(error)
      })
    }
    render() {
        const {classes} = this.props;
        const {fullName, adresse, details, picture} = this.state;
        return (
                <Grid container justify="center" alignItems="center" style={{height:'100%'}}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={picture} className={classes.avatar}/>
                        <Card  className={classes.card} >
                            <CardContent className={classes.cardContent} >
                                <span className={classes.fullName} >{fullName}</span>
                                <span className={classes.adresse} >{adresse}</span>
                                <p className={classes.details}>{details}</p>
                            </CardContent>
                            <hr style={{width:'15%',opacity:0.5}}/>
                            <CardActions style={{display: 'inline-block'}}>
                                <Fab
                                    variant="outlined"
                                    className={classes.button}
                                >
                                  Voir Profile
                                </Fab >
                                <Button className={classes.buttonSupprimer} variant="contained">Supprimer le profil</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            
        )
    }
})

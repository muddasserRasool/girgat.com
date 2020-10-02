import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";
import '../App.css';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1, 3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },

}));




export default function TwoContainers() {

    const classes = useStyles();
    const [Readmore, setReadmore] = useState(false)
    const [Readmore2, setReadmore2] = useState(false)
    const Makebigger = useWebAnimations();
    const Makebigger2 = useWebAnimations();
    const Smoothin = useWebAnimations();
    const Smoothin2 = useWebAnimations();



    useEffect(() => {
        const e1 = document.getElementById("container1");
        const e2 = document.getElementById("container2")

        e1.addEventListener("mouseenter", (e) => {
            setReadmore(true)
            Smoothin.animate({ ...fadeInUp })
    
        })
        e1.addEventListener("mouseleave", (e) => {
            setReadmore(false)
        })

        e2.addEventListener("mouseenter", (e) => {
            setReadmore2(true)
        
           

            Smoothin2.animate({ ...fadeInUp })
    
        })
        e2.addEventListener("mouseleave", (e) => {
            setReadmore2(false)
           
        })
    });




    const extraContent = <div className="containerAddOn" ref={Smoothin.ref}>
        <p className="extra-content">
            This is Example Text.This is Example Text.This is Example Text.This is Example Text.This is Example Text.This is Example Text.
    </p>
        <ul>
            <li>
            This is Example Text.This is Example Text.
                            </li>
            <li>
            This is Example Text.This is Example Text.This is Example Text.This is Example Text.
                            </li>
            <li>
            This is Example Text.This is Example Text.This is Example Text.This is Example Text.
                            </li>
        </ul>
        <img src="https://junto.digital/wp-content/uploads/2018/12/service-seo.png" alt="backpic" width="100%" height="100%" />
    </div>


    const extraContent2 = <div className="containerAddOn2" ref={Smoothin2.ref}>
        <p className="extra-content">
        This is Example Text.This is Example Text.This is Example Text.This is Example Text.This is Example Text.This is Example Text.This is Example Text.This is Example Text.This is Example Text.
    </p>
        <ul>
            <li>
            This is Example Text.This is Example Text.
                            </li>
            <li>
            This is Example Text.This is Example Text.This is Example Text.
                            </li>
            <li>
            This is Example Text.This is Example Text.
                            </li>
        </ul>
        <img src="https://junto.digital/wp-content/uploads/2018/12/service-web-development.png" alt="backpic" width="100%" height="100%" />
    </div>

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ width: "100%", margin: "0px", padding: "0px" }}>
                <Grid item xs={12} sm={6} id="container1" ref={Makebigger.ref}  >
                    <Paper className={classes.paper} >
                        <h5 style={{ color: "#91C691" }}>This is Example Text.</h5>
                        <h1 style={{ color: "#18242A" }}>This is Example Text.</h1>
                        <br />
                        <h2 style={{ color: "#18242A" }}> This is Example Text.This is Example Text.  </h2>
                        {!Readmore && <span><span style={{ color: "#91C691", textDecoration: "underline" }}>Read More.</span> <span style={{ color: "#91C691" }}>&nbsp; &#10230;</span></span>}
                        {Readmore && extraContent}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} id="container2" ref={Makebigger2.ref}>
                    <Paper className={classes.paper}>
                        <h5 style={{ color: "#91C691" }}>This is Example Text.</h5>
                        <h1 style={{ color: "#18242A" }}>This is Example Text.</h1>
                        <br />
                        <h2 style={{ color: "#18242A" }}>This is Example Text.This is Example Text. </h2>
                        {!Readmore2 && <span><span style={{ color: "#91C691", textDecoration: "underline" }}>Read More.</span> <span style={{ color: "#91C691" }}>&nbsp; &#10230;</span></span>}
                        {Readmore2 && extraContent2}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
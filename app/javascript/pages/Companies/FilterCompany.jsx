import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
    Grid,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),
    },
    label: {
        textTransform: 'capitalize',
        paddingBottom: '10px',
        paddingTop: '5px'
    },
    card: {
        backgroundColor: theme.palette.background.default,
    },
    role: {
        paddingTop: '15px',
        display: 'grid', 
        gridTemplateColumns: '100px 100px 100px 0px', 
        gridTemplateRows: '35px 80px',
        justifyContent: 'center'
    },
}))

export default function FilterCompany(props) {
    const classes = useStyles()
    const {data, sortOrder} = props
    return (
        <div className={classes.root}>
                <Grid direction="row" container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    style={{padding: '24px'}}
                >
                {
                    data.map( elem =>
                    <Grid key={elem.id} item
                        xs={12} sm={12} md={6} lg={6} xl={6}
                    >
                        <Card className={classes.card}> 
                        <CardContent>
                            <Typography align="center" variant="h5" color="primary">{elem.label}</Typography>
                        </CardContent> 
                        <div style={{display:'flex', justifyContent: 'center'}}>
                            {Object.keys(elem.data).map(
                                element=>(
                                    <div style={{textAlign: 'center', paddingBottom: '40px', paddingLeft: '10px', paddingRight: '10px'}}>
                                    <Typography variant="h5" color="secondary">{elem.data[element]}</Typography>
                                    <Typography className={classes.label}>{element}</Typography>
                                    <Button variant="contained" color="primary" onClick={() => props.onClick(element, sortOrder)}>
                                        Filter 
                                    </Button> 
                                    </div>
                                
                                )
                            )}
                            </div>
                        </Card>
                    </Grid> 
                )}              
            </Grid>
            </div>
    )
}


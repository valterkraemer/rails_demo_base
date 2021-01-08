
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button
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
    }
}))

export default function FilterGrid(props) {
    const classes = useStyles()
    const {data, sortOrder} = props
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {data.map(elem => (
                    <Grid  item xs={6} key={data.indexOf(elem)}>
                        <Card className={classes.card}>

                            <CardContent>
                                <Typography variant="h5" color="primary">{elem.label}</Typography>
                                
                                <div className={classes.role}>
                                    {Object.keys(elem.data).map(
                                        element=>(
                                            <div style={{ textAlign: 'center' }}>
                                            <Typography variant="h5" color="secondary">{elem.data[element]}</Typography>
                                            <Typography className={classes.label}>{element}</Typography>
                                            <Button variant="contained" color="primary" onClick={() => props.onClick(element, sortOrder)}>Filter</Button>
                                            </div>
                                        )
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                     </Grid>
                ))}
            </Grid>
        </div>
    )
}
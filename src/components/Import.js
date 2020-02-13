import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
      marginTop: theme.spacing(10),
    },
  }));


const Import = (props) => {
    const classes = useStyles();

    return ( 
        <React.Fragment>
        <Container maxWidth="md">
            <Button className={classes.button} variant="contained" color="primary"  onClick = {props.fetchMakes}>
            Import
            </Button>
            <h2>COUNT: {props.makes.length}</h2>
        <Table className='carInfo' aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Make</TableCell>
                <TableCell align="right">Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.makes.map( (make, index) => (
                <TableRow key={make.MakeId}>
                <TableCell align="right">{make["MakeId"]}</TableCell>
                <TableCell align="right">{make["MakeName"]}</TableCell>
                <TableCell align="right">
                    <DeleteIcon variant="contained" color="primary"  onClick = {() => props.deleteMakes(index)}>
                    Delete
                    </DeleteIcon>
                </TableCell>
                
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </Container>
        </React.Fragment>
        
    )
}

export default Import
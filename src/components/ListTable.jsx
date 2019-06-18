import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing(3),
  },
  table: {
    maxWidth: 600,
  },
}));


export const ListTable = ({ ...props }) => {
  const classes = useStyles();

  const createRow = (item) => {
    return (
      <TableRow>
        <TableCell>
          {item.name}
        </TableCell>
        <TableCell>
          <Checkbox
            checked={item.id === props.selectedItem.id}
            disabled={props.isItemSelected && item.id !== props.selectedItem.id}
            onClick={() => props.selectItem(item)}
          />
        </TableCell>
      </TableRow>
    )
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Select</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { props.groceryList.map((item) => createRow(item))}
        <TableRow>
          <TableCell>
           <Button
              variant="contained"
              color="primary"
              onClick={() => props.deselectItem()}
            >
              Clear Selection 
            </Button>
          </TableCell>
          <TableCell>
           <Button
              variant="contained"
              color="secondary"
              onClick={() => { props.removeItem(); props.deselectItem() }}
            >
              Remove Item
            </Button>
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
};

export default ListTable

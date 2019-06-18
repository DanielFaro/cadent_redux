import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    maxWidth: 600,
  },
}));


export const ListTable = ({ ...props }) => {
  const classes = useStyles();

  const createRow = (item) => {
    // const [state, setState] = React.useState({
    //   checkedA: false,
    // });
  
    // const handleChange = name => event => {
    //   setState({ ...state, [name]: event.target.checked });
    // };
  console.log(props);
  console.log(item);
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
          {/* <Button
            variant="contained"
            color="primary"
            disabled={props.isItemSelected}
            onClick={() => props.selectItem(item)}
            >
            Select  
          </Button> */}
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

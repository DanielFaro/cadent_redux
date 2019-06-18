import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "40%",
    height: "5rem",
  },
}));

const ListSelection = ({ selectedItem }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" id="tableTitle">
        Selection
      </Typography>
      {selectedItem.name}
    </Paper>
  );
};

export default ListSelection;

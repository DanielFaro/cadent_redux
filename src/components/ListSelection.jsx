import React from 'react';
import Typography from '@material-ui/core/Typography';

const ListSelection = ({ selectedItem }) => (
  <div className="listSelection">
    <Typography variant="h6" id="tableTitle">Selection</Typography>
    {selectedItem.name}
  </div>
);

export default ListSelection;

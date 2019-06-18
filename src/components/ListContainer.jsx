import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";

import {
  addItem,
  removeItem,
  deselectItem,
  selectItem
} from "../ducks/groceries";

import ListInputs from "./ListInputs";
import ListSelection from "./ListSelection";
import ListTable from "./ListTable";

class ListContainer extends Component {

  render() {
    const {
      groceryList,
      addItem,
      selectedItem,
      selectItem,
      deselectItem,
      removeItem,
      isItemSelected
    } = this.props;
    console.log(groceryList);
    console.log(selectedItem);
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        style={{ flexGrow: 1 }}
      >
        <Grid item sm>
          <ListSelection selectedItem={selectedItem} />
        </Grid>
        <Grid item sm>
          <ListTable
            groceryList={groceryList}
            selectItem={selectItem}
            deselectItem={deselectItem}
            removeItem={removeItem}
            isItemSelected={isItemSelected}
            selectedItem={selectedItem}
          />
        </Grid>
        <Grid item sm>
          <ListInputs addItem={addItem} />
        </Grid>
      </Grid>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  selectedItem: PropTypes.object.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  // Other
};

const mapStateToProps = ({
  groceries: { list: groceryList, selectedItem, isItemSelected }
}) => ({
  groceryList,
  selectedItem,
  isItemSelected
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addItem,
      removeItem,
      selectItem,
      deselectItem
    },
    dispatch
  );
const ListContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainerRedux;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, removeItem, deselectItem, selectItem } from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';



class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log('groceryList', this.props.groceryList, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('groceryList', nextProps.groceryList, this);
  }

  render() {
    const { groceryList, addItem, selectedItem, selectItem, deselectItem, removeItem, isItemSelected } = this.props;
    console.log(groceryList);
    console.log(selectedItem);
    return (
    
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={addItem} />
        </div>
        <div className="types">
          <ListSelection selectedItem={selectedItem}/>
          <ListTable
            groceryList={groceryList}
            selectItem={selectItem}
            deselectItem={deselectItem}
            removeItem={removeItem}
            isItemSelected={isItemSelected}
            selectedItem={selectedItem}
            />
        </div>
      </section>
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
  // Other
};

const mapStateToProps = ({
  groceries: {
    list: groceryList,
    selectedItem,
    isItemSelected,
  },
}) => ({
  groceryList,
  selectedItem,
  isItemSelected,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
    removeItem,
    selectItem,
    deselectItem
  }, dispatch)
);
const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;

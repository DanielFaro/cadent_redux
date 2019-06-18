import update from 'immutability-helper';

const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegitable',
      deliveryMethod: 'Ground',
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: '',
  },
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return update(state, {
        list: { $push: [payload] },
      });

    case REMOVE_ITEM:
      let stateCopy = state.list.slice(0);
      let newState = stateCopy.filter(item => item.id !== state.selectedItem.id);
      return update(state, {
        list: { $set: newState }
      });
    case SELECT_ITEM:
      return update(state, {
        isItemSelected: { $set: true },
        selectedItem: { $set: payload }
      });
    case DESELECT_ITEM:
      return update(state, {
        isItemSelected: { $set: false },
        selectedItem: { $set: initialState.selectedItem }
      })

    default:
      return state;
  }
};

// Action Creators
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = () => ({
  type: REMOVE_ITEM
});

export const selectItem = item => ({
  type: SELECT_ITEM,
  payload: item,
})

export const deselectItem = () => ({
  type: DESELECT_ITEM,
})

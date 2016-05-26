const initialState = ["PHP", "Javascript", "Ruby", "Python"]

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return [...state, action.book]
    
    case 'REMOVE_BOOK':
      return state.filter(book => book !== action.book)
      
    default:
      return state
  }
}
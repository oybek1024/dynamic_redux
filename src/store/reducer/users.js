const initialState = []
export default function counterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'user/add':
      return [...state, payload]
    default:
      return state
  }
}

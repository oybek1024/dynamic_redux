export default function (param) {
  const toUpper = param.toUpperCase()
  const _constants = {
    error: `ERROR_${toUpper}`,
    load: `LOAD_${toUpper}`,
    oneLoad: `ONE_LOAD_${toUpper}`,
    pending: `PENDING_${toUpper}`,
    deleting: `DELETING_${toUpper}`,
    data: `SET_${toUpper}`,
    pagination: `PAGINATION_${toUpper}`,
  }
  const initialState = {
    loading: false,
    oneLoading: false,
    pending: false,
    deleting: false,
    error: null,
    data: [],
    pagination: {
      page: 1,
      total: 0
    }
  }
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case _constants.data:
        state.data = payload
        return { ...state }
      default:
        return state
    }
  }
  return reducer
}


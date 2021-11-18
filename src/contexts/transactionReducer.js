const transactionReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions
          .filter(({ date }) => new Date(date).getMonth() === payload.month)
          .reverse()
          .filter((_, idx) => idx !== payload.idx),
      };
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: payload,
      };

    default:
      throw new Error("Type invalid");
  }
};

export default transactionReducer;

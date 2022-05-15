const initialState = {
  test: "test Data",
};
// const first = " ";
interface actionObject {
  type: "";
  payload: "";
}
export const postReducer = (
  state = initialState,
  { type, payload }: actionObject
) => {
  switch (type) {
    // case first:
    //   return { ...state };

    default:
      return state;
  }
};

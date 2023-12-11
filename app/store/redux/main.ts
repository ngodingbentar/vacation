import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    loading: false,
    isCollapsed: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { setLoading } = mainSlice.actions
export default mainSlice.reducer
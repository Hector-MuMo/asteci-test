import { createSlice } from "@reduxjs/toolkit"

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: []
    },
    reducers: {
        getWeatherData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { getWeatherData } = weatherSlice.actions

export default weatherSlice.reducer
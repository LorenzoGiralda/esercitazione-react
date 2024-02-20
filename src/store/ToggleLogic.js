import { createSlice } from '@reduxjs/toolkit';


const variValue = {
    toggleValue: true  
    }


const ToggleLogic = createSlice({

    name: 'toggle',
    initialState:{
    value: variValue.toggleValue   
    },

    reducers:{
    changeToggle: (state) => {
    state.value = !state.value
    },
    }

})



export const { changeToggle } = ToggleLogic.actions

export default ToggleLogic.reducer
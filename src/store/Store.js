import { configureStore } from "@reduxjs/toolkit";
import CounterLogic from "./CounterLogic";
import ToggleLogic from "./ToggleLogic";


export default configureStore({
    reducer: {
    counter: CounterLogic,
    toggle: ToggleLogic
    },
    });

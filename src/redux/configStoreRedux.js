import {configureStore } from '@reduxjs/toolkit'

import { burgerReducer } from './burgerReducer'
export const store = configureStore({
    reducer:{
        burgerReducer:burgerReducer
    },
})
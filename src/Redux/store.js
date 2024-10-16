import { configureStore } from '@reduxjs/toolkit';
import TicketSlice from './slices/TicketSlice'

const store = configureStore({
    reducer : {
        tickets:TicketSlice
    }

})

export default store;
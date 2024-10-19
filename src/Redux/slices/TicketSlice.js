import { createSlice } from '@reduxjs/toolkit';
import { clients, tickets  } from '../../API/data';

const initialState = {
  clients:clients ,
  allTickets:tickets ,
  Tickets: tickets,
  filterByToday: new Date().toLocaleDateString('en-CA'),
  filterByStatus: '',
  filterByTechnician: '',
  filterByYear: '',
  filterByDay: '',
  filterByYearMonth: '',
  AVG_TECKETS: '',
};

const TicketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setFilterToday: (state) => {
      state.Tickets = tickets.filter(item => item.dateOuverture == state.filterByToday);
    },
    setFilterStatus: (state, action) => {
      state.filterByStatus = action.payload;
      state.Tickets = tickets.filter(item => item.statut.includes(state.filterByStatus));
    },
    setFilterTechnician: (state, action) => {
      state.filterByTechnician = action.payload;
      state.Tickets = tickets.filter(item => item.technicien.includes(state.filterByTechnician));
    },
    setFilterYear: (state, action) => {
        state.filterByYear = action.payload;
        state.Tickets = tickets.filter(item => item.dateOuverture.substring(0, 4).includes(state.filterByYear));
      },
    setFilterDay: (state, action) => {
        state.filterByDay = action.payload;
        state.Tickets = tickets.filter(item => item.dateOuverture.includes(state.filterByDay));
    },
    setFilterYearMonth: (state, action) => {
        const yearMonth = `${action.payload.year}-${action.payload.month}`; 
        state.Tickets = tickets.filter(item => item.dateOuverture.substring(0, 7) === yearMonth);
    },
    // setAvgTickets: (state, action) => {
    //     state.AVG_TECKETS = ''
    // },
    setTickets: (state) => {
      state.Tickets = tickets; 
    },
  },
});

export const { setTickets, setFilterToday, setFilterStatus, setFilterTechnician, setFilterYear, setFilterDay, setFilterYearMonth } = TicketSlice.actions;

export default TicketSlice.reducer;

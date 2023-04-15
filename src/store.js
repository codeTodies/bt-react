import {configureStore} from "@reduxjs/toolkit"
const initialState={
    seatSelected:[],
    seatDefault:[ 
      {
      "hang": "", 
      "danhSachGhe": [
        {"soGhe":"1","gia":0,"daDat":false,"selected":false},
        {"soGhe":"2","gia":0,"daDat":false,"selected":false},
        {"soGhe":"3","gia":0,"daDat":false,"selected":false},
        {"soGhe":"4","gia":0,"daDat":false,"selected":false},
        {"soGhe":"5","gia":0,"daDat":false,"selected":false},
        {"soGhe":"6","gia":0,"daDat":false,"selected":false},
        {"soGhe":"7","gia":0,"daDat":false,"selected":false},
        {"soGhe":"8","gia":0,"daDat":false,"selected":false},
        {"soGhe":"9","gia":0,"daDat":false,"selected":false},
        {"soGhe":"10","gia":0,"daDat":false,"selected":false},
        {"soGhe":"11","gia":0,"daDat":false,"selected":false},
        {"soGhe":"12","gia":0,"daDat":false,"selected":false}
      ] 
    }
    ,
    {
      "hang": "A", 
      "danhSachGhe": [
        {"soGhe":"A1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A4","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A10","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"A11","gia":0,"daDat":true,"selected":false},
        {"soGhe":"A12","gia":0,"daDat":true,"selected":false}
      ] 
    },
    {
      "hang": "B", 
      "danhSachGhe": [
        {"soGhe":"B1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B4","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B10","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B11","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"B12","gia":75000,"daDat":false,"selected":false}
      ] 
    },
    {
      "hang": "C", 
      "danhSachGhe": [
        {"soGhe":"C1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C4","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C10","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C11","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"C12","gia":75000,"daDat":false,"selected":false}
      ] 
    }, {
      "hang": "D", 
      "danhSachGhe": [
        {"soGhe":"D1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D4","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D10","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D11","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"D12","gia":75000,"daDat":false,"selected":false}
      ] 
    },{
      "hang": "E", 
      "danhSachGhe": [
        {"soGhe":"E1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E4","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E10","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E11","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"E12","gia":75000,"daDat":false,"selected":false}
      ] 
    },{
      "hang": "F", 
      "danhSachGhe": [
        {"soGhe":"F1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F4","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F10","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F11","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"F12","gia":75000,"daDat":false,"selected":false}
      ] 
    },{
      "hang": "G", 
      "danhSachGhe": [
        {"soGhe":"G1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G4","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G10","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G11","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"G12","gia":75000,"daDat":false,"selected":false}
      ] 
    },{
      "hang": "H", 
      "danhSachGhe": [
        {"soGhe":"H1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H4","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H10","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H11","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"H12","gia":75000,"daDat":false,"selected":false}
      ] 
    },{
      "hang": "I", 
      "danhSachGhe": [
        {"soGhe":"I1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I4","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I10","gia":75000,"daDat":true,"selected":false},
        {"soGhe":"I11","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"I12","gia":75000,"daDat":false,"selected":false}
      ] 
    },{
      "hang": "J", 
      "danhSachGhe": [
        {"soGhe":"J1","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J2","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J3","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J4","gia":75000,"daDat":true,"selected":false},
        {"soGhe":"J5","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J6","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J7","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J8","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J9","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J10","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J11","gia":75000,"daDat":false,"selected":false},
        {"soGhe":"J12","gia":75000,"daDat":false,"selected":false}
      ] 
    }
  
  ]
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case "chonGhe": {
      const soHang = state.seatDefault.findIndex(
        (item) => item.hang === action.payload1
      );
      const updateSeat = state.seatDefault.map((item, index) =>
        index === soHang
          ? {
              ...item,
              danhSachGhe: item.danhSachGhe.map((seat) => {
                if (seat.soGhe === action.payload) {
                  return { ...seat, selected: !seat.selected };
                }
                return seat;
              }),
            }
          : item
      );
       const selectedSeat = state.seatDefault[soHang].danhSachGhe.find(seat => seat.soGhe === action.payload);
       const newSeatSelected = state.seatSelected.concat(selectedSeat);
       const calcTotal = newSeatSelected.reduce((total, seat) => total + seat.gia, 0);
      return { ...state, seatDefault: updateSeat, seatSelected: newSeatSelected,calcTotal:calcTotal };
    }
   case "xacNhan":
  const bookedSeat = state.seatSelected.map(seat => ({
    ...seat,
    selected: false,
    daDat: true,
  }));
  return {
    ...state,
    seatSelected: [],
    calcTotal:0,
    seatDefault: state.seatDefault.map(seat => {
      const {hang, danhSachGhe} = seat;
      const updatedSeats = danhSachGhe.map(s => {
        const matchingSeat = bookedSeat.find(bs => bs.soGhe === s.soGhe);
        return matchingSeat ? {...s, selected: false, daDat: true} : s;
      });
      return {...seat, danhSachGhe: updatedSeats};
    }),
  };
    default:
      return state;
  }
}
const store= configureStore({
    reducer:
    {seat:reducer,}
})
export default store
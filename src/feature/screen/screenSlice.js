import { createSlice } from '@reduxjs/toolkit'

export const screenSlice = createSlice(
    {
        name:'screen',
    initialState:{
        tiers:[],
        selectedSeats:[],
        totalPrice:0,
        selectedShow:null
    },
    reducers:{
        addTiers:(state,action)=>{
            state.tiers = action.payload
        },
        selectSeat:(state,action)=>{
            console.log(action.payload)
            state.selectedSeats.push(action.payload)
            state.tiers.map((tier)=>{
                tier.rows.map((row)=>{
                    if(row.name === action.payload.rowName){
                        const price =tier.price
                        state.totalPrice= state.totalPrice+price
                    }
                })
            })
        },
        selectShow:(state,action)=>{
            state.selectedShow=action.payload
        }

    }
    }
)
 export const {addTiers,selectSeat,selectShow} = screenSlice.actions
 export default screenSlice.reducer
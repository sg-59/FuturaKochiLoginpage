import {createSlice} from '@reduxjs/toolkit'

const user=createSlice({
    name:'user',
    initialState:{
        userData:[],
        productData:[]
    },
    reducers:{
        addtoUser:(state,action)=>{
            console.log('action ?',action);
            state.userData.push(action.payload)
        },
        removeData:(state)=>{
            state.userData=[]
        },
        addtoproduct:(state,action)=>{
            state.productData.push(action.payload)
        }
    }
})

export const {addtoUser,removeData,addtoproduct} =user.actions
export default user.reducer
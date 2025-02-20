import { createSlice } from "@reduxjs/toolkit";
const initialState={
    tasks:[],
    userSpecieTask:[]
}
const taskSlice=createSlice({
    name:'taskSlice',
    initialState,
    reducers:{
        addTask:(state,{payload})=>{
            if (state.tasks.length===0) {
                state.tasks.push({id:1,status:'pending',...payload})

                
            }
            else{
                const lastElement=state.tasks.at(-1)
                state.tasks.push({id:lastElement.id+1,status:'pending',...payload})
            }
        },

        removeTask:(state,{payload})=>{
           state.tasks= state.tasks.filter((item)=>item.id!==payload)
        },
        updatesStatus:(state,{payload})=>{
            const target=state.tasks.find((item)=>item.id===payload.id)
            console.log(target);
            
            target.status=payload.status
        },
        userTask:(state,{payload})=>{
            state.userSpecieTask=state.tasks.filter((item)=>item.assignTo===payload)
        }


    }
})
export const {addTask,updatesStatus,removeTask,emTask,userTask}=taskSlice.actions
export default taskSlice.reducer
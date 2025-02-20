import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users :{
          id: 1,
          name: "Harun",
          email: "harun@example.com",
          phone: "+8801712345678",
          address: "Dhaka, Bangladesh",
          age: 25,
          gender: "Male",
          occupation: "Software Developer",
          hobbies: ["Coding", "Reading", "Gaming"],
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        }
        // {
        //   id: 2,
        //   name: "Atiya",
        //   email: "atiya@example.com",
        //   phone: "+8801812345678",
        //   address: "Rangpur, Bangladesh",
        //   age: 23,
        //   gender: "Female",
        //   occupation: "Graphic Designer",
        //   hobbies: ["Painting", "Photography", "Traveling"],
        //   image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        // },
        // {
        //   id: 3,
        //   name: "Rahim",
        //   email: "rahim@example.com",
        //   phone: "+8801912345678",
        //   address: "Rajshahi, Bangladesh",
        //   age: 30,
        //   gender: "Male",
        //   occupation: "Teacher",
        //   hobbies: ["Teaching", "Cycling", "Writing"],
        //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        // },
        // {
        //   id: 4,
        //   name: "Karim",
        //   email: "karim@example.com",
        //   phone: "+8801612345678",
        //   address: "Chittagong, Bangladesh",
        //   age: 28,
        //   gender: "Male",
        //   occupation: "Businessman",
        //   hobbies: ["Entrepreneurship", "Investing", "Football"],
        //   image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        // }
      
      
      
}
export const userSlice=createSlice({
    name:'userSlice',
    initialState,
    reducers:{

    }
})

export default userSlice.reducer
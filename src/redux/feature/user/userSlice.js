import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users:[
        {
          "id": 1,
          "name": "Harun",
          "email": "harun@example.com",
          "phone": "+8801712345678",
          "address": "Dhaka, Bangladesh",
          "age": 25,
          "gender": "Male",
          "occupation": "Software Developer",
          "hobbies": ["Coding", "Reading", "Gaming"]
        },
        {
          "id": 2,
          "name": "Atiya",
          "email": "atiya@example.com",
          "phone": "+8801812345678",
          "address": "Rangpur, Bangladesh",
          "age": 23,
          "gender": "Female",
          "occupation": "Graphic Designer",
          "hobbies": ["Painting", "Photography", "Traveling"]
        },
        {
          "id": 3,
          "name": "Rahim",
          "email": "rahim@example.com",
          "phone": "+8801912345678",
          "address": "Rajshahi, Bangladesh",
          "age": 30,
          "gender": "Male",
          "occupation": "Teacher",
          "hobbies": ["Teaching", "Cycling", "Writing"]
        },
        {
          "id": 4,
          "name": "Karim",
          "email": "karim@example.com",
          "phone": "+8801612345678",
          "address": "Chittagong, Bangladesh",
          "age": 28,
          "gender": "Male",
          "occupation": "Businessman",
          "hobbies": ["Entrepreneurship", "Investing", "Football"]
        }
      ]
      
}
export const userSlice=createSlice({
    name:'userSlice',
    initialState,
    reducers:{

    }
})

export default userSlice.reducer
"use server"

import axios from "axios"

export async function handlePost(formData:FormData) {
    const text = formData.get('todo');

    if(!text){
        throw new Error(`there is no input`)
    };

    axios.post("http://localhost:3000/api/data", { text })

    console.log(`its from server action ${text}`);
}
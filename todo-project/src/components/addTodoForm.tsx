import React, { useState } from "react"
interface AddtoItemProps{
    onSubmit:(title:string)=>void
}

export default function AddTodoForm({onSubmit}:AddtoItemProps){
    const [input,setInput]=useState("")
    function handelSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(!input.trim()) return;
        onSubmit(input)
        setInput("")

    }
    return (
        <form className="flex" onSubmit={handelSubmit   }>
        <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="What do u want to do?"
        className="rounded-s-md p-2 grow  border border-gary-200"
        />
        <button type="submit" className="w-16 rounded-e-md text-white bg-slate-900 hover:bg-slate-700">Add</button>
        </form>
    )
}
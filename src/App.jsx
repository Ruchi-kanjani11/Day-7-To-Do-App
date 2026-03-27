import React,{useEffect, useState} from 'react'
import Form from './components/Form'
import './App.css'
import Table from './components/Table';

const App = () => {
   const[todo,setTodo]=useState({});
    const[list,setList]=useState([]);

    const handleChange=((e)=>{
        const {name,value}=e.target;
        setTodo({...todo,[name]:value})
    })
    const handleSubmit=((e)=>{
      e.preventDefault();
      let newList=[];
    if(todo.id)
    {
      newList=list.map((val)=>{
        if(val.id==todo.id) return todo;
        return val;
      })
    }
    else
    {
        newList=[...list,{...todo,id:Date.now()}]
    }
      setList(newList);
      localStorage.setItem('todos',JSON.stringify(newList))
      console.log(newList)
      setTodo({})
    })

    const handleDelete=((id)=>{
      const newList=list.filter((val)=>val.id!=id) 
      setList(newList);
      localStorage.setItem('todos',JSON.stringify(newList));
    })

    const handleEdit=((id)=>{
      const data=list.find((val)=>val.id==id)
      setTodo(data); 
    })

  useEffect(()=>{
    let oldList=JSON.parse(localStorage.getItem('todos')) || [];
    setList(oldList);
  },[])
  return (
    <>
      <Form handleChange={handleChange} todo={todo} handleSubmit={handleSubmit}></Form>
      <Table list={list} handleDelete={handleDelete} handleEdit={handleEdit}></Table>
    </>
  )
}

export default App

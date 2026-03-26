import React from 'react'

const Form = ({ handleChange, handleSubmit, todo }) => {
  return (
  <div className="form-wrapper">
  <form onSubmit={handleSubmit} className="glass-form">
    <h2>Task Manager</h2>
    
    <div className="input-group">
      <input 
        type="text" 
        name="text" 
        placeholder="What's on your mind?" 
        value={todo.text || ''} 
        onChange={handleChange} 
        autoComplete="off"
      />
      <button type="submit" className="submit-btn">
        {todo.id ? 'Update' : 'Add Task'}
      </button>
    </div>
  </form>
</div>
  )
}

export default Form
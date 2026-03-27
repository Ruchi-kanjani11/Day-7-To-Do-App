import React from 'react'

const Table = ({ list, handleDelete, handleEdit }) => {
  return (
    <table>
      <thead>
        <tr style={{background: 'transparent', transform: 'none'}}>
          <th style={{textAlign: 'center', color: 'var(--text-dim)'}}>Sr. No</th>
          <th style={{textAlign: 'left', paddingLeft: '20px', color: 'var(--text-dim)'}}>Task</th>
          <th style={{textAlign: 'right', paddingRight: '20px', color: 'var(--text-dim)'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.length > 0 ? (
          list.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td className="col-text">{todo.text}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(todo.id)}>✎</button>
                <button className="delete-btn" onClick={() => handleDelete(todo.id)}>✕</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} style={{textAlign: 'center', color: 'var(--text-dim)'}}>
              No tasks found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
import { useState } from "react"

const TodoHeader = ({ title, color }) => {

  const [texto, setTexto] = useState(title);
  const [modoEditando, setmodoEditando] = useState(false);

  const handleTextChange = (event) => {
    setTexto(event.target.value);
  };

  const toggleEditing = () => {
    setmodoEditando(!modoEditando);
  };

  return (
    <header>
      <div>
        {modoEditando ? (
          <input
            type="text"
            value={texto}
            onChange={handleTextChange}
            onBlur={toggleEditing}
            autoFocus
            className={`text-xl font-bold underline ${color}`}
          />
        ) : (
          <h1 className={`text-xl font-bold underline ${color}`} onClick={toggleEditing}>{texto}</h1>
        )}
      </div>
    </header>
    
  )
}

export default TodoHeader


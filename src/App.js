import React, { useState } from 'react';
import ListadoEmpleados from './components/ListadoEmpleados';
import ModalEmpleado from './components/ModalEmpleados';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [showModal, setShowModal] = useState(False);

  const addEmpleado = async (empleado) => {
    await axios.post('https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado', empleado);
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h1>Gestión de Empleados</h1>
      <button className="btn btn-primary my-3" onClick={() => setShowModal(true)}>
        Agregar Empleado
      </button>
      <ListadoEmpleados />
      {showModal && <ModalEmpleado onAdd={addEmpleado} />}
    </div>
  );
};

export default App;
  
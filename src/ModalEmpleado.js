import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Entrada from './Entrada';

const ModalEmpleado = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    direccion: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { nombre, dni, direccion, email } = formData;

    if (!nombre || !dni || !direccion || !email) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return;
    }

    try {
      await onAdd(formData);
      Swal.fire('Éxito', 'Empleado agregado correctamente', 'success');
      setFormData({ nombre: '', dni: '', direccion: '', email: '' });
    } catch (error) {
      Swal.fire('Error', 'No se pudo agregar el empleado', 'error');
    }
  };

  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Empleado</h5>
          </div>
          <div className="modal-body">
            <Entrada label="Nombre" type="text" value={formData.nombre} onChange={handleChange} name="nombre" />
            <Entrada label="DNI" type="text" value={formData.dni} onChange={handleChange} name="dni" />
            <Entrada label="Dirección" type="text" value={formData.direccion} onChange={handleChange} name="direccion" />
            <Entrada label="Email" type="email" value={formData.email} onChange={handleChange} name="email" />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setFormData({})}>Cancelar</button>
            <button className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEmpleado;

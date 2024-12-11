import React, {useEffect, userState } from 'react';
import axios from 'axios';

const ListadoEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        const fecthEmpleados = async () => {
            const response = await axios.get('https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado');
      setEmpleados(response.data);
    };
    fetchEmpleados();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Dirección</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((empleado) => (
          <tr key={empleado.id}>
            <td>{empleado.nombre}</td>
            <td>{empleado.dni}</td>
            <td>{empleado.direccion}</td>
            <td>{empleado.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListadoEmpleados;
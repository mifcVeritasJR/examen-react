import React, {useEffect, userState } from 'react';
import axios from 'axios';

const ListadoEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(()) => {
        const fecthEmpleados = async () => {
            const response = await axios.get('https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado');
      setEmpleados(response.data);
    };
    fetchEmpleados();
  }, []);
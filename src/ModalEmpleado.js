import React, { userstate } from 'react';
import swal from 'sweetalert2';
import Entrada from './Entrada';

const ModalEmpleado = ({ onAdd }) => {
    const [formData, setFormData] = userstate((
        nombre: '',
        dni: '',
        email: '',
        direccion: '',
        
    ));

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    };

    const handlesubmit = async () => {
        const { nombre, dni, direccion, email } = formData;


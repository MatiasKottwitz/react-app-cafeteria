import { useEffect, useState } from 'react';

import './../../../public/css/contact.css'

export const ContactContainer = () => {

    const [formState, setFormState] = useState({
        nombre:'',
        apellido:'',
        email: '',
        edad: '',
        telefono:'',
        dropdown:'',
        comments: ''
    });

    const {nombre, apellido, email, telefono,edad, dropdown, comments } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState ({
            ...formState,
            [name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.table(formState);
    }

    useEffect(() => {
        console.table(formState);
    }, [formState]);

    const resetForm = (e) => {
        e.preventDefault();
        setFormState({
            nombre:'',
            apellido:'',
            email: '',
            edad: '',
            telefono:'',
            dropdown:'',
            comments: ''
        });
        console.log("Limpiando Formulario");
    }
    return (
    <div id="contacto">
            <h3 className="contact-title" >Contacta con nosotros</h3>
            <div className="form-contact">
                <form action="" onSubmit={handleSubmit} className='form-control'>

                    <div className='div-form' htmlFor="nombre" >Nombre:
                        <input className='input-form' type="text" name="nombre" required placeholder="Ingrese su Nombre"  value={nombre} onChange={onInputChange}/></div>
                    <div className='div-form' htmlFor="apellido">Apellido:
                        <input className='input-form' type="text" name='apellido' required placeholder="Ingrese su Apellido" value={apellido} onChange={onInputChange}  /></div>
                    <div className='div-form' htmlFor="email" >Email:
                        <input className='input-form' type="email" name="email" required placeholder="email@email.com" value={email} onChange={onInputChange} /></div>
                    <div className='div-form' htmlFor="telefono" >Telefono:
                        <input className='input-form' type="text" name='telefono' required placeholder="+54" value={telefono} onChange={onInputChange} /></div>
                    <div className='div-form' htmlFor="edad" >Edad:
                        <input className='input-form' type="number" name="edad" min="18" max="50" placeholder="18" value={edad} onChange={onInputChange} /></div>


                    <div htmlFor="dropdown" className='div-form' >¿Qué opción describe mejor su función actual?
                        <select name="dropdown" id="dropdown" value={dropdown}onChange={onInputChange}>
                            <option value='Select'>Selecciona una opcion</option>
                            <option value='Estudiante'>Estudiante</option>
                            <option value='Tiempo Completo'>Trabajo de tiempo completo</option>
                            <option value='Medio Tiempo'>Trabajo de medio tiempo</option>
                        </select>
                    </div>

                    {/* <div for="recommend" className='div-form' >¿Recomendarias a Caffe Walk?</div>
                        <div for="recommend" className='div-form' >
                            <input type="radio" name="recommend" id="recommend" value={recommend}  onChange={onInputChange} className="input-form inline"/>Definitivamente
                        </div>
                        <div for="recommend" className='div-form' >
                            <input type="radio" name="recommend" id="recommend" value={recommend}  onChange={onInputChange} className="inline input-form"/>Tal Vez
                        </div>
                        <div for="recommend" className='div-form' >
                            <input type="radio" name="recommend" id="recommend" value={recommend}  onChange={onInputChange} className=" input-form inline"/>Not creo..
                        </div>

                    <div for="improved" className='div-form' onChange={onInputChange} >¿En que puesto te gustaria aplicar?
                        <div for="">
                            <input type="checkbox" name="improved" value={improved} className="input-form inline"/>Pasteleria
                        </div>
                        <div for="">
                            <input type="checkbox" name="improved" value={improved}  className="input-form  inline"/>Preparacion de Cafe
                        </div>
                        <div for="">
                            <input type="checkbox" name="improved" value={improved}  className=" input-form inline"/>Cadete de delivery
                        </div>
                    </div> */}

                    <div htmlFor="comments" className='div-form' >Cuentanos mas acerca de ti:
                        <textarea name="comments" id="comments" cols="30" rows="3" value={comments} onChange={onInputChange}  placeholder="Aprovecha para contarnos acerca de ti y tus dudas." ></textarea>
                    </div>

                    <input className='input-form' type="submit" id="submit"/>
                    <input className='input-form' type="reset" id="reset"  onClick={resetForm} />

                </form>
            </div>
        </div>
  )
}

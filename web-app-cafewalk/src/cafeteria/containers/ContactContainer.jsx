import { useEffect, useState } from 'react';

import styles from './../styles/contact.module.css'

export const ContactContainer = () => {

    const [formState, setFormState] = useState({
        nombre:'',
        apellido:'',
        email: '',
        edad: '',
        telefono:'',
        dropdown: '',
        recommend: '',
        improved: '',
        comments: ''
    });

    const {nombre, apellido, email, telefono,edad, dropdown, recommend, improved, comments } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        
        setFormState ({
            ...formState,
            [name]:value
        });

        console.table({name, value});
    }

    useEffect(() => {
        // console.log("Funcion Actual");
    }, [formState]);

    return (
    <div id={styles.contacto}>
            <h3 className={styles.contact_title} >Contacta con nosotros</h3>
            <div className="form-contact">
                <form action="" className={styles.form_control}>

                    <label className={styles.label} for="nombre" >Nombre:
                        <input className='input-form' type="text" name="nombre" required placeholder="Ingrese su Nombre"  value={nombre} onChange={onInputChange}/></label>
                    <label className={styles.label} for="apellido">Apellido:
                        <input className='input-form' type="text" name='apellido' required placeholder="Ingrese su Apellido" value={apellido} onChange={onInputChange}  /></label>
                    <label className={styles.label} for="email" >Email:
                        <input className='input-form' type="email" name="email" required placeholder="email@email.com" value={email} onChange={onInputChange} /></label>
                    <label className={styles.label} for="telefono" >Telefono:
                        <input className='input-form' type="text" name='telefono' required placeholder="+54" value={telefono} onChange={onInputChange} /></label>
                    <label className={styles.label}  for="edad" >Edad:
                        <input className='input-form' type="number" name="edad" min="18" max="50" placeholder="18" value={edad} onChange={onInputChange} /></label>


                    <label htmlFor="dropdown" className='div-form' >¿Qué opción describe mejor su función actual?
                        <select name="dropdown" id="dropdown" onChange={onInputChange}>
                            <option value={dropdown}>Selecciona una opcion</option>
                            <option value={dropdown}>Estudiante</option>
                            <option value={dropdown}>Trabajo de tiempo completo</option>
                            <option value={dropdown}>Trabajo de medio tiempo</option>
                        </select>
                    </label>

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

                    <div for="comments" className='div-form' >Cuentanos mas acerca de ti:
                        <textarea name="comments" id="comments" cols="30" rows="3" value={comments} placeholder="Aprovecha para contarnos acerca de ti y tus dudas." ></textarea>
                    </div>

                    <input className='input-form' type="submit" id="submit"/>
                    <input className='input-form' type="reset" id="reset"/>

                </form>
            </div>
        </div>
  )
}

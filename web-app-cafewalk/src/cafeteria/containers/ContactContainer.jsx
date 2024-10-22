import { useState } from 'react';

import './../../../public/css/contact.css'

export const ContactContainer = () => {
  
    const [formState, setFormState] = useState({
        nombre:'matias',
        apellido:'kottwitz',
        email: 'kottvitz@matias.com',
        edad: '25',
        telefono:'3764119400',
        dropdown: 2,
        recommend: 'Definitivamente',
        improved: 'delivery',
        comments: 'Soy leru leru!'
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

    return (
    <div id="contacto">
            <h3 className="contact-title" >Contacta con nosotros</h3>
            <div className="form-contact">
                <form action="" className='form-control'>

                    <div className='div-form' for="nombre" >Nombre: 
                        <input className='input-form' type="text" name="nombre" required placeholder="Ingrese su Nombre"  value={nombre} onChange={onInputChange}/></div>
                    <div className='div-form' for="apellido">Apellido: 
                        <input className='input-form' type="text" name='apellido' required placeholder="Ingrese su Apellido" value={apellido} /></div>
                    <div className='div-form' for="email" >Email: 
                        <input className='input-form' type="email" name="email" required placeholder="email@email.com" value={email} /></div>                   
                    <div className='div-form'  for="telefono" >Telefono: 
                        <input className='input-form' type="text" name='telefono' required placeholder="+54" value={telefono} /></div>
                    <div className='div-form'  for="edad" >Edad: 
                        <input className='input-form' type="number" name="edad" min="18" max="50" placeholder="18" value={edad} /></div>
                                      

                    <div for="dropdown" className='div-form' >¿Qué opción describe mejor su función actual?
                        <select name="dropdown" id="dropdown">
                            <option value={dropdown}>Selecciona una opcion</option>
                            <option value={dropdown}>Estudiante</option>
                            <option value={dropdown}>Trabajo de tiempo completo</option>
                            <option value={dropdown}>Trabajo de medio tiempo</option>
                        </select>
                    </div>
           
                    <div for="recommend" className='div-form' >¿Recomendarias a Caffe Walk?</div>
                        <div for="recommend" className='div-form' >
                            <input type="radio" name="recommend" id="recommend" value={recommend} className="input-form inline"/>Definitivamente
                        </div>
                        <div for="recommend" className='div-form' >
                            <input type="radio" name="recommend" id="recommend" value={recommend} className="inline input-form"/>Tal Vez
                        </div>
                        <div for="recommend" className='div-form' >
                            <input type="radio" name="recommend" id="recommend" value={recommend} className=" input-form inline"/>Not creo..
                        </div>
            
                    <div for="improved" className='div-form' >¿En que puesto te gustaria aplicar?
                        <div for=""> 
                            <input type="checkbox" name="improved" value={improved} className="input-form inline"/>Pasteleria
                        </div>
                        <div for="">
                            <input type="checkbox" name="improved" value={improved}  className="input-form  inline"/>Preparacion de Cafe
                        </div>
                        <div for="">
                            <input type="checkbox" name="improved" value={improved}  className=" input-form inline"/>Cadete de delivery
                        </div>
                    </div>
                
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

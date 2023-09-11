import { useState } from 'react';
import validation from '../validation';
import './Form.css'
import LogoLogin from '../../../public/img/LogoLogin.png'
import Create from '../Create/Create'

const Form = ({ login }) => {
    
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //le quita el evento de refresh
        login(userData)
    };

    const [openCreate, setOpenCreate] = useState(false)
    const handleOpenCreate = (event) => {
        setOpenCreate(true)
    }
    const handleCloseCreate = (event) => {
        setOpenCreate(false)

    }

    return (
        <div className='DivContenedorForm'>


            <form className='Formulario'>

                <img src={LogoLogin} alt='nombre' width='300px' height='300px' />

                <label className='LabelForm'>Email: </label>
                <input className='InputForm' onChange={handleChange} value={userData.email} type='text' name='email' />
                {
                    errors.e1 ? (<p>{errors.e1}</p>)
                        : errors.e2 ? (<p>{errors.e2}</p>)
                            : (<p>{errors.e3}</p>)
                }

                <label className='LabelForm'>Password: </label>
                <input className='InputForm' onChange={handleChange} value={userData.password} type='password' name='password' />
                {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}

                <button className='ButtonForm' onClick={handleSubmit}>Log in</button>

                <button className='ButtonCreate' type='button' onClick={handleOpenCreate}>Create new account</button>
                <Create open={openCreate} close={handleCloseCreate} />

            </form>
        </div>
    )
};

export default Form;
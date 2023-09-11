import validation from '../validation';
import { useDispatch } from 'react-redux'
import { createUser } from '../../redux/actions'
import { useState } from 'react';
import './Create.css'

const Create = ({ open, close }) => {

    const dispatch = useDispatch()


    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))
    };

    const handleSubmitCreate = (event) => {

        dispatch(createUser(userData))
        
    }

    return open ? (
        <div className='createContainer'>
            <h2>New user</h2>
            <label className='LabelCreate'>Email: </label>
            <input className='InputCreate' onChange={handleChange} value={userData.email} type='text' name='email' />
            {
                errors.e1 ? (<p>{errors.e1}</p>)
                    : errors.e2 ? (<p>{errors.e2}</p>)
                        : (<p>{errors.e3}</p>)
            }

            <label className='LabelCreate'>Password: </label>
            <input className='InputCreate' onChange={handleChange} value={userData.password} type='password' name='password' />
            {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}

            <button onClick={handleSubmitCreate} className='ButtonForm'>Submit</button>
            <button onClick={close} className='ButtonCreate' >x</button>

        </div>

    )
        : null
}
export default Create;

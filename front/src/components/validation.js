export default (data) => {
    const errors = {};

    if (!data.email.includes('@')) {
        errors.e1 = 'Ingrese un email valido'
    }
    if (!data.email) {
        errors.e2 = 'El campo no puede estar vacio'
    }
    if (data.email.length > 35) {
        errors.e3 = 'No puede tener más de 35 caracteres'
    }

    if (!/\d/.test(data.password)) {
        errors.p1 = 'Debe contener al menos un numero.'
    }
    if (data.password.length < 6 || data.password.length > 10) {
        errors.p2 = 'La longitud minima es de 6 y la maxima es de 10'
    }
    return errors
};
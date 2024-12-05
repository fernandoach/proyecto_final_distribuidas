import joi from 'joi'

const useRegisterSchema = joi.object(
  {
    nombre: joi.string()
      .min(5)
      .max(100)
      .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)
      .required()
      .messages({
        'string.base': 'El nombre de ser una cadena de texto',
        'string.empty': 'El nombre no puede estar vacio',
        'string.min': 'El nombre debe contener minimo 5 caracteres',
        'string.max': 'El nombre solo puede contener máximo 100 caracteres',
        'string.pattern.base': 'El nombre solo puede contener letras',
        'any.required': 'El nombre es requerido'
      }),
    genero: joi.string()
      .min(1)
      .max(1)
      .required()
      .pattern(/^[MFO]$/)
      .messages({
        'string.base': 'El género de ser una cadena de texto',
        'string.empty': 'El género no puede estar vacio',
        'string.min': 'El género debe contener minimo 1 caracter',
        'string.max': 'El género solo puede contener máximo 1 caracter',
        'string.pattern.base': 'El género solo puede ser M o F u O',
        'any.required': 'El género es requerido'
      }),
    fechaNacimiento: joi.date()
      .required()
      .messages({
        'any.required': 'La fecha de nacimiento es requerida',
        'date.base': 'La fecha de nacimeitno debe ser una fecha valida'
      }),
    email: joi.string()
      .required()
      .min(8)
      .max(100)
      .pattern(/^[a-zA-Z0-9._%+-áéíóúÁÉÍÓÚñÑ]+@(gmail\.com|hotmail\.com|yahoo\.com)$/)
      .messages({
        'string.base': 'El correo de ser una cadena de texto',
        'string.empty': 'El correo no puede estar vacio',
        'string.min': 'El correo debe contener minimo 8 caracteres',
        'string.max': 'El correo solo puede contener máximo 100 caracteres',
        'string.pattern.base': 'Ingrese un correo válido',
        'any.required': 'El correo es requerido'
      }),
    passwd: joi.string()
      .min(8)
      .max(32)
      .pattern(/^(?=(.*[A-Z]))(?=(.*\d.*\d)).+$/)
      .messages({
        'string.base': 'La contraseña de ser una cadena de texto',
        'string.empty': 'La contraseña no puede estar vacia',
        'string.min': 'La contraseña debe contener minimo 8 caracteres',
        'string.max': 'La contraseña solo puede contener máximo 32 caracteres',
        'string.pattern.base': 'La contraseña debe contar con minimo una letra mayucula y dos números',
        'any.required': 'La contraseña es requerida'
      }),
    repasswd: joi.any()
      .valid(joi.ref('passwd'))
      .required()
      .messages({
        'any.only': 'Las contraseñas no coiciden',
        'any.required': 'Repetir contraseña es requerido'
      })
  }
)

export { useRegisterSchema }

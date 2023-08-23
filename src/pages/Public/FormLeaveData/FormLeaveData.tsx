import Navbar from "../../../components/Nabvar/Navbar"
import '../../../styles/pages/FormLeaveData.scss'
import { useForm } from 'react-hook-form'

function FormLeaveData() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  console.log("errors", errors)

  const onSubmit = handleSubmit(() => {
    console.log("Fromulario enviado")
  })
  return (
    <div className="containerLeaveData">
      <Navbar isLoggedIn={true}></Navbar>

      <div className="leaveData-container">
        <div>
          <h2 className="leaveData-title">Deja tus datos y te contactaremos:</h2>
          <form className="leaveData-form" onSubmit={onSubmit}>

            <div className="leaveData-field">
              <label htmlFor="nombre">Nombre:</label>
              <input className="leaveData-input" type="text" id="nombre" placeholder="Escribe tu nombre"
                {...register("nombre",
                  {
                    required: true,
                    minLength: 8
                  }
                )} />
              {
                errors.nombre?.type === 'required' && <span>El nombre es requerido</span>
              }
              {
                errors.nombre?.type === 'minLength' && <span>El nombre es muy corto</span>
              }
            </div>
            <div className="leaveData-field">
              <label htmlFor="telefono">Número telefónico:</label>
              <input type="number" id="telefono" placeholder="Escribe tu número telefónico" {
                ...register("telefono", {
                  required: true,
                  minLength: { value: 10, message: "Debes ingresar al menos 10 digitos" },
                  maxLength: { value: 10, message: "Debes ingresar maximo 10 digitos" }
                })
              } />
              {
                errors?.telefono && <span>{errors.telefono?.message?.toString()}</span>
              }
            </div>
            <div className="leaveData-field">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" placeholder="Escribe tu correo electronico"
                {...register("email", {
                  required: { value: true, message: "El correo es requerido" },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "el correo no es valido"
                  }
                })}
              />
              {errors?.email && <span>{errors.email?.message?.toString()}</span>}
            </div>
            <div className="leaveData-field">
              <label htmlFor="empresa">Empresa:</label>
              <input type="text" id="empresa" {...register("empresa", { required: true })} placeholder="Escribe el nombre de tu empresa"
                {...register("empresa", {
                  required: { value: true, message: "la empresa es requerida" }
                })}
              />
              {errors?.empresa && <span> {errors?.empresa?.message?.toString()}</span>}

            </div>
            <div className="leaveData-field">
              <label htmlFor="ciudad">Ciudad ubicada:</label>
              <input type="text" id="ciudad" placeholder="Escribe tu ciudad"
                {...register("ciudad", {
                  required: { value: true, message: "la ciudad es requerida" }
                })}
              />
              {errors?.ciudad && <span> {errors?.ciudad?.message?.toString()}</span>}
            </div>
            <button type="submit" className="leaveData-btn">Enviar</button>
          </form>
        </div>
      </div>

    </div>
  )
}
export default FormLeaveData
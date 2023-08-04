import Navbar from "../../../components/Nabvar/Navbar"
import '../../../styles/pages/FormLeaveData.scss'

function FormLeaveData() {

  
  return (
    <div className="containerLeaveData">
      <Navbar isLoggedIn={true}></Navbar>
      
      <div className="leaveData-container">
      <div>
        <h2 className="leaveData-title">Deja tus datos y te contactaremos:</h2>
        <form className="leaveData-form">
          <div className="leaveData-field">
            <label htmlFor="nombre">Nombre:</label>
            <input className="leaveData-input" type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required />
          </div>
          <div className="leaveData-field">
            <label htmlFor="telefono">Número telefónico:</label>
            <input type="number" id="telefono" name="telefono" placeholder="Escribe tu número telefónico" required />
          </div>
          <div className="leaveData-field">
            <label htmlFor="email">Número telefónico:</label>
            <input type="email" id="email" name="email" placeholder="Escribe tu correo electronico" required />
          </div>
          <div className="leaveData-field">
            <label htmlFor="empresa">Empresa:</label>
            <input type="text" id="empresa" name="empresa" placeholder="Escribe el nombre de tu empresa" required />
          </div>
          <div className="leaveData-field">
            <label htmlFor="ciudad">Ciudad ubicada:</label>
            <input type="text" id="ciudad" name="ciudad" placeholder="Escribe tu ciudad" required />
          </div>
          <button type="submit" className="leaveData-btn">Enviar</button>
        </form>
      </div>
    </div>

    </div>
  )
}
export default FormLeaveData
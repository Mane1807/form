
import './App.css';
import { useState } from 'react';


function App({quotesDB}) {
  const [quotes,setInicio] = useState(quotesDB)
  const [loading,setLoading] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    let newQuote ={
        id: quotes.length + 1,
        mascota:event.target[0].value,
        dueño:event.target[1].value,
        numero:event.target[2].value,
        fecha:event.target[3].value,
        hora:event.target[4].value,
        sintomas:event.target[5].value,

    }
    
    

    setLoading(true)
    setTimeout(()=> {
        setInicio([...quotes,newQuote])
        event.target.reset()
        setLoading(false)
    },2000)

    
}

  return (
        <div className="container">
      <br />
      <div className="row">
          <div className="col-lg-6 ">
            <h1 className="card-title text-center"  >CREAR CITA </h1>
            <div className="card" >
                <div className="card-body">
                  <br></br>
                  <form onSubmit={onSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Nombre de la mascota:</label>
                        <input type="text" className="form-control" placeholder="nombre de la mascota " required/>
                      </div>
                      <div id="output"></div>
                      <div className="mb-3">
                        <label className="form-label">Nombre del dueño:</label>
                        <input type="text" className="form-control"   placeholder= "Nombre del dueño:" required></input>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Numero de contacto:</label>
                        <input type="tel" className="form-control"   placeholder= "Numero de contacto:" required></input>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">fecha:</label>
                        <input type="date" className="form-control"   required></input>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Hora:</label>
                        <input type="time" className="form-control"   required></input>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Sintomas:</label>
                        <textarea  className="form-control"   required></textarea>
                      </div>
                      <br />
                      <button className="btn btn-primary form-control" type="submit">
                      Agregar cita 
                      </button>
                  </form>
                  { loading && (
                  <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Agendando cita...</span>
                  </div>
                </div>
                  )}
                </div>
            </div>
          </div>
          <br></br>
          <div className="col-lg-6 ">
            <h1 className="card-title text-center"  >LISTA DE CITAS </h1>
            <div class="card appointment cita">
                <div class="card-body">
                  <div className="card-body">
                      {
                      quotes.map(q =>(
                      <div key={q.id} className="col-lg-12">
                        <ul>
                            <p >Mascota: {q.mascota}</p>
                            <p >Dueño: {q.dueño}</p>
                            <p >Numero de contacto: {q.numero}</p>
                            <p >Fecha: {q.fecha}</p>
                            <p >Hora: {q.hora}</p>
                            <p >Sintomas: {q.sintomas}</p>
                            
                            
                        </ul>
                        
                      </div>
                      ))
                      }      
                  </div>
                  
                  <button  class="btn btn-danger form-control">Eliminar <i className="fa-solid fa-xmark "></i></button>
                </div>
            </div>
          </div>
      </div>
    </div>
      );
    }

export {App};

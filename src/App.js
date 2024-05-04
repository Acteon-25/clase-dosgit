import './App.css';

function App() {
  return (

    <div className='from_container'>
      <div className='form_header'>
        <h1 className='form_title'>Mi primer formulario</h1>
      </div>
      <div className='form_body'>
        <div className='form'>
          <label className='form_label'>
            Nombres y apellidos:
          </label>
          <div className='form_input_ico'>
            <i className="fa fa-user" aria-hidden="true">
              <input className='from_input'>

              </input>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

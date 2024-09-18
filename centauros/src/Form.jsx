import React, { useState } from 'react';
//import './Form.css'; // Puedes agregar tus estilos personalizados


const ProspectForm = () => {
  const [showModal, setShowModal] = useState(false);
  const[modalValue,setModalValue] = useState("")
  const [formData, setFormData] = useState({
    Id_Cliente: '',
    Edad_Cliente: 0,
    Cantidad_Dependientes: 0,
    Meses_En_Libro: 0,
    Total_Relaciones: 0,
    Meses_Inactivo_12: 0,
    Contactos_12_meses: 0,
    Saldo_Revolvente: 0,
    Promedio_Disponible: 0,
    Cambio_Monto_Q4_Q1: 0,
    Monto_Total_Transacciones: 0,
    Total_Transacciones: 0,
    Cambio_Total_Transacciones_Q4_Q1: 0,
    Promedio_Utilizacion:0,
    Genero_Masculino: false,
    Nivel_Educacion_Doctorado: false,
    Nivel_Educacion_Graduado: false,
    Nivel_Educacion_Preparatoria: false,
    Nivel_Educacion_Postgrado: false,
    Nivel_Educacion_Sin_Educacion: false,
    Nivel_Educacion_Desconocido: false,
    Estado_Civil_Casado: false,
    Estado_Civil_Soltero: false,
    Estado_Civil_Desconocido: false,
    Ingreso_40K_60K: false,
    Ingreso_60K_80K: false,
    Ingreso_80K_120K: false,
    Ingreso_Menor_40K: false,
    Ingreso_Desconocido: false,
    Categoria_Tarjeta_Oro: false,
    Categoria_Tarjeta_Platino: false,
    Categoria_Tarjeta_Plata: false,
  });
  const handleSubmit2 = (e) => {
    const mappedData = {
      customer_id: formData.Id_Cliente,
      customer_age: parseInt(formData.Edad_Cliente),
      dependent_count: parseInt(formData.Cantidad_Dependientes),
      months_on_book: parseInt(formData.Meses_En_Libro),
      total_relationship_count: parseInt(formData.Total_Relaciones),
      months_inactive_12_mon: parseInt(formData.Meses_Inactivo_12),
      contacts_count_12_mon: parseInt(formData.Contactos_12_meses),
      total_revolving_bal: parseFloat(formData.Saldo_Revolvente),
      avg_open_to_buy: parseFloat(formData.Promedio_Disponible),
      total_amt_chng_q4_q1: parseFloat(formData.Cambio_Monto_Q4_Q1),
      total_trans_amt: parseFloat(formData.Monto_Total_Transacciones),
      total_trans_ct: parseFloat(formData.Total_Transacciones),
      total_ct_chng_q4_q1: parseFloat(formData.Cambio_Total_Transacciones_Q4_Q1),
      avg_utilization_ratio:parseFloat(formData.Promedio_Utilizacion),
      gender_m: formData.Genero_Masculino ? 1 : 0,
      education_level_doctorate: formData.Nivel_Educacion_Doctorado ? 1 : 0,
      education_level_graduate: formData.Nivel_Educacion_Graduado ? 1 : 0,
      education_level_high_school: formData.Nivel_Educacion_Preparatoria ? 1 : 0,
      education_level_post_graduate: formData.Nivel_Educacion_Postgrado ? 1 : 0,
      education_level_uneducated: formData.Nivel_Educacion_Sin_Educacion ? 1 : 0,
      education_level_unknown: formData.Nivel_Educacion_Desconocido ? 1 : 0,
      marital_status_married: formData.Estado_Civil_Casado ? 1 : 0,
      marital_status_single: formData.Estado_Civil_Soltero ? 1 : 0,
      marital_status_unknown: formData.Estado_Civil_Desconocido ? 1 : 0,
      income_range_40K_60K: formData.Ingreso_40K_60K ? 1 : 0,
      income_range_60K_80K: formData.Ingreso_60K_80K ? 1 : 0,
      income_range_80K_120K: formData.Ingreso_80K_120K ? 1 : 0,
      income_range_below_40K: formData.Ingreso_Menor_40K ? 1 : 0,
      income_range_unknown: formData.Ingreso_Desconocido ? 1 : 0,
      card_category_gold: formData.Categoria_Tarjeta_Oro ? 1 : 0,
      card_category_platinum: formData.Categoria_Tarjeta_Platino ? 1 : 0,
      card_category_silver: formData.Categoria_Tarjeta_Plata ? 1 : 0,
      credit_limit:modalValue,
      status:1
    };
    fetch('http://localhost:8000/solicitudes/', { // Reemplaza con tu URL real de endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Asegura que el contenido sea JSON
      },
      body: JSON.stringify(mappedData), // Convertir el objeto formData a JSON
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json(); // Parsear la respuesta a JSON
    })
    .then(data => {
        console.log("object");
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud:', error); // Manejo de errores
      // Aquí puedes manejar el error y mostrar un mensaje al usuario
    });
    setShowModal(false)
    setFormData({
      Id_Cliente: '',
      Edad_Cliente: 0,
      Cantidad_Dependientes: 0,
      Meses_En_Libro: 0,
      Total_Relaciones: 0,
      Meses_Inactivo_12: 0,
      Contactos_12_meses: 0,
      Saldo_Revolvente: 0,
      Promedio_Disponible: 0,
      Cambio_Monto_Q4_Q1: 0,
      Monto_Total_Transacciones: 0,
      Total_Transacciones: 0,
      Cambio_Total_Transacciones_Q4_Q1: 0,
      Promedio_Utilizacion:0,
      Genero_Masculino: false,
      Nivel_Educacion_Doctorado: false,
      Nivel_Educacion_Graduado: false,
      Nivel_Educacion_Preparatoria: false,
      Nivel_Educacion_Postgrado: false,
      Nivel_Educacion_Sin_Educacion: false,
      Nivel_Educacion_Desconocido: false,
      Estado_Civil_Casado: false,
      Estado_Civil_Soltero: false,
      Estado_Civil_Desconocido: false,
      Ingreso_40K_60K: false,
      Ingreso_60K_80K: false,
      Ingreso_80K_120K: false,
      Ingreso_Menor_40K: false,
      Ingreso_Desconocido: false,
      Categoria_Tarjeta_Oro: false,
      Categoria_Tarjeta_Platino: false,
      Categoria_Tarjeta_Plata: false,
    })
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mapear los valores booleanos a 0 o 1 para enviarlos en el JSON
    const mappedData = {
      customer_id: formData.Id_Cliente,
      customer_age: parseInt(formData.Edad_Cliente),
      dependent_count: parseInt(formData.Cantidad_Dependientes),
      months_on_book: parseInt(formData.Meses_En_Libro),
      total_relationship_count: parseInt(formData.Total_Relaciones),
      months_inactive_12_mon: parseInt(formData.Meses_Inactivo_12),
      contacts_count_12_mon: parseInt(formData.Contactos_12_meses),
      total_revolving_bal: parseFloat(formData.Saldo_Revolvente),
      avg_open_to_buy: parseFloat(formData.Promedio_Disponible),
      total_amt_chng_q4_q1: parseFloat(formData.Cambio_Monto_Q4_Q1),
      total_trans_amt: parseFloat(formData.Monto_Total_Transacciones),
      total_trans_ct: parseFloat(formData.Total_Transacciones),
      total_ct_chng_q4_q1: parseFloat(formData.Cambio_Total_Transacciones_Q4_Q1),
      avg_utilization_ratio:parseFloat(formData.Promedio_Utilizacion),
      gender_m: formData.Genero_Masculino ? 1 : 0,
      education_level_doctorate: formData.Nivel_Educacion_Doctorado ? 1 : 0,
      education_level_graduate: formData.Nivel_Educacion_Graduado ? 1 : 0,
      education_level_high_school: formData.Nivel_Educacion_Preparatoria ? 1 : 0,
      education_level_post_graduate: formData.Nivel_Educacion_Postgrado ? 1 : 0,
      education_level_uneducated: formData.Nivel_Educacion_Sin_Educacion ? 1 : 0,
      education_level_unknown: formData.Nivel_Educacion_Desconocido ? 1 : 0,
      marital_status_married: formData.Estado_Civil_Casado ? 1 : 0,
      marital_status_single: formData.Estado_Civil_Soltero ? 1 : 0,
      marital_status_unknown: formData.Estado_Civil_Desconocido ? 1 : 0,
      income_range_40K_60K: formData.Ingreso_40K_60K ? 1 : 0,
      income_range_60K_80K: formData.Ingreso_60K_80K ? 1 : 0,
      income_range_80K_120K: formData.Ingreso_80K_120K ? 1 : 0,
      income_range_below_40K: formData.Ingreso_Menor_40K ? 1 : 0,
      income_range_unknown: formData.Ingreso_Desconocido ? 1 : 0,
      card_category_gold: formData.Categoria_Tarjeta_Oro ? 1 : 0,
      card_category_platinum: formData.Categoria_Tarjeta_Platino ? 1 : 0,
      card_category_silver: formData.Categoria_Tarjeta_Plata ? 1 : 0,
    };
    fetch('http://localhost:8000/prospecto/', { // Reemplaza con tu URL real de endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Asegura que el contenido sea JSON
      },
      body: JSON.stringify(mappedData), // Convertir el objeto formData a JSON
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json(); // Parsear la respuesta a JSON
    })
    .then(data => {
      const credit_limit = data.credit_limit;
  
      // Actualiza el estado de formData para incluir el credit_limit
      setFormData(mappedData => ({
        ...mappedData,
        credit_limit: credit_limit,
        status:1 // Añadir el credit_limit al formData
      }));
     
      // Mostrar el modal con el valor de credit_limit
      setModalValue(credit_limit);
      setShowModal(true);
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud:', error); // Manejo de errores
      // Aquí puedes manejar el error y mostrar un mensaje al usuario
    });
  
  };
  
  const modalContent = (
    <div>
      <h2>Felicidades!</h2>
      <p>El valor preaprobado de tu tarjeta es de: {modalValue}. Para aceptar, dale continuar y tu tarjeta llegará a la dirección que nos indiques.;
      </p>
      
      <button type="submit"onClick={handleSubmit2} variant="contained" style={{backgroundColor: "#218838"}} >
            Continuar
      </button>
      <button type="submit" variant="contained" style={{backgroundColor: "orange"}} >
            Cancelar
      </button>
    </div>
  );
  return (
    <>
    {showModal && (
      <div className="modal">
        <div className="modal-content">
          {modalContent}
        </div>
      </div>)}
    <form onSubmit={handleSubmit} className="prospect-form">
      <h2>Formulario de Nuevo Prospecto</h2>
      <div className="form-group">
        <label>Identificación del Cliente</label>
        <input
          type="number"
          name="Id_Cliente"
          value={formData.Id_Cliente}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Edad del Cliente</label>
        <input
          type="number"
          name="Edad_Cliente"
          value={formData.Edad_Cliente}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label>Cantidad de Dependientes</label>
        <input
          type="number"
          name="Cantidad_Dependientes"
          value={formData.Cantidad_Dependientes}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Meses Cómo Cliente</label>
        <input
          type="number"
          name="Meses_En_Libro"
          value={formData.Meses_En_Libro}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Total de Productos con el Banco</label>
        <input
          type="number"
          name="Total_Relaciones"
          value={formData.Total_Relaciones}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Meses Inactivo en el último año</label>
        <input
          type="number"
          name="Meses_Inactivo_12"
          value={formData.Meses_Inactivo_12}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Solicitudes en el último año</label>
        <input
          type="number"
          name="Contactos_12_meses"
          value={formData.Contactos_12_meses}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Saldo Total</label>
        <input
          type="number"
          name="Saldo_Revolvente"
          value={formData.Saldo_Revolvente}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Promedio Disponible para Usar</label>
        <input
          type="number"
          name="Promedio_Disponible"
          value={formData.Promedio_Disponible}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Variación en el saldo</label>
        <input
          type="number"
          name="Cambio_Monto_Q4_Q1"
          step="0.01"
          value={formData.Cambio_Monto_Q4_Q1}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Monto Total de Transacciones</label>
        <input
          type="number"
          name="Monto_Total_Transacciones"
          value={formData.Monto_Total_Transacciones}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Total de Transacciones</label>
        <input
          type="number"
          name="Total_Transacciones"
          value={formData.Total_Transacciones}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Variación en las transacciones</label>
        <input
          type="number"
          name="Cambio_Total_Transacciones_Q4_Q1"
          step="0.01"
          value={formData.Cambio_Total_Transacciones_Q4_Q1}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Promedio de Utilización</label>
        <input
          type="number"
          name="Promedio_Utilizacion"
          step="0.01"
          value={formData.Promedio_Utilizacion}
          onChange={handleChange}
        />
      </div>

      <h3>Información Adicional</h3>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="Genero_Masculino"
            checked={formData.Genero_Masculino}
            onChange={handleChange}
          />
          Género Masculino
        </label>
      </div>

      <h4>Nivel de Educación</h4>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="Nivel_Educacion_Doctorado"
            checked={formData.Nivel_Educacion_Doctorado}
            onChange={handleChange}
          />
          Doctorado
        </label>
        <label>
          <input
            type="checkbox"
            name="Nivel_Educacion_Graduado"
            checked={formData.Nivel_Educacion_Graduado}
            onChange={handleChange}
          />
          Graduado
        </label>
        <label>
          <input
            type="checkbox"
            name="Nivel_Educacion_Preparatoria"
            checked={formData.Nivel_Educacion_Preparatoria}
            onChange={handleChange}
          />
          Preparatoria
        </label>
        <label>
          <input
            type="checkbox"
            name="Nivel_Educacion_Postgrado"
            checked={formData.Nivel_Educacion_Postgrado}
            onChange={handleChange}
          />
          Postgrado
        </label>
        <label>
          <input
            type="checkbox"
            name="Nivel_Educacion_Sin_Educacion"
            checked={formData.Nivel_Educacion_Sin_Educacion}
            onChange={handleChange}
          />
          Sin Educación
        </label>
        <label>
          <input
            type="checkbox"
            name="Nivel_Educacion_Desconocido"
            checked={formData.Nivel_Educacion_Desconocido}
            onChange={handleChange}
          />
          Desconocido
        </label>
      </div>

      <h4>Estado Civil</h4>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="Estado_Civil_Casado"
            checked={formData.Estado_Civil_Casado}
            onChange={handleChange}
          />
          Casado
        </label>
        <label>
          <input
            type="checkbox"
            name="Estado_Civil_Soltero"
            checked={formData.Estado_Civil_Soltero}
            onChange={handleChange}
          />
          Soltero
        </label>
        <label>
          <input
            type="checkbox"
            name="Estado_Civil_Desconocido"
            checked={formData.Estado_Civil_Desconocido}
            onChange={handleChange}
          />
          Desconocido
        </label>
      </div>

      <h4>Categoría de Ingresos</h4>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="Ingreso_40K_60K"
            checked={formData.Ingreso_40K_60K}
            onChange={handleChange}
            />
            $40K - $60K
          </label>
          <label>
            <input
              type="checkbox"
              name="Ingreso_60K_80K"
              checked={formData.Ingreso_60K_80K}
              onChange={handleChange}
            />
            $60K - $80K
          </label>
          <label>
            <input
              type="checkbox"
              name="Ingreso_80K_120K"
              checked={formData.Ingreso_80K_120K}
              onChange={handleChange}
            />
            $80K - $120K
          </label>
          <label>
            <input
              type="checkbox"
              name="Ingreso_Menor_40K"
              checked={formData.Ingreso_Menor_40K}
              onChange={handleChange}
            />
            Menor de $40K
          </label>
          <label>
            <input
              type="checkbox"
              name="Ingreso_Desconocido"
              checked={formData.Ingreso_Desconocido}
              onChange={handleChange}
            />
            Desconocido
          </label>
        </div>
  
        <h4>Categoría de Tarjeta</h4>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="Categoria_Tarjeta_Oro"
              checked={formData.Categoria_Tarjeta_Oro}
              onChange={handleChange}
            />
            Oro
          </label>
          <label>
            <input
              type="checkbox"
              name="Categoria_Tarjeta_Platino"
              checked={formData.Categoria_Tarjeta_Platino}
              onChange={handleChange}
            />
            Platino
          </label>
          <label>
            <input
              type="checkbox"
              name="Categoria_Tarjeta_Plata"
              checked={formData.Categoria_Tarjeta_Plata}
              onChange={handleChange}
            />
            Plata
          </label>
        </div>
  
        <div className="form-group">
          <button type="submit" className="submit-button">Enviar</button>
        </div>
      </form>
      </>  
    );
  };
  
  export default ProspectForm;
  

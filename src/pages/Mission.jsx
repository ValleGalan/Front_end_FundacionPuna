import React from 'react'

import fondoMision from "@/assets/images/fondo_mision.JPEG"

const Mission = () => {
    
   
     return (
      <div className="mx-auto px-6 py-8">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-center text-black-900 mb-6">
          Nuestra Misión
        </h1>
        <p className="text-lg text-center text-black-600 mb-12">
          Transformar vidas y comunidades a través de la excelencia, la dedicación y el impacto positivo.
        </p>

        

        {/* Sección:Mision y vision */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-card  p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-black-800 mb-4">Misión</h3>
            <p className="text-black-600">
            Nuestra visión es clara y profundamente inspiradora: un mundo donde las comunidades originarias vivan en armonía, preservando sus tradiciones y sueños, mientras acceden a las oportunidades necesarias para prosperar y alcanzar su máximo potencial...            
            </p>
          </div>
          <div className="card p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-black-800 mb-4">Visión</h3>
            <p className="text-black-600">
            Nuestra visión es clara y profundamente inspiradora: un mundo donde las comunidades originarias vivan en armonía, preservando sus tradiciones y sueños, mientras acceden a las oportunidades necesarias para prosperar y alcanzar su máximo potencial...             
            </p>
          </div>
        </div>

     

      </div>
    )
}

export default Mission
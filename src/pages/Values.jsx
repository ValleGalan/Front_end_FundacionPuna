import React from 'react'

import valor1 from "@/assets/images/Iconos Fundacion valores/1- respeto.PNG";
import valor2 from "@/assets/images/Iconos Fundacion valores/2-reciprocidad.PNG";
import valor3 from "@/assets/images/Iconos Fundacion valores/3-justicia social.PNG";
import valor4 from "@/assets/images/Iconos Fundacion valores/4-empoderamiento.PNG";
import valor5 from "@/assets/images/Iconos Fundacion valores/5-sostenibilidad.PNG";
import valor6 from "@/assets/images/Iconos Fundacion valores/6-solidaridad.PNG";
import valor7 from "@/assets/images/Iconos Fundacion valores/7-lealtad.PNG";
import valor8 from "@/assets/images/Iconos Fundacion valores/8-compromiso.PNG";
import valor9 from "@/assets/images/Iconos Fundacion valores/9-empatia.PNG";
import valor10 from "@/assets/images/Iconos Fundacion valores/10-humildad.PNG";


const Values = () => {  
   
    return (
           <div className="mx-auto px-6 py-16">
        {/* Título principal */}
        <h1 className="text-5xl font-bold text-center mb-8">
          Nuestros Valores
        </h1>
        <p className="text-xl text-center mb-12">
          Los principios que nos guían.
        </p>

        {/* Sección de valores principales */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                  {[
                    { img: valor1,name: "Respeto",},
                    { img: valor2, name: "Reciprocidad",},
                    { img: valor3, name: "Justicia Social", },
                    { img: valor4,name: "Empoderamiento",},
                    { img: valor5, name: "Sostenibilidad",},
                    { img: valor6, name: "Solidaridad", },
                    { img: valor7,name: "Lealtad",},
                    { img: valor8, name: "Compromiso",},
                    { img: valor9, name: "Empatia", },
                    { img: valor10, name: "Humildad", },
                  ].map((member, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={member.img}
                        alt={`Foto de ${member.name}`}
                        className="w-20 h-20 object-cover rounded-full mx-auto mb-4 shadow-lg"
                      />
                      <h3 className="text-xl">{member.name}</h3>
                    </div>
                  ))}
                </div>

        

         
      </div>
   )
}

export default Values
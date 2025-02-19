import BlogCard from '@/components/BlogCard'
import Loading from '@/components/Loading'
import { getEvn } from '@/helpers/getEnv'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

import portada_quienes_somos from "@/assets/images/portada_quienes_somos.JPEG";

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

import imagenVictoriaAraya from "@/assets/images/Miembro_Victoria_Araya.JPG";
import imagenYamilAlejo from "@/assets/images/Miembro_Yamil_Alejo.JPEG";
import logo_fundacionPuna_largo from '@/assets/images/logo_fundacionPuna_largo.PNG'
import fondo_home from '@/assets/images/fondo_home.JPG'

const Index = () => {
    const { data: blogData, loading, error } = useFetch(`${getEvn('VITE_API_BASE_URL')}/blog/blogs`, {
        method: 'get',
        credentials: 'include'
    })
   
    if (loading) return <Loading />
    return (
        <div>
          <div className="relative">
                    <img src={fondo_home} alt="Imagen de fondo de Fundación Puna" className="w-full h-screen object-cover" />
                    
                    <p className="absolute inset-0 flex items-end justify-center text-white text-xl font-semibold p-7">
                    "Fortaleciendo comunidades, defendiendo derechos y construyendo un futuro inclusivo y sostenible."
                    </p>
                    </div>
                    <div className="  px-10">
 {/* SECCION: QUIENES SOMOS*/}
      <div className="py-10 flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="lg:w-1/2">
          <img
            src={portada_quienes_somos}
            alt="Nuestra historia"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="lg:w-1/2 text-lg text-black-700">
          <h2 className="text-2xl font-semibold mb-6">Nuestra Historia</h2>
          <p className="mb-4">
            Estamos dedicados a promover la justicia social, los derechos
            humanos y la participación colectiva. No somos meros observadores ni
            agentes externos; caminamos junto a las comunidades, compartiendo
            sueños y desafíos, impulsando el desarrollo social y económico desde
            un enfoque de respeto y colaboración. Nuestros esfuerzos se centran
            en reducir las brechas de desigualdad social, empoderando a cada
            individuo y fortaleciendo la autonomía comunitaria.
          </p>
          <p className="mb-4">
            A través de servicios como mentorías, apoyo educativo, talleres de
            emprendimiento, clases de idiomas y acceso a recursos médicos y
            legales, buscamos proporcionar herramientas que permitan a las
            comunidades transformar su realidad sin perder su esencia. Nos
            inspira el concepto de Ayni, la reciprocidad andina, que guía todas
            nuestras acciones y refuerza nuestra convicción de que el bien común
            es el verdadero camino hacia la prosperidad.
          </p>
          <p className="mb-4">
            En Puna Foundation somos más que una organización; somos un
            movimiento de esperanza y transformación, uniendo manos y corazones
            para construir juntos un mundo mejor.
          </p>
        </div>
      </div>


    {/* Sección:Mision y vision */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" bg-card  p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black-800 mb-4">Misión</h3>
            <p className="text-black-600">
            Nuestra visión es clara y profundamente inspiradora: un mundo donde las comunidades originarias vivan en armonía, preservando sus tradiciones y sueños, mientras acceden a las oportunidades necesarias para prosperar y alcanzar su máximo potencial...            
            </p>
          </div>
          <div className=" bg-card  p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black-800 mb-4">Visión</h3>
            <p className="text-black-600">
            Nuestra visión es clara y profundamente inspiradora: un mundo donde las comunidades originarias vivan en armonía, preservando sus tradiciones y sueños, mientras acceden a las oportunidades necesarias para prosperar y alcanzar su máximo potencial...             
            </p>
          </div>
        </div>



        {/* Sección: VALORES*/}
        <div className='py-10'>
        <h2 className="text-2xl text-center font-bold text-black-800 mb-4">Nuestros Valores</h2>
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


         {/* Miembro del equipo */}
         <div className="bg-background_green text-white">
         <h2 className="text-2xl  font-semibold text-center mb-6">EQUIPO</h2>

         <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { img: imagenVictoriaAraya, name: "VICTORIA ARAYA",   role: "Fundadora", },
                    { img: imagenYamilAlejo, name: "YAMIL ALEJO", role: "Fundador" },
                    {  img: imagenVictoriaAraya,  name: "JEREMY MUNSON",  role: "Fundador",  },
                  ].map((member, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={member.img}
                        alt={`Foto de ${member.name}`}
                        className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
                      />
                      <h3 className="text-xl font-bold ">{member.name}</h3>
                      <p className="text-white">{member.role}</p>
                    </div>
                  ))}
                </div>
                
         </div>

        {/*Post del blog*/} 
        <div className='py-10'>
        <h2 className="text-2xl font-bold text-black-800 mb-4 text-center">NUESTRO IMPACTO</h2>   
        <div className='py-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
            {blogData && blogData.blog.length > 0
                ?
                blogData.blog.map(blog => <BlogCard key={blog._id} props={blog} />)
                :
                <div>Data Not Found.</div>
            }
        </div>
        </div>

        </div>
        </div>
    )
}

export default Index
import React from "react";

import imagenVictoriaAraya from "@/assets/images/Miembro_Victoria_Araya.JPG";
import imagenYamilAlejo from "@/assets/images/Miembro_Yamil_Alejo.JPEG";
import portada_quienes_somos from "@/assets/images/portada_quienes_somos.JPEG";

const AboutUs = () => {
  return (
    <div className="mx-auto px-6 py-24">
      {/* Título principal */}
      <h1 className="text-5xl font-bold text-center text-black-900 mb-6">
        Fundación Puna
      </h1>
      <p className="text-xl text-center text-black-600 mb-12">
        En Fudación Puna somos una organización sin fines de lucro que trabaja
        junto a las comunidades originarias de Argentina, especialmente en la
        región de Salinas Grandes, Jujuy. Nuestra historia nace del compromiso
        profundo de honrar nuestras raíces y construir un puente hacia un futuro
        más equitativo. Creemos en el poder de las personas y en la riqueza de
        las tradiciones ancestrales como cimientos para un desarrollo sostenible
        y digno.
      </p>

      {/* Primera sección: Historia */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="lg:w-1/2">
          <img
            src={portada_quienes_somos}
            alt="Nuestra historia"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="lg:w-1/2 text-lg text-black-700">
          <h2 className="text-3xl font-semibold mb-6">Nuestra Historia</h2>
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

      {/* 2da sección: Nuestro equipo */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">EQUIPO</h2>
        <p className="text-center text-black-600 mb-10">
          Conformado por personas apasionadas, nuestro equipo es la fuerza
          detrás de nuestra misión y visión.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Miembro del equipo */}
          {[
            {
              img: imagenVictoriaAraya,
              name: "VICTORIA ARAYA",
              role: "Fundadora",
            },
            { img: imagenYamilAlejo, name: "YAMIL ALEJO", role: "Fundador" },
            {
              img: imagenVictoriaAraya,
              name: "JEREMY MUNSON",
              role: "Fundador",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={`Foto de ${member.name}`}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        
      </div>

      {/* Sección final: Compromiso */}
      <div className="bg-black-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">
          NUESTRO COMPROMISO
        </h2>
        <p className="text-lg text-center text-black-700">
          En Puna Foundation, nuestro compromiso es inquebrantable: trabajamos
          cada día para construir comunidades más fuertes, equitativas y
          resilientes, asegurando que cada persona tenga acceso a oportunidades
          reales de crecimiento. Fomentamos el desarrollo sostenible a través de
          la educación, el emprendimiento y la colaboración activa, creyendo en
          la transformación desde adentro y en la capacidad de cada comunidad
          para forjar su propio futuro.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

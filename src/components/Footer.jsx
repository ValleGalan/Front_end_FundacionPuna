import React from 'react'
import { Link } from "react-router-dom"


import logo_fundacionPuna_largo from '../assets/images/logo_fundacionPuna_largo.PNG'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { RouteBlog, RouteBlogByCategory, RouteCategoryDetails, RouteCommentDetails, RouteIndex, RouteUser,RouteValues,RouteMission,RouteAboutUs,RouteStore, RouteContact, RoutePaymentForm } from "@/helpers/RouteName";

const Footer = () => {
    return (
        <div className="bg-gray-50 mt-10">
  <div className="max-w-6xl mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
          {/* Logo */}
          <img
            src={logo_fundacionPuna_largo}
            alt="Logo Fundación Puna"
            className="mx-auto mb-4 max-w-xs"
          />
  
           {/* Redes sociales */}
           <div>
        <h3 className="text-xl font-semibold mb-4">SIGUENOS</h3>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-pink-600 hover:text-pink-800" />
          </a>
        </div>
        </div>
        </div>
           
{/* Menú de direcciones */}
<div className="flex justify-center space-x-10 mb-6">
  <div className="text-left">
    <ul>
      <li className="mb-2">
      <Link to={RouteIndex}>Home</Link>
      </li>
      <li className="mb-2">
      <Link to={RouteAboutUs}>About us</Link>
      </li>
      <li className="mb-2">
      <Link to={RouteContact}>Contact</Link>
      </li>
      <li className="mb-2">
      <Link to={RouteStore}>Tienda</Link>
      </li>
      <li className="mb-2">
      <Link to={RoutePaymentForm}>Donar</Link>
      </li>
      
    </ul>
  </div>
</div>


        </div>
      </div>
    )
}

export default Footer
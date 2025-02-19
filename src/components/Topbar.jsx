import React, { useState,useEffect } from 'react'
import logo from '@/assets/images/logo_FundacionPuna.PNG'
import logo_fundacionPuna_largo from '@/assets/images/logo_fundacionPuna_largo.PNG'

import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { MdLogin } from "react-icons/md";
import SearchBox from './SearchBox';
import {RouteBlogAdd, RouteIndex, RouteProfile, RouteSignIn, RouteBlog, RouteBlogByCategory, RouteCategoryDetails, RouteCommentDetails, RouteUser,RouteValues,RouteMission,RouteAboutUs,RouteStore, RouteContact, RoutePaymentForm } from "@/helpers/RouteName";

import { useDispatch, useSelector } from 'react-redux';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GoDot } from "react-icons/go";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import usericon from '@/assets/images/user.png'

import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoLogOutOutline, IoSearch } from "react-icons/io5";

import { removeUser } from '@/redux/user/user.slice';
import { showToast } from '@/helpers/showToast';
import { IoMdSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useSidebar } from './ui/sidebar';

import { useFetch } from "@/hooks/useFetch";
import { getEvn } from "@/helpers/getEnv";

import LanguageSwitcher from "./LanguageSwitcher";

const Topbar = () => {

    const { toggleSidebar } = useSidebar()
    const [showSearch, setShowSearch] = useState(false)
    const dispath = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [open, setOpen] = useState(false);


    const { data: categoryData } = useFetch(`${getEvn('VITE_API_BASE_URL')}/category/all-category`, {
            method: 'get',
            credentials: 'include'
    })

    const handleLogout = async () => {
        try {
            const response = await fetch(`${getEvn('VITE_API_BASE_URL')}/auth/logout`, {
                method: 'get',
                credentials: 'include',
            })
            const data = await response.json()
            if (!response.ok) {
                return showToast('error', data.message)
            }
            dispath(removeUser())
            navigate(RouteIndex)
            showToast('success', data.message)
        } catch (error) {
            showToast('error', error.message)
        }
    }

    const toggleSearch = () => {
        setShowSearch(!showSearch)
    }

    
    return (
        <div className=' flex justify-between items-center h-16 fixed w-full z-20 bg-white px-5 border-b '>
            <div className='flex justify-center items-center gap-2'>
                <button onClick={toggleSidebar} className='md:hidden ' type='button'>
                    <AiOutlineMenu />
                </button>
                <Link to={RouteIndex}> 
                    <img src={logo_fundacionPuna_largo} className='w-60 h-12 hidden md:block md:block' />
                </Link>
            </div>

            <Link to={RouteAboutUs} className='hidden md:block '>About us</Link>
            <Link to={RouteContact} className='hidden md:block '>Contact</Link>
            <Button to={RouteStore} className=" hidden md:block  bg-background_button hover:bg-background_fondo_claro hover:text-black  px-4 py-2 rounded-lg"> Tienda</Button>
            <Button to={RoutePaymentForm} className="hidden md:block  bg-background_button hover:bg-background_fondo_claro hover:text-black px-4 py-2 rounded-lg"> Donar</Button>
            
            {/* Categorías con Hover */}
            <div 
                className="relative group hidden md:block"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <span className="cursor-pointer text-gray-700 hover:text-gray-900">
                    Categorías ▼
                </span>

                {open && categoryData?.category?.length > 0 && (
                    <div className="absolute bg-white shadow-lg  rounded-md w-48 z-10">
                        {categoryData.category.map((category) => (
                            <Link
                                key={category._id}
                                to={RouteBlogByCategory(category.slug)}
                                className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                            >
                                <GoDot className="mr-2" />
                                {category.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-100">
                <LanguageSwitcher />
            </div>
             {/* Banderas: para la traduccion 
            <div className="flex justify-end p-4 ">
                <button onClick={() => changeLanguage("es")}>
                    <img src={arFlag} alt="Español" className={`w-8 h-8 mx-2 ${lang === "es" ? "border-2 border-blue-500" : ""}`} />
                </button>
                <button onClick={() => changeLanguage("en")}>
                    <img src={usFlag} alt="Inglés" className={`w-8 h-8 mx-2 ${lang === "en" ? "border-2 border-blue-500" : ""}`} />
                </button>
            </div>
            */}
            {/* Opciones del usuario: login o desloguearte */}
            {user && user.isLoggedIn
                                        ? <><Link to={RouteCommentDetails}>Comments</Link> </>
                                        :
                                        <></>
                                    }
                                    {user && user.isLoggedIn && user.user.role === 'admin'
                                        ? <>
                                                    <Link to={RouteBlog}>Blogs</Link>
                                                    <Link to={RouteCategoryDetails}>Categories</Link>
                                                    <Link to={RouteUser}>Users</Link>
                                        </>
                                        :
                                        <></>
                                    }
            

            




            {/*Boton buscar  */}
            <div className='w-[150px]  md:hidden' >
                <div className={`md:relative md:block absolute bg-white left-0 w-full md:top-0 top-16 md:p-0 p-5 ${showSearch ? 'block' : 'hidden'}`}>
                    <SearchBox />
                </div>
            </div>
           
            
            <div className='flex items-center gap-5'> {/*  */}
                <button onClick={toggleSearch} type='button' className='md:hidden block '>
                    <IoMdSearch size={25} />
            </button>

            {/*Boton perfil de usuario*/}
                {!user.isLoggedIn ?
                    <Button asChild className="rounded-full  bg-background_button">
                        <Link to={RouteSignIn}  >
                            <MdLogin />
                            Sign In
                        </Link>
                    </Button>
                    :
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={user.user.avatar || usericon} />
                            </Avatar>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                <p>{user.user.name}</p>
                                <p className='text-sm'>{user.user.email}</p>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link to={RouteProfile}>
                                    <FaRegUser />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link to={RouteBlogAdd}>
                                    <FaPlus />
                                    Create Blog
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                                <IoLogOutOutline color='red' />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                }


            </div>



        </div >
    )
}

export default Topbar
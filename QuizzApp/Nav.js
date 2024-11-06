import logo from './LOGO.png'
import './Formulaire.css';
import { useNavigate, useParams } from 'react-router-dom';
import profile from './profile.png'
import profile2 from './profile.jpg'
import cancel from './multiply.png'
import search from './search.png'
import {useState} from 'react'
const Nav=()=>{
    const {genre}=useParams()
    const navigate=useNavigate()
    const [clicked,setClicked]=useState(true)
    const action =(e)=>{
        if(clicked) e.target.previousElementSibling.focus()
        else document.getElementById('search').value=''
        setClicked(clicked ? false : true)
    }
    const change=(e)=>{
       setClicked(false)
    }
    return(
        <body className='h-screen' style={{backgroundImage: 'linear-gradient(to right, #c26423, #bc743c, #b58355, #af8f70, #a89b8d)'}}>
        <nav className='flex items-center p-1 justify-between' style={{background:'#DCC0A2'}}>
        <img className='w-40 cursor-pointer' onClick={()=>navigate('/')} src={logo}></img>
        <input type='text' id='search' className='search w-1/2 p-3 rounded-full focus:outline-0 -translate-x-9' placeholder='React, Php, JavaScript...' onChange={change}/>
        {clicked ? <img src={search} className='w-6 absolute right-1/4 -translate-x-1 cursor-pointer' onClick={action}/>
           : <img src={cancel} className='w-4 absolute right-1/4 -translate-x-1 cursor-pointer' onClick={action}/>}
            {genre=='masculin' ? <img src={profile} className='w-12 h-12 mr-3 cursor-pointer rounded-full'/>
            :  <img src={profile2} className='w-12 h-12 mr-3 cursor-pointer rounded-full'/>}
        </nav></body>
    )
}
export default Nav
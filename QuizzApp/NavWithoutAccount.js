import logo from './LOGO.png'
import './Formulaire.css';
import user from './user.png'
import cancel from './multiply.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const NavWithoutAccount=({search})=>{
    const [clicked,setClicked]=useState(false)
    const navigate=useNavigate()
    const action =()=>{
        setClicked(false)
        document.getElementById('default-search').value=''
        search(document.getElementById('default-search').value)
    }
    const rechercher=()=>{
        search(document.getElementById('default-search').value)
    }
    return(
        
        <nav className='flex items-center p-1 justify-between relative' style={{background:'#DCC0A2'}}>
            <img className='w-40 cursor-pointer' onClick={()=>navigate('/')} src={logo}></img>
 
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative w-1/3">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" onChange={()=>setClicked(true)} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Php, React, JavaScript..." required />
      {clicked==true &&  <img src={cancel} className='w-4 h-4 absolute -translate-x-12 cursor-pointer right-14  top-5' onClick={action}/>}
        <button type="submit"  onClick={rechercher} class="text-white absolute end-2.5 bottom-2.5  hover:bg-orange-300 focus:ring-4 focus:outline-none bg-black focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>

           <div className='flex gap-4'><input type='button' className='button-62' value="S'inscrire" onClick={()=>navigate('/formulaire')}/> 
           <input type='button' className='button-62' value="Se connecter" onClick={()=>navigate('/connexion')}/>
           <img src={user} className='w-12 h-12 mr-3 cursor-pointer' />
        </div> </nav>
    
    )
}
export default NavWithoutAccount
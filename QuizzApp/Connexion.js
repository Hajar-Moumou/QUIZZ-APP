import './Formulaire.css';
import eye from './eye (1).png'
import { useState,useEffect } from 'react';
import crossed from './crossed-eye.png'
import error from './mark.png'
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios'
const Connexion=()=>{
    const [users,setUsers]=useState([])
        useEffect(()=>{
    axios.get('http://localhost:8081/qcm_entretient/users').then((res)=>{
        setUsers(res.data)
    })
},[])
    const [showPassword, setShowPassword] = useState(true);
    const navigate=useNavigate()
    const check=()=>{
        if(showPassword===true){
            document.getElementById('input').type='text'
        }
        else{
          document.getElementById('input').type='password'
        }
        setShowPassword(showPassword ? false : true)
      }
      const goback=()=>{
        navigate('/formulaire')
      }
    const connecter=()=>{
        let email=document.getElementById('email').value
        let pass=document.getElementById('input').value
       if(users.filter(user=>user.email==email && user.mot_de_passe==pass).length>0==false){
        document.getElementById('p').hidden=false
        document.getElementById('img').hidden=false
        document.getElementById('before').hidden=true
        document.getElementById('after').hidden=false
        document.forms[0].reset()
        document.getElementById('email').focus()
       }
       else{
        let genre=users.filter(user=>user.email==email)[0].Genre
        navigate(`/Nav/${email}/${pass}/${genre}`)
       }
    }
    return(
        <body className='flex items-center h-screen' style={{backgroundImage: 'linear-gradient(to right, #eb7c30, #bc6e30, #915f32, #694e34, #443d36)'}}>
            <form className="form max-h-3/4 relative">
                <h2>Se connecter</h2>
                <div className='flex gap-1 -translate-x-2 items-center'>
                <img id='img' src={error} className='w-7 h-7 mt-2' hidden/>
                <p hidden id='p' style={{color:'#E2725B',fontSize:'16px'}}>Email ou mot de passe incorrect</p>
              </div>  <input type='text' id='email' placeholder='Email' className='searchbar placeholder-white' />      
       
       <input type='password' id='input' placeholder='Mot de passe' className='searchbar placeholder-white' /> 
       <a href='' className='ml-36'>forget password?</a>
       <span id='before' className='w-6 text-white absolute top-40  right-12 mt-2 cursor-pointer' onClick={check}>{showPassword ?       <img src={eye} id='eye'/>
:         <img src={crossed} id='crossed'/>
}</span> 
       <span hidden id='after' style={{position:'absolute',top:'40%'}} className='w-6 text-white right-12 cursor-pointer' onClick={check}>{showPassword ?       <img src={eye} id='eye'/>
:         <img src={crossed} id='crossed'/>
}</span> 
<input type='button' className='connect-button' value='Se connecter' onClick={connecter}/>
<span className='mt-24 translate-y-5'>ou</span><a onClick={goback} className='translate-y-5 cursor-pointer'>s'inscrire</a>
            </form>
        </body>
    )
}
export default Connexion
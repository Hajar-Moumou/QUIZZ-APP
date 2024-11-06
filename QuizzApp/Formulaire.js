import React from 'react';
import './Formulaire.css';
import {useNavigate} from 'react-router-dom';
import arrow from './back-arrow.png'
import eye from './eye (1).png'
import crossed from './crossed-eye.png'
import axios from 'axios'
import { useState,useEffect } from 'react';
export default function Formulaire(){
  const navigate=useNavigate()
  const retour =()=>{
    navigate('/')
  }
  const [users,setUsers]=useState([])
  useEffect(()=>{
axios.get('http://localhost:8081/qcm_entretient/users').then((res)=>{
  setUsers(res.data)
})
},[])
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const upload=(e)=>{
    let username=document.getElementById('nomUtilisateur').value
    let email=document.getElementById('email').value
    let mot_de_passe=document.getElementById('input').value
    let mot_de_passe2=document.getElementById('input2').value
    let genre=document.f.radio.value
    if(username=='' || email=='' ||mot_de_passe=='' ||mot_de_passe2==''||genre=='') alert('remplir tous les champs sil vous plait')
    else if(users.map(user=>{if(user.email==email) return true
      else return false
    }).includes(true)){
      document.getElementById('p').hidden=false}
   else if(mot_de_passe==mot_de_passe2){
    axios.post('http://localhost:8081/qcm_entretient/users', {username:username,email:email,mot_de_passe:mot_de_passe,genre:genre}).then((res)=>{
      navigate(`/Nav/${email}/${mot_de_passe}/${genre}`)
    })}
    if(mot_de_passe!=mot_de_passe2) document.getElementById('input2').style='border:3px solid  #E2725B'
  }
  const check=()=>{
    if(showPassword===true){
        document.getElementById('input').type='text'
    }
    else{
      document.getElementById('input').type='password'
    }
    setShowPassword(showPassword ? false : true)
  }
  const check2=()=>{
  if(showPassword2===false){
      document.getElementById('input2').type='password'
    }
    else{
      document.getElementById('input2').type='text'
  }
  setShowPassword2(showPassword2 ? false : true)
  }
  const connect=()=>{
    navigate('/Connexion')
  }
    return (
      <body className='flex sm:flex-col sm:pb-10 lg:pb-0 lg:flex-row h-screen lg:items-center sm:items-center' style={{backgroundImage: 'linear-gradient(to right, #eb7c30, #bc6e30, #915f32, #694e34, #443d36)'}}>
      <img src={arrow} className='arrow w-7 absolute lg:top-0 sm:left-0 cursor-pointer bg-white rounded'  onClick={retour}/>
      <div className='lg:w-1/2 sm:w-full text-center'>
      <p className='text-white sm:p-8 lg:p-0 font-semibold text-4xl lg:ml-16 text-center flex flex-col gap-10 paragraphe'>Prêt pour l’entretien de vos rêves?<span className='text-2xl opacity-65 paragraphe'>Entraînez-vous avec nos modules de quiz et arrivez confiant!</span> </p>
      </div>
      <form name='f' className='form  lg:w-4/12 sm:w-2/3 relative' >
      <h2 className='paragraphe'>Créer un compte:</h2> 
      <p hidden id='p' style={{color:'#E2725B',fontSize:'16px',position:'absolute',top:'45px'}}>Account already exists</p>
        <input type='text' required id='nomUtilisateur' placeholder='Nom utilisateur' className='searchbar placeholder-white' />
        <input type='email' required id='email' placeholder='Email' className='searchbar placeholder-white' />      
       
        <input type='password' required id='input' placeholder='Mot de passe' className='searchbar placeholder-white' /> 
        <span  className='w-6 text-white absolute right-11 top-56 mt-3 cursor-pointer' onClick={check}>{showPassword ?       <img src={eye} id='eye'/>
:         <img src={crossed} id='crossed'/>
}</span> 
        <input type='password' required id='input2' placeholder='Confirmer le mot de passe' className='searchbar placeholder-white' />
        <span  className='w-6 text-white absolute right-11 top-72 mt-4 cursor-pointer' onClick={check2}>{showPassword2 ?       <img src={eye} id='eye'/>
:         <img src={crossed} id='crossed'/>
}</span> 
<div className='flex gap-8 mt-2'>
<div className='flex gap-2'><input type='radio' name='radio' id='rad1' value='féminin'/><label for='rad1'>Féminin</label></div>
<div className='flex gap-2'><input type='radio' name='radio' id='rad2'  value='masculin' /><label for='rad2'>Masculin</label></div></div>
        <p>Avez-vous déjà un compte?</p>
        <a className='cursor-pointer' onClick={connect}>Connectez-vous</a>
        <input type='button' className='connect-button' value="S'inscrire" onClick={upload}/>
      </form>
      </body>
    );
}

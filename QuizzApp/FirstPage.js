import logo from './LOGO.png'
import '../App.css';
import {useNavigate} from 'react-router-dom';
import background from './background.avif'

const FirstPage=()=>{
    const navigate=useNavigate()
    const GotoForm=()=>{
        navigate('/formulaire')
    }
const gotoMain=()=>{
    navigate(`/Main`)
}
    return(
        <body className='w-screen lg:min-h-screen sm:h-full sm:pb-8 md:pb-0' style={{backgroundImage:`url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%', filter: 'brightness(1) contrast(1.1)',backgroundPosition: 'center'}}>

        <div className='flex flex-col gap-10 lg:w-2/5  sm:w-3/4 lg:p-0  text-center m-auto'> 

            <img className='w-80 m-auto translate-y-4' src={logo}></img>

        
                <h1 className='text-white tracking-widest leading-relaxed font-bold text-4xl'>
                BOOSTEZ VOS CHANCES DE RÉUSSIR VOTRE ENTRETIEN D'EMBAUCHE!
                </h1>
                <p  className='text-white font-light text-xl -translate-y-4'>
                MAÎTRISEZ CHAQUE QUESTION ET IMPRESSIONNEZ VOS RECRUTEURS EN VOUS PRÉPARANT EFFICACEMENT AVEC NOS MODULES QCM SUR MESURE.
                </p>
                <span className='text-white text-xl '>INSCRIVEZ-VOUS SI VOUS N'AVEZ PAS DE COMPTE :</span>
               
            
        <a className="button" onClick={GotoForm}>S'inscrire</a>
         </div>
         <div style={{textAlign:'center'}}><a href='' style={{color:'#fcb56e',textDecorationLine:'underline'}} onClick={gotoMain}>Continuer sans compte</a>
</div>
          </body>
               
    )
}
export default FirstPage
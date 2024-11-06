import { useState,useEffect } from 'react';
import NavWithoutAccount from './NavWithoutAccount';
import ListeQuizz from './ListeQuizz';
import Niveaux from './Niveaux';
import axios from 'axios';
const Main =()=>{
    const [modules,setModules]=useState([])
    const [quizz,setQuizz]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/qcm_entretient/modules').then((res)=>{
          setModules(res.data)
        })
        },[])
    useEffect(()=>{
        axios.get('http://localhost:8081/qcm_entretient/quizz').then((res)=>{
          setQuizz(res.data)
        })
        },[])
    const [idModule,setIdModule]=useState(0)
    const search=(nomModule)=>{
        nomModule != '' ? setIdModule(modules.filter(module=>module.nom_de_module==nomModule)[0].id_module)
        : setIdModule(0)
    }
    return (
        <body className='h-screen' style={{backgroundImage: 'linear-gradient(to right, #c26423, #bc743c, #b58355, #af8f70, #a89b8d)'}}>
        <NavWithoutAccount search={search}/>
        <Niveaux quizz={quizz} idModule={idModule}/>
        <ListeQuizz  idModule={idModule} quizz={quizz}/></body>
    )
}
export default Main
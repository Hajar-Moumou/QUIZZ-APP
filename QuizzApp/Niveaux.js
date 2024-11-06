const Niveaux = ({quizz,idModule}) =>{
    return (
        <>
        
        <div className="flex items-center my-3 gap-9 justify-center">
               <h1 className="text-white font-bold ">Niveaux:</h1>         
            <div style={{background:'#e4ffcf', border:'2px solid #5c7d41',color:'#5c7d41'}} class="inline-flex justify-between items-center p-2 text-sm font-medium text-center rounded-full w-1/4">
Facile
<span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold bg-black text-white rounded-full">
{idModule==0 ? quizz.filter(quiz=>quiz.niveau_difficulte=='facile').length : quizz.filter(quiz=>quiz.id_module==idModule).filter(q=>q.niveau_difficulte=='facile').length}
</span>
</div>
<div style={{background:'#fcf8c2', border:'2px solid #736538',color:'#736538'}} class="inline-flex items-center p-2 text-sm font-medium text-center w-1/4 bg-red-200 border-2 rounded-full border-red-500">
            Intérmediaire
            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {quizz.filter(quiz=>quiz.niveau_difficulte=='Intérmediaire').length}
            </span>
            </div>
            <div style={{background:'#FBCEB1', border:'2px solid #8B0000',color:'#8B0000'}} class="inline-flex items-center p-2 text-sm font-medium text-center w-1/4 rounded-full bg-red-200 border-2 border-red-500">
            Defficile
            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {quizz.filter(quiz=>quiz.niveau_difficulte=='dificile').length}
            </span>
            </div>
        </div></>
    )
}
export default Niveaux
const ListeQuizz =({idModule,quizz})=>{
    const quizzModule=quizz.filter(q=>q.id_module==idModule)
    return(
        <div>
    <h1 className="text-white text-md m-3 underline font-semibold">{quizzModule.length} Resultas</h1>
       { idModule!=0 ? <div className="flex px-3 gap-12 h-1/2 mt-5 justify-center">
            
            {quizzModule.map(quizz=>
            <>
            <div style={{boxShadow:' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}} class="p-4 h-fit w-1/4 bg-white border rounded-lg shadow-md">
            <div class="flex items-center space-x-2">
                <img src={quizz.icon} alt="React Icon" class="w-6 h-6"/>
                <span class="text-lg font-semibold">{quizz.nom_quiz}</span>
            </div>  
            <div class="flex mt-2 space-x-2">
                <span class="px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">{quizz.type}</span>
                <span class="px-2 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full">{quizz.niveau_difficulte}</span>
            </div>
            <div class="flex items-center mt-4 space-x-4">
                <span class="text-sm font-medium text-gray-600">{quizz.duree}</span>
            </div>

            <div class="text-end  mt-4 border-t pt-2">
                <span class="text-sm font-medium text-gray-500">Added in {new Date(quizz.date).toLocaleString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
})}</span>
            </div>
        </div></>
        
        )}
        </div> : <div></div>}
        </div>
    )
}
export default ListeQuizz
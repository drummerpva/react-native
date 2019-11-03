function fazer(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve("Ok"),3000);
        ;
    });

}
fazer().then((resposta) => {
    console.log(`Resposta: ${resposta}`);
});
const btn = document.querySelector('button');

const addLoading = () => {
    btn.innerHTML = '<img class="loading" src="/Img/Carregamento.png" alt="">'
}

const RemoveLoading = () => {
    btn.innerHTML = 'Enviar'
}


const handleSubmit = (event) => {
    event.preventDefault()  

    addLoading()

    const Nome = document.querySelector('input[name=nome]').value;
   
    
    const Opcao = document.querySelector('select[name=option]').value;


    fetch('https://api.sheetmonkey.io/form/m6Rpu4suiP8SEcKBMvZxvX', 
    { 
        method: 'post',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({Nome,Opcao}),      
        
    }).then(response => {
        if(response.status === 200){
            alert('Resposta enviada!');
            RemoveLoading();
        }else{
            alert('Erro ao enviar!');
            RemoveLoading();
        }
    })
   
    
} 

document.querySelector('form').addEventListener('submit', handleSubmit);


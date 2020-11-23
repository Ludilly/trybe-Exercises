let states = ['Acre', 'Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

    let select = document.getElementById('State');

       
    for(let index = 0; index < states.length; index +=1){

        let optionStates = document.createElement('option');

        optionStates.innerText=states[index]
        
        select.appendChild(optionStates);
    }

    



    

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
//exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasDoMes(){


    let pegaDaysList = document.querySelector('#days');

    for ( let index = 0; index < dezDaysList.length; index += 1){

        let day = dezDaysList[index];

        let dayItem = document.createElement('li');

                if (day === 24 || day === 31) {
                    dayItem.className = 'day holiday';
                    dayItem.innerHTML = day;
                    pegaDaysList.appendChild(dayItem);
                } else if (day === 4 || day === 11 || day === 18) {
                    dayItem.className = 'day friday-day';
                    dayItem.innerHTML = day;
                    pegaDaysList.appendChild(dayItem);
                } else if (day === 25) {
                    dayItem.className = 'day holiday friday-day';
                    dayItem.innerHTML = day;
                    pegaDaysList.appendChild(dayItem);
                } else {
                    dayItem.innerHTML = day;
                    dayItem.className = 'day';
                    pegaDaysList.appendChild(dayItem);
                } 
    }      
}
        diasDoMes();

//exercicio2 

  function holidayBtn(nomeButao){

    let buttonContainer = document.querySelector('.buttons-container');

    let novoButao = document.createElement('button');

    let newButtonId = 'btn-holiday';

    novoButao.innerHTML = nomeButao;

    novoButao.id = newButtonId;

    buttonContainer.appendChild(novoButao);

  }
      holidayBtn('Feriado');

  //exercicio3

  function mudaCor () {

    let btnFeriado = document.querySelector('#btn-holiday');

    let pegaFeriados = document.querySelectorAll('.holiday');

    let corDeFundo = 'rgb(238,238,238)';

    let novaCor = 'white';

    btnFeriado.addEventListener('click', function() {

      for (let index = 0; index < pegaFeriados.length;index +=1 ){
        if (pegaFeriados[index].style.backgroundColor === novaCor){

          pegaFeriados[index].style.backgroundColor = corDeFundo;

        } else {
          pegaFeriados[index].style.backgroundColor = novaCor;
        }
      }
    })
  };

  mudaCor();

  //exercicio4

  function botaoSexta (newName){
    let btnCont = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newId = 'btn-friday';

      newButton.innerHTML = newName;
      newButton.id = newId;
      btnCont.appendChild(newButton);
  };
    botaoSexta('Sexta-feira');

    //exercicio 5

    function novaFuncao (sextaArrys){

      let btnSexta = document.querySelector('#btn-friday');
  
      let friday = document.getElementsByClassName('friday-day')
  
      let sextou = 'SEXTOU!!';
  
      btnSexta.addEventListener('click', function() {
        for(let index = 0; index < friday.length; index += 1){
          if (friday[index].innerHTML !== sextou){
            friday[index].innerHTML = sextou;
          }else{
            friday[index].innerHTML = sextaArrys[index];
          }
        }
      })
    };
  
    let dayFriday = [4, 11, 18, 25];
      novaFuncao(dayFriday);
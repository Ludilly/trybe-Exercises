let disney = {
    personagem: "Tio Patinhas",
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",
    recorrente: "sim",
}
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim",
}

    for(let key in disney){
        if (key == "recorrente"){
            console.log("ambos recorrentes")
        }
        else{
            console.log(info[key] + ' e ' + disney[key]);
        }
    }


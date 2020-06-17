function classifica(){
    var vitorias = [/*ARG*/1,/*BOL*/0,/*COL*/0,/*EQU*/0,/*EUA*/1,/*PAR*/0,/*BRA*/1,/*CHI*/0,/*MEX*/0,/*PER*/0,/*URU*/1,/*VEN*/0]
    var empates = [/*ARG*/0,/*BOL*/0,/*COL*/1,/*EQU*/0,/*EUA*/0,/*PAR*/1,/*BRA*/0,/*CHI*/1,/*MEX*/0,/*PER*/1,/*URU*/0,/*VEN*/0]
    var derrotas = [/*ARG*/0,/*BOL*/1,/*COL*/0,/*EQU*/1,/*EUA*/0,/*PAR*/0,/*BRA*/0,/*CHI*/0,/*MEX*/1,/*PER*/0,/*URU*/0,/*VEN*/1]
    var golpro = [/*ARG*/3,/*BOL*/0,/*COL*/2,/*EQU*/0,/*EUA*/4,/*PAR*/2,/*BRA*/2,/*CHI*/0,/*MEX*/1,/*PER*/0,/*URU*/2,/*VEN*/1]
    var golcontra = [/*ARG*/1,/*BOL*/3,/*COL*/2,/*EQU*/4,/*EUA*/0,/*PAR*/2,/*BRA*/1,/*CHI*/0,/*MEX*/2,/*PER*/0,/*URU*/1,/*VEN*/2]

    for (var i = 0;i<12;i++){
        var identidade = 'eq'+Number(i+10)+'P'
        window.document.getElementById(identidade).innerText = 3*vitorias[i]+empates[i]
    }
    
    for (var i = 0;i<12;i++){
        var identidade = 'eq'+Number(i+10)+'J'
        window.document.getElementById(identidade).innerText = vitorias[i]+empates[i]+derrotas[i]
    }
    
    for (var i = 0;i<12;i++){
        var identidade = 'eq'+Number(i+10)+'V'
        window.document.getElementById(identidade).innerText = vitorias[i]
    }
    
    for (var i = 0;i<12;i++){
        var identidade = 'eq'+Number(i+10)+'E'
        window.document.getElementById(identidade).innerText = empates[i]
    }
    
    for (var i = 0;i<12;i++){
        var identidade = 'eq'+Number(i+10)+'D'
        window.document.getElementById(identidade).innerText = derrotas[i]
    }
    
    for (var i = 0;i<12;i++){
        var identidade = 'eq'+Number(i+10)+'Gp'
        window.document.getElementById(identidade).innerText = golpro[i]
    }
    
    for (var i = 0;i<12;i++){
        var identidade = 'eq'+Number(i+10)+'Gn'
        window.document.getElementById(identidade).innerText = golcontra[i]
    }
    
    for (var i = 0;i<12;i++){
        var identidade = 'eq'+Number(i+10)+'Gs'
        window.document.getElementById(identidade).innerText = golpro[i]-golcontra[i]
    }
}
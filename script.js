function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    
   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Por favor digite algum numero!')
    } else  {
        res.innerHTML = 'contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
     } if (i < f) {
            //contagem crescente
            for(var c = 1; c <= f; c +=p) {
                res.innerHTML += `${c} \u{1f617}` 
            } 
           

        } else {
            //contagem regressiva
            for (var c = i; c => f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += ` \u{1F3C1}`
      }  

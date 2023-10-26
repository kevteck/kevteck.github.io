const slumptal = Math.floor(Math.random() * 9) + 1
let antalgissnigar = 0


function gissaTal() {
    console.log(`slumpatl ${slumptal}`)

    let textfelt_gissa = document.getElementById("gissa").value
    let gissa_int = Number(textfelt_gissa)
    let vinn = false
    let p_svar = document.getElementById("p_svar")
    if (antalgissnigar < 3) {

        if (slumptal === gissa_int) {

            console.log(`rätt svar`)
            vinn = true
            p_svar.innerHTML = "DU VANN!!!!"
        }
        else {
            console.log(`Fel svar!!!!`)
            if (antalgissnigar === 2) {
                p_svar.innerHTML = "Looser!!"

            }
            else {
                p_svar.innerHTML = `Fel svar!!! ${gissa_int}`



            }
            document.getElementById("gissa").value = ""
            document.getElementById("gissa").focus()



        }
        antalgissnigar++
    }

    else {
        p_svar.innerHTML = `Loser`
    }
}
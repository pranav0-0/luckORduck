var s_turn1="Silver's Turn 1", s_turn2="Silver's Turn 2", s_turn3="Silver's Turn 3", g_turn="Golds's Turn"
var sil_score=0,gold_score=0,club_score=0
var counter=0, sil1,sil2,sil3,gol,past=0
var random

function Play(url) {
    new Audio(url).play()
} Play()
function Spin() {
    random = Math.floor(Math.random()*(3-1)+1)-1
    document.getElementById("tt").innerHTML=random
    switch (counter) {
        case 0:
            sil1=random
            document.getElementById("who's_turn").innerHTML = s_turn1
            document.getElementById("s1").innerHTML= random
            document.getElementById("s1").style.backgroundColor = "rgba(175, 182, 250, 0.2)"
            document.getElementById("g2").style.background = "none"
            break;
        case 1:
            sil2=random
            document.getElementById("who's_turn").innerHTML = s_turn2
            document.getElementById("s2").innerHTML= random
            document.getElementById("s2").style.backgroundColor = "rgba(175, 182, 250, 0.2)"
            document.getElementById("s1").style.background = "none"
            break;
        case 2:
            sil3=random
            document.getElementById("who's_turn").innerHTML = s_turn3
            document.getElementById("s3").innerHTML= random
            document.getElementById("s3").style.backgroundColor = "rgba(175, 182, 250, 0.2)"
            document.getElementById("s2").style.background = "none"
            break;
        case 3:
            gol=random
            document.getElementById("who's_turn").innerHTML = g_turn
            document.getElementById("g2").innerHTML= random
            document.getElementById("g2").style.backgroundColor = "rgba(175, 182, 250, 0.2)"
            document.getElementById("s3").style.background = "none"
            if (gol==1) {
                gold_score+=1
                past=past*10+0
            }
            else if (sil1 || sil2 || sil3 == 1 ) {
                sil_score+=1
                past=past*10+1
            } else {
                club_score+=1
                past=past*10+2
            }
            break;
        default:
            break;
    }
    document.getElementById("past_win").innerHTML=past
    counter+=1
    if (counter==4) {
        counter=0
        document.getElementById("s_point").innerHTML= sil_score
        document.getElementById("g_point").innerHTML= gold_score
        document.getElementById("c_point").innerHTML= club_score
    }
}
function arrow(params) {
    document.getElementById("id_lr").style.display="none"
    document.getElementById("id_ga").style.display="none"
    document.getElementById("id_sb").style.display="block"
    // document.getElementById("id_sb").style.transition="all 1s"
}
// ()

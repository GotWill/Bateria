    //capturando evento de toda pagina (click)
document.body.addEventListener('keyup', (event) =>{
    //pegando o clcik do usuario e deixando em minusculo
    playSound(event.code.toLocaleLowerCase());
});

// reconhecendo o button
const button = document.querySelector('.composer button')
button.addEventListener( 'click',() =>{
    // pegando o valor do input do usuario
    let song = document.querySelector('#input').value;
    console.log(`musica: ${song} `);

    // verificando ce o input é deiferente de nd, no caso esta presente, dividira a string em uma array
    if(song !== ''){
        let songArray = song.split('')
        playCompositon(songArray)
    }
})


function playSound(sound){
    // pegando o tecla clicada e passanod como paramentro
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key= "${sound}"]`)

    if(audioElement){
        // resetei o tempo do adio
        audioElement.currentTime = 0;
        audioElement.play()
    }

    if(keyElement){
        // caso esttiver presente ele add uma class active
        keyElement.classList.add('active');

        setTimeout(()=>{
            // ce presente sera removida
            keyElement.classList.remove('active')
        }, 300)
    }
}

function playCompositon(songArray){
    // aqui o tempo de cada som e deixamos em 0
    let wait = 0;

    for(let songItem of songArray){
        // aqui iteramos e acresentamos 250 a cada rodada 

        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait +=250;
      
    }
}
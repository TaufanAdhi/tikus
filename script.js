const tikus = document.querySelectorAll('.tikus')






// mengatur waktu pada munculnya tikus 

function waktu() {
    let a = true;
    while (a) {
        const waktu = Math.round(Math.random() * 1200);

        if (waktu >= 250) {

            a = false
            return waktu
        }
    }



}

// gameplay menampilkan tikus 

let cRandom;
function tampil() {

    const random = Math.floor(Math.random() * 6)

    console.log(random)



    if (random === cRandom) {

        tampil()

    } else {

        tikus.forEach(function (e, i) {


            if (random === i) {

                e.classList.add('atas')

                setTimeout(function () {

                    e.classList.remove('atas')

                }, waktu())

            }
        });


    }

    cRandom = random;


}


// menekan tombol 
const tombol = document.getElementById('tombol');

tombol.addEventListener('click', function () {

    const interval = setInterval(function () {

        tampil()

        setTimeout(function () {
            clearInterval(interval)

        }, 100000)

    }, waktu())

    pukul()
})



// pukul tikus kedalam 

function pukul() {
    const container = document.querySelector('.container-game')
    const skor = document.querySelector('#skor')
    let s = 0;
    container.addEventListener('click', function (e) {
        let a = e.target.getAttribute('class')
        
        if( a === 'tikus atas') {
            console.log('asdsa')
            e.target.classList.remove('atas')
            skor.innerHTML = s++
        }




    })



}





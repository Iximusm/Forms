let text = document.querySelector('input[type=text]')
let btn = document.querySelector('input[type=button]')
let form = document.querySelector('form')

btn.addEventListener('click', getMusic)

function getMusic() {
    let Music = form.querySelector('input[type=text]').value.toLowerCase()
    let common = document.createElement('form')
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    
    common.innerHTML = form.innerHTML

function formsMusic(Music, src){
        form.innerHTML = ''
        p.innerHTML = Music.charAt(0).toUpperCase() + Music.slice(1);
        img.src = src
        form.appendChild(div)
        div.appendChild(p)
        div.appendChild(img)
        form.appendChild(input)
    }

    if(Music == 'рок'){
        let src = './images/rock.jpg'
        formsMusic(Music, src)
    }
    else if(Music == 'поп'){
        let src = './images/pop.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'драм & бэйс'){
        let src = './images/DnB.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'электро'){
        let src = './images/electro.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'джаз'){
        let src = './images/jazz.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'металл'){
        let src = './images/metal.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'шансон'){
        let src = './images/shanson.jpg'
        formsMusic(Music, src)
    }
}
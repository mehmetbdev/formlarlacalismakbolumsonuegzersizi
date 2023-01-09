let elementKaydet = document.querySelector(`#elementKaydet`)
let elementTodo = document.querySelector(`#elementTodo`)
let elementDurum = document.querySelector(`#elementDurum`)
let elementTablo = document.querySelector(`#elementTablo`)
let veri = []

elementKaydet.addEventListener(`click`, kaydet)

let alert = (mesaj, className=`alert alert-info alert-dismissible fade show`) => `
    <div class="alert alert-${className} alert-dismissible fade show">
        <strong> ${mesaj} </strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
`
let todoElemanlari = (numara, veri) => `
        <th scope="row">${numara} - </th>
            <td>${veri}</td>  
`


function kaydet(event){
    event.preventDefault() 
    if(elementTodo.value){
        veri.push(elementTodo.value)
        verileriListele(veri)
        elementDurum.innerHTML = alert(`To Do uygulamasına veri başarılı bir şekilde eklendi!`, `success`)
    }else{
        elementDurum.innerHTML = alert(`Lütfen To Do uygulamasına bir veri girip tekrar deneyin!`, `danger`)
    }
}

function verileriListele(veri){
    elementTablo.innerHTML = ``
    let sayac = 0
    veri.forEach(element => {
        sayac++
        let tr = document.createElement(`tr`)
        elementTablo.appendChild(tr)
        tr.innerHTML = todoElemanlari(sayac, element)
    });
}
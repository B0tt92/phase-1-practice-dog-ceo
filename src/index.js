const breeds = []
document.addEventListener('DOMContentLoaded', event => {
    image(), breedslist()

});
function image() { 
const imgurl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgurl)
    .then(resp => resp.json())
    .then(data => {
        data.message.forEach(url => {
            const block = document.getElementById("dog-image-container")
            const img = document.createElement('img')
            img.src= url
            block.append(img)
        })
    })  
};
function breedslist() {
const breedurl =  "https://dog.ceo/api/breeds/list/all"
    fetch(breedurl)
    .then(resp => resp.json())
    .then(data => {
        Object.keys(data.message).forEach(breed => {
            const block = document.getElementById("dog-breeds")
            const li = document.createElement("li")
            li.textContent = breed
            li.addEventListener("click", event => {event.target.style.color = "red"});
            block.appendChild(li)
            breeds.push(breed)
        });filter(breeds)
    })

};
function filter(breeds){
    let dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener("change", event => {
        let block = document.getElementById("dog-breeds")
            if (event.target.value !== "") {
                block.innerHTML = " "
                let breeds2 = breeds.filter(breed => breed.startsWith(event.target.value))
                const li = document.createElement("li")
                li.innerHTML = breeds2
                block.append(li)
            }
    })

}

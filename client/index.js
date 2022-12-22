let obj = document.querySelector('.container center')

let (item of data) 
obj.innerHTML += `
<h2></h2>
<h5></h5>
<button class="podrobnee">

</button>
`
const reload = (arr, place) => {
    place.innerHTML = ""

    for (let item of arr) {
        obj.innerHTML += `
        <h2>Leanne Graham</h2>
        <h5></h5>
        <button class="podrobnee">
        
        </button>
        `
        }}
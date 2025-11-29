import { products } from "./products.js"

const searchInput = document.getElementById("search")
const categorySelect = document.getElementById("category")
const fromInput = document.getElementById("from")
const toInput = document.getElementById("to")
const resultContainer = document.getElementById("result")
const searchBtn = document.getElementById("searchBtn")
displayResult(products)



searchInput.addEventListener("input", search)
categorySelect.addEventListener("change", selectCat)
searchBtn.addEventListener("click", searchBykcal)

function search() {
    const filterProducktlists = products
        .filter((produck) => produck.name.toLowerCase()
            .startsWith(searchInput.value.toLowerCase()))
    displayResult(filterProducktlists)
}

function selectCat() {
    const filterCategories =produck.filter(
        (products) => categorySelect.value === produck.category
    );

    displayResult(filterCategories);
        if (categorySelect.value === "all") {
            displayResult(products)
        }    

}
 
function searchBykcal () {
    const fromValue = fromInput.value || 0;
    const toVal = toInput.value || Infinity
    const filterProduckts = products.filter((produck) => 
        produck.calories >= fromValue && produck.calories <= toVal
    );
    displayResult(filterProduckts)
    
    
}

function displayResult(products) {
    resultContainer.innerHTML = products.map((produck) => {
        return `
            <div class="iteam" style="--color: ${produck.color === `white` ? `black` : produck.color}"> 
                <h3>${produck.name}</h3>       
                <p>category: ${produck.category}</p>       
                <p>Calories: ${produck.calories}</p>       
                <p>Vitamin: ${produck.vitamins.join(", ")}</p>       
                <p>Color: ${produck.color}</p>          
            </div>

    `
    })
    .join("");
}

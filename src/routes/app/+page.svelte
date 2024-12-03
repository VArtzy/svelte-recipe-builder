<script>
const load = typeof window !== 'undefined' && localStorage.getItem('ingredients') ? JSON.parse(localStorage.getItem('ingredients')) : []

let ingredients = $state(load)
let totalCalories = $state(ingredients.reduce((acc, v) =>  acc + v.calories, 0))
let totalProtein = $state(ingredients.reduce((acc, v) =>  acc + v.protein, 0))
let totalPrice = $state(ingredients.reduce((acc, v) =>  acc + v.price, 0))

    $effect(() => {
            typeof window !== 'undefined' && localStorage.setItem('ingredients', JSON.stringify(ingredients))
            })

function compute() {
    totalCalories = ingredients.reduce((acc, v) =>  acc + v.calories, 0)
        totalProtein = ingredients.reduce((acc, v) =>  acc + v.protein, 0)
        totalPrice = ingredients.reduce((acc, v) =>  acc + v.price, 0)
}

function addIngredient() {
    ingredients.push({ name, img, amount, unit, calories, protein, price })
    compute()
}

function deleteIngredient(name) {
    ingredients = ingredients.filter(i => i.name !== name)
    compute()
}

function clear() {
    ingredients = []
    compute()
}

let name = $state()
let img = $state('noimage.webp')
let amount = $state()
let unit = $state()
let calories = $state()
let protein = $state()
let price = $state()
</script>

<div class="grid gap-4 max-w-5xl mx-auto p-8">
<div class="flex gap-4 grid-cols-2">
<input bind:value={name} type="text" class="w-full text-black border border-2 rounded-md border-black/50 px-2 py-1" placeholder="Ingredient name..." />
<div class="flex gap-2">
<input bind:value={amount} type="number" class="w-16 text-black border border-2 rounded-md border-black/50 px-2 py-1" placeholder="1" />
<select bind:value={unit} class="border border-2 rounded-md border-black/50 px-2 py-1">
<option disabled>unit</option>
<option>g</option>
<option>ml</option>
<option>pcs</option>
</select>
</div>
</div>
<div class="grid gap-4 grid-cols-3">
<input bind:value={calories} type="number" class="text-black border border-2 rounded-md border-black/50 px-2 py-1" placeholder="Calories" />
<input bind:value={protein} type="number" class="text-black border border-2 rounded-md border-black/50 px-2 py-1" placeholder="Protein" />
<input bind:value={price} type="number" class="text-black border border-2 rounded-md border-black/50 px-2 py-1" placeholder="Price" />
</div>
<button onclick={addIngredient} class="text-white px-4 py-2 bg-orange-600 rounded-md">Add ingredient</button>
</div>
<div class="p-8 max-w-5xl grid md:grid-cols-2 gap-4 mx-auto">
{#each ingredients as ingredient}
<div class="border py-1 px-2 w-full flex gap-8 items-center text-orange-900">
<img class="object-fit aspect-[1/1] rounded-xl" width="100" src="/{ingredient.img}" alt="{ingredient.name} image">
<div class="w-[40%] grid gap-4">
<h3 class="text-2xl text-orange-600">{ingredient.name}</h3>
<div class="flex gap-1">
<h4>{ingredient.amount}</h4>
<h4>{ingredient.unit}</h4>
</div>
</div>
<div class="w-1/2 grid gap-4 grid-cols-3">
<h4>Cal</h4>
<h4>Pro</h4>
<h4>$</h4>
<h4>{ingredient.calories}</h4>
<h4>{ingredient.protein}</h4>
<h4>{ingredient.price}</h4>
<button onclick={() => deleteIngredient(ingredient.name)}>X</button>
</div>
</div>
{/each}
</div>

<div class="text-orange-800 p-8 max-w-5xl md:flex justify-between items-center mx-auto">
<h2 class="text-3xl text-center mb-4 md:mb-0">Your gain:</h2>
<div class="flex justify-between md:w-[80%] gap-4 items-center">
<h3 class="md:text-xl">{totalCalories} Calories</h3>
<h3 class="md:text-xl">{totalProtein} Proteins</h3>
<h3 class="md:text-xl">Total Price {totalPrice}</h3>
</div>
</div>

<div class="flex justify-center gap-4">
<button disabled={ingredients.length === 0 ? true : false} onclick={clear} class="disabled:bg-orange-800 disabled:cursor-not-allowed text-white px-4 py-2 bg-orange-600 rounded-md">Clear</button>
<button class="text-orange-600 px-4 py-2 bg-white rounded-md">Share</button>
</div>

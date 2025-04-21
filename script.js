const recipes = [
    {
        name: "Яичница",
        ingredients: ["яйца", "масло", "соль", "перец"]
    },
    {
        name: "Омлет",
        ingredients: ["яйца", "молоко", "соль", "перец"]
    },
    {
        name: "Салат Оливье",
        ingredients: ["картофель", "морковь", "яйца", "горошек", "огурцы", "майонез"]
    },
    {
        name: "Гречка с грибами",
        ingredients: ["гречка", "грибы", "лук", "масло"]
    },
    {
        name: "Макароны с сыром",
        ingredients: ["макароны", "сыр", "масло", "соль", "перец"]
    },
    {
        name: "Тост с авокадо",
        ingredients: ["хлеб", "авокадо", "соль", "перец", "лимонный сок"]
    },
    {
        name: "Борщ",
        ingredients: ["мясо", "свекла", "капуста", "картофель", "лук", "морковь", "томатная паста", "сметана"]
    },
    {
        name: "Куриный суп",
        ingredients: ["курица", "картофель", "морковь", "лук", "вермишель", "зелень"]
    }
];

function findRecipes() {
    const ingredients = document.getElementById("ingredients").value;
    const ingredientList = ingredients.toLowerCase().split(",").map(item => item.trim());

    const availableRecipes = recipes.filter(recipe => {
        return recipe.ingredients.some(ingredient => ingredientList.includes(ingredient));
    });

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (availableRecipes.length > 0) {
        availableRecipes.forEach(recipe => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe"); // Добавляем класс для стилизации

            const recipeName = document.createElement("h3");
            recipeName.textContent = recipe.name;

            const ingredientsList = document.createElement("ul");
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement("li");
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });

            recipeDiv.appendChild(recipeName);
            recipeDiv.appendChild(ingredientsList);
            resultsDiv.appendChild(recipeDiv);
        });
    } else {
        resultsDiv.textContent = "Рецептов не найдено.";
    }
}
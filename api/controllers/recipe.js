const express = require ('express');
const router = express.Router();

let recipeList = getRecipeList();

// module.exports.getRecipes = (req, res) => {
//     let responseRecipeList = [];
//     for (let recipe of recipeList) {
//         if (recipe.isPublic) {
//             responseRecipeList.push(recipe);
//         }
//     }
//     return res.json(responseRecipeList).status(200);
// }

router.use('/', (req, res, next) => {
    let responseRecipeList = [];
    for (let recipe of recipeList) {
        if (recipe.isPublic) {
            responseRecipeList.push(recipe);
        }
    }
    return res.json(responseRecipeList).status(200);
});


function getRecipeList() {
    return [{
        id: 1,
        isPublic: true,
        name: 'Kebab',
        steps: ['Put the vegetables on top of the wrap', 'Put meat', 'Roll the wrap'],
        ingredients: [{
            name: 'Tomato',
            amount: 1,
        },
        {
            name: 'Beef',
            amount: 200,
        }
        ]
    }, {
        id: 2,
        isPublic: true,
        name: 'Pizza',
        steps: ['Make the bread', 'Put the ingredients', 'Voila'],
        ingredients: [{
            name: 'Tomato',
            amount: 5,
        }]
    }]
}

module.exports = router;
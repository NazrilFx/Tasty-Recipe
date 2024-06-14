let global = new Vue ({
    el: '#global',
    data: {
        recipes: [
            {
                img: 'Beef Wellington.jpeg',
                foodType: 'Dinner',
                name: 'Beef Wellington',
                recipeBy: 'Gordon Ramsay',
                like: false
            },
            {
                img: 'Coob Salad.webp',
                foodType: 'BreakFast',
                name: 'Coob Salad',
                recipeBy: 'Hai Salad',
                like: false
            },
            {
                img: 'Key Lime Pie.webp',
                foodType: 'Dinner',
                name: 'Key Lime Pie',
                recipeBy: 'Joji Santuary',
                like: false
            },
            {
                img: 'San Francisco Bread.webp',
                foodType: 'Lunch/Breakfast',
                name: 'San Francisco Bread',
                recipeBy: 'Bruno Mars',
                like: false
            },
            {
                img: 'Teater Toots.webp',
                foodType: 'Dinner',
                name: 'Teater Toots',
                recipeBy: 'Mr. Hanzo',
                like: false
            },
        ],
    },
    methods: {
        likeRecipe(value){
            if (value === 'Beef Wellington'){
                this.recipes[0].like = true
            } else if (value === 'Coob Salad'){
                this.recipes[1].like = true
            } else if (value === 'Key Lime Pie'){
                this.recipes[2].like = true
            } else if (value === 'San Francisco Bread'){
                this.recipes[3].like = true
            } else if (value === 'Teater Toots'){
                this.recipes[4].like = true
            }
        },
        unlikeRecipe(value){
            if (value === 'Beef Wellington'){
                this.recipes[0].like = false
            } else if (value === 'Coob Salad'){
                this.recipes[1].like = false
            } else if (value === 'Key Lime Pie'){
                this.recipes[2].like = false
            } else if (value === 'San Francisco Bread'){
                this.recipes[3].like = false
            } else if (value === 'Teater Toots'){
                this.recipes[4].like = false
            }
        }
    },
})
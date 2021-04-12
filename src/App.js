import "./App.css"
import getRecipeById from "./data";

function App() {
    console.log('Recipe with id 1')
    console.log(getRecipeById(1))
    console.log('Recipe with id 2')
     console.log(getRecipeById(2))
    console.log('Recipe with id 3')
    console.log(getRecipeById(3))
    return (
        <div>
            <div>Home</div>
            <div>Perfection Salad</div>
            <div>Hamburger Pie</div>
            <div>Cherry Pineapple Bologna</div>
        </div>

    )}

export default App;

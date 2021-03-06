import React from 'react';
// import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    // console.log(props);
    let transformedIngredients = Object.keys(props.ingredients) // keys used to convert js object to array of keys
    .map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey} />;
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    // console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

// export default withRouter(Burger);
export default Burger;

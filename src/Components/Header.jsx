import { IoFastFoodOutline } from "react-icons/io5";
// <IoFastFoodOutline /> (the all icon)

import { BiDrink } from "react-icons/bi";
// <BiDrink /> (drinks icon)

import { IoPizzaOutline } from "react-icons/io5";
// <IoPizzaOutline /> ( pizza icon)

import { LuSalad } from "react-icons/lu";
// <LuSalad /> (salad icon)

import { LiaPepperHotSolid } from "react-icons/lia";
// <LiaPepperHotSolid />(spicy icon)

import { GiCupcake } from "react-icons/gi";
// <GiCupcake /> (Sweets icon)


function Header(){
  return(
        <header className="header">
            <ol className="head-nav-list">
                <li className="header-nav-list-item"> <IoFastFoodOutline /> All</li>
                <li className="header-nav-list-item"> <BiDrink /> Drinks</li>
                <li className="header-nav-list-item"> <IoPizzaOutline /> Pizza</li>
                <li className="header-nav-list-item"> <LuSalad /> Salad</li>
                <li className="header-nav-list-item"> <LiaPepperHotSolid /> Spicy</li>
                <li className="header-nav-list-item"> <GiCupcake /> Sweets</li>
                </ol> 
                <CTAbutton/>
            </header>
    )
}

function CTAbutton(){
                return(
                    <div> 
                    <p className="CTA-button"> View All</p>
                </div>
                )
}


export default Header;
import React, { useEffect,useState } from 'react';
import { Link, StaticQuery } from "gatsby";
import { useStaticQuery, graphql } from 'gatsby';
import Echelon from '../images/echelon.png'

const Nav = ({ menus , location}) => {


 






const [navbarOpen, setNavbarOpen] = React.useState(false);
const [dropDownOpen,setDropDownOpen]= React.useState(false);
const [dropDownOpen1,setDropDownOpen1]= React.useState(false);
const [dropDownOpen2,setDropDownOpen2]= React.useState(false);
const [Region, setRegion] = useState();

const customStyles = {
  menu: (provided, state) => ({
      ...provided,
     
      borderBottom: '1px',
      color: state.selectProps.menuColor,
    }),
    control: (provided, state) => ({
      ...provided,
      width:100,
      
      color: state.selectProps.menuColor,
     
    }),


  
}


const options = [
  { value: "MX", label: "MX" },
  { value: "USA", label: "USA" },
 
];
const [text, setText] = useState();
const onChange = selectedOption => {
  setText(selectedOption);
  
  if(selectedOption.value =="MX"){
      
      window.location.href = "/es";
  }else{  window.location.href = "/";}
  
};


const openDropdown =() =>{
   setDropDownOpen(!dropDownOpen)
   
}

const openDropdown1 =() =>{
  setDropDownOpen1(!dropDownOpen1)
  
}

const openDropdown2 =() =>{
setDropDownOpen2(!dropDownOpen2)

}

return(
<>

<nav class=" z-50 bg-white shadow dark:bg-gray-800 fixed w-full  ">
<div id="top-banner" class="announcement-banner lg:flex  sm:hidden   md:hidden  hidden" >
      
      </div>
      <div class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between">
              <div>
                  <a class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="/">
                  <img class="h-8 w-auto sm:h-10" src={Echelon}/>
                  </a>
              </div>
              
             
              <div class="flex md:hidden">
                  <button   onClick={() => setNavbarOpen(!navbarOpen)} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                      <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                          <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                      </svg>
                  </button>
              </div>
          </div>


          <div className={"nav-block  items-center md:flex " + (navbarOpen ? " flex" : " hidden")}>
              <div class="flex flex-col md:flex-row md:mx-6 text-sm">
           

          <div class="relative " >
            <button type="button" onMouseEnter={() =>  setDropDownOpen(!dropDownOpen)}   onClick={openDropdown}  class=" mr-2 flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-red-500 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 focus:outline-none focus:shadow-outline">
               <span>Connetced Bikes</span>
                <svg fill="currentColor" viewBox="0 0 20 20"  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                 <div  className={"  z-50 block absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48  " +(!dropDownOpen ? "hidden":"block")}>
                 <div  onMouseLeave={() =>  setDropDownOpen(false)}  className={"  z-50 block px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800  "+( !dropDownOpen ? "hidden": "block")}>
                  <Link class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to='/'>EX-PRO</Link>
                  <Link class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"  to='/'>EX-7s</Link>
                </div>
               </div>
            </div> 



            <div class="relative " >
              <button type="button"  onMouseEnter={() =>  setDropDownOpen1(!dropDownOpen1)}   onClick={openDropdown1}  class=" mr-2 flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-red-500 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 focus:outline-none focus:shadow-outline">
                 <span>Connetced Rowers</span>
                  <svg fill="currentColor" viewBox="0 0 20 20"  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                 </button>
                  <div  className={"  z-50 block absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48  " +( !dropDownOpen1 ? "hidden":"block")}>
                  <div   onMouseLeave={() =>  setDropDownOpen1(false)} className={"  z-50 block px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800  "+( !dropDownOpen1 ? "hidden": "block")}>
                  <Link class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"  to='/'>ROW-7s</Link>
               </div>
             </div>
            </div> 


            <div class="relative " >
              <button type="button"   onMouseEnter={() =>  setDropDownOpen2(!dropDownOpen2)}     onClick={openDropdown2}  class=" mr-2 flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-red-500 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 focus:outline-none focus:shadow-outline">
                 <span>Connetced Mirrors</span>
                  <svg fill="currentColor" viewBox="0 0 20 20"  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                 </button>
                  <div  className={"  z-50 block absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48  " +( !dropDownOpen2 ? "hidden":"block")}>
                  <div  onMouseLeave={() =>  setDropDownOpen2(false)} className={"  z-50 block px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800  "+( !dropDownOpen2 ? "hidden": "block")}>
                  <Link class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"  to='/'>Reflect Smart Mirror</Link>
               </div>
             </div>
            </div> 

                <Link  className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-red-600 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-red-500 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-red-200 md:mt-0 hover:text-red-900 focus:text-gray-900 hover:bg-red-200 focus:bg-red-200 focus:outline-none focus:shadow-outline   " to="/contact">
                 Contact
                 </Link>

              </div>

              <div class="flex justify-center md:block">
         
              </div>
          </div>
      </div>
  </nav>




</>

)



}

export default Nav;
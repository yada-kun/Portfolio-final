import Project1 from './Images/Project1.png';
import Project2 from './Images/Project2.png';
import Project3 from './Images/Project3.png';
import Project4 from './Images/Project4.png';
import Project5 from './Images/Project5.png';
import Project6 from './Images/Project6.png';
import Project7 from './Images/Project7.png';

const Portfolio = () => {
  return (
    <div className="text-center font-['Roboto'] " id="Portfolio">
        <h3 className="text-[50px] font-bold">PortFolio</h3>

        <div className="my-20  mx-auto flex justify-center px-5">
            <div className="flex justify-center flex-wrap-reverse gap-10 px-2">
                <div className="w-[550px] text-left p-5">
                    <h4 className="text-[18px] font-bold"><span className="text-[#0bceaf]">Fluffy Buns</span> - Static Website</h4>
                    <p>HTML & CSS</p>
                    <p className="my-5">This is a static website using HTML & CSS. The website is mobile responsive and is a demonstration of how to create a simple website using basic HTML & CSS</p>
                    <button className="bg-blue-500 w-[120px] text-white hover:bg-red-700 h-[30px]"><a href="https://fluffy-breadpan.herokuapp.com/" >Visit Site</a> </button>
                    <button className="bg-blue-500 w-[120px] mx-5 text-white hover:bg-red-700 h-[30px]"><a href="https://github.com/yada-kun/Project-1" >Git Hub</a> </button>
                </div>
                <div className="w-[500px] h-[300px] text-left">
                    <img className=" object-cover w-full h-full text-left" src={Project1} alt="Project1"/>
                </div>
            </div>
        </div>

        <div className=" py-10 px-2">
            <div className="flex justify-center gap-20 flex-wrap  px-2">

            <div className="w-[500px] text-left px-5">
                    <img className=" border-2 object-cover w-full h-full text-left" src={Project2} alt="Project1"/>
                </div>
                <div className="w-[550px] text-left p-5 px-5">
                    <h4 className="text-[18px] font-bold"><span className="text-[#0bceaf]">Memory Game</span></h4>
                    <p>HTML, CSS & Javascript</p>
                    <p className="my-5">This is a Game Project that applies our learnings using Javascript. The mechanics of the game is simple. Flip and compare the cards and the highest poins win</p>
                    <button className="bg-blue-500 w-[120px] text-white hover:bg-red-700 h-[30px]"><a href="https://memory-game14.herokuapp.com/" target="_blank" rel="noreferrer">Visit Site</a> </button>
                    <button className="bg-blue-500 w-[120px] mx-5 text-white hover:bg-red-700 h-[30px]"><a href="https://github.com/yada-kun/Project-2" >Git Hub</a> </button>
                </div>
            </div>
        </div>

        <div className="my-20  mx-auto flex justify-center">
            <div className="flex justify-center flex-wrap-reverse gap-10 px-2">
                <div className="w-[550px] text-left p-5">
                    <h4 className="text-[18px] font-bold"><span className="text-[#0bceaf]">Pokemon Pokedex</span> - App</h4>
                    <p>HTML,CSS, Javascript & React</p>
                    <p className="my-5">This is a static website using HTML, CSS & React. This is a mini pokedex website that gathers all the data of all most all pokemons. User just needs to choose a pokemon type category and it will display all the pokemons in that specific type.</p>
                    <button className="bg-blue-500 w-[120px] text-white hover:bg-red-700 h-[30px]"><a href="https://pokemon-pokedexapp.herokuapp.com/pokemon" target="_blank" rel="noreferrer" >Visit Site</a> </button>
                    <button className="bg-blue-500 w-[120px] mx-5 text-white hover:bg-red-700 h-[30px]"><a href="https://github.com/yada-kun/Project-3" >Git Hub</a> </button>
                </div>
                <div className="w-[500px] h-[300px] text-left">
                    <img className="object-cover w-full h-full text-left" src={Project3} alt="Project1"/>
                </div>
            </div>
        </div>

        <div className=" py-10 px-2">
            <div className="flex justify-center gap-20 flex-wrap  px-2">

            <div className="w-[500px] text-left px-5">
                    <img className=" border-2 object-cover w-full h-full text-left" src={Project4} alt="Project1"/>
                </div>
                <div className="w-[550px] text-left p-5 px-5">
                    <h4 className="text-[18px] font-bold"><span className="text-[#0bceaf]">Task Application</span></h4>
                    <p>HTML,CSS, Javascript & React</p>
                    <p className="my-5">I have created a simple Task Applciation using React.js. Where it can add, delete and edit tasks just like a normal Task App</p>
                    <button className="bg-blue-500 w-[120px] text-white hover:bg-red-700 h-[30px]"><a href="https://todolist-app14.herokuapp.com/" target="_blank" rel="noreferrer">Visit Site</a> </button>
                    <button className="bg-blue-500 w-[120px] mx-5 text-white hover:bg-red-700 h-[30px]"><a href="https://github.com/yada-kun/Project-4" >Git Hub</a> </button>
                </div>
            </div>
        </div>

        <div className="my-20  mx-auto flex justify-center">
            <div className="flex justify-center flex-wrap-reverse gap-10 px-2">
                <div className="w-[550px] text-left p-5">
                    <h4 className="text-[18px] font-bold"><span className="text-[#0bceaf]">Ecommerce</span> - App</h4>
                    <p>HTML,CSS, Javascript & React</p>
                    <p className="my-5">This is an E-commerce website app created using react. This has no back-end yet but we can still perform a simple front end add to cart function. This website is Black Pink inspired</p>
                    <button className="bg-blue-500 w-[120px] text-white hover:bg-red-700 h-[30px]"><a href="https://bp-ecommerce-app.herokuapp.com/" target="_blank" rel="noreferrer">Visit Site</a> </button>
                    <button className="bg-blue-500 w-[120px] mx-5 text-white hover:bg-red-700 h-[30px]"><a href="https://github.com/yada-kun/Project-5" >Git Hub</a> </button>
                </div>
                <div className="w-[500px] h-[300px] text-left">
                    <img className="object-cover w-full h-full text-left" src={Project5} alt="Project1"/>
                </div>
            </div>
        </div>

        <div className=" py-10 px-2">
            <div className="flex justify-center gap-20 flex-wrap  px-2">

            <div className="w-[500px] text-left px-5">
                    <img className=" border-2 object-cover w-full h-full text-left" src={Project6} alt="Project1"/>
                </div>
                <div className="w-[550px] text-left p-5 px-5">
                    <h4 className="text-[18px] font-bold"><span className="text-[#0bceaf]">Cloud Sky</span></h4>
                    <p>HTML,CSS, Javascript, React, Node, Express & MongoDB</p>
                    <p className="my-5">This is a soon to be filipino novel website where filipino artist can showcase their talents in creating web novels.</p>
                    <button className="bg-blue-500 w-[120px] text-white hover:bg-red-700 h-[30px]"><a href="https://cloudsky-webnovel.herokuapp.com/"  target="_blank" rel="noreferrer">Visit Site</a> </button>
                    <button className="bg-blue-500 w-[120px] mx-5 text-white hover:bg-red-700 h-[30px]"><a href="https://github.com/yada-kun/Project-6" >Git Hub</a> </button>
                </div>
            </div>
        </div>

        <div className="my-20  mx-auto flex justify-center">
            <div className="flex justify-center flex-wrap-reverse gap-10 px-2">
                <div className="w-[550px] text-left p-5">
                    <h4 className="text-[18px] font-bold"><span className="text-[#0bceaf]">Layag Travel Tour</span> - Full Stack App</h4>
                    <p>HTML,CSS, Javascript, React, Node, Express & MongoDB</p>
                    <p className="my-5">This is a full travel application exclusive here on the Philipphines. This website is created using MERN Stack and it can function like any normal travel app.</p>
                    <button className="bg-blue-500 w-[120px] text-white hover:bg-red-700 h-[30px]"><a href="https://layag-travel-tours.netlify.app/"  target="_blank" rel="noreferrer">Visit Site</a> </button>
                    <button className="bg-blue-500 w-[120px] mx-5 text-white hover:bg-red-700 h-[30px]"><a href="https://github.com/yada-kun/Project-7-fe" >Git Hub</a> </button>
                </div>
                <div className="w-[500px] h-[300px] text-left">
                    <img className="object-cover w-full h-full text-left" src={Project7} alt="Project1"/>
                </div>
            </div>
        </div>

    
    </div>
  )
}

export default Portfolio
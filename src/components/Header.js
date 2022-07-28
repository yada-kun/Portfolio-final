



function Header() {
  return (
    <div>
        <div className="flex font-['Roboto'] justify-evenly lg:px-44 ">
            <h1 className="text-[40px] mt-2">Cloud</h1>

            <ul className="flex gap-5 py-5 text-[20px]">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About </a></li>
                <li><a href="#skills">What I do</a></li>
                <li><a href="#background">Background</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;
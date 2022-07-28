import Abouts from './Images/About.png';

const Aboutme = () => {
  return (
    <div className='max-w-[1140px] font-[Roboto] mx-auto py-[100px] flex flex-wrap justify-center' id="about">
        <div className='w-[550px]'>
            <img  className='w-[800px]'src={Abouts} alt="About" />
        </div>
        <div className='my-[10px] tracking-wider w-[550px]'>
          <h2 className='text-[30px] font-bold py-5'>About Me</h2>
          <p> Hello, I’m a James, I am a new Full Stack Web-developer based in Cebu Philipphines. I create websites that help connect business with people.<br/> <br/>
          My passion is to help business grow while learning to become better personal and professionally.

          Below are the skills I'm good at, or download my CV below for more info:</p>
          
          <div className='flex gap-5 my-5'>
            <p className="border border-[#0bceaf] px-2 py-2  rounded-md">HTML</p>
            <p className="border border-[#0bceaf] px-2 py-2  rounded-md">CSS</p>
            <p className="border border-[#0bceaf] px-2 py-2  rounded-md">TAILWIND</p>
            <p className="border border-[#0bceaf] px-2 py-2  rounded-md">ReacT</p>
            <p className="border border-[#0bceaf] px-2 py-2  rounded-md">Node.js</p>
          </div>

          <button className="border-none bg-[#0bceaf] text-white hover:bg-red-700 font-bold px-2 py-2 w-[200px] rounded-md"><a href="https://drive.google.com/u/0/uc?id=1pLeJNY1OtY6QIkBLqvZxHRAOv8W24sWE&export=download" download>Download CV</a> </button>
        </div>
    </div>
  )
}

export default Aboutme;
import { FaCode, FaTeamspeak, FaFileAlt  } from "react-icons/fa";

const Skills = () => {
  return (
    <div className=" my-20 font-['Roboto']" id="skills">
        <h2 className="text-center font-bold text-[30px]">What I DO</h2>

        <div className="flex justify-center items-center flex-wrap gap-10 my-20">
            <div className=" w-[400px] bg-white h-[300px] p-[30px] shadow-lg">
                <FaTeamspeak size={30} color="#6f42c1"/>

                <h3 className="text-[25px] text-gray-600  font-bold my-5"> Virtual Assistant</h3>
                <p className="text-gray-600"> I have been a Virtual Assitant for the past 4 years helping clients scale their businesses and balance their time. So they can have more time for their families</p>
            </div>
            <div className=" w-[400px] bg-white h-[300px] p-[30px] shadow-lg">
                <FaCode size={30} color="#fd7e14"/>
                <h3 className="text-[25px] text-gray-600  font-bold my-5"> Web Development</h3>
                <p className="text-gray-600"> I am an aspiring Full Stack Developer that currently graduated in Uplift Code Bootcamp. I have equipped myself with the skills that can help business grow and connect to the world</p>
            </div>
            <div className=" w-[400px] bg-white h-[300px] p-[30px] shadow-lg">
                <FaFileAlt size={30} color="#17a2b8"/>
                <h3 className="text-[25px] text-gray-600  font-bold my-5"> Data Entry Specialist</h3>
                <p className="text-gray-600"> 
I have helped numerous clients manage their data over the years. I have experience with a variety of data management tools and techniques. I am highly skilled in data management and can help clients maximize the value of their data.</p>
            </div>
        </div>
    </div>
  )
}

export default Skills
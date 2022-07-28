

const Background = () => {
  return (
    <div className="flex justify-center font-['Roboto'] text-center flex-wrap px-5 w-[1150px] py-[150px] mx-auto" id="background">
        <div className="flex-col flex-wrap justify-end items-center w-[550px] px-5 mx-auto">
            <h2 className="text-[30px] font-bold text-left">Education</h2>
            <div className=" p-[20px] w-[500px] bg-white h-[200px] my-[30px] p-[30px] shadow-lg">
                <h3 className="text-[18px] text-gray-600 text-left font-bold ">Information Technology <span className="text-[20px]  font-bold italic text-[#0bceaf]">CIT - University</span></h3>
                <p className="text-[#0bceaf]  text-[15px] text-left font-bold">2008 - 2011</p>
                <p className=" text-[15px] py-2 text-left">Attainment: Graduate</p>
                <p className=" text-[15px] text-left">Address: N Bacalso, Cebu City Philipphines</p>
            </div>
            <div className=" p-[20px]  w-[500px] bg-white h-[200px] my-[30px] p-[30px] shadow-lg">
                <h3 className="text-[18px] text-gray-600 text-left font-bold ">High School <span className="text-[20px]  font-bold italic text-[#0bceaf]">DBTC - University</span></h3>
                <p className="text-[#0bceaf]  text-[15px] text-left font-bold">2008 - 2011</p>
                <p className=" text-[15px] py-2 text-left">Attainment: Graduate</p>
                <p className=" text-[15px] text-left">Address: Punta Princessa, Cebu City Philipphines</p>
            </div>

            <div className=" p-[20px] w-[500px] bg-white h-[200px] my-[20px] p-[30px] shadow-lg">
                <h3 className="text-[18px] text-gray-600 text-left font-bold ">Elementary <span className="text-[20px]  font-bold italic text-[#0bceaf]">DBTC - University</span></h3>
                <p className="text-[#0bceaf]  text-[15px] text-left font-bold">2008 - 2011</p>

                <p className=" text-[15px] py-2 text-left">Attainment: Graduate</p>
                <p className=" text-[15px] text-left">Address: Punta Princessa, Cebu City Philipphines</p>
            </div>

        </div>
        <div className="flex-col justify-center items-center w-[550px] px-5 mx-auto">
            <h2 className="text-[30px] font-bold text-left">Work Experience</h2>

            <div className=" p-[20px] w-[500px] bg-white h-[200px] my-[30px] p-[30px] shadow-lg">
                <h3 className="text-[18px] text-gray-600 text-left font-bold ">Data Entry Specialist <span className="text-[20px]  font-bold italic text-[#0bceaf]">VYRL Co.</span></h3>

                <p className=" mt-2 text-[15px] text-left"> Duties & responsibilities</p>

                <ul className=" mt-1 text-[15px] text-left">
                    <li className="list-disc">Review and Categorize loads of Items in its correct category</li>
                    <li className="list-disc">Reference all items through our masterlist of categories</li>
                    
                </ul>


                <p></p>
            </div>
            <div className=" p-[20px] w-[500px] bg-white h-[200px] my-[30px] p-[30px] shadow-lg">
                <h3 className="text-[18px] text-gray-600 text-left font-bold ">Executive Assistant <span className="text-[20px]  font-bold italic text-[#0bceaf]">DH Financial</span></h3>

                <p className=" mt-2 text-[15px] text-left"> Duties & responsibilities</p>

                <ul className=" mt-1 text-[15px] text-left">
                    <li className="list-disc">Created DH Financial Website in WordPress</li>
                    <li className="list-disc">Data Entry and sorting email contacts
                    through google sheets</li>
                    <li className="list-disc">Manage daily calendar and any other Administrative Tasks</li>
                    
                </ul>
            </div>

            <div className=" p-[20px] w-[500px] bg-white h-[200px] my-[20px] p-[30px] shadow-lg">
                <h3 className="text-[18px] text-gray-600 text-left font-bold ">Team Lead - Order Processor <span className="text-[20px]  font-bold italic text-[#0bceaf]">EDROPSHIP EMPIRE</span></h3>
                <p className=" mt-2 text-[15px] text-left"> Duties & responsibilities</p>

                <ul className=" mt-1 text-[15px] text-left">
                    <li className="list-disc">Handling & Processing orders for the drops
                    hipping business </li>
                    <li className="list-disc">Enter orders through google sheets</li>
                    <li className="list-disc">Work with the developer team for software updates</li>
                    
                </ul>

                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Background
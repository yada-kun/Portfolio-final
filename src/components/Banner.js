import Profile from './Images/Profile.PNG';
import {FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaGithub, FaInstagram} from "react-icons/fa";

function Banner() {
  return (
    <div>
        <div className="flex justify-center items-center my-52 flex-wrap mx-auto max-w-[1140px]" id="home">
            <div className=" font-['Roboto'] uppercase lg:w-[50%] mx-20 text-left ml-20 ">
                <p className="text-[20px] w-32 rounded-tr-[50px] rounded-tl-[50px] rounded-br-[50px] bg-[#0bceaf] tracking-wider font-semibold 
text-white px-2 py-1"> Hello Im!</p>
                <h2 className="text-[55px] tracking-wider font-bold leading-snug text-gray-700 drop-shadow-[0_0_10px_rgba(130,246,229,0.5)]"> James Anuncio </h2>
                <p className="text-[20px] tracking-wider font-bold text-gray-700">FULL STACK WEB DEVELOPER </p>
                
                <div className="my-5 lowercase">
                  <FaEnvelope size={15} className='inline-block'/>
                  <p className='inline-block text-gray-500 px-5 pb-3 text-[14px]'>anunciojames14@gmail.com</p>

                  <br/> <FaPhoneAlt size={15} className='inline-block'/>
                  <p className='inline-block text-gray-500 px-5 pb-3 text-[14px]'>+6391 318 9227</p>

                  <br/> <FaMapMarkerAlt size={15} className='inline-block'/>
                  <p className='inline-block capitalize text-gray-500 px-5 text-[14px]'> Bliss Labangon, Cebu, City</p>
                </div>

                <div className='flex gap-5 py-3'>
                    <a href="https://www.facebook.com/iAMearlz" target="_blank"  rel="noreferrer"><FaFacebookF size={15} /></a>
                    <a href="https://github.com/yada-kun" target="_blank"  rel="noreferrer"><FaGithub size={15} /></a>
                    <a href="https://www.instagram.com/jamesearl14/" target="_blank"  rel="noreferrer" ><FaInstagram size={15} /> </a>
                </div>

                
            </div>
            <div className="w-[320px] h-[308px] bg-gray-300 rounded-tr-[100%] rounded-tl-[100%] rounded-br-[100%] rounded-b-[100%]">
              <img src={Profile} alt="profile"  className='w-[300px] my-3 mx-auto rounded-tr-[100%] rounded-tl-[100%] rounded-br-[100%] rounded-b-[100%] bg-[#0bceaf]'/>

            </div>
        </div>

    </div>
  )
}

export default Banner;
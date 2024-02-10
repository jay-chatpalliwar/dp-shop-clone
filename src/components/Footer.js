import Arrow from '../assets/Logos/Arrow-Right.svg'
import Rivals from '../assets/Logos/Rivals.svg'
import MerchLine from '../assets/Logos/MerchLine.svg'
import Twitter from '../assets/Logos/Twitter.svg'
import Facebook from '../assets/Logos/Facebook.svg'
import Instagram from '../assets/Logos/Instagram.svg'
import TikTok from '../assets/Logos/Tik Tok.svg'
import Snapchat from '../assets/Logos/Snapchat.svg'
import Youtube from '../assets/Logos/Youtube.svg'
import logo from '../assets/DP Logo/2.png'
import ArrowUp from '../assets/Logos/Arrow-Up.svg'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className='flex flex-col'>
            <div className='bg-black flex flex-col w-screen h-[360px] text-[#7cfacd] justify-between items-center py-24'>
                <div className='text-4xl italic font-black'>SUBSCRIBE</div>
                <div>
                    Sign up to be notified of exclusive offers and updates!
                </div>
                <div className='flex flex-row w-[300px] px-8 border-2 border-[#7cfacd] justify-center h-12 rounded-full items-center'>
                    <input className="decoration:none bg-transparent placeholder:text-gray-500" placeholder='Your Email'></input>
                    <img src={Arrow} className='cursor-pointer' alt="Right Arrow"></img>
                </div>
            </div>
            <div>

            </div>
            <div className='bg-[#7cfacd] py-24 w-screen px-24 space-y-16'>
                <div className='flex flex-row justify-between items-start'>
                    <div className='flex flex-col gap-4'>
                        <div className='cursor-pointer'>Help</div>
                        <div className='cursor-pointer'>Return Policy</div>
                        <div className='cursor-pointer'>Your Account</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='cursor-pointer'>Contact</div>
                        <div className='cursor-pointer'>Private Policy</div>
                        <div className='cursor-pointer'>Terms of Service</div>
                    </div>
                    <div className='flex flex-row gap-6 scale-110'>
                        <img src={Twitter} className='cursor-pointer'></img>
                        <img src={Facebook} className='cursor-pointer'></img>
                        <img src={Instagram} className='cursor-pointer'></img>
                        <img src={TikTok} className='cursor-pointer'></img>
                        <img src={Snapchat} className='cursor-pointer'></img>
                        <img src={Youtube} className='cursor-pointer'></img>
                    </div>
                    
                    <img src={logo} className='h-[100px] w-[100px] cursor-pointer'></img>

                </div>

                <div>
                    <span className='italic font-black'>COUNTRY/REGION</span> India (USD $)
                </div>

                <div className='flex flex-col items-center gap-8'>
                    <div>© Dude Perfect Official 2024</div>
                    <div className='flex flex-row gap-8'>
                        <img src={Rivals} className='cursor-pointer'></img>
                        <img src={MerchLine} className='cursor-pointer'></img>
                    </div>
                </div>

                <a href="#utility">
                    <img src={ArrowUp} className='bottom-0 right-0 h-8 flex flex-row w-full justify-end mt-4 scroll-smooth'></img>
                </a>
            </div>
        </div>
    )
};

export default Footer;
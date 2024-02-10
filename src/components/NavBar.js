import Utility from "./Utility"
import Search from '../assets/Logos/Search.svg' 
import User from '../assets/Logos/User.svg' 
import Bag from '../assets/Logos/Bag.svg' 
import DP from '../assets/DP Logo/1.png'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function NavBar() {
    return (
        <div className='flex-col z-40 absolute w-screen '>
            <Utility/>
            <motion.div className='flex justify-between px-8 items-center bg-black h-[180px]'
            
            >
                <Link to='/'>
                <div className='text-[#7cfacd] font-normal w-[140px]'>SHOP</div>
                </Link>
                <Link to='/'>
                <motion.img className='lg:scale-50 lg:z-10' src={DP} alt="DP Logo"
                initial={{y:-1000}}
                transition={{duration:.3,type:"spring",stiffness:30}}
                animate={{y:0,scale:.5}}
                ></motion.img>
                </Link>

                <div className='flex gap-8 items-center stroke-white'>
                    <img className="cursor-pointer" src={Search} ></img>
                    <img className="cursor-pointer" src={User}></img>
                    <img className="cursor-pointer" src={Bag}></img>
                </div>
            </motion.div>
        </div>
    )
}
export default NavBar;
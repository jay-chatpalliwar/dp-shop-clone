// import bg from '../assets/dp Logo/bg.jpg'
import {motion} from 'framer-motion'
import { useState } from 'react';
import {Link} from 'react-router-dom'
function Feature(){
    const image = [
        {   
            "id":1,
            "name":"DP Basketball",
            "price":"$42.83 USD",
            "url":[
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450035/assets/assets/dp%20basketball/one24tyc57omq764jppv.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450036/assets/assets/dp%20basketball/wedoaxfnmyybouhkxf2y.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450036/assets/assets/dp%20basketball/d3vrs2nszo9dubdjaudo.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450036/assets/assets/dp%20basketball/xqqozmfnximjvbmcrbi1.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450036/assets/assets/dp%20basketball/pzqyshx5b4wytxr7oaxu.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450036/assets/assets/dp%20basketball/ekzcxci4mrh8p09jq0fk.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450035/assets/assets/dp%20basketball/srliwile3p2cr8soumhv.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450035/assets/assets/dp%20basketball/wth8hqxbzayefffajrj6.jpg"
        ]},
        {
            "id":2,
            "name":"DP Cap",
            "price":"$35.69 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450037/assets/assets/dp%20Cap/pkohsgyqh0pbcls4nioz.jpg",
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450037/assets/assets/dp%20Cap/vmyzqthywkgr7wiqkwhv.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450038/assets/assets/dp%20Cap/z5ahmld8ivw7mvtbmwxm.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450037/assets/assets/dp%20Cap/fywp5xzrtgvuq6zmzseb.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450037/assets/assets/dp%20Cap/m562scg77derbj5y4tmw.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450037/assets/assets/dp%20Cap/lkxmneidnroeaezcc99n.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450037/assets/assets/dp%20Cap/otrbe6phdrs0yd5qfgq5.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450036/assets/assets/dp%20Cap/ujztn6fcbeuyrvixpmro.jpg"
        ]},
        {
            "id":3,
            "name":"DP Football",
            "price":"$40.09 USD",
            "url":[
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450040/assets/assets/dp%20Football/akh4fzk50igjvzhlwttn.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450040/assets/assets/dp%20Football/h4egfm43kpvzcodzj2zz.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450040/assets/assets/dp%20Football/tet7dlxb7dodnvadalvr.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450040/assets/assets/dp%20Football/jqlmaacfur9bvec7ijgt.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450040/assets/assets/dp%20Football/enfep3baechny3gqwnpj.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450039/assets/assets/dp%20Football/afeg8zcwbwxiqo6tskga.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450039/assets/assets/dp%20Football/avyppxnfnwyu5hmbpdkr.jpg"
        ]},
        {
            "id":4,
            "name":"DP Blue Hoodie",
            "price":"$57.11 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450040/assets/assets/dp%20Hoodie%20Blue/tpj6yw43j86ylu3cuo33.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450041/assets/assets/dp%20Hoodie%20Blue/ww6lr19eqslkawbktfms.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450041/assets/assets/dp%20Hoodie%20Blue/uuw11vxx8usbtxqwthnb.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450041/assets/assets/dp%20Hoodie%20Blue/ffmgyawupzdp5y8vkoue.jpg"
        ]},
        {
            "id":5,
            "name":"DP Dark Grey Hoodie",
            "price":"$56.09 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450041/assets/assets/dp%20Hoodie%20dark%20Grey/sutzg5z0bjtjbmomiwoh.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450041/assets/assets/dp%20Hoodie%20dark%20Grey/ov079umv3cqvhpinkthn.jpg"
        ]},
        {
            "id":6,
            "name":"DP Grey Hoodie",
            "price":"$56.09 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450041/assets/assets/dp%20Hoodie%20Grey/fvcyr6fbyvgnjhpkhtac.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450042/assets/assets/dp%20Hoodie%20Grey/o4ri4dbf4gjudtiodj2w.jpg"
        ]},
        {
            "id":7,
            "name":"DP Multi Kit",
            "price":"$40.56 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450043/assets/assets/dp%20Multi%20Kit/otmms1st2jv8y1pkhgd3.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450044/assets/assets/dp%20Multi%20Kit/tfspeja1sfyi5rnoccw8.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450044/assets/assets/dp%20Multi%20Kit/syuingame7uwiunygmks.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450044/assets/assets/dp%20Multi%20Kit/ol9yfqbwztkrm0jjze2w.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450044/assets/assets/dp%20Multi%20Kit/scbc4wzhiqn0hplnp7rg.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450043/assets/assets/dp%20Multi%20Kit/xgr0b5ual6zcjkbhi65j.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450043/assets/assets/dp%20Multi%20Kit/xnejeozrtxznece9hvng.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450043/assets/assets/dp%20Multi%20Kit/wvmf2h7kz0aej9r2dowc.jpg"
        ]},
        {
            "id":8,
            "name":"DP Rugby Ball",
            "price":"$40.79 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450044/assets/assets/dp%20Rugby%20Ball/id3bhrkd9sixoqjjyrt7.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450045/assets/assets/dp%20Rugby%20Ball/ldprviuzras7k1b1mfl2.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450045/assets/assets/dp%20Rugby%20Ball/j5wtrj63lerg9eo4cgse.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450045/assets/assets/dp%20Rugby%20Ball/htnq68dgeiwvy1ntjrp7.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450045/assets/assets/dp%20Rugby%20Ball/xzdblobip51xye5dklj7.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450044/assets/assets/dp%20Rugby%20Ball/vdy0yadv5yqrspkppulf.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450044/assets/assets/dp%20Rugby%20Ball/hxphfhoxlqzwvfmbkzvp.jpg"
        ]},
        {
            "id":9,
            "name":"DP Black Shirt",
            "price":"$27.53 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450046/assets/assets/dp%20Shirt%20Black/ljkoirbnjnrjdhqma2kv.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450046/assets/assets/dp%20Shirt%20Black/j09pjpf4cmqrlbx1zgxw.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450046/assets/assets/dp%20Shirt%20Black/ta1bw8gysb1ga58hkkim.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450045/assets/assets/dp%20Shirt%20Black/udlxqsckjxokmrhciwzb.jpg"
        ]},
        {
            "id":10,
            "name":"DP Blue Shirt",
            "price":"$30.59 USD",
            "url":[
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450046/assets/assets/dp%20Shirt%20Blue/du8sh2kyhlzrrv9j7aly.jpg"
        ]},
        {
            "id":11,
            "name":"DP Grey Shirt",
            "price":"$27.53 USD",
            "url":[
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450047/assets/assets/dp%20Shirt%20Grey/qbg81prkcjhuypwg8kmg.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450047/assets/assets/dp%20Shirt%20Grey/wc2rrqvi4c3jcirng6mo.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450047/assets/assets/dp%20Shirt%20Grey/stodggtnvqeael7atlso.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450047/assets/assets/dp%20Shirt%20Grey/ptbzpvcx7wn4jjilqkuo.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450046/assets/assets/dp%20Shirt%20Grey/fr152gt4hijpzaldzpkb.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450046/assets/assets/dp%20Shirt%20Grey/gxkrsronmsbzvg5f2nhb.jpg"
        ]},
        {
            "id":12,
            "name":"DP Light Grey Shirt",
            "price":"$27.53 USD",
            "url":[
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450048/assets/assets/dp%20Shirt%20Light%20Grey/tqc1dxfjw5dqfyfy1qic.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450048/assets/assets/dp%20Shirt%20Light%20Grey/depx50neq3w7q4zs1bky.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450048/assets/assets/dp%20Shirt%20Light%20Grey/oz07j5cybblsxi9wdvko.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450048/assets/assets/dp%20Shirt%20Light%20Grey/dlenqxv62cruqr84l4v8.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450048/assets/assets/dp%20Shirt%20Light%20Grey/pauwsovl2gngqncrbseg.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450047/assets/assets/dp%20Shirt%20Light%20Grey/rdzpsrk5znxciwndcl1o.jpg"
        ]},
        {
            "id":13,
            "name":"DP Purple Shirt",
            "price":"$25.49 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450049/assets/assets/dp%20Shirt%20Purple/ufd4tkjkq0yl6qkl5rce.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450049/assets/assets/dp%20Shirt%20Purple/kk1q1jejygn39cxgte4t.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450049/assets/assets/dp%20Shirt%20Purple/o19sy5y9x5rk2vgjc743.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450048/assets/assets/dp%20Shirt%20Purple/vj7wjb066odadrmtbd0m.jpg"
        ]},
        {
            "id":14,
            "name":"DP Red Shirt",
            "price":"$22.02 USD",
            "url":[
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450049/assets/assets/dp%20Shirt%20Red/ot2pbmdfjr2kmrbsuw0f.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450049/assets/assets/dp%20Shirt%20Red/wglicnjyljcit22r9tex.jpg"
        ]},
        {
            "id":15,
            "name":"DP Sports Glasses",
            "price":"$19.37 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450050/assets/assets/dp%20Sports%20Glasses/irot8kapbxdsfpr1qwef.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450050/assets/assets/dp%20Sports%20Glasses/oihsixqfio0ps7brb53z.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450050/assets/assets/dp%20Sports%20Glasses/dz6pg6ufuyzwzhej7w1n.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450050/assets/assets/dp%20Sports%20Glasses/uyadyavu7xgzgndzxmkh.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450050/assets/assets/dp%20Sports%20Glasses/azhakdey5joxzbpyh8x9.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450050/assets/assets/dp%20Sports%20Glasses/xnmgcwlg9at7s1kazw4g.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450050/assets/assets/dp%20Sports%20Glasses/cbn9bvonhvezo6hudabb.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450049/assets/assets/dp%20Sports%20Glasses/pffx96f2uv8xyf6bmcv7.jpg"
        ]},
        {
            "id":16,
            "name":"DP Story Book",
            "price":"$18.35 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450050/assets/assets/dp%20Story%20Book/perlnubks0baspvstecf.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450051/assets/assets/dp%20Story%20Book/i4qj3sq2hc2bakj7do5b.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450051/assets/assets/dp%20Story%20Book/vwynfly8d8yjt1nwchk8.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450051/assets/assets/dp%20Story%20Book/hnoezbkiiyfwm3uzq9zp.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450051/assets/assets/dp%20Story%20Book/uatyd9557jprumbb5ylu.jpg"
        ]},
        {
            "id":17,
            "name":"DP Unisex Socks",
            "price":"$12.23 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450051/assets/assets/dp%20Unisex%20Socks/rvmedwjlejxpnzoswebl.jpg",
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450052/assets/assets/dp%20Unisex%20Socks/ku8y9i0u7nkch1j4fxpn.jpg",
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450052/assets/assets/dp%20Unisex%20Socks/x0alsjhs0wafwcupwj10.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450052/assets/assets/dp%20Unisex%20Socks/dilvybyzqm1gxkhts8sb.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450051/assets/assets/dp%20Unisex%20Socks/is91kjmca8eyswwl2npl.jpg"
        ]},
        {
            "id":18,
            "name":"DP Kiddo Mystery Kit",
            "price":"$40.79 USD",
            "url":[
                "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450052/assets/assets/Kiddo%20Mystery%20Kit/mdcderikskw3ebvm8jl5.jpg",
            "https://res.cloudinary.com/dehyoeajm/image/upload/v1707450052/assets/assets/Kiddo%20Mystery%20Kit/yzxmort3gmp3lasqjve2.jpg"
        ]}
    ];

    const cardVariants = {
        offscreen: {
          y: 250
        },
        onscreen: {
          y: 0,
          opacity:1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

      const [flag,setFlag] = useState(false);
      const [interval,setinterval] = useState(null);
      const [len,setLen] = useState({
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0,
        17:0,
        18:0
      });

      function hoverChange(img){
        // console.log(img.name);
        const card = document.getElementById(img.name);
        if(card !== null){
            setFlag(false);
            console.log(card.width);
            if(img.url.length > 1){
                var len = img.url.length;
                var count = 0;
                var c = 0;
                setinterval(setInterval(() => {
                    c = c + 1;
                    count = c;
                    count %= len;
                    setLen({...len,[img.id]:count/len});
                    // console.log(count);
                    card.src = img.url[count];

                    if (count > 1000 || flag === true) {
                        clearInterval(interval); // Clear the interval when count exceeds 1000
                      }
                  }, 700)); // Update count every 1000 milliseconds (1 second)
              
              
                //   Clear the interval when the component unmounts or when count reaches a certain value
                //   return () => clearInterval(intervalId);
            }
        }
      }
      function hoverChange2(img){
        // console.log(img.name);
        setFlag(true);
        clearInterval(interval);
        const card = document.getElementById(img.name);
        if(card !== null){
            setLen({...len,[img.id]:0});
            // console.log(card);
            card.src = img.url[0];
        }
      }

    return(
        <div className="relative flex flex-col justify-center items-start w-screen px-8 py-6 mt-60">
            <Link to='/'>
            <motion.div className="z-10 logo fixed top-72 left-6 flex italic flex-col justify-center items-center bg-bg rounded-full text-lg font-black h-[80px] w-[80px] text-[#7cfacd]"
            initial={{x:-1000}}
            transition={{delay:.3,duration:0.3,type:"spring",stiffness:30}}
            animate={{x:0}}
            >
                <div className='mt-1'>
                    LET'S
                </div>
                <div className='-mt-2'>
                    GO!
                </div>
            </motion.div>
                </Link>
            <motion.div className='text-3xl font-black italic'
            initial={{x:-1000}}
            transition={{delay:0.6,duration:0.3,type:"spring",stiffness:30}}
            animate={{x:0}}            
            >FEATURED</motion.div>

            <motion.div className='flex flex-row justify-start items-center flex-wrap'
            transition={{delay:1.4,duration:0.3}}
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            >
                {
                    image.map(img => (
                        <motion.div className='relative card flex flex-col gap-0 h-[450px] w-[300px] m-[13px]' key={img.name}
                        viewport={{ once: true, amount: 0.8 }}
                        // initial="offcreen"
                        initial={{y:50,opacity:0}}
                        whileInView="onscreen"
                        variants={cardVariants}
                        // transition={{delay:2.3}}
                        onMouseEnter={() => hoverChange(img)}
                        onMouseLeave={() => hoverChange2(img)}
                        // animate={{y:0,opacity:1}}
                        >
                            <img src={img.url[0]} id={img.name} alt='logo'></img>
                            <motion.div className='absolute bottom-32 left-0 mx-8 w-4/5 h-[5px] bg-black'
                            initial={{scaleX:0,transformOrigin:"left"}}
                            transition={{type:"spring",stiffness:36,duration:0}}
                            animate={{scaleX:len[img.id]}}
                            ></motion.div>
                            <div className='font-black italic mt-4 text-lg'>{img.name}</div>
                            <div className='-mt-1'>{img.price}</div>
                            {/* <div className='-mt-1'>{img.id}</div> */}
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export  default Feature;
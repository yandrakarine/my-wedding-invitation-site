import './index.css'
import ChurchIcon from './assets/icons/svg/church.svg'
import PinIcon from './assets/icons/svg/map-pin-line.svg'
import GiftIcon from './assets/icons/svg/gift.svg'
import GlobeIcon from './assets/icons/svg/globe.svg'
import UserCherckIcon from './assets/icons/svg/user-check.svg'
import PointIcon from './assets/icons/svg/hand-pointing.svg'
import ArrowHeart from './assets/icons/svg/arrow-heart.svg'
import MagnoliaImg from './assets/icons/image/magnolia-watercolor.png'
import UsImg from './assets/icons/image/DSC_0035.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

import confetti from 'canvas-confetti';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // confetti({
    //   particleCount: 150,
    //   spread: 80,
    //   origin: { y: 0.6 },
    // });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 40, behavior: "smooth" });

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  const Logo = () => {
    return <div className='flex gap-2'>
      <span className='font-[EBGaramondRegular] text-5xl text-[#505946] lg:text-6xl'>Y</span>
     <img src={ArrowHeart} alt="" className='h-10  lg:h-15'/>
      <span className='font-[EBGaramondRegular] text-5xl text-[#505946] lg:text-6xl'>W</span>
    </div>
  }

  const buttonsContent = [
    {
      title: "Local da cerimônia",
      iconPath: ChurchIcon,
      alt: "church icon",
      href: 'https://www.google.com/maps?rlz=1C1ONGR_enBR1133BR1133&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzI4NmowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KZO1U1myS8cHMf6L5eB_YctO&daddr=R.+Sao+Vicente+de+Paulo,+300+-+Ant%C3%B4nio+Bezerra,+Fortaleza+-+CE,+60352-370',
    },
    {
      title: "Local da recepção",
      iconPath: PinIcon,
      alt: "map pin icon",
      href:"https://www.google.com/maps/dir//Resid.+Iparana+-+R.+Luiz+Paiva,+75+-+Iparana,+Caucaia+-+CE,+61627-090/@-3.688084,-38.7135447,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c735ef032d79ef:0x7d80b9d6dcb0c893!2m2!1d-38.631134!2d-3.6881523?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: "Nosso site",
      iconPath: GlobeIcon,
      alt:"globe icon",
      href:"https://noivos.casar.com/yandra-e-will",
    },
    {
      title: "Confirmação de presença",
      iconPath: UserCherckIcon,
      alt:"user with check",
      href:"https://noivos.casar.com/yandra-e-will#/rsvp"
    },
    {
      title: "Lista de presentes",
      iconPath: GiftIcon,
      alt:"gift icon",
      href:"https://noivos.casar.com/yandra-e-will#/presentes"
    },
  ]

  return (
   
    <div className='relative bg-[#ffffff] bg-[url(https://www.transparenttextures.com/patterns/paper.png)] px-4 min-h-fit max-w-[80rem] mx-auto overflow-hidden'>
  
      <img data-aos="fade-up-right"  src={MagnoliaImg} alt="" className='absolute -top-[3%] -left-[17%] rotate-10 z-10 w-80 sm:-top-[3%] sm:-left-[12%] sm:rotate-0 sm:w-100 lg:-top-[2%] lg:-left-[8%] xl:w-140 xl:-top-[4%] xl:-left-[7%] xl:rotate-5 xl:-translate-x-5'/>

    <section  data-aos="fade-up" is="logo-and-phrase" className='flex flex-col items-center justify-center gap-8 mb-8 mt-25 lg:gap-12 lg:mb-12'>
      <Logo/>
      <span className='font-[EBGaramondItalic] text-md text-center px-8 sm:px-0 lg:text-xl'>
      "O amor humano, o amor aqui em baixo na terra, quando é verdadeiro, <br className='hidden sm:inline-block '/>ajuda-nos a saborear o amor divino."
      </span>
    </section>

    <section data-aos="fade-right" className='flex flex-col items-center justify-center gap-5 mb-8 lg:gap-8 lg:mb-12'>
      <p className='font-[EBGaramondRegular] text-base text-center uppercase lg:text-xl'>Com a benção de Deus e de seus pais</p>
      <h1 className='font-[MalibuRegular] text-7xl text-[#505946] lg:text-9xl'>Yandra e Will</h1>
      <p className='font-[EBGaramondRegular] text-base text-center uppercase lg:text-xl'>convidam para a cerimônia de seu casamento</p>
    </section>

    <section data-aos="fade-left" className='flex flex-col items-center justify-center gap-6 mb-10 lg:gap-8 lg:mb-16'>
      <p className='font-[EBGaramondRegular] text-2xl mb-4 uppercase lg:text-3xl'>09 | Agosto | 2025</p>
      <p className='font-[EBGaramondRegular] text-md text-center lg:text-lg'>
      Às 15h, na Capela São Vicente de Paulo, <br className=' lg:hidden'/> localizada na R. São Vicente de Paulo, 300 - Antônio Bezerra
      </p>
      <p className='font-[EBGaramondRegular] text-md text-center lg:text-lg'>
      Após a cerimônia, os convidados serão recepcionados no <br className=' lg:hidden'/>
      Lounge Conceito.  localizado na R. Luiz Paiva, 75 - Iparana
      </p>
    </section>

    <section  className='flex flex-col items-center justify-center mb-12'>
     <div className='flex justify-aroundg gap-2 px-2 max-w-2xl mb-20'>
     {buttonsContent.map((item) => {
       return( 
       <div className='flex flex-col items-center justify-center gap-3 h-full w-1/5'>
        <a target="_blank" href={item.href} className='flex cursor-pointer bg-[#505946] p-2 rounded-full hover:bg-[#9aa191] hover:-translate-y-1.5 ease-in-out items-center justify-center shrink-0 lg:p-3'>
        <img src={item.iconPath} alt={item.alt} className='h-7 lg:h-10'/>
        </a>
       <span className='font-[EBGaramondRegular] text-[0.625rem] text-[#505946] text-center uppercase lg:text-base'>{item.title}</span>
      </div>)
      })}
     </div>
      <div className='flex items-center justify-center gap-2'>
        <img src={PointIcon} alt="" className='h-7'/>
        <p className='font-[EBGaramondRegular] text-[#505946] text-sm text-center uppercase lg:text-base'>clique nos icones para acessar</p>
      </div>
    </section>

    <section id='paralax_section' className='relative flex min-h-[60dvh] items-center justify-center mb-10'>
      <div id='parallax_bg' className={`absolute rounded-2xl left-0 top-0 right-0 bg-fixed h-140 bg-no-repeat bg-cover bg-center bg-[url(./assets/icons/image/DSC_0035.jpg)] lg:h-150`} style={{backgroundImage: UsImg}}>
      </div>
    </section>
    <div className='flex flex-col gap-3 mt-35 mb-12 shrink-0 2xl:mt-0'>
      <span className='font-[EBGaramondRegular] pl-5 text-base text-left lg:text-2xl'>Aguardamos você! Com carinho,</span>
      <span className='font-[MalibuRegular] text-5xl text-[#505946] text-left pl-10 lg:text-6xl'>Yandra e Will</span>
    
    </div>
       {/* <img  src={MagnoliaImg} alt="" className='absolute bottom-[-10%] right-[-24%] rotate-190 z-20 w-120 overflow-hidden lg:right-[-4%] lg:w-180 '/> */}
       <img  src={MagnoliaImg} alt="" className='absolute -bottom-[3%] -right-[14%] rotate-185 z-10 w-80 sm:-bottom-[3%] sm:-right-[12%] sm:w-100 lg:-bottom-[2%] lg:-right-[6%] xl:w-130 xl:-bottom-[4%] xl:-right-[5%] xl:rotate-180'/>
       {/* <img  src={Magnolia2Img} alt="" className='absolute -bottom-[2%] -right-[12%] rotate-180 z-20 w-70 '/> */}

    </div>

  )
}

export default App


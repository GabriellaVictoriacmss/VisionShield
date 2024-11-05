import arrow from '../assets/arrow.png';

function Footer() {
  const scrollToTop = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  return (
<footer className="w-full bg-black text-white py-4 flex flex-col md:flex-row items-center justify-between md:justify-center">
  <p className='font-montserrat text-xs text-center md:hidden'>
    Gabriella Victória Cunha Melo dos Santos I Vinicus Gomes da Silva I Ana Clara Gomes da Silva I Pedro Bertolline Machado © 2024
  </p>
  <p className='font-montserrat hidden md:flex text-xs text-center'>
    Gabriella Victória Cunha Melo dos Santos I Vinicus Gomes da Silva I Ana Clara Gomes da Silva I Pedro Bertolline Machado © 2024
  </p>
  <a 
    onClick={scrollToTop} 
    className="mt-2 md:mt-0 flex items-center px-2 py-2 rounded-md bg-main-purple cursor-pointer"
  >
    <img src={arrow} alt="Arrow" className="w-5 h-5 md:w-6 md:h-6" />
  </a>
</footer>

  );
}

export default Footer;

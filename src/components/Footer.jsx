import arrow from '../assets/arrow.png';

function Footer() {
  const scrollToTop = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-white py-4 relative flex flex-row items-center justify-center">
      <p className='font-montserrat text-xs left-0'>Gabriella Victória Cunha Melo dos Santos I Vinicus Gomes da Silva I Ana Clara Gomes da Silva I Pedro Bertolline Machado © 2024</p>
      <a 
        onClick={scrollToTop} 
        className="absolute right-10 flex items-center px-2 py-2 rounded-md bg-main-purple cursor-pointer"
      >
        <img src={arrow} alt="Arrow" />
      </a>
    </footer>
  );
}

export default Footer;

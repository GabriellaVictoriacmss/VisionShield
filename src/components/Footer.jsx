import arrow from '../assets/arrow.png';

function Footer() {
  const scrollToTop = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-white py-8 relative flex flex-row items-center justify-center">
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

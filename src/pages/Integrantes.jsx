import Header from '../components/Header';
import Integrante from '../assets/integrante.png';
import gabriella from '../assets/gab.png';
import vini from '../assets/vini.png';
import ana from '../assets/ana.png';
import pedro from '../assets/pedro.png';
import logoSection from '../assets/logo-main.png';

function Integrantes() {
  return (
    <>
      <div className="bg-mobile md:bg-desktop min-h-screen">
        <Header />
      <div className="flex flex-col items-center mb-8 pt-4">
        <img
          src={logoSection}
          alt="Logo"
          className="w-[85%] md:w-auto"
        />
        <p className='uppercase font-montserrat text-white-50 text-base md:text-l'>integrantes</p>
      </div>
      <div>

        <section className="w-full flex flex-col items-center justify-center p-4 overflow-x-auto scrollbar-hidden">


          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center w-full mt-8">
            <div className="relative text-center border-2 border-main-purple py-32 px-10 rounded-[5px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg blur-effect scale-95 md:scale-100">
              <img
                src={gabriella}
                alt="Gabriella Victória"
                className="w-36 h-36 mx-auto mb-4 relative -top-16"
              />
              <h2 className='text-white text-lg font-semibold mb-6 mt-4 font-montserrat'>Gabriella Victória</h2>
              <p className='text-white font-poppins'><strong>Idade:</strong> 18 anos</p>
              <p className='text-white w-60 font-poppins'><strong>Formação:</strong> Unasp - Técnico em Informática</p>
            </div>

            <div className="relative text-center border-2 border-main-purple py-32 px-10 rounded-[5px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg blur-effect scale-95 md:scale-100">
              <img
                src={ana}
                alt="Ana Clara"
                className="w-36 h-36 mx-auto mb-4 relative -top-16"
              />
              <h2 className='text-white text-lg font-semibold mb-6 mt-4 font-montserrat'>Ana Clara</h2>
              <p className='text-white font-poppins'><strong>Idade:</strong> 18 anos</p>
              <p className='text-white w-60 font-poppins'><strong>Formação:</strong> Unasp - Técnico em Informática</p>
            </div>

            <div className="relative text-center border-2 border-main-purple py-32 px-10 rounded-[5px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg blur-effect scale-95 md:scale-100">
              <img
                src={vini}
                alt="Vinícius Gomes"
                className="w-36 h-36 mx-auto mb-4 relative -top-16"
              />
              <h2 className='text-white text-lg font-semibold mb-6 mt-4 font-montserrat'>Vinícius Gomes</h2>
              <p className='text-white font-poppins'><strong>Idade:</strong> 18 anos</p>
              <p className='text-white w-60 font-poppins'><strong>Formação:</strong> Unasp - Técnico em Informática</p>
            </div>

            <div className="relative text-center border-2 border-main-purple py-32 px-10 rounded-[5px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg blur-effect scale-95 md:scale-100">
              <img
                src={pedro}
                alt="Pedro Bertolline"
                className="w-36 h-36 mx-auto mb-4 relative -top-16"
              />
              <h2 className='text-white text-lg font-semibold mb-6 mt-4 font-montserrat'>Pedro Bertolline</h2>
              <p className='text-white font-poppins'><strong>Idade:</strong> 18 anos</p>
              <p className='text-white w-60 font-poppins'><strong>Formação:</strong> Unasp - Técnico em Informática</p>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}

export default Integrantes;

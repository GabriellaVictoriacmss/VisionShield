import React from 'react';
import logoSection from '../assets/logo-main.png';
import Header from '../components/Header';

function Bibliografias() {
  return (
    <>
    <div className="bg-mobile md:bg-desktop min-h-screen">
    <Header />
    <div>
      <div className="flex flex-col items-center pt-4">
        <img 
          src={logoSection} 
          alt="Logo" 
          className="w-[85%] md:w-auto" 
        />
        <p className="uppercase font-montserrat text-white-50 text-base md:text-l">bibliografias</p>
      </div>
      <section className="flex-grow flex items-center justify-center p-4 overflow-x-auto scrollbar-hidden ">
        <section className="w-full max-w-screen-lg mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-black p-6 rounded-lg flex flex-col items-center text-center h-full min-h-[300px]">
              <h2 className="text-lg font-semibold text-white w-[85%] flex-grow flex items-center justify-center mb-2 font-poppins">
                Efeitos da exposição prolongada a telas de dispositivos eletrônicos na saúde ocular
              </h2>
              <a href="https://bjihs.emnuvens.com.br/bjihs/article/view/923/1089" className="bg-transparent border-2 text-white border-main-purple rounded-md uppercase font-montserrat transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:border-white hover:text-secondary-purple mb-4 px-8 py-2">Abrir</a>
            </div>
            <div className="bg-black p-6 rounded-lg flex flex-col items-center text-center h-full min-h-[300px]">
              <h2 className="text-lg font-semibold text-white w-[85%] flex-grow flex items-center justify-center mb-2 uppercase font-poppins">
                Eficiência das lentes com bloqueador azul
              </h2>
              <a href="https://recima21.com.br/index.php/recima21/article/view/1997/1521" className="bg-transparent border-2 text-white border-main-purple rounded-md uppercase font-montserrat transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:border-white hover:text-secondary-purple mb-4 px-8 py-2">Abrir</a>
            </div>
            <div className="bg-black p-6 rounded-lg flex flex-col items-center text-center h-full min-h-[300px]">
              <h2 className="text-lg font-semibold text-white w-[85%] flex-grow flex items-center justify-center mb-2 font-poppins">
                A gênese da miopia à luz (solar) de novas evidências: redução do tempo gasto ao ar livre diretamente associado ao aumento da miopia
              </h2>
              <a href="https://revista.souzamarques.br/index.php/ACTA_MSM/article/download/510/612" className="bg-transparent border-2 text-white border-main-purple rounded-md uppercase font-montserrat transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:border-white hover:text-secondary-purple mb-4 px-8 py-2">Abrir</a>
            </div>
            <div className="bg-black p-6 rounded-lg flex flex-col items-center text-center h-full min-h-[300px]">
              <h2 className="text-lg font-semibold text-white w-[85%] flex-grow flex items-center justify-center mb-2 font-poppins">
                O impacto do aumento do uso de telas por estudantes de medicina no agravamento da miopia durante a Pandemia do Covid-19
              </h2>
              <a href="https://www.researchgate.net/publication/369373586_O_impacto_do_aumento_do_uso_de_telas_por_estudantes_de_medicina_no_agravamento_da_miopia_durante_a_Pandemia_do_Covid-19" className="bg-transparent border-2 text-white border-main-purple rounded-md uppercase font-montserrat transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:border-white hover:text-secondary-purple mb-4 px-8 py-2">Abrir</a>
            </div>
          </div>
        </section>
      </section>
      
    </div>

    </div>
    </>
  );
}

export default Bibliografias;

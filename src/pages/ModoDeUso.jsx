import React from 'react';
import logoSection from '../assets/logo-main.png';
import off from '../assets/off.png'
import glass from '../assets/glassesm-sensor.svg'
import heart from '../assets/vibracao.png'
import Header from '../components/Header';


function ModoDeUso() {
  return (
    <>
      <div className='min-h-screen bg-mobile md:bg-desktop bg-cover bg-no-repeat'>
      <Header />
      <div className="flex flex-col items-center mb-12 pt-4">
          <img
            src={logoSection}
            alt="Logo"
            className="w-[85%] md:w-auto" 
          />
          <p className='uppercase font-montserrat text-white-50 text-base '>Modo de uso</p> 
        </div>
      <div className=''>
        

        <section className="w-full flex flex-col items-center justify-center p-4 overflow-x-auto scrollbar-hidden">

          <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full mt-8 pt-8">
            
            {/* Bloco ON/OFF */}
            <div className="bg-gradient-to-b from-custom-dark to-custom-light text-white p-6 rounded-lg w-full md:w-[288px] h-[480px] flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center mb-8">
                <img src={off} alt="" className="w-[68px] h-[68px] mb-4" /> 
                <h1 className='font-montserrat2 text-white text-xl md:text-2xl pb-1'><strong>ON/OFF</strong></h1> 
              </div>
              <p className='text-white font-poppins text-base md:text-base mb-8 font-extralight'>
                Para ligar e desligar o dispositivo, utilize o botão localizado no lado esquerdo dos óculos.
              </p>
            </div>

            {/* Bloco DISTÂNCIA */}
            <div className="text-white p-6 rounded-lg w-full md:w-[288px] h-[480px] flex flex-col items-center justify-center text-center border-main-purple border-2">
              <img src={glass} alt="" className="w-[68px] h-[68px] mb-4" /> 
              <h1 className='font-montserrat2 text-main-purple text-xl md:text-2xl'><strong>DISTÂNCIA</strong></h1> 
              <p className='text-white font-poppins text-base md:text-base p-4 font-extralight'>
                <strong className='font-bold'>Objeto a menos de 12 cm:</strong> LED <span className="text-red-600">vermelho</span> ligado até afastar para 34 cm.
              </p>
              <p className='text-white font-poppins text-base md:text-base p-4 font-extralight'>
                <strong className='font-bold'>Objeto entre 35 cm e 40 cm:</strong> LED <span className="text-yellow-400">amarelo</span> ligado.
              </p>
              <p className='text-white font-poppins text-base md:text-base p-4 font-extralight'>
                <strong className='font-bold'>Objeto com distância maior ou igual a 50 cm: </strong> LED <span className="text-violet-700">roxo</span> ligado até afastar para 34 cm.
              </p>
            </div>

            {/* Bloco VIBRAÇÃO */}
            <div className="text-white p-6 rounded-lg w-full md:w-[288px] h-[480px] flex flex-col items-center justify-center text-center border-main-purple border-2">
              <img src={heart} alt="" className="w-[59px] h-[49px] mb-4" /> 
              <h1 className='font-montserrat2 text-main-purple text-xl md:text-2xl'><strong>VIBRAÇÃO</strong></h1> 
              <p className='text-white font-poppins text-base md:text-base p-4 font-extralight'>
                <strong className='font-bold'>Objeto a menos de 12 cm:</strong> Vibração contínua até afastar para 34 cm.
              </p>
              <p className='text-white font-poppins text-base md:text-base p-4 font-extralight'>
                <strong className='font-bold'>Objeto entre 35 cm e 40 cm: </strong> Vibração a cada 2 segundos.
              </p>
              <p className='text-white font-poppins text-base md:text-base p-4 font-extralight'>
                <strong className='font-bold'>Objeto com distância maior ou igual a 50 cm:</strong> Sem vibração.
              </p>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}

export default ModoDeUso;
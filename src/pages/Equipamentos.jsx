import React from 'react';
import Header from "../components/Header";
import arduino from "../assets/arduinoEquipamento.png";
import bluetooth from "../assets/bluetooth.png";
import bateria from "../assets/bateriaEquipamento.png";
import led from "../assets/ledEquipamento.png";
import moeda from "../assets/moeda.png";
import oculos from "../assets/oculosEquipamento.png";
import ultrassonico from "../assets/ultrassonicoEquipamento.png";
import motorVibracao from "../assets/vibracaoEquipamento.png";
import logoSection from '../assets/logo-main.png';
import '../index.css';

function Equipamentos() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mb-4 pt-4">
        <img
          src={logoSection}
          alt="Logo"
          className="w-[85%] md:w-auto" 
        />
        <p className='uppercase font-montserrat text-white-50 text-base'>equipamentos</p> 
      </div>

      <section className="flex flex-col items-center justify-center py-8 px-4">
        <div className="md:relative w-[100%] flex justify-center mb-20">
          <div 
            className="overflow-x-auto scrollbar-custom w-full md:w-[1000px] pb-10 mb-10"
          >
            <div className="flex flex-col md:flex-row md:gap-10 gap-8 w-full md:w-[1500px] items-center">
              {/* oculos */}
              <div 
                className="flex-shrink-0 w-[80%] md:w-[300px] h-[400px] bg-blue-600 text-white rounded-lg p-4 flex flex-col items-center justify-end relative overflow-hidden group mx-auto"
              >
                <img src={oculos} alt="Jumpers" className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0"></div>
                <div className="relative z-10 text-center transition-all duration-300 group-hover:translate-y-[-120px]">
                  <h2 className=" mb-4 group-hover:mb-0 py-2 px-4 font-medium uppercase font-poppins border-2 text-white border-main-purple rounded-md">óculos com filtro azul</h2>
                </div>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 top-[150px] text-center w-[75%] font-poppins">Projetado para reduzir a fadiga ocular e proteger os olhos dos efeitos nocivos da luz azul emitida por telas digitais</p>
                <div className="relative z-10 text-center flex items-center justify-center gap-2 transition-all duration-300 group-hover:mt-[120px]">
                  <img src={moeda} alt="" />
                  <p className="font-poppins">R$ 49,90</p>
                </div>
              </div>

              {/* ultrassonico */}
              <div 
                className="flex-shrink-0 w-[80%] md:w-[300px] h-[400px] text-white rounded-lg p-4 flex flex-col items-center justify-end relative overflow-hidden group mx-auto"
              >
                <img src={ultrassonico} alt="Jumpers" className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0"></div>
                <div className="relative z-10 text-center transition-all duration-300 group-hover:translate-y-[-120px]">
                  <h2 className=" mb-4 group-hover:mb-0 py-2 px-4 font-medium uppercase font-poppins border-2 text-white border-main-purple rounded-md">sensor ultrassônico</h2>
                </div>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 top-[150px] text-center w-[75%] font-poppins">Medir distâncias e detectar objetos, emitindo ondas sonoras de alta frequência e captando os ecos refletidos</p>
                <div className="relative z-10 text-center flex items-center justify-center gap-2 transition-all duration-300 group-hover:mt-[120px]">
                  <img src={moeda} alt="" />
                  <p className="font-poppins">R$ 11,90</p>
                </div>
              </div>

              {/* vibracao */}
              <div 
                className="flex-shrink-0 w-[80%] md:w-[300px] h-[400px] text-white rounded-lg p-4 flex flex-col items-center justify-end relative overflow-hidden group mx-auto"
              >
                <img src={motorVibracao} alt="Jumpers" className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0"></div>
                <div className="relative z-10 text-center transition-all duration-300 group-hover:translate-y-[-120px]">
                  <h2 className=" mb-4 group-hover:mb-0 py-2 px-4 font-medium uppercase font-poppins border-2 text-white border-main-purple rounded-md">motor de vibração</h2>
                </div>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 top-[150px] text-center w-[75%] font-poppins">Fornecer feedback tátil em projetos eletrônicos, criando vibrações em resposta a eventos ou ações</p>
                <div className="relative z-10 text-center flex items-center justify-center gap-2 transition-all duration-300 group-hover:mt-[120px]">
                  <img src={moeda} alt="" />
                  <p className="font-poppins">R$ 7,90</p>
                </div>
              </div>

              {/* led */}
              <div 
                className="flex-shrink-0 w-[80%] md:w-[300px] h-[400px] text-white rounded-lg p-4 flex flex-col items-center justify-end relative overflow-hidden group mx-auto"
              >
                <img src={led} alt="Jumpers" className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0"></div>
                <div className="relative z-10 text-center transition-all duration-300 group-hover:translate-y-[-120px]">
                  <h2 className=" mb-4 group-hover:mb-0 py-2 px-4 font-medium uppercase font-poppins border-2 text-white border-main-purple rounded-md">led rgb</h2>
                </div>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 top-[150px] text-center w-[75%] font-poppins">Permite a criação de efeitos de iluminação multicoloridos controlados individualmente</p>
                <div className="relative z-10 text-center flex items-center justify-center gap-2 transition-all duration-300 group-hover:mt-[120px]">
                  <img src={moeda} alt="" />
                  <p className="font-poppins">R$ 1,00</p>
                </div>
              </div>

              {/* arduino */}
              <div 
                className="flex-shrink-0 w-[80%] md:w-[300px] h-[400px] text-white rounded-lg p-4 flex flex-col items-center justify-end relative overflow-hidden group mx-auto"
              >
                <img src={arduino} alt="Jumpers" className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0"></div>
                <div className="relative z-10 text-center transition-all duration-300 group-hover:translate-y-[-120px]">
                  <h2 className=" mb-4 group-hover:mb-0 py-2 px-4 font-medium uppercase font-poppins border-2 text-white border-main-purple rounded-md">arduino uno</h2>
                </div>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 top-[150px] text-center w-[75%] font-poppins">Microcontrolador amplamente utilizado em projetos de eletrônica e robótica</p>
                <div className="relative z-10 text-center flex items-center justify-center gap-2 transition-all duration-300 group-hover:mt-[120px]">
                  <img src={moeda} alt="" />
                  <p className="font-poppins">R$ 54,90</p>
                </div>
              </div>

              {/* bateria */}
              <div 
                className="flex-shrink-0 w-[80%] md:w-[300px] h-[400px] text-white rounded-lg p-4 flex flex-col items-center justify-end relative overflow-hidden group mx-auto"
              >
                <img src={bateria} alt="Jumpers" className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0"></div>
                <div className="relative z-10 text-center transition-all duration-300 group-hover:translate-y-[-120px]">
                  <h2 className=" mb-4 group-hover:mb-0 py-2 px-4 font-medium uppercase font-poppins border-2 text-white border-main-purple rounded-md">bateria recarregável</h2>
                </div>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 top-[150px] text-center w-[75%] font-poppins">Fonte de energia recarregável para projetos eletrônicos</p>
                <div className="relative z-10 text-center flex items-center justify-center gap-2 transition-all duration-300 group-hover:mt-[120px]">
                  <img src={moeda} alt="" />
                  <p className="font-poppins">R$ 19,90</p>
                </div>
              </div>

              {/* bluetooth */}
              <div 
                className="flex-shrink-0 w-[80%] md:w-[300px] h-[400px] text-white rounded-lg p-4 flex flex-col items-center justify-end relative overflow-hidden group mx-auto"
              >
                <img src={bluetooth} alt="Jumpers" className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0"></div>
                <div className="relative z-10 text-center transition-all duration-300 group-hover:translate-y-[-120px]">
                  <h2 className=" mb-4 group-hover:mb-0 py-2 px-4 font-medium uppercase font-poppins border-2 text-white border-main-purple rounded-md">módulo bluetooth HC-05</h2>
                </div>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 top-[150px] text-center w-[75%] font-poppins">Conectividade sem fio a dispositivos eletrônicos, permitindo a comunicação entre microcontroladores, como o Arduino,</p>
                <div className="relative z-10 text-center flex items-center justify-center gap-2 transition-all duration-300 group-hover:mt-[120px]">
                  <img src={moeda} alt="" />
                  <p className="font-poppins">R$ 42,90</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Equipamentos;

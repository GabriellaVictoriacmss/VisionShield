import Header from '../components/Header';
import Footer from '../components/Footer';
import logoSection from '../assets/logo-main.png';
import glasses from '../assets/visioshield.mp4';
import game from '../assets/game.mp4';
import sindrome_visao from '../assets/sindrome_visao.png';
import grafico from '../assets/grafico.png';
import timer from '../assets/timer.png';
import raio from '../assets/raio.png';
import livro from '../assets/livro.png';


function Home() {
  return (
    <>
      <div className='min-h-screen bg-mobile md:bg-desktop overflow-x-auto scrollbar-hidden ' id='home'>
        <Header />
        <div className="" >
          <div className="flex flex-col items-center pt-4">
            <img
              src={logoSection}
              alt="Logo"
              className="w-[85%] md:w-auto"
            />
            <p className='uppercase font-montserrat text-white-50 text-base'>saúde ocular</p>
          </div>
          <section className="w-full flex flex-col items-center justify-center gap-8 pt-8 px-4 md:px-0">
            <div className="relative mt-9 w-[98%] md:w-auto">
              <div className="absolute left-0 top-0 border-s-4 border-secondary-purple h-full transition-transform duration-300 ease-in-out transform group-hover:scale-y-100 origin-bottom"></div>
              <p className='font-montserrat text-white text-center text-[18px] md:text-[22px] relative z-10 ml-4 md:ml-8 max-w-md md:max-w-lg break-words'>
                <span className="font-bold">VisionShield</span> diminui o risco do desenvolvimento de miopia, reduzindo o esforço ocular e filtrando a luz azul. Invista na sua saúde ocular!
              </p>
            </div>
            <div className="mt-40">
              <button className="bg-transparent border-2 text-white border-main-purple py-3 px-10 rounded-md uppercase font-montserrat transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:border-white hover:text-secondary-purple">
                app
              </button>
            </div>
          </section>



          <section className="mt-52 px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
              <video
                src={glasses}
                autoPlay
                loop
                muted
                className="w-[250px] md:w-[280px] transition-transform duration-300 ease-in-out block border-4 border-main-purple rounded-lg"
              ></video>
              <div className="relative w-full md:w-[55%] max-w-lg text-white font-poppins flex flex-col gap-8 md:gap-16 text-center md:text-left">
                <div className="text-base md:text-lg">
                  <span className="font-semibold text-main-purple">Sensor Ultrassônico - </span> Nosso óculos utiliza um sensor ultrassônico para monitorar a distância entre os olhos e objetos próximos.
                </div>
                <div className="text-base md:text-lg">
                  <span className="font-semibold text-main-purple">Lente de Filtro Azul - </span> Equipado com lentes de filtro azul, o óculos protege os olhos da exposição prolongada à luz azul nociva emitida por telas digitais.
                </div>
                <div className="text-base md:text-lg">
                  <span className="font-semibold text-main-purple">Sensor de Vibração - </span> Equipado com um sensor de vibração inteligente que detecta a proximidade excessiva de objetos em relação à visão.
                </div>
              </div>
            </div>
          </section>


          <section className="mt-52 px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
              <video
                src={game}
                autoPlay
                loop
                muted
                className="w-[250px] md:w-[280px]  md:w-[480px] transition-transform duration-300 ease-in-out block border-4 border-main-purple rounded-lg"
              ></video>
              <div className="relative w-full md:w-[55%] max-w-lg text-white font-poppins flex flex-col gap-8 md:gap-16 text-center md:text-left">
                <div className="text-base md:text-lg">
                  <span className="font-semibold text-main-purple">Criação do Jogo - </span> Desenvolvemos o jogo como uma forma divertida de descontrair durante o do desenvolvimento do projeto. Com ele, conseguimos equilibrar as demandas acadêmicas e o lazer, criando um espaço onde podemos relaxar e nos divertir juntos.
                </div>
                <div className="text-base md:text-lg">
                  <span className="font-semibold text-main-purple">Habilidades Desenvolvidas - </span> Através da criação do jogo, conseguimos aprimorar nossas habilidades em design de games, como a elaboração de mecânicas, narrativa e estética. Cada etapa do desenvolvimento nos desafiou a aplicar conceitos teóricos de forma prática, tornando a experiência enriquecedora.
                </div>
                
              </div>
            </div>
          </section>

        







          <section className='mt-24 px-4 md:px-0 '>
            <div className="flex flex-col items-center pb-20">
              <img
                src={logoSection}
                alt="Logo"
                className="w-[85%] md:w-auto"
              />
              <p className='uppercase font-montserrat text-white-50 text-sm md:text-base'>objetivo</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:mt-0 mt-2 ">
              <div className=" text-white p-6 w-full md:w-[380px] h-[350px] flex flex-col items-center justify-center text-center">
                <img src={sindrome_visao} alt="" className="w-[68px] h-[68px] -mt-8 mb-2" />
                <h2 className='font-montserrat text-main-purple font-semibold text-2xl mb-6'>Síndrome da visão</h2>
                <p className='font-montserrat text-sm md:text-base'>A ciência diz que a síndrome da visão de computadores afeta crianças e adolescentes.</p>
              </div>

              <div className=" text-white p-6  w-full md:w-[380px] h-[350px] flex flex-col items-center justify-center text-center md:border-x-2 md:border-main-purple">
                <img src={timer} alt="" className="w-[68px] h-[68px] -mt-8 mb-2" />
                <h2 className='font-montserrat text-main-purple font-semibold text-2xl  mb-6'>Pausas Oculares</h2>
                <p className='font-montserrat text-sm md:text-base'>Apenas 20% dos estudantes realizam pausas para descanso ocular.</p>
              </div>

              <div className=" text-white p-6 rounded-lg w-full md:w-[380px] h-[350px] flex flex-col items-center justify-center text-center">
                <img src={raio} alt="" className="w-[68px] h-[68px] -mt-8 mb-2" />
                <h2 className='font-montserrat text-main-purple font-semibold text-2xl  mb-6'>Danos</h2>
                <p className=' font-montserrat text-sm md:text-base '>Pesquisas indicam que o uso de aparelhos com LED provoca danos à saúde ocular, sendo, portanto, importante o uso de lentes com proteção de luz azul.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:mt-4 mt-6 gap-8 ">
              <div className=" text-white p-6 rounded-lg w-full md:w-[380px] h-[350px] flex flex-col items-center justify-center text-center">
                <img src={grafico} alt="" className="w-[60px] h-[55px] -mt-8 mb-2" />
                <h2 className='font-montserrat text-main-purple font-semibold text-2xl  mb-6'>Miopia na população</h2>
                <p className='font-montserrat text-sm md:text-base'>Estudos preveem que a miopia tende a afetar mais de 50% da população em menos de 30 anos.</p>
              </div>

              <div className=" text-white p-6  w-full md:w-[380px] h-[350px] flex flex-col items-center justify-center text-center md:border-l-2 md:border-main-purple mb-10">
                <img src={livro} alt="" className="w-[68px] h-[68px] -mt-8 mb-2" />
                <h2 className='font-montserrat text-main-purple font-semibold text-2xl mb-6'>Acomodação excessiva</h2>
                <p className='font-montserrat text-sm md:text-base'>A acomodação excessiva por leitura e carga hereditária são dois fatores para o risco de miopia.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

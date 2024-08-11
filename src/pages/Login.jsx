import Header from "../components/Header";

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center"> 
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="md:text-5xl  text-2xl border-2 px-8 py-2 border-main-purple rounded-md uppercase font-montserrat text-white">Indisponível :(</h1> 
      </div>
    </div>
  );
}

export default Login;

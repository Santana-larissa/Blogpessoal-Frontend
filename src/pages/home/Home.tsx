import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-[#f4f7f5] px-4 py-8 gap-6">
        <h2 className="text-3xl font-bold text-[#070707]">Página Aberta 🌻</h2>

        <p className="text-base text-[#070707] text-center max-w-md">
          Aqui é um espaço livre para compartilhar pensamentos, opiniões e histórias. 
          Sinta-se à vontade para explorar e se expressar com autenticidade.
        </p>

        <div className="flex justify-center">
          <div className="rounded text-black border-white border-solid border-2 py-2 px-4">
            <ModalPostagem />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="src/assets/larissa.jpeg"
            alt="Imagem da Página Home"
            width="500px"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <ListaPostagens />
    </>
  );
}

export default Home;

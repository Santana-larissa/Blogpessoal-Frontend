function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f4f7f5] px-4">
      <div className="max-w-3xl flex flex-col items-center gap-8 p-8">

        <h2 className="text-4xl font-bold text-[#070707]">Página Aberta 🌻</h2>

        <p className="text-lg text-[#070707] text-center max-w-md">
          Aqui é um espaço livre para compartilhar pensamentos, opiniões e histórias. 
          Sinta-se à vontade para explorar e se expressar com autenticidade.
        </p>
        <img
          src="src/assets/larissa.jpeg"
          alt="Imagem da Página Home"
          width="600px"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default Home

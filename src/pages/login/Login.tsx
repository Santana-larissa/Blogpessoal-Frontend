import './Login.css';

function Login() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      
      {/* Coluna do formulário */}
      <form className="flex flex-col w-1/2 gap-6 mx-auto p-10 bg-[#d8b8a3] rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold text-[#4A3C31] mb-6">Entrar</h2>

        <div className="flex flex-col w-full">

          <label htmlFor="usuario">Usuário</label>

          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuário"
            className="p-3 rounded border border-[#427572] focus:outline-none focus:ring-2 focus:ring-[#9ee3e2]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="p-3 rounded border border-[#427572] focus:outline-none focus:ring-2 focus:ring-[#9ee3e2]"
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-[#427572] hover:bg-[#392eb5] text-white py-3 rounded font-semibold transition"
        >
          <span>Entrar</span>
        </button>

        <hr className="border-slate-800 w-full" />

        <p>
          Ainda não tem uma conta?{' '}
          <a href="#" className="text-[#427572] hover:underline">
            Cadastre-se
          </a>
        </p>
      </form>

      {/* Coluna da imagem de fundo */}
      <div
        className="hidden lg:block h-screen w-full bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/6413633/pexels-photo-6413633.jpeg')",
        }}
      ></div>
    </div>
  );
}

export default Login;

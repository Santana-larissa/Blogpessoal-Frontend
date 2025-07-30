import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import type UsuarioLogin from "../../model/UsuarioLogin";
import { RotatingLines } from 'react-loader-spinner';


function Login() {

  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

      useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
  <form onSubmit={login}>
    {/* seus inputs */}
    <button type="submit">Entrar</button>
  </form>
);

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
            value={usuarioLogin.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
            value={usuarioLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-[#427572] hover:bg-[#392eb5] text-white py-3 rounded font-semibold transition"
        >
        {isLoading ? (
        <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="24"
        visible={true}
    />
  ) : (
    <span>Entrar</span>
  )}
</button>

        <hr className="border-slate-800 w-full" />

        <p>
          <p>Ainda não tem uma conta? <Link to='/cadastro' >Cadastre-se</Link></p>
          <a href="#" className="text-[#427572] hover:underline">
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

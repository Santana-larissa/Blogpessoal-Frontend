import { Link } from 'react-router-dom'
import type Postagem from '../../../model/Postagem'

interface CardPostagensProps {
    postagem: Postagem 
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-[#4a3f35] py-2 px-4 items-center gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="h-12 rounded-full"
                        alt={postagem.usuario?.nome} />

                    <h3 className='text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>

                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'full',
                        timeZone: 'America/Sao_Paulo'
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">

                <Link to={`/editarpostagem/${postagem.id}`}
	className='w-full text-black bg-[#7d9d92] hover:bg-indigo-800 
    flex items-center justify-center py-2'>
	<button>Editar</button>
</Link>

                <Link to={`/deletarpostagem/${postagem.id}`} 
	                className='text-white bg-[#918af3] hover:bg-red-700 w-full flex items-center justify-center'>
	<button>Deletar</button>
</Link>
            </div>
        </div>
    )
}

export default CardPostagem
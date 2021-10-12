import { Link } from 'react-router-dom'

import ilustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import '../styles/auth.scss'
import { Button } from '../components/button'

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua adiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    
                    <h2>Criar Uma Nova Sala</h2>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Digite o código da sala" />
                        <Button type="submit">
                            Entrar na sala
                        </Button>

                    </form>
                    <p>
                        Quer entrar em uma sala existente ? <Link to="/">Clique Aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}
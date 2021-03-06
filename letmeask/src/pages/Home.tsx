import { useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import ilustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'

import { AuthContext } from '../App'

import '../styles/auth.scss'

import { Button } from '../components/button'

export function Home() {

    const history = useHistory();

    const { user, signInWithGoogle } = useContext(AuthContext)

    function handleCreateRoom() {
        signInWithGoogle()
        if (user !== undefined) {
            history.push('/rooms/new')
            console.log(user)
        }
    }

    return (
        <div id="page-auth">

            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua adiência em tempo real</p>
            </aside>
            <main>
                {console.log(user)}
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo da google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Digite o código da sala" />
                        <Button type="submit">
                            Entrar na sala
                        </Button>

                    </form>
                </div>
            </main>
        </div>
    )
}
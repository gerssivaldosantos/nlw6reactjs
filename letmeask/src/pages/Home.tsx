import ilustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'
import '../styles/auth.scss'
export function Home(){
    return(
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua adiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="letmeask" />
                    <button>
                        <img src={googleIconImg} alt="Logo da google"/>
                        Crie sua sala com o Google
                    </button>
                    <div>Ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text"
                            placeholder="Digite o código da sala" />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}
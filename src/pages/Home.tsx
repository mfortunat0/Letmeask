import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import IlustratioImg from "../assets/images/illustration.svg";
import LogoImg from "../assets/images/logo.svg";
import GoogleIconImg from "../assets/images/google-icon.svg";
import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/room/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={IlustratioImg}
          alt="ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoImg} alt="letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={GoogleIconImg} alt="logo do google" /> Crie sua sala com o
            Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

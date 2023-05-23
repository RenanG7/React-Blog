import Tema from "./Tema";
interface Postagem{
    titulo: ReactNode;
    id: number;
    tipo: string;
    texto: string;
    tema?: Tema|null;
}
export default Postagem;
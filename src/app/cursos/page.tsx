import { getCursos } from "@/api/cursos";
import Link from "next/link";

export default async function CursosPage() {

  const cursos = await getCursos();


  return (
    <div>
      <h1>Cursos</h1>

      {cursos.map((curso) =>
        <ul>
          <li key={curso.id}><Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link></li>
        </ul>

      )}

    </div>
  )
}
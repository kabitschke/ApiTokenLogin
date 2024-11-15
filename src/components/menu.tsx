import { cookies } from "next/headers";
import Link from "next/link";


type Conta = {
  autorizado: boolean;
  usuario: string;
}

export default async function Menu() {

  let conta: Conta = {
    autorizado: false,
    usuario: '',
  };

  const token = (await cookies()).get('token')?.value;


  const response = await fetch('https://api.origamid.online/conta/perfil', {    
    headers: {
      Authorization: "Bearer " + token
    },
  });

  if (response.ok) {
    conta = (await response.json()) as Conta;

  }


  return (
    <ul className="menu">
      <li><Link href={`/`}>Home</Link></li>
      <li><Link href={`/login`}>{conta.autorizado ? conta.usuario : 'Login'}</Link></li>
    </ul>
  );
}
import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';
import { ITime } from "./compartilhado/interface/ITime";
import { IColaborador } from "./compartilhado/interface/IColaborador";

function App() {

  const [times, setTimes] = useState([
    {
      idTime: uuidv4(),
      nomeTime: 'Programação',
      corTime: '#57C278'
    },
    {
      idTime: uuidv4(),
      nomeTime: 'Front-End',
      corTime: '#82CFFA'
    },
    {
      idTime: uuidv4(),
      nomeTime: 'Data Science',
      corTime: '#A6D157'
    },
    {
      idTime: uuidv4(),
      nomeTime: 'Devops',
      corTime: '#E06B69'
    },
    {
      idTime: uuidv4(),
      nomeTime: 'UX e Design',
      corTime: '#DB6EBF'
    },
    {
      idTime: uuidv4(),
      nomeTime: 'Mobile',
      corTime: '#FFBA05'
    },
    {
      idTime: uuidv4(),
      nomeTime: 'Inovação e Gestão',
      corTime: '#FF8A29'
    },
  ])

  const inicial = [
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nomeTime
    },
    {
      idColaborador: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nomeTime
    },
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>(inicial)

  function deletarColaborador(id: string) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.idColaborador !== id))
  }

  function mudarCorTime(cor: string, id: string) {
    setTimes(times.map(time => {
      if (time.idTime === id) {
        time.corTime = cor
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime: ITime) {
    setTimes([...times, { ...novoTime, idTime: uuidv4() }])
  }

  function resolverFavorito(id: string) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.idColaborador === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div>
      <Banner enderecoImagem="./imagens/banner.png" />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nomeTime)}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time) =>
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorTime}
            key={time.idTime}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nomeTime)}
            aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;

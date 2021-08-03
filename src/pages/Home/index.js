import axios from './axios';
import React, {useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>{
       const repositories = response.data;
       const repositoriesName = [];
       repositories.map((repository)=>{
         repositoriesName.push(repository.name);

       })

       localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
       setErro(false);
       history.push('/repositories');

       }).catch(err =>{
         setErro(true);

       });
      
    }

  return (
    <S.HomeContainer>
    <S.Content>
    <S.Input  className="usuarioInput" placeholder="usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
    <S.Button type="button" onClick={handlePesquisa}>Pesquisa</S.Button>
      {erro ? <S.ErrorMsg>Usuário não encontrado</S.ErrorMsg>
      : ''}
    </S.Content>
    </S.HomeContainer>
  );
}

export default App;

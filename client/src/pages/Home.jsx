import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header';
import UserCard from '../components/UserCard';

import '../css/Home.css';

function Home () {
  const [input, setInput] = React.useState('');
  const [user, setUser] = React.useState('');
  const [data, setData] = React.useState([]);

  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    const username = localStorage.getItem('user_logged');
    if (!username) return setRedirect(true);
    setUser(username);
  }, []);

  const getUserByEmailOrUsername = () => {
    axios
      .get(`https://api.github.com/search/users?q=${input}`)
      .then(({ data }) => setData(data.items));
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="home">
      <Header changeRedirect={setRedirect} />

      <main className="home-main">
        <p>
          Olá, <span className="home-main__username">{`${user}`}</span>!
        </p>

        <section className="home-search">
          <label>
            <input
              onChange={({ target }) => setInput(target.value)}
              value={input}
              type="text"
              placeholder="Digite o nome do usuário ou e-mail"
            />
          </label>
          <button type="button" onClick={getUserByEmailOrUsername}>
            BUSCAR
          </button>
        </section>

        <section>
          {data.map((user) => (
            <UserCard key={user.id} userURL={user.url} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home;

import React from "react";
import Avaliacao from './avaliacao';
import Conteudo from './conteudo';
import Diretor from './diretor';
import Lista from './lista';
import Usuario from './usuario';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/avaliacao">Avaliação</Link>
            </li>
            <li>
              <Link to="/conteudo">Conteudo</Link>
            </li>
            <li>
              <Link to="/diretor">Diretor</Link>
            </li>
            <li>
              <Link to="/lista">Lista</Link>
            </li>
            <li>
              <Link to="/usuario">Usuário</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/avaliacao">
            <Avaliacao />
          </Route>
          <Route path="/Conteudo">
            <Conteudo />
          </Route>
          <Route path="/Diretor">
            <Diretor />
          </Route>
          <Route path="/Lista">
            <Lista />
          </Route>
          <Route path="/Usuario">
            <Usuario />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


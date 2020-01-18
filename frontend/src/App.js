import React, { useState } from 'react';

import './global.css'
import './App.css'
import'./Sidebar.css'
import'./Main.css'

// Componente -> Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
 // Propriedade -> Informações que um componente PAI passa para o componente FILHO.
// Estado -> Informações mantidas pelo componente (Lembrar: Imutabilidade!)


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form >
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/42192251?s=460&v=4" alt="Caio Fernandes"/>
              <div className="user-info">
                <strong>Caio Fernandes</strong>
                <span>Java, Python, JavaScipt, NodeJS, ReactJS</span>
              </div>
            </header>
            <p>Software Engineering Student at UnB - Universidade de Brasília, Brazil</p>
            <a href="https://github.com/caiovfernandes">Acesasr perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/42192251?s=460&v=4" alt="Caio Fernandes"/>
              <div className="user-info">
                <strong>Caio Fernandes</strong>
                <span>Java, Python, JavaScipt, NodeJS, ReactJS</span>
              </div>
            </header>
            <p>Software Engineering Student at UnB - Universidade de Brasília, Brazil</p>
            <a href="https://github.com/caiovfernandes">Acesasr perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/42192251?s=460&v=4" alt="Caio Fernandes"/>
              <div className="user-info">
                <strong>Caio Fernandes</strong>
                <span>Java, Python, JavaScipt, NodeJS, ReactJS</span>
              </div>
            </header>
            <p>Software Engineering Student at UnB - Universidade de Brasília, Brazil</p>
            <a href="https://github.com/caiovfernandes">Acesasr perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/42192251?s=460&v=4" alt="Caio Fernandes"/>
              <div className="user-info">
                <strong>Caio Fernandes</strong>
                <span>Java, Python, JavaScipt, NodeJS, ReactJS</span>
              </div>
            </header>
            <p>Software Engineering Student at UnB - Universidade de Brasília, Brazil</p>
            <a href="https://github.com/caiovfernandes">Acesasr perfil no GitHub</a>
          </li>
        </ul>

      </main>

    </div>
  );
}

export default App;

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Piloto de aeronaves</h1>

        <nav>
          <ul>
            <li><a href="#introducao">Introdução</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#oportunidades">Oportunidades</a></li>
            <li><a href="#ferramentas">Ferramentas</a></li>
          </ul>
        </nav>
      </header>



      <section id="introducao" className="section">
        <div className="content" ><h2>Introdução sobre Jornalismo</h2></div>
        <div><p>O jornalismo é uma prática profissional fundamental para a sociedade, dedicada à coleta, investigação, análise e divulgação de informações relevantes para o público. A missão principal do jornalismo é informar e educar a população, contribuindo para a formação de uma opinião pública bem informada e crítica.
        </p></div>
        
        <div class="image">
          <img src="https://cdn.wizard.com.br/wp-content/uploads/2019/11/13072146/termos-de-jornalismo-em-ingles.jpg"></img>
        </div>
      </section>

      <section id="habilidades" className="section">
        <div>
          <h2>Habilidades Necessárias</h2>
        <ul>
          <li><strong>Pesquisa e Investigação:</strong> <ul><li>Habilidade de Pesquisa</li> <li>Investigação Profunda</li></ul></li>
          <li><strong>Comunicação</strong><ul><li>Escrita Clara e Precisa</li> <li>Entrevista e Interação</li></ul> </li>
          <li><strong>Pensamento Crítico</strong> <ul><li>Análise e Avaliação</li> <li>Solução de Problemas</li></ul></li>
          <li><strong>Ética e Imparcialidade</strong> <ul><li>Adesão aos Princípios Éticos</li> <li>Gestão de Conflitos de Interesse</li></ul></li>
          <li><strong>Habilidades Técnicas</strong><ul><li>Produção Multimídia</li> <li>Conhecimento de Plataformas Digitais</li></ul></li>
          <li><strong>Gestão de Tempo</strong><ul><li>Capacidade de Trabalhar Sob Pressão</li> <li>Organização</li></ul></li>
          <li><strong>Curiosidade e Adaptabilidade</strong> <ul><li>Curiosidade Intelectual</li> <li>Adaptabilidade</li></ul></li>
        </ul>

        </div>
        

        <div class="image">
          <img src="https://sebrae.com.br/Sebrae/Portal%20Sebrae/Artigos/Imagens/dia_do_jornalista.jpg"></img>
        </div>

      </section>

      <section id="oportunidades" className="section">
        <div>

        <h2>Oportunidades de Carreira</h2>
        <ul>
          <li>O jornalismo oferece uma ampla gama de oportunidades de carreira, refletindo a diversidade de formatos e plataformas que o campo abrange. Aqui está <strong>Repórter, Editor, Jornalista de Investigação, Apresentador de Notícias, Repórter de Vídeo e Fotógrafo, Especialista em Mídias Sociais, Jornalista de Dados
            Corretor de Texto e Revisor, Produtor de Conteúdo Digital, Consultor de Comunicação e Relações Públicas</strong>.</li>

        </ul>

        </div>
        
        <div class="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAxU9R9uo0mj20WwO41sq4kTMm4lsCPPV0A&s"></img>
        </div>
      </section>

      <section id="ferramentas" className="section">
        <div>
          <h2>Ferramentas</h2>
          <ul>
            <li>No jornalismo, a utilização de ferramentas e tecnologias é crucial para a produção e disseminação eficaz de notícias. Processadores de texto como Microsoft Word e Google Docs são amplamente usados ​​para redigir e editar artigos, fornecendo recursos de correção e colaboração. Sistemas de Gerenciamento de Conteúdo (CMS), como WordPress e Joomla, permitem a organização e publicação de conteúdo em sites e blogs, facilitando a</li>
            <li>Para a produção de multimídia, ferramentas de edição como Adobe Photoshop e Premiere Pro são essenciais. Elas permitem a criação e aprimoramento de imagens e vídeos, aumentando a qualidade e o impacto das reportagens. A verificação da precisão das informações é reforçada por ferramentas de pesquisa e verificação de fatos, como Google Scholar e Snopes, que ajudam a garantir a veracidade e a integridade do conteúdo publicado.</li>
            <li>Além disso, plataformas de redes sociais e ferramentas de email marketing, como Hootsuite e Mailchimp, são essenciais para a distribuição de notícias e o relacionamento com o público. As tecnologias emergentes, incluindo inteligência artificial e realidade aumentada, estão evoluindo o jornalismo para permitir a análise avançada de dados e a criação de experiências interativas e imersivas. Essas ferramentas não apenas facilitam o trabalho dos jornalistas, mas também ampliam as possibilidades de engajamento e inovação</li>
          </ul>

        </div>
        <div class="image">
          <img src="https://tuiuti.edu.br/wp-content/uploads/2022/12/jornalismo-e-as-mudancas-no-mercado-de-trabalho.jpg"></img>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Piloto de aeronaves. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

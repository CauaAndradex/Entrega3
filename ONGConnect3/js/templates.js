export const pages = {
  home: `
    <section class="hero grid-12">
      <div class="hero-text span-7 md-span-12">
        <h1 class="h1">Conectar. Apoiar. Transformar.</h1>
        <p class="lead">Descubra ONGs e projetos sociais que fazem a diferença.</p>
        <div class="hero-actions">
          <a href="#" class="btn" data-route="projetos">Ver ONGs</a>
          <a href="#" class="btn-ghost" data-route="cadastro">Cadastrar ONG</a>
        </div>
      </div>
      <figure class="hero-media span-5 md-span-12">
        <img src="assets/hero.svg" alt="Voluntariado" class="media-cover">
      </figure>
    </section>
  `,

  projetos: `
    <section class="page-header">
      <h1 class="h1">ONGs em Destaque</h1>
      <p class="lead">Conheça organizações e apoie causas que você acredita.</p>
    </section>

    <section class="grid-12 cards-list">
      <!-- ONG 1 -->
      <article class="card span-4 lg-span-6 sm-span-12">
        <div class="card-media">
          <img src="assets/exemplo1.jpg" alt="Projeto VerdeViva" class="media-cover">
        </div>
        <div class="card-body">
          <div class="tags">
            <span class="tag green">Meio Ambiente</span>
            <span class="tag outline">Plantio</span>
          </div>
          <h3 class="h4">VerdeViva</h3>
          <p>Recuperação de áreas verdes e educação ambiental.</p>
          <div class="card-actions">
            <a href="#doar-verdeviva" class="btn">Doar</a>
            <a href="#toast-like" class="btn-ghost">Curtir</a>
          </div>
        </div>
      </article>

      <!-- ONG 2 -->
      <article class="card span-4 lg-span-6 sm-span-12">
        <div class="card-media">
          <img src="assets/exemplo1.jpg" alt="SaúdeParaTodos" class="media-cover">
        </div>
        <div class="card-body">
          <div class="tags">
            <span class="tag green">Saúde</span>
            <span class="tag outline">Prevenção</span>
          </div>
          <h3 class="h4">SaúdeParaTodos</h3>
          <p>Clínicas móveis e programas em comunidades remotas.</p>
          <div class="card-actions">
            <a href="#doar-saude" class="btn">Doar</a>
            <a href="#toast-like" class="btn-ghost">Curtir</a>
          </div>
        </div>
      </article>

      <!-- ONG 3 -->
      <article class="card span-4 lg-span-6 sm-span-12">
        <div class="card-media">
          <img src="assets/exemplo1.jpg" alt="AprenderHoje" class="media-cover">
        </div>
        <div class="card-body">
          <div class="tags">
            <span class="tag green">Educação</span>
            <span class="tag outline">Inclusão</span>
          </div>
          <h3 class="h4">AprenderHoje</h3>
          <p>Alfabetização, reforço escolar e inclusão digital.</p>
          <div class="card-actions">
            <a href="#doar-aprender" class="btn">Doar</a>
            <a href="#toast-like" class="btn-ghost">Curtir</a>
          </div>
        </div>
      </article>
    </section>

    <!-- Modais de Doação -->
    <div id="doar-verdeviva" class="modal">
      <div class="modal-box">
        <h3>Doar para VerdeViva</h3>
        <form>
          <input type="number" placeholder="Valor da doação (R$)" required>
          <button type="submit" class="btn">Confirmar Doação</button>
          <a href="#" class="btn-ghost">Cancelar</a>
        </form>
      </div>
    </div>

    <div id="doar-saude" class="modal">
      <div class="modal-box">
        <h3>Doar para SaúdeParaTodos</h3>
        <form>
          <input type="number" placeholder="Valor da doação (R$)" required>
          <button type="submit" class="btn">Confirmar Doação</button>
          <a href="#" class="btn-ghost">Cancelar</a>
        </form>
      </div>
    </div>

    <div id="doar-aprender" class="modal">
      <div class="modal-box">
        <h3>Doar para AprenderHoje</h3>
        <form>
          <input type="number" placeholder="Valor da doação (R$)" required>
          <button type="submit" class="btn">Confirmar Doação</button>
          <a href="#" class="btn-ghost">Cancelar</a>
        </form>
      </div>
    </div>

    <!-- Toasts -->
    <div id="toast-like" class="toast success">Você curtiu esta ONG! <a href="#">×</a></div>
  `,

 cadastro: `
<header class="page-header">
  <h1 class="h1">Cadastro</h1>
  <p class="lead">Preencha todas as informações obrigatórias corretamente.</p>
</header>

<form class="form card grid-12" id="cadastroForm" novalidate>

  <!-- ============================
       GRUPO 1 — Dados Pessoais
       ============================ -->
  <fieldset class="span-12">
    <legend class="h3">Dados Pessoais</legend>

    <div class="grid-12">
      <div class="span-6 md-span-12">
        <label class="label">Nome Completo *</label>
        <input type="text" required placeholder="Seu nome completo" minlength="3">
        <span class="error-text">Digite um nome válido.</span>
      </div>

      <div class="span-6 md-span-12">
        <label class="label">E-mail *</label>
        <input type="email" required placeholder="exemplo@dominio.com">
        <span class="error-text">Digite um e-mail válido.</span>
      </div>

      <div class="span-6 md-span-12">
        <label class="label">CPF *</label>
        <input type="text" required maxlength="14" placeholder="000.000.000-00" id="cpfInput">
        <span class="error-text">Digite um CPF válido.</span>
      </div>

      <div class="span-6 md-span-12">
        <label class="label">Telefone *</label>
        <input type="tel" required maxlength="15" placeholder="(00) 00000-0000" id="telInput">
        <span class="error-text">Digite um telefone válido.</span>
      </div>

      <div class="span-6 md-span-12">
        <label class="label">Data de Nascimento *</label>
        <input type="date" required>
        <span class="error-text">Selecione uma data válida.</span>
      </div>
    </div>
  </fieldset>

  <!-- ============================
       GRUPO 2 — Endereço
       ============================ -->
  <fieldset class="span-12">
    <legend class="h3">Endereço</legend>

    <div class="grid-12">
      <div class="span-4 md-span-12">
        <label class="label">CEP *</label>
        <input type="text" required maxlength="9" placeholder="00000-000" id="cepInput">
        <span class="error-text">Digite um CEP válido.</span>
      </div>

      <div class="span-8 md-span-12">
        <label class="label">Endereço *</label>
        <input type="text" required placeholder="Rua, número e complemento">
        <span class="error-text">Digite um endereço válido.</span>
      </div>

      <div class="span-6 md-span-12">
        <label class="label">Cidade *</label>
        <input type="text" required placeholder="Digite sua cidade">
        <span class="error-text">Digite uma cidade válida.</span>
      </div>

      <div class="span-6 md-span-12">
        <label class="label">Estado *</label>
        <select required>
          <option value="">Selecione...</option>
          <option>SP</option>
          <option>RJ</option>
          <option>MG</option>
          <option>RS</option>
          <option>PR</option>
          <option>SC</option>
          <option>BA</option>
          <option>ES</option>
        </select>
        <span class="error-text">Selecione um estado válido.</span>
      </div>
    </div>
  </fieldset>

  <!-- ============================
       DESCRIÇÃO (ONG ou voluntário)
       ============================ -->
  <fieldset class="span-12">
    <legend class="h3">Descrição</legend>
    <textarea rows="5" placeholder="Fale sobre você ou sua ONG"></textarea>
  </fieldset>

  <!-- BOTÕES -->
  <div class="span-12 form-actions">
    <button type="submit" class="btn">Enviar</button>
    <button type="reset" class="btn-ghost">Limpar</button>
  </div>

  <div id="toast-sucesso" class="toast success">
    Cadastro enviado com sucesso! <a href="#">×</a>
  </div>

</form>
`,

};

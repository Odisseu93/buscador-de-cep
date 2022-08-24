const form = document.querySelector('#form');
const searchField = document.querySelector('#searchField');
const viewError = document.querySelector('#viewError');


form.addEventListener('submit', (e) => {
  e.preventDefault()
  findPostalCode(form.search.value).then(function (result) {
    if(result.erro) {
      viewError.classList.add('show-error');
      setTimeout(()=>{
        viewError.classList.remove('show-error');
      },2000)
      form.search.value= ""
      form.search.placeholder = 'por favor, verifique o CEP.'  
      setTimeout(()=>{
        form.search.placeholder = 'Digite o CEP aqui!'  
      },2000)  
      return 
    }
    update(result)
  });
  
});

function update(result) {
  form.result.classList.add('is-visible');
  form.cep.value = result.cep
  form.logradouro.value = result.logradouro
  form.complemento.value = result.complemento
  form.bairro.value = result.bairro
  form.localidade.value = result.localidade
  form.uf.value = result.uf
  form.ibge.value = result.ibge
  form.gia.value = result.gia
  form.ddd.value = result.ddd
  form.siafi.value = result.siafi
};


form.clear.addEventListener('click', () => {
  form.search.value= "";
  form.cep.value = "";
  form.logradouro.value = "";
  form.complemento.value = "";
  form.bairro.value = "";
  form.localidade.value = "";
  form.uf.value = "";
  form.ibge.value = "";
  form.gia.value = "";
  form.ddd.value = "";
  form.siafi.value = "";
  form.result.classList.remove('is-visible');
  form.search.focus();
});

/* adicionando um máscara no input */ 
form.search.addEventListener('keypress', function() {
  if(this.value.length === 5) return this.value = this.value + '-'
})
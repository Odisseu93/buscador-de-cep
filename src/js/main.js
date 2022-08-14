const form = document.querySelector('#form');
const searchField = document.querySelector('#searchField');


form.addEventListener('submit', (e) => {
  e.preventDefault()
  findPostalCode(form.search.value).then(function (result) {
    if(result.erro) return alert("CEP inválido!");
    update(result)
  });

});

function update(result) {
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
  form.search.focus();
});

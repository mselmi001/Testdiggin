  const url = "https://diggin.events:8101/guests?uid=gq8EbajUd63Oj";
  fetch(url)
    .then(response => response.json())
    .then(json => afficher(json));


  function afficher(json) {
    const div = document.querySelector('#liste');
    div.innerHTML = '';
    const h1 = document.createElement('p');
    h1.textContent = "Liste des invités";
    div.appendChild(h1);
    var noms = new Array();
    noms = json.data;
    noms.sort(function(a, b){
      if(a.prenom < b.prenom) return -1;
      if(a.prenom > b.prenom) return 1;
      return 0;
    })
    const ul = document.createElement('ul');
    for (var i=0; i<noms.length; i++){
      const listes = document.createElement('li');
      listes.textContent = noms[i].prenom;
      ul.appendChild(listes);
      div.appendChild(ul);
    }
  }

'use strict'

var gProjs = createProjs();

// var proj = {
//     "id": "sokoban",
//     "name": "Sokoban",
//     "title": "Better push those boxes",
//     "desc": "lorem ipsum lorem ipsum lorem ipsum",
//     "url": "projs/sokoban",
//     "publishedAt": 1448693940000,
//     "labels": ["Matrixes", "keyboard events"],
// }

function createProj(id, name, title, desc, url, labels ){
return{ "id": id,
"name": name,
"title": title,
"desc":desc,
"url": url,
"publishedAt": Date.now(),
"labels": [labels[0],labels[1]],
}
}

function createProjs(){
    gProjs = [
    createProj('id1','Pacman','Classic','pacman game','img/portfolio/pacman.PNG',['matrix1','keyboard1']),
    createProj('id2','Guess Me','Quest','guess me game','img/portfolio/guessme.PNG',['matrix2','keyboard2']),
    createProj('id3','Chess Game','Battle','chess Game','img/portfolio/chess Game.PNG',['matrix3','keyboard3']),
    ]
    console.log(gProjs);
    
    return gProjs;

}

function renderPortfolio(){
    // debugger;
 var strHTML = '';
 var elProj = document.querySelector('.container-portfolio');
 gProjs.forEach(function(currProj){
   strHTML += `<div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${currProj.url}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${currProj.title}</h4>
            <p class="text-muted">${currProj.desc}</p>
          </div>
        </div>`
 });
 console.log(strHTML);
 
 elProj.innerHTML= strHTML
 console.log(gProjs[0].url);
 
}

renderPortfolio();

class questions {
  constructor () {
    this.question='';
    this.listAnswers=[];
    this.goodanswer=0;
    this.indice=0;
    this.retour= function() {
    let x=Number(prompt("Entrez votre solution " + this.question+" "
    + this.listAnswers+""));
    if(x===this.goodanswer) {return "Vous avez retourné la bonne réponse"}
    else {return "Mauvaise réponse"}
    }
  }
}

const questions1= new questions()
questions1.question="Quelle est la hauteur du K2";
questions1.listAnswers=["8848 m", "8611", "6959"];
questions1.goodanswer=2;
questions1.indice=1;

const questions2= new questions()
questions2.question="Quelle est le plus long fleuve du monde ?";
questions2.listAnswers=["le Nil", "l'Amazone", "la Seine"];
questions2.goodanswer=2;
questions2.indice=2;

const questions3= new questions()
questions3.question="Quelle est planète la plus proche du Soleil ?"
questions3.listAnswers=["la Terre", "Venus", "Mercure"]
questions3.goodanswer=3;
questions3.indice=3;


let reserve=[questions1.retour(), questions2.retour(), questions3.retour()];

function alea() {
  let y= Math.floor((Math.random() * 2) + 0);
  return reserve[y];
}
alea()

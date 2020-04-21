// tout les sections

let button = document.querySelector(".click");
let buttonn = document.querySelector(".click1");
let button1 = document.querySelector(".click2");
let buttonn1 = document.querySelector(".click1-2");
let test = document.querySelector(".test");
let question = document.querySelector(".question");
let question2 = document.querySelector(".question2");

// tout les questions

let ques = document.querySelector(".changeee");
let ques1 = "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?" ;
let ques2 = "Ces dernières 48 heures, quelle a été votre température la plus élevée " ;
let ques3 = "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?" ;
let ques4 = "Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?" ;
let ques5 = "Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?" ;
let ques6 = "Ces dernières 24 heures, avez-vous de la diarrhée ? <br> Avec au moins 3 selles molles." ;
let ques7 = "Ces derniers jours, avez-vous une fatigue inhabituelle ?" ;
let ques8 = "" ;
let ques9 = "Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?" ;
let ques10= "Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?" ;
let ques11= "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique." ;
let ques12= "Quel est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection." ;
let ques13= "Quel est votre poids ?Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection." ;
let ques14= "Avez-vous de l’hypertension artérielle mal équilibrée ?Ou avez-vous une maladie cardiaque ou vasculaire ?Ou prenez vous un traitement à visée cardiologique ?" ;
let ques15= "Êtes-vous diabétique ?" ;
let ques16= "Avez-vous ou avez-vous eu un cancer ces trois dernières années ?" ;
let ques17= "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?" ;
let ques18= "Avez-vous une insuffisance rénale chronique dialysée ?" ;
let ques19= "Avez-vous une maladie chronique du foie ?" ;
let ques20= "Avez-vous une maladie chronique du foie ?" ;
let ques21= "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?" ;
let ques22= "Prenez-vous un traitement immunosuppresseur ? <br> C’est un traitement qui diminue vos défenses contre les infections.Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)." ;
let ques23= "Quel est votre code postal ?Cette information nous permet de réaliser un suivi épidémiologique <br> -	Je suis en dehors de Maroc ou je ne souhaite pas répondre." ;


// changement


button.addEventListener("click", function(){
    test.style.display = "none";
    question.style.display =" block";
});
buttonn.addEventListener("click", function(){
    test.style.display = "none";
    question.style.display =" block";
});
button1.addEventListener("click", function(){
    ques1.innerHTML = ques1 ;
    button1.addEventListener("click", function(){
        ques1.innerHTML = ques2;
    });
});

buttonn1.addEventListener("click", function(){
    question2.style.display = "none";
    question.style.display =" block";
});

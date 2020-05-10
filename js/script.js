
const questionsList = [
    {
        titels: `Quel est votre âge ? 
        Ceci, afin de calculer un facteur de risque spécifique.`,
		choices: `<div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check" aria-describedby="text-suffix" 
            title="Ces dernières 48 heures, quelle a été votre température la plus élevée ?" 
            value="" min="1" max="" step="1" placeholder="18" required="">
            <label for="numerique" data-fr> ans</label>
            <label for="check1" data-ar> سنة</label>
        </div>
        <br>
    </div>`,
		
        number: 1,
		type: 1
	},
	{
		titels: 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 2,
		type: 1
	},
	{
		titels: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
		choices: `<div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check"   
            value="" min="34" max="42" step="0.1" placeholder="37,0" required="">
            <label for="numerique" data-fr> degrés</label>
        </div>
        <br>
        </div>`,
		number: 3,
		type: 2
	},
	
	{
		titels: 'Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label  chak" for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
        number: 4,
		type: 1
	},
	{
		titels:
			'Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?',
            choices: `<div class="radio_G">
            <div class="option">
                <input type="radio" value="oui" id="oui" name="check" />
                <label  chak" for="oui" data-fr> OUI</label>
            
            </div>
            <br>
            <div class="option">
                <input type="radio" value="non"  id="non" name="check" />
                <label   for="non" data-fr> NON</label>
    
            </div>
             </div>`,
        number: 5,
		type: 1
	},
	{
		titels: 'Avez-vous un mal de gorge apparu ces derniers jours ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 6,
		type: 1
	},
	{
		titels: 'Avez-vous de la divalueshée ces dernières 24 heures (au moins 3 selles molles) ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 7,
		type: 1
	},
	{
		titels: 'Avez-vous une fatigue inhabituelle ces derniers jours ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 8,
		type: 1
	},
	{
		titels: "Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 9,
		type: 1
	},
	{
		titels:
			'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',
            choices: `<div class="radio_G">
            <div class="option">
                <input type="radio" value="oui" id="oui" name="check" />
                <label   for="oui" data-fr> OUI</label>
            
            </div>
            <br>
            <div class="option">
                <input type="radio" value="non"  id="non" name="check" />
                <label   for="non" data-fr> NON</label>
    
            </div>
             </div>`,
		number: 10,
		type: 1
	},
	{
		titels: 'Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label  chak" for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 11,
		type: 1
	},
	{
		titels: `Comment vous sentez-vous ?`,
        choices:  `<div class="radio_3">
        <div class="radio_D">
            <div class="option3">
                <input type="radio" id="Fatigué" value="Fatigué" name="check" />
                <label for="Fatigué" data-fr> Fatigué</label>
                <label for="Fatigué" data-ar> نعم</label>
            </div>
            <br>
            <div class="option3">
                <input type="radio" id="Trop fatigué" value="Trop fatigué" name="check" />
                <label for="Trop fatigué" data-fr> Trop fatigué</label>
                <label for="Trop fatigué" data-ar> لا</label>

            </div>
        </div>
        <div class="radio_D">
            <div class="option3">
                <input type="radio" id="Bien" value="Bien" name="check" />
                <label for="Bien" data-fr> Bien</label>
                <label for="Bien" data-ar> نعم</label>
            </div>
            <br>
            <div class="option3">
                <input type="radio" id="Moyen" value="Moyen" name="check" />
                <label for="Moyen" data-fr> Moyen</label>
                <label for="Moyen" data-ar> لا</label>

            </div>
        </div>
    </div>`,
        
		number: 12,
		type: 1
    },
    {
		titels: `Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: ` <div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check" aria-describedby="text-suffix" 
            title="Ces dernières 48 heures, quelle a été votre température la plus élevée ?" 
            value="" min="" max="" step="1" placeholder="0 cm" required="">
            <label for="numerique" data-fr> kg</label>
            <label for="check1" data-ar> كج</label>
        </div>
        <br>
    </div>`,
		number: 13,
		type: 2
	},
	{
		titels: `Quel est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices:  `<div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check" aria-describedby="text-suffix" 
            title="Ces dernières 48 heures, quelle a été votre température la plus élevée ?" 
            value="" min="" max="" step="1" placeholder="0 cm" required="">
            <label for="numerique" data-fr> cm</label>
            <label for="check1" data-ar> سم</label>
        </div>
        <br>
    </div>`,
		number: 14,
		type: 2
	},
	
	{
		titels: `Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
		choices: `   <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" value="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" value="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="Ne sait pas" value="Ne sait pas" name="check" />
            <label for="Ne sait pas" data-fr>Ne sait pas</label>
            <label for="Ne sait pas" data-ar> لا</label>

        </div>
    </div>`,
		number: 15,
		type: 1
	},
	{
		titels: `Êtes-vous diabétique ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 16,
		type: 1
	},
	{
		titels: `Avez-vous ou avez-vous eu un cancer ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 17,
		type: 1
	},
	{
		titels: `Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ? Ou êtes-vous suivi par un pneumologue ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 18,
		type: 1
	},
	{
		titels: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 19,
		type: 1
	},
	{
		titels: `Avez-vous une maladie chronique du foie ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 20,
		type: 1
	},
	{
		titels: `Êtes-vous enceinte ?`,
		choices: ` <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" value="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" value="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="Homme" value="Homme" name="check" />
            <label for="Homme" data-fr>Homme</label>
            <label for="Homme" data-ar> </label>

        </div>
    </div>`,
		number: 21,
		type: 1
	},
	{
		titels: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: ` <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" value="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" value="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="Ne sait pas" value="Ne sait pas" name="check" />
            <label for="Ne sait pas" data-fr> Ne sait pas</label>
            <label for="Ne sait pas" data-ar> ل</label>

        </div>
    </div>`,
		number: 22,
		type: 1
	},
	{
		titels: `Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
		choices: ` <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" value="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" value="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="Ne sait pas" value="Ne sait pas" name="check" />
            <label for="Ne sait pas" data-fr> Ne sait pas</label>
            <label for="Ne sait pas" data-ar> </label>

        </div>
    </div>`,
		number: 23,
		type: 1
	}
];


let createElement = document.querySelector('.createElement');
// const text = questionsList.find(creatEl => uestionsList.text === text);



//  repense
let sectionFin = document.querySelector(".repense");
let repFin = document.querySelector(".para");
let repFin1 = document.querySelector(".para1");


// tout les sections

let button = document.querySelector("#oneClick");
let button1 = document.querySelector(".click2");
let button3 = document.querySelector(".click3");
let button4 = document.querySelector(".click4");
let question = document.querySelector(".question");
let test = document.querySelector(".test");
let info = document.querySelector(".question__info");


let counter = 0;
let values = []; 

// tout les questions
let answer = document.getElementsByName('check');
let ques = document.querySelector(".change");
let form= document.querySelector(".form");

// questions
// button.addEventListener("click", quesClick );
button.onclick  = function quesClick(){

    test.remove (test);
    counter += 1;
    question.style.display = "block";
    
    changeeQuestions(counter);
    updateProgress(counter);
    // console.log(counter);
    // console.log(form);
    

};

function changeeQuestions (counteer){

    let currentQuestion = questionsList.find((que) => {
        return que.number == counteer;
        
    });
    ques.textContent = currentQuestion.titels;
    form.innerHTML = currentQuestion.choices;
};



button3.addEventListener('click' , () => {
    counter -=1;

    if(counter < 2) {
        button3.style.display= "none";
    }
    if (counter < 22) {
        button1.style.display= "block";
        button3.style.display= "block";
        // button4.style.display= "none";
    }
    if (counter == 3 && values[1] == "non"  ) {
            
        values.pop();
        counter -=1;
    }
    values.pop();

    changeeQuestions(counter);
    updateProgress(counter);


});
button1.addEventListener('click' , () => {

    const detail = document.querySelector('#numerique');
    let inputs = document.querySelector('input');

    if (inputs.id === 'numerique'){
        values.push(detail.value);
        if(detail.value === ""){
            alert("alue is NaN");
            return;
        }
    }else if(questionsList[counter -1].type === 1 ) {
        var valeur = document.querySelector('input[name=check]:checked');
       
        if(valeur === null){
            alert("alue is null");
            return;
        }else {
            values.push(valeur.value);
        }
    }
    //  ----------------- algo -------------------
    if(values[0] <= 15){
        question.style.display= "none";
        sectionFin.style.display= "flex";
        repFin.innerHTML = "Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.";
        
    };
    
        if (counter == 2 && values[1] == "non"  ) {
            
            values.push("37");
            counter +=1;
        }
        if (counter == 9 && values[8] == "non"  ) {
            values.push("non");
            counter +=1;
        }
        // else{
            
            
        //     counter +=1;
            
        // };
    

//  ------------------------------------------

    counter += 1;
    if(counter > 1){
        button3.style.display= "block";
        info.style.display= "none";
    };
    // if(counter > 21) {
    //     button1.style.display= "none";
    //     button4.style.display= "block";
    // };
    if(counter === 24){
        button1
            .classList
            .add('result')
        const resultBtn = document.querySelector('.result')
        resultBtn.addEventListener('click', Results() )

    } 

    changeeQuestions(counter);
    updateProgress(counter);
    console.log(values);
   
    // console.log(counter);
    


});


function updateProgress(num) {
    const initial_width = 100 / 22;
    const progressInd = document.getElementById("currentIndice");
    const indice = document.getElementById("indice");
  
    progressInd.style.width = (num -1) * initial_width + "%";
    indice.innerText = num ;
  }

  function lastStep(){
    question.style.display = "none";
    sectionFin.style.display= "flex";
    if((values[1] === "non") && (values[3] === "oui") && (values[4] === "oui") && (values[5] === "oui") && (values[6] === "oui")){
        repFin.innerHTML = "appel 141 hhhhhhhhhh";

    }
  }
  function Results() {
    question.style.display = "none";
    sectionFin.style.display= "flex";

  if (((values[1] === "oui" || values[3] === "oui") && (values[5] === "oui" || values[3] === "oui") && (values[4] === "oui" || values[1] === "oui") && values[6] === "oui") && (values[14] === "non" && values[15] === "non" && values[16] === "non" && values[17] === "non" && values[18] === "non" && values[19] === "non" && ( values[20] === "non" || values[20] === "Homme" ) && values[21] === "non" && values[22] === "non" &&  values[0] < 50 )) {

    repFin.innerText = 'Nous vous conseillons de rester à votre domicile et de contacter votre médecin' +
            ' en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouv' +
            'eau l’application pour réévaluer vos symptômes';
    
}

//Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
//Tout patient sans facteur pronostique : Sans facteur de gravité & 50-69 ans, ou avec au moins un facteur de gravité mineur

if  (((values[1] === "oui" || values[3] === "oui") && (values[5] === "oui" || values[3] === "oui") && (values[4] === "oui" || values[1] === "oui") && values[6] === "oui") && ((values[14] === "non" && values[15] === "non" && values[16] === "non" && values[17] === "non" && values[18] === "non" && values[19] === "non" && ( values[20] === "non" || values[20] === "Homme" ) && values[21] === "non" && values[22] === "non" && values[0] > 50) || ((values[2] >= 39) || (values[7] === "oui") || (values[10] === "Fatigué") || (values[10] === "Trop fatigué")))) {

    repFin.innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
    "cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
    "our s’alimenter ou boire pendant plus de 24h apparaissent.";
    
}


//Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
//Tout patient avec un facteur pronostique ou plus: Aucun facteur de gravité :

if (((values[1] === "oui" || values[3] === "oui") && (values[5] === "oui" || values[3] === "oui") && (values[4] === "oui" || values[1] === "oui") && values[6] === "oui") && ((values[14] === "oui" || values[15] === "oui" || values[16] === "oui" || values[17] === "oui" || values[18] === "oui" || values[19] === "oui" ||values[20] === "oui"  || values[21] === "oui" || values[22] === "oui") && (values[7] === "non" && values[8] === "non" && values[17] === "non" && values[10] === "Moyen" && values[10] === "Bien"))){

    repFin.innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
    "cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
    "our s’alimenter ou boire pendant plus de 24h apparaissent.";
    
}


//Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
//Tout patient avec un facteur pronostique ou plus: Un seul facteur de gravité mineur :  

if (((values[1] === "oui" || values[3] === "oui") && (values[5] === "oui" || values[3] === "oui") && (values[4] === "oui" || values[1] === "oui") && values[6] === "oui") && (values[14] === "oui" || values[15] === "oui" || values[16] === "oui" || values[17] === "oui" || values[18] === "oui" || values[19] === "oui" ||values[20] === "oui"  || values[21] === "oui" || values[22] === "oui") && (values[2] >= 39 || values[7] === "oui" || values[10] === "Trop fatigué" || values[10] === "Fatigué" )){

repFin.innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
"our s’alimenter ou boire pendant plus de 24h apparaissent.";

}


//Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
//Tout patient avec un facteur pronostique ou plus: deux facteurs de gravité mineurs :

if (((values[1] === "oui" || values[3] === "oui") && (values[5] === "oui" || values[3] === "oui") && (values[4] === "oui" || values[1] === "oui") && values[6] === "oui") && (values[14] === "oui" || values[15] === "oui" || values[16] === "oui" || values[17] === "oui" || values[18] === "oui" || values[19] === "oui" ||values[20] === "oui"  || values[21] === "oui" || values[22] === "oui") && ((values[2] >= 39 && values[7] === "oui") || (values[2] >= 39 && values[10] === "Fatigué") || (values[2] >= 39 && values[10] === "Trop fatigué") || (values[7] === "oui" && values[10] === "Fatigué") || (values[7] === "oui" && values[10] === "Trop fatigué"))){

    repFin.innerText = "Appelez le 141";
    

}


//Tout patient avec fièvre et toux :
//Tout patient sans facteur pronostique :
//Sans facteur de gravité ou au moins 1 facteur de gravité mineur sans facteur de gravité majeur:

if (((values[1] === "oui" && values[3] === "oui") && (values[14] === "non" && values[15] === "non" && values[16] === "non" && values[17] === "non" && values[18] === "non" && values[19] === "non" && ( values[20] === "non" || values[20] === "Homme" ) && values[21] === "non" && values[22] === "non")) && (values[7] === "non" && values[8] === "non" && values[17] === "non" && values[10] === "Moyen" && values[10] === "Bien") || ((values[2] >= 39 || values[7] === "oui" || values[10] === "Trop fatigué" || values[10] === "Fatigué") && values[2] <= 35,4 && values[17] === "non" && values[8] === "non")) {

repFin.innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
"our s’alimenter ou boire pendant plus de 24h apparaissent."

}

//Tout patient avec fièvre et toux :
//Tout patient avec un facteur pronostique ou plus :
//Aucun facteur de gravité:

if ((values[1] === "oui" && values[3] === "oui") && (values[14] === "oui" || values[15] === "oui" || values[16] === "oui" || values[17] === "oui" || values[18] === "oui" || values[19] === "oui" ||values[20] === "oui"  || values[21] === "oui" || values[22] === "oui") && values[7] === "non" && values[8] === "non" && values[17] === "non" && values[10] === "Moyen" && values[10] === "Bien") {

repFin.innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
"our s’alimenter ou boire pendant plus de 24h apparaissent."


}

//Tout patient avec fièvre et toux :
//Tout patient avec un facteur pronostique ou plus :
//Un seul facteur de gravité mineur:

if ((values[1] === "oui" && values[3] === "oui") && (values[14] === "oui" || values[15] === "oui" || values[16] === "oui" || values[17] === "oui" || values[18] === "oui" || values[19] === "oui" ||values[20] === "oui"  || values[21] === "oui" || values[22] === "oui") && (values[2] >= 39 || values[7] === "oui" || values[10] === "Trop fatigué" || values[10] === "Fatigué")) {

repFin.innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
"our s’alimenter ou boire pendant plus de 24h apparaissent."

}

//Tout patient avec fièvre et toux :
//Tout patient avec un facteur pronostique ou plus :
//Au moins deux facteurs de gravité mineurs:

if (((values[1] === "oui" && values[3] === "oui") && (values[14] === "oui" || values[15] === "oui" || values[16] === "oui" || values[17] === "oui" || values[18] === "oui" || values[19] === "oui" ||values[20] === "oui"  || values[21] === "oui" || values[22] === "oui")) && ((values[2] >= 39 && values[7] === "oui") || (values[2] >= 39 && values[10] === "Fatigué") || (values[2] >= 39 && values[10] === "Trop fatigué") || (values[7] === "oui" && values[10] === "Fatigué") || (values[7] === "oui" && values[10] === "Trop fatigué"))) {

repFin.innerText = "Appelez le 141"

}

//Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :
//Pas de facteur de gravité:

if ((values[1] === "oui" ||values[3] === "oui"  || values[5] === "oui" || values[4] === "oui") &&(values[7] === "non" && values[8] === "non" && values[17] === "non" && values[10] === "Moyen" && values[10] === "Bien")){

repFin.innerText = 'Votre situation ne relève probablement pas du Covid-19.' +
'Consultez votre médecin au moindre doute.'


}

//Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :
//Au moins un facteur de gravité ou un facteur pronostique:

if ((values[1] === "oui" ||values[3] === "oui"  || values[5] === "oui" || values[4] === "oui") && ((values[14] === "oui" || values[15] === "oui" || values[16] === "oui" || values[17] === "oui" || values[18] === "oui" || values[19] === "oui" ||values[20] === "oui"  || values[21] === "oui" || values[22] === "oui") || (values[7] === "oui" && values[8] === "oui" && values[17] === "oui" && values[10] === "Trop fatigué" && values[10] === "Fatigué" ) )) {

repFin.innerText = 'Votre situation ne relève probablement pas du Covid-19.' +
'Un avis médical est recommandé. Au moindre doute, appelez le 141.'

}


// Tout patient avec aucun symptôme :

if ((values[1] === "non") && (values[3] === "non") && (values[4] === "non") && (values[5] === "non") && (values[6] === "non")){

repFin.innerText = 'Votre situation ne relève probablement pas du Covid-19.' +
'N’hésitez pas à contacter votre médecin en cas de doute.' + 'Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.' + 'Pour toute information concernant le Covid-19 allez vers la page d’accueil.'

}
if(((values[1]=== "oui") && (values[2]<= 35.4))  || (values[9] === "oui") || (values[10] === "oui")){
    repFin.innerText = 'Appelez le 141'
}


}








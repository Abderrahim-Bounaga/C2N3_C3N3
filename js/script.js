
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
		titels: 'Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?',
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
			'Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?',
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
		titels: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
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
		titels: 'Ces derniers jours, avez-vous une fatigue inhabituelle ?',
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
		titels: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
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
		titels: "Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?",
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
			'Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
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
		titels: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
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
		type: 2
	},
	{
		titels: `Quel est votre taille ? 
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
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
		number: 12,
		type: 2
	},
	{
		titels: `Quel est votre poids ?
    Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices:  `<div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check" aria-describedby="text-suffix" 
            title="Ces dernières 48 heures, quelle a été votre température la plus élevée ?" 
            value="" min="" max="" step="1" placeholder="0" required="">
            <label for="numerique" data-fr> Kg</label>
            <label for="check1" data-ar> كيلو</label>
        </div>
        <br>
    </div>`,
		number: 13,
		type: 2
	},
	{
		titels: `Avez-vous de l’hypertension artérielle mal équilibrée ?
        Ou avez-vous une maladie cardiaque ou vasculaire ?
        Ou prenez vous un traitement à visée cardiologique ?`,
		choices: ` <div class="radio_4">
            <div class="option4">
                <input type="radio" id="oui" name="check" />
                <label for="oui" data-fr> OUI</label>
                <label for="check10" data-ar> نعم</label>
            </div>
            
            <div class="option4">
                <input type="radio" id="non" name="check" />
                <label for="non" data-fr> NON</label>
                <label for="check20" data-ar> لا</label>

            </div>
            <div class="option4">
                <input type="radio" id="oui" name="check" />
                <label for="oui" data-fr> NON</label>
                <label for="check21" data-ar> لا</label>

            </div>
        </div>`,
		number: 14,
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
		number: 15,
		type: 1
	},
	{
		titels: `Avez-vous ou avez-vous eu un cancer ces trois dernières années ?`,
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
		titels: `Avez-vous une maladie respiratoire ?
        Ou êtes-vous suivi par un pneumologue ?`,
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
		number: 18,
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
		number: 19,
		type: 1
	},
	{
		titels: `Êtes-vous enceinte ?`,
		choices: ` <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> NON</label>
            <label for="check21" data-ar> لا</label>

        </div>
    </div>`,
		number: 20,
		type: 1
	},
	{
		titels: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: ` <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> NON</label>
            <label for="check21" data-ar> لا</label>

        </div>
    </div>`,
		number: 21,
		type: 1
	},
	{
		titels: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (list non exhaustive).`,
		choices: ` <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> NON</label>
            <label for="check21" data-ar> لا</label>

        </div>
    </div>`,
		number: 22,
		type: 1
	}
];



let createElement = document.querySelector('.createElement');
// const text = questionsList.find(creatEl => uestionsList.text === text);



//  repense
let sectionFin = document.querySelector(".repense");
let repFin = document.querySelector(".para");


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
        button4.style.display= "none";
    }
    values.pop();

    changeeQuestions(counter);
    updateProgress(counter);


});
button1.addEventListener('click' , () => {
    const detail = document.querySelector('#numerique');
    let inputs = document.querySelector('input');

    if (inputs.id === 'numerique'){
        // values.push(detail.value);
        if(detail.value === ""){
            alert("alue is NaN");
            return;
        }else{
            values.push(detail.value);
        }
    }else if(questionsList[counter - 1].type === 1 ) {
        var valeur = document.querySelector('input[name=check]:checked');
        if(valeur === null){
            alert("alue is null");
            return;
        }else {
            values.push(valeur.value);
        }
    }

    counter += 1;
    if(counter > 1){
        button3.style.display= "block";
        info.style.display= "none";
    }
    if(counter > 21) {
        button1.style.display= "none";
        button4.style.display= "block";
    }


    changeeQuestions(counter);
    updateProgress(counter);
    console.log(values);
    console.log(counter);
    //  ----------------- algo -------------------
    if(values[0] <= 15){
        question.style.display= "none";
        sectionFin.style.display= "flex";
        repFin.innerHTML = "Vous avez moins de 18 ans "
    }
    // if(values[1] === "non"){
    //     questionsList[2].pop(2);        
    // }
//  ------------------------------------------
});


function updateProgress(num) {
    const initial_width = 100 / 23;
    const progressInd = document.getElementById("currentIndice");
    const indice = document.getElementById("indice");
  
    progressInd.style.width = (num + 1) * initial_width + "%";
    indice.innerText = num + 1;
  }
 


// function Disable(cb,but){
//     var cbs=document.getElementsByName(cb.name);
//     but=cbs[0].form[but]
//     but.setAttribute('disabled','disabled');
//     for (var zxc0=0;zxc0<cbs.length;zxc0++){
//         if (cbs[zxc0].checked){
//             but.removeAttribute('disabled');
//             break;
//         }
//    }
// }








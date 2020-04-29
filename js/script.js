
const questionsList = [
	{
		text: 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label id="oui" for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label  id="non" for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 1,
		value: 10
	},
	{
		text: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
		choices: `<div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check" aria-describedby="text-suffix" 
            title="Ces dernières 48 heures, quelle a été votre température la plus élevée ?" 
            value="" min="34" max="42" step="0.1" placeholder="37,0" required="">
            <label for="numerique" data-fr> degrés</label>
            <label for="check1" data-ar> درجة</label>
        </div>
        <br>
        </div>`,
		number: 2,
		value: 10
	},
	{
		text: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
        number: 3,
		value: 10
	},
	{
		text: 'Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
        number: 4,
		value: 10
	},
	{
		text:
			'Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
        number: 5,
		value: 10
	},
	{
		text: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 6,
		value: 10
	},
	{
		text: 'Ces derniers jours, avez-vous une fatigue inhabituelle ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 7,
		value: 10
	},
	{
		text: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 8,
		value: 10
	},
	{
		text: "Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?",
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 9,
		value: 10
	},
	{
		text:
			'Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
            choices: `<div class="radio_G">
            <div class="option">
                <input type="radio" id="oui" name="check" />
                <label for="oui" data-fr> OUI</label>
                <label for="check1" data-ar> نعم</label>
            </div>
            <br>
            <div class="option">
                <input type="radio" id="non" name="check" />
                <label for="non" data-fr> NON</label>
                <label for="check2" data-ar> لا</label>
    
            </div>
             </div>`,
		number: 10,
		value: 10
	},
	{
		text: `Quel est votre âge ? 
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
		number: 11,
		value: 10
	},
	{
		text: `Quel est votre taille ? 
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
		value: 10
	},
	{
		text: `Quel est votre poids ?
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
		value: 10
	},
	{
		text: `Avez-vous de l’hypertension artérielle mal équilibrée ?
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
		value: 10
	},
	{
		text: `Êtes-vous diabétique ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 15,
		value: 10
	},
	{
		text: `Avez-vous ou avez-vous eu un cancer ces trois dernières années ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 16,
		value: 10
	},
	{
		text: `Avez-vous une maladie respiratoire ?
        Ou êtes-vous suivi par un pneumologue ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 17,
		value: 10
	},
	{
		text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 18,
		value: 10
	},
	{
		text: `Avez-vous une maladie chronique du foie ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check1" data-ar> نعم</label>
        </div>
        <br>
        <div class="option">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check2" data-ar> لا</label>

        </div>
         </div>`,
		number: 19,
		value: 10
	},
	{
		text: `Êtes-vous enceinte ?`,
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
		value: 10
	},
	{
		text: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
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
		value: 10
	},
	{
		text: `Prenez-vous un traitement immunosuppresseur ?
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
		value: 10
	}
];



let createElement = document.querySelector('.createElement');
// const text = questionsList.find(creatEl => uestionsList.text === text);



// function changeElement (){
//     for( var i = 0 ; i < questionsList.length ; i++){
//         createElement.innerHTML = questionsList[i] ;
//         if(button3 === questionsList[i] > 1){
           
//         }
//     }
//     console.log(changeElement );
// };


//  option


// tout les sections

let button = document.querySelector("#oneClick");
let button1 = document.querySelector(".click2");
let button3 = document.querySelector(".click3");
let question = document.querySelector(".question");
let test = document.querySelector(".test");
// changement
// button.addEventListener("click", function(){
//     test.style.display = "none";
//     question.style.display =" block";
// });

let counter = 0;
let values = []; 

// tout les questions
let answer = document.querySelector('check');
let ques = document.querySelector(".change");
let form= document.querySelector(".form");

// questions
// button.addEventListener("click", quesClick );

button.onclick  = function quesClick(){
    test.remove (test);
    question.style.display =" block";
    counter += 1;
    changeQuestions(counter);

};
function changeQuestions (counteer){

    let currentQuestion = questionsList.find((que) => {
        return que.number == counteer;

    });

    ques.textContent = currentQuestion.text;
    form.innerHTML = currentQuestion.choices;

};

button3.addEventListener('click' , () => {
    counter -=1;

    if(counter <= 1) {
        button3.style.display= "none";
    }

    values.pop();


    changeQuestions(counter);

});
button1.addEventListener('click' , () => {
    const detail = document.querySelector('#numerique');

    if (form.children.id === 'numerique'){
        values.push(detail.value);
        console.log(detail.value);
    } else {
        for (i=0 ; i < answer; i++){
            if(answer[i].chcked){
            values.push(answer[i].value);
            }
        }
    }
    console.log(values);

    counter += 1;
    if(counter > 1){
        button3.style.display= "block";
    }

    
    changeQuestions(counter);

});









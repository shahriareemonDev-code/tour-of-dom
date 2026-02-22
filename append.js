//appendChild korte hole 1st a jekhane add element korbo sei id or class ta dhorte hobe
const mainContainer = document.getElementById('main-container')

// 2nd kaj holo childNode creat korte hobe
const placeSection = document.createElement('section')

//create h1 and ul section add korar por h1 creat kortesi
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to go Inshaa Allah';
placeSection.appendChild(h1);

const ul = document.createElement('ul');
placeSection.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.innerText = 'Bandarban'
li2.innerText = 'Coxs bazar'
li3.innerText = 'saint martin'
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


//3rd kaj holo append/add  kore deya
mainContainer.appendChild(placeSection)


//easier way to creat html or appendChild

const bookStation = document.createElement('section')
bookStation.innerHTML = `
<h1> Books I need to read</h1>
<p> there is many kind of books here. you can choose to read this every item of books.</p>
<ul> 
<li>golper boi</li>
<li> vuter golpo</li>
<li>mojar golpo</li>
</ul>
`

//main container er vitor append child kore deya hoise...
//main container ta agei creat kora hoisilo oporer dike
mainContainer.appendChild(bookStation)
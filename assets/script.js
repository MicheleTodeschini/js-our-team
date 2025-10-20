console.log('funzia');


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const imgEl = document.querySelectorAll(".img")
const infoEL = document.querySelectorAll(".info")



// Creo ciclo for che mi crea anche la card che verrà inserita nella pagina HTML

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];


  const memberCard =
    <section id="card" class="col-lg-4 col-sm-4 col-md-4 card d-flex flex-row">
      <section class="w-25 img">
        <img src="${member.photo}" alt="Nome membro del team"></img>
      </section>
      <section class="w-75 d-flex flex-column">
        <h4>${member.name}</h4>
        <p>${member.role}</p>
        <p>${member.email}</p>
      </section>
    </section>
  persona.innerHTML += memberCard

}


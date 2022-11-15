function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const ham = document.getElementById("hamburgerBtn");

ham.onclick = toggleMenu;


const ham = document.getElementById("hamburgerBtn");

ham.onclick = toggleMenu;

// footer date
const date = new Date(document.lastModified);
document.getElementById("updateDate").innerHTML = document.lastModified;


// header date
const today = new Date();
const longDay = new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(today);
const headerDate = document.querySelector(".headerDate");
headerDate.innerHTML = `${longDay}`;

/*join button or banner to display certain days of week*/
function toggleBanner(){
    /*document.getElementById("banner").classList.toggle("show");*/
    document.getElementById("flash").classList.toggle("show");
}   
const dow = today.getDay();
if (dow == 1 || dow == 2) {
  
    toggleBanner();

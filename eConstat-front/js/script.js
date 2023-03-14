//
const voiture1 = {marque:"Citroen", modele:"DS4", immat:"AB-123-YZ", couleur:"Rouge"};
const voiture2 = {marque:"Peugeot", modele:"208", immat:"CD-456-WY", couleur:"Noire"};
const voiture3 = {marque:"Ford", modele:"Mustang", immat:"EF-789-UV", couleur:"Jaune"};
const voiture4 = {marque:"Renault", modele:"Scenic", immat:"GH-987-ST", couleur:"Marron"};
const voiture5 = {marque:"Volkswagen", modele:"Golf", immat:"IJ-654-QR", couleur:"Grise"};
const voiture6 = {marque:"Tesla", modele:"Model S", immat:"KL-321-OP", couleur:"Blanche"};
//------------------------------------------------------------------------------------------
const permis1 = {numeroPermis:"123456789", categorie:"Permis A", dateValidite:"12-02-2031"};
const permis2 = {numeroPermis:"987654321", categorie:"Permis B", dateValidite:"21-07-2028"};
//------------------------------------------------------------------------------------------
const mesVoitures = new Array()
mesVoitures.push(voiture1)
mesVoitures.push(voiture2)
mesVoitures.push(voiture3)
mesVoitures.push(voiture4)
mesVoitures.push(voiture5)
mesVoitures.push(voiture6)
//------------------------------------------------------------------------------------------
const mesPermis = new Array(2)
mesPermis.push(permis1)
mesPermis.push(permis2)
//------------------------------------------------------------------------------------------


function afficherFormulaire(){
    const formulaireConnexion = document.getElementById("formConnexion");
    const formulaireInscription = document.getElementById("formInscription");
    if (formulaireInscription.style.display==="none"){
        formulaireInscription.style.display="block";
        formulaireConnexion.style.display="none";
    }else{
        if (formulaireConnexion.style.display==="none"){
            formulaireConnexion.style.display="block";
            formulaireInscription.style.display="none";
        }
    }
}
function checkPresenceVehicule(){
    const divAbsenceVehicule = document.getElementsByClassName("absenceVehicule");
    const divPresenceVehicule = document.getElementsByClassName("presenceVehicule");
    for(let i = 0;i<divPresenceVehicule.length;i++)
    if (divAbsenceVehicule[i].style.display==="none"){
        divAbsenceVehicule[i].style.display="block";
        divPresenceVehicule[i].style.display="none";
    }else{
        if (divPresenceVehicule[i].style.display==="none"){
            divPresenceVehicule[i].style.display="block";
            divAbsenceVehicule[i].style.display="none";
        }
    }
}

function chargerPermis(){
    var selectPermis = document.getElementById("inputAjoutVehiculePermis");
    for(var i = 0; i < mesPermis.length; i++){
        var permis = mesPermis[i];
        console.log(permis);
        selectPermis.options.add(new Option(permis.categorie+" - "+permis.numeroPermis, i));
    }
}
function chargerVehicule(){
    var selectVoiture = document.getElementById("inputChoixVehicule");
    console.log(selectVoiture)
    console.log(mesVoitures)
    for(var i = 0; i < mesVoitures.length; i++){
        var voiture = mesVoitures.at(i);
        console.log(voiture);
        selectVoiture.options.add(new Option(voiture.marque+" "+voiture.modele+" - "+voiture.immat, i));
    }
}
if(document.getElementById("inputAjoutVehiculePermis")!=null){
    chargerPermis();
}
if(document.getElementById("inputChoixVehicule")!=null){
    console.log("Presinistre")
    chargerVehicule();
}

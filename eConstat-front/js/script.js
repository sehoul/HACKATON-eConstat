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
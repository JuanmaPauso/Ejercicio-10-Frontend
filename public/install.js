'use strict';

let deferredInstalPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromtEvent);


function saveBeforeInstallPromtEvent(evt){
    deferredInstalPrompt= evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt) {
    deferredInstalPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true);
    deferredInstalPrompt.userChoice.then((choice)=>{
        if(choice.outcome === "accepted"){
            console.log("Aceptado")
        } else {
            console.log("No aceptado")
        }
        deferredInstalPrompt = null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
    console.log("Shooter instalado");
}
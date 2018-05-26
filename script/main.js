if (document.body.className == "Index") {
    // fodboldspiller sektion
    let fodboldspillerSektion = document.querySelector(".LandingpageFodboldspiller");

    fodboldspillerSektion.addEventListener("mouseover", e => {
        let fodboldspillerH2 = document.querySelector(".FodboldspillerH2");
        fodboldspillerH2.style.display = "none"

        let fodboldspillerPunktliste = document.querySelector(".FodboldspillerPunktListe");
        fodboldspillerPunktliste.style.display = "block"

        let fodboldspillerOverlay = document.querySelector(".FodboldOverlay")
        fodboldspillerOverlay.style.backgroundColor = "rgba(0, 30, 53, 0.8)"
    });

    fodboldspillerSektion.addEventListener("mouseout", e => {
        let fodboldspillerH2 = document.querySelector(".FodboldspillerH2");
        fodboldspillerH2.style.display = "block"

        let fodboldspillerPunktliste = document.querySelector(".FodboldspillerPunktListe");
        fodboldspillerPunktliste.style.display = "none"

        let fodboldspillerOverlay = document.querySelector(".FodboldOverlay")
        fodboldspillerOverlay.style.backgroundColor = "rgba(0, 30, 53, 0.4)"
    });

    // træner sektion
    let traenerSektion = document.querySelector(".LandingpageTraener");

    traenerSektion.addEventListener("mouseover", e => {
        let traenerH2 = document.querySelector(".TraenerH2");
        traenerH2.style.display = "none"

        let traenerPunktliste = document.querySelector(".TraenerPunktListe");
        traenerPunktliste.style.display = "block"

        let traenerOverlay = document.querySelector(".TraenerOverlay")
        traenerOverlay.style.backgroundColor = "rgba(0, 30, 53, 0.8)"
    });

    traenerSektion.addEventListener("mouseout", e => {
        let traenerH2 = document.querySelector(".TraenerH2");
        traenerH2.style.display = "block"

        let traenerPunktliste = document.querySelector(".TraenerPunktListe");
        traenerPunktliste.style.display = "none"

        let traenerOverlay = document.querySelector(".TraenerOverlay")
        traenerOverlay.style.backgroundColor = "rgba(0, 30, 53, 0.4)"
    });

    // klubben sektion
    let klubbenSektion = document.querySelector(".LandingpageKlubben");

    klubbenSektion.addEventListener("mouseover", e => {
        let klubbenH2 = document.querySelector(".KlubbenH2");
        klubbenH2.style.display = "none"

        let klubbenPunktliste = document.querySelector(".KlubbenPunktListe");
        klubbenPunktliste.style.display = "block"

        let klubbenOverlay = document.querySelector(".KlubbenOverlay")
        klubbenOverlay.style.backgroundColor = "rgba(0, 30, 53, 0.8)"
    });

    klubbenSektion.addEventListener("mouseout", e => {
        let klubbenH2 = document.querySelector(".KlubbenH2");
        klubbenH2.style.display = "block"

        let klubbenPunktliste = document.querySelector(".KlubbenPunktListe");
        klubbenPunktliste.style.display = "none"

        let klubbenOverlay = document.querySelector(".KlubbenOverlay")
        klubbenOverlay.style.backgroundColor = "rgba(0, 30, 53, 0.4)"
    });

    // Praktisk info sektion
    let PrakInfoSektion = document.querySelector(".LandingpagePraktiskInfo");

    PrakInfoSektion.addEventListener("mouseover", e => {
        let PrakInfoH2 = document.querySelector(".PraktiskInfoH2");
        PrakInfoH2.style.display = "none"

        let prakInfoPunktliste = document.querySelector(".PraktiskInfoPunktListe");
        prakInfoPunktliste.style.display = "block"

        let prakInfoOverlay = document.querySelector(".PraktiskInfoOverlay")
        prakInfoOverlay.style.backgroundColor = "rgba(0, 30, 53, 0.8)"
    });

    PrakInfoSektion.addEventListener("mouseout", e => {
        let PrakInfoH2 = document.querySelector(".PraktiskInfoH2");
        PrakInfoH2.style.display = "block"

        let prakInfoPunktliste = document.querySelector(".PraktiskInfoPunktListe");
        prakInfoPunktliste.style.display = "none"

        let prakInfoOverlay = document.querySelector(".PraktiskInfoOverlay")
        prakInfoOverlay.style.backgroundColor = "rgba(0, 30, 53, 0.4)"
    });
}

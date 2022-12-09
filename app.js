
let data =
    [
        {
            location: {
                lat:58.3812220880632, lng:26.719812254278267
            },
            description: `Tartu Ülikooli peahoone asub Tartu kesklinnas aadressil Ülikooli tänav 18. See on üks silmapaistvamaid klassitsistliku arhitektuuri näiteid Eestis. Viimasel kümnendil on õppetegevus hajutatud üha enam ülikooli teistesse hoonetesse, andes peahoones maad ülikooli administratsioonile.`,
            placeName: "Tartu Ülikooli peahoone",
            category:`Ülikool`,
            image:`images/peahoone.jpg`,
        },
        {
            location: {
                lat:58.38548646203401, lng:26.724740738143648
            },
            description: `2020. aasta alguses valmis TÜ Delta keskus, mis koosneb kahest hoonest, millest üks on TÜ instituutide kasutuses õppe- ja teadushoonena ning teises asuvad mitmed ettevõtted, kes teevad TÜ teadlaste ja tudengitega tihedat koostööd. Delta keskusesse koondub samuti kogu alustavate ettevõtjate jaoks vajalik ökosüsteem – TÜ majandusteaduskonna pakutavad eelinkubatsioonitegevused, ettevõtlus- ja innovatsioonikeskuse koordineeritav teaduspõhiste ettevõtete arenguprogramm ja Tartu Teaduspargi inkubaatorid.
            `,
            placeName: "Delta hoone",
            category:`Ülikool`,
            image:`images/delta.jpg`,
        },
        {
            location: {
                lat:58.366513228592886, lng:26.690775328835187
            },
            description: `Füüsika loob vundamendi erinevatele loodusteadustele ja seetõttu on füüsika-alased teadmised vajalikud paljudes teadusvaldkondades ja erialadel. Füüsika Instituut pakub oma üliõpilastele põhjalikku füüsika ja materjaliteaduse haridust, mis tagab meie üliõpilastele laialdaselt rakendatavad looduteadusliku mõtlemisviisi oskused ja konkurentsivõime tööturul. Füüsika Instituudis tegeletakse nii riiklikult kui ka rahvusvaheliselt oluliste teadusuuringutega. Füüsika ja materjaliteaduse mitmekesisus ilmneb ka meie uurimistöös, mis on sageli interdistsiplinaarne.
            `,
            placeName: "Füüsikumi hoone",
            category:`Ülikool`,
            image:`images/physicum.jpg
            `,
        },
        {
            location: {
                lat:58.37350347022752, lng:26.716267769577097
            },
            description: `Tartu Ülikooli õppehoone Vanemuise tänav 46 on arhitekt Otto Hoffmanni projekteeritud õppehoone Tartus, mille rajamise algatas Tartu Keiserliku Ülikooli erakorraline professor Georgi Mihhailovski 1905. aastal. Tänapäeval asub majas Tartu Ülikooli loodus- ja tehnoloogiateaduskond, kuid veel 2008. aastani paiknes seal Tartu Ülikooli bioloogia-geograafiateaduskond, mis liideti 1. jaanuari 2008 Tartu Ülikooli füüsika-keemiateaduskonna, Eesti Mereinstituudi ja Tartu Ülikooli tehnoloogiainstituudiga. Vanemuise 46 õppehoones on Tartu Ülikooli suurim, 400-kohaline ringauditoorium.
            `,
            placeName: "Vanemuise 46",
            category:`Ülikool`,
            image:`images/vanemuise.jpg
            `,
        },
        {
            location: {lat:58.379612631879624, lng:26.722418178534642},
            description: `"llegaard on üks Tartu vanimatest baaridest mõnusa atmosfääri ja mitmekesise klientuuriga. Illekas kohtuvad noored ja vanad, tudengid ja õppejõud, kohalikud ja välismaalased - uued tutvused on kerged tulema.

            Sõbralik teenindus, odavad hinnad, maitsvad toidud, nii kohalikud kui välismaised õlled, huvitavad shotid ja mõnusad kokteilid. Illegaardis näeb Tartut tema parimal kujul :)
            
            Saad mängida lauajalgpalli, vaadata sporti, teha läpaka taga tööd või veeta lihtsalt sõpradega toredalt aega. Ära enam kahtle -  Illegaard on õige koht just sinu jaoks!"
            `,
            placeName: "Illegaard",
            category:`Ööelu`,
            image:`images/illegaard.jpg
            `,
        },
        {
            location: {lat:58.38219293841861, lng:26.72164110293157},
            description: `Kivi baar asub Tartu vanalinnas Rüütli tänaval. Asutus alustas tegevust 2012. aasta aprillis. Tänavapildis jääb ta silma maja ees seisvate maakivide tõttu. Suured kivid on vana kivisilla kivid. Baar on seest hubane, kuue laua ning rohkete istumiskohtadega. Peale maitsvate jookide ning hea seltskonna nautimise on võimalus ka molbertil joonistada. Kuid mis põhiline ‒ seltskond on sõbralik ning uued inimesed on alati teretulnud!
            `,
            placeName: "Kivi",
            category:`Ööelu`,
            image:`images/kivi.jpg
            `,
        },
        {
            location: {lat:58.38359209342117, lng:26.72196389850384},
            description: `"Tartu subkultuurimaja, eriliste ja avatud inimeste klubi ja kohtumispaik, kus põimuvad teater, muusika, kino ja rõõm. Pole olemas elitaarkultuuri, massikultuuri ja mittekultuuri. On see, mis puudutab, ja see, mis mitte. On ideed. On sallivus. On avatus.

            Ka Sina võid olla klubis! Aga noh, ega me ei sunni, kui ei meeldi. Kõigile ei meeldigi Genklubis."
            `,
            placeName: "Genialistide klubi",
            category:`Ööelu`,
            image:`images/gen.jpg
            `,
        },
        {
            location: {lat:58.382025300098135, lng:26.72124839665743},
            description: `Trepp on baar, kus saad lõbusalt aega veeta ja erinevaid huvitavaid kokteile proovida. Pubi asukoht teisel korrusel ja trepp, mida mööda on ilmselt lihtsam üles minna kui pärast alla tulla, on andnud pubile ka nime. Siin ootavad Sind maitsvad shotid, uhked kokteilid, mõnus muusika ja hubane atmosfäär. Trepp - sõbralik baar sõbralikele inimestele!
            `,
            placeName: "Trepp",
            category:`Ööelu`,
            image:`images/trepp.jpg
            `,
        },
        {
            location: {lat:58.382680471934435, lng:26.7250111966574},
            description: `"Kultuuribaari Naiiv tulles on naiivne mõelda, et sa tuled siia vaid ühele dringile!  

            Pakume 'guilty pleasure' elamust nii pidude ja muusikavaliku kui joogi- ja söögimenüüs. Siit leiad laulud, mida kuulad tavaliselt duši all ja magustoidud, kus on liiga palju jäätist. Kokteilid, mis on natukene liiga maitsvad ja shotid, mis ei tundu kunagi lõppevat.
            
            Naiiv on Emajõel asuv kahekorruseline panoraam- ja jõevaatega ujuvmaja, mida ääristavad terrassid. Esimesel korrusel on köögiga hubane baar/kohvik ja teisel korrusel peosaal, kus saad tantsida hommikuni DJ valitud taktis aga korraldada ka erapidu."
            `,
            placeName: "Naiiv",
            category:`Ööelu`,
            image:`images/naiiv.jpg
            `,
        },
        {
            location: {lat:58.38359871779258, lng:26.721849811998247},
            description: `Möku pakub laias valikus käsitööõllesid, mille nautimiseks on taustaks mängimas võnked, mis on inimesi Möku juurde juba üle viie aasta toonud. Lihtsalt olla ja mõnuleda saab Möku omapärasel õuealal.  Tule ja proovi! 
            `,
            placeName: "Möku",
            category:`Ööelu`,
            image:`images/möku.jpg
            `,
        },
        {
            location: {lat:58.378260465372065, lng:26.730078808323704},
            description: `Kvaliteetsete Techno Gym seadmetega täidetud saalis on jõuharjutuste kõrval võimalik põletada kaloreid spetsiaalsel kardiotreeningu alal või teha harjutusi funktsionaalse treeningu alal. Avarast ja valgusküllasest treeningsaalist avaneb muuhulgas suurepärane vaade Tartu südalinnale, mida saab treeningu või venitamise taustaks nautida ka jõusaali rõdult. Iseteeninduslik Gym! jõusaal on avatud 24/7.
            `,
            placeName: "Tasku Gym!",
            category:`Sport`,
            image:`images/gym.jpg
            `,
        },
        {
            location: {lat:58.38489760712586, lng:26.72750388787854},
            description: `"LEMON GYM on kogukond aktiivsetele inimestele, kes on sama elavad kui nende linn. Kuigi meie elud on väga erinevad, toob fitness meid iga päev kokku. Ei ole kohustusi ega konkurentsi. Ma teen trenni, kuna see meeldib mulle; pingutan nii palju kui suudan; tulen siis, kui mulle sobib.

            Tule ja liitu meiega! Leiate LEMON GYM TARTU lihtsasti aadressil Narva mnt 27a, Tartu. Parkla on suur ja mugav nii, et auto parkimine pole probleem.
            
            Meie jõusaal on samuti ruumikas, te ei tunne, et see on ülerahvastatud, ning igale inimesele on piisavalt treenimisseadmeid. Saate trenni teha kaasaegsete seadmetega, mille on heaks kiitnud professionaalid."
            `,
            placeName: "Lemongym!",
            category:`Sport`,
            image:`images/lemon.jpg
            `,
        },
        {
            location: {lat:58.378600910124874, lng:26.72465077553935},
            description: `"Faster’s Express pakub võimalust kiirelt ja taskukohase hinnaga keha kinnitada nii päeval kui ka öösel!

            Faster’s Expressi menüüst leiab maitsvaid praade, vrappe, burgereid, friikartuleid ja laia valiku erinevaid jooke. Maitseb päeval ja öösel!"
            `,
            placeName: "Fasters",
            category:`Toitlustus`,
            image:`images/fasters.jpg
            `,
        },
        {
            location: {lat:58.37706583406897, lng:26.732294398049202},
            description: `Eesti pealinnas Tallinnas avas McDonald’s® uksed 1995. aastal. Praegu on Tallinnas, Tartus, Pärnus ja Narvas kokku 10 McDonald’s restorani, lisaks 8 McDrive™ ja 3 McCafé™ kohvikut. McDonald’s® Eesti restoranides töötab üle 600 inimese, kes teenindavad iga päev enam kui 20 000 külastajat.
            `,
            placeName: "Turu Mcdonald's",
            category:`Toitlustus`,
            image:`images/mcdonalds.jpg
            `,
        },
        {
            location: {lat:58.377121869389505, lng:26.721294727338808},
            description: `Tartu Ülikooli Raamatukogu on teadusraamatukogu, mis toetab Tartu Ülikooli õppe- ja teadustööd, tagades juurdepääsu Eesti kultuuripärandile ja maailma inforessurssidele.
            `,
            placeName: "TÜ raamatukogu",
            category:`Ülikool`,
            image:`images/raamatukogu.jpg
            `,
        },
    ]


let allMarkersWithCategory = [];

function initMap() {
    allMarkersWithCategory = [];
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: data[data.length - 1].location,
        mapTypeId: "roadmap",
    });



    let infoWindow = new google.maps.InfoWindow();
    let $filterBtns = $("#filter-btns");
    let categories = new Set([...data.map(item=>item.category)]);
    console.log(categories);
    categories.forEach((category)=>{
        $filterBtns.append(`<button class="btn"  data-filter="${category}">${category}</button>`)
    });
    $(document).on("click","#filter-btns .btn",function(){
        let filteredCategory = $(this).attr("data-filter");
        $("#filter-btns .btn").removeClass("active");
        $(this).addClass("active");
        infoWindow.close()
        if(filteredCategory ==="all"){
            allMarkersWithCategory.forEach(markerInfo=>{
                markerInfo.marker.setVisible(true);
            })
        }else{
            allMarkersWithCategory.forEach(markerInfo =>{
                markerInfo.marker.setVisible(false);
            })
            allMarkersWithCategory.filter(markerInfo => markerInfo.category ===filteredCategory)
            .forEach(markerInfo=>{
                markerInfo.marker.setVisible(true);
            });
        }
    })
    for (let i = 0; i < data.length; i++) {
        let { location, description, placeName,image,category } = data[i];
        let marker = new google.maps.Marker({
            position: location,
            map: map,
        });
        allMarkersWithCategory.push({marker,category});
        let content = `<div class="info-window-container">
                                    <div class="img-container">
                                        <img src="${image}" height="200" alt="${placeName}"/>
                                    </div>
                                    <h2 class="location-name">${placeName}</h2>
                                    <p class="location-descriptoin">${description}</p>
                                </div>`
        google.maps.event.addListener(marker, "click", function () {
            infoWindow.setContent(content)
            infoWindow.open(map, marker);
        })
    }
    console.log(allMarkersWithCategory)
}
initMap();
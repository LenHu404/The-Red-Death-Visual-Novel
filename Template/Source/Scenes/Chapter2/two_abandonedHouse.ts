namespace Template {
  let goNext = false;
  let gotPlank = false;
  let gotVase = false;
  let goldenComb = document.createElement('img');
  goldenComb.src = 'Images/Items/golden_comb.png';
  goldenComb.id = "goldenComb";
  let vase = document.createElement('img');
  vase.src = 'Images/Items/vase.png';
  vase.id = "vase";
  let plank = document.createElement('img');
  plank.src = 'Images/Items/plank.png';
  plank.id = "plank";
  export async function two_abandonedHouse(): ƒS.SceneReturn {
    console.log("two_abandonedHouse");

    let text = {
      narrator: {
        T0000: "",
        T0001: "",
        T0002: "",
        T0003: "",

      },
      char1: {
        T0000: "",
        T0001: "",
        T0002: "",
        T0003: "",
        T0004: "",
        T0005: "",
        T0006: "",
        T0007: "",
        T0008: "",
        T0009: "",
        T0010: "",
        T0011: "",

      },
      protagonist: {
        T0000: "This must be the house Gerald spoke of.",
        T0001: "Lets see what i can find inside.",
        T0002: "Hm where do i start to look?",
        T0003: "This seems like it would work.",
        T0004: "Lets go back to Owen.",
        T0005: "",
        T0006: "",

      }
    };
    let startWhere = {
      corner: "Help the old man and his daughter.",
      roof: "Keep on traveling"
    };



    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    await ƒS.Location.show(locations.oldHouse);
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(0, 100, 20, 100));

    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
    await ƒS.Character.hide(characters.protagonist);

    await ƒS.Location.show(locations.insideOldHouse);
    //await ƒS.update(transitions.swirl.duration, transitions.swirl.alpha, transitions.swirl.edge);
    await ƒS.update();
    goldenComb.addEventListener('click', getComb);
    document.querySelector("scene").appendChild(goldenComb);

    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
    ƒS.Speech.hide();
    document.querySelector("scene").appendChild(vase);
    document.querySelector("scene").appendChild(plank);
    plank.addEventListener('click', getPlank);
    vase.addEventListener('click', getVase);



    while (!goNext) {
      await ƒS.Progress.delay(2);

    }

    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);


    if (!gotPlank)
      document.querySelector("scene").removeChild(plank);
    if (!gotVase)
      document.querySelector("scene").removeChild(vase);

    
      ƒS.Speech.hide();
      console.log("u");
      
      return "meetInBetween";

      
  }

  function getComb(): void {
    ƒS.Inventory.add(items.golden_comb);
    document.querySelector("scene").removeChild(goldenComb);
    dataForSave.gotComb = true;
    goNext = true;

  }
  async function getPlank(_event: Event): Promise<void> {
    document.querySelector("scene").removeChild(plank);
    gotPlank = true;
    await ƒS.Speech.tell(characters.protagonist, "Oh is something behind there?");
    ƒS.Speech.hide();
    await ƒS.Speech.tell(characters.protagonist, "Hmm doesn't seem like it.");
    ƒS.Speech.hide();
  }
  async function getVase(_event: Event): Promise<void> {
    document.querySelector("scene").removeChild(vase);
    gotVase = true;
    plank.style.zIndex = "-1";
    await ƒS.Speech.tell(characters.protagonist, "Maybe something inside here?");
    plank.style.zIndex = "2";
    ƒS.Speech.hide();
    plank.style.zIndex = "-1";
    await ƒS.Speech.tell(characters.protagonist, "Hmm doesn't seem like it.");
    ƒS.Speech.hide();
    plank.style.zIndex = "2";

  }
}
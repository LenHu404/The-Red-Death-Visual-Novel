namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  alert("Hello!\nI advise you to play on Google Chrome in Fullscreen (Press F11).\nToggle the game menu by clicking 'M' and to open your Backpack press 'I'.\nEnjoy!");
  console.log("The Red Death starting");
  export enum whichItemfirst {
    notDecided = 0,
    Certfiicate,
    Comb,
    gotBoth
  }

  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "../Transitions/hearts.jpg",
      edge: 1
    },
    clouds: {
      duration: 1,
      alpha: "../Transitions/12.jpg",
      edge: 1
    },
    starWars: {
      duration: 1,
      alpha: "../Transitions/008.jpg",
      edge: 1
    },
    wet: {
      duration: 1,
      alpha: "../Transitions/wet.jpg",
      edge: 1
    },
    swirl: {
      duration: 1,
      alpha: "../Transitions/swirl.png",
      edge: 1
    },
    test: {
      duration: 1,
      alpha: "../Transitions/034.png",
      edge: 1
    },
    test2: {
      duration: 1,
      alpha: "../Transitions/039.jpg",
      edge: 1
    }


  };

  export let sound = {
    // themes
    dystopia: "../Audio/Dystopian.ogg",
    atmo1: "../Audio/atmo1.wav",
    battle: "../Audio/epicBattleMusic.mp3",
    ritual: "../Audio/ritual.mp3",

    //background
    supermarketTrolleys: "../Audio/Supermarket_with_Trolleys.mp3",
    smallCrowd: "../Audio/smallCrowd.mp3",

    // SFX
    payingSound: "../Audio/payingSound.mp3",
    monsterScream: "../Audio/monsterScream.mp3",
    playerDeatchCry: "../Audio/deathCryPlayer.mp3",
    femaleDeatchCry: "../Audio/femaleDeathCry.mp3",
    femaleCrying: "../Audio/femaleCrying.mp3",
    vicotrySound: "../Audio/victorySound.mp3",
    horseRiding: "../Audio/horseRiding.mp3"


  };

  export let locations = {
    nightCity: {
      name: "Night City",
      background: "Images/Backgrounds/Nightcity.png"/* ,
      foreground: "" */
    },
    nightPark: {
      name: "Night Park",
      background: "Images/Backgrounds/Nightpark.png"
    },
    supermarketInside: {
      name: "Supermarkt",
      background: "Images/Backgrounds/supermarketInside.jpg"
    },
    gif: {
      name: "gifs",
      background: "Images/Backgrounds/starry.gif"
    },
    eldenRing01: {
      name: "eldenRing01",
      background: "Images/Backgrounds/eldenRing01.jpg"
    },
    eldenRing02: {
      name: "eldenRing02",
      background: "Images/Backgrounds/eldenRing02.png"
    },
    eldenRing_dorf_eingang: {
      name: "eldenRing_dorf_eingang",
      background: "Images/Backgrounds/eldenRing_Dorf_eingang.jpg"
    },
    novelPage_pergament: {
      name: "pergament",
      background: "Images/NovelPageBGs/old_paper.jpg"
    },
    blackScreen: {
      name: "Black Screen",
      background: "Images/Backgrounds/blackScreen.png"
    },
    familyHouse: {
      name: "Family House",
      background: "Images/Backgrounds/familyHouseTest.png"
    },
    insideFamilyHouse: {
      name: "inside Family House",
      background: "Images/Backgrounds/insideFamilyHouseTest.png"
    },
    oldTownHall: {
      name: "Old town hall",
      background: "Images/Backgrounds/oldTownHall.png"
    },
    insideTownHall: {
      name: "Inside town Hall",
      background: "Images/Backgrounds/insideOldTownHall.png"
    },
    lonelyRoad: {
      name: "On the lonely Road",
      background: "Images/Backgrounds/lonelyRoad.png"
    },
    oldHouse: {
      name: "Old House",
      background: "Images/Backgrounds/oldHouse.png"
    },
    insideOldHouse: {
      name: "Indide Old House",
      background: "Images/Backgrounds/insideOldHouse.png"
    }
  };

  export let dataForSave = {
    nameProtagonist: "donald",
    gotCert: false,
    gotComb: false,
    decision1: whichItemfirst.notDecided,
    waitedToHeal: false

  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: ".....",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Prot_normal.png", // Pfad des Bildes
        behind: "Images/Characters/Prot_behind.png",
        horse_normal: "Images/Characters/Prothorse_normal.png",
        horse_behind: "Images/Characters/Prothorse_behind.png"
      }
    },
    char1: {
      name: "Owen",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/char3.png", // Pfad des Bildes
      }
    },
    char2: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/char2.png", // Pfad des Bildes
      }
    },
    seraphina: {
      name: "Seraphina",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/seraphina_normal.png", // Pfad des Bildes
        ill: "Images/Characters/seraphina_ill.png",
        monster: "Images/Characters/seraphina_monster.png"
      }
    },
    librarian: {
      name: "Librarian",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/librarian.png", // Pfad des Bildes
      }
    },
    novelPage: {
      name: ""
    }
  };

  // **** ITEMS ****
  // items is declared here as well as initialized
  export let items = {
    birth_certificate: {
      name: "Old birth certificate",
      description: "Says that Seraphina was born on 13. 912",
      image: "Images/Items/birth_certificate.png",
      static: true
    },
    golden_comb: {
      name: "Golden comb",
      description: "An old golden Comb which belonged to Seraphina or her Mother.",
      image: "Images/Items/golden_comb.png",
      static: true
    }
  };

  export function slideInAnimation(fromWhereX: number, fromWhereY: number, toWhereX: number, toWhereY: number): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(fromWhereX, fromWhereY),
        color: ƒS.Color.CSS("white", 1),
      },
      end: {
        translation: ƒS.positionPercent(toWhereX, toWhereY),
        color: ƒS.Color.CSS("white", 1)
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function ghostSlideInAnimation(fromWhereX: number, fromWhereY: number, toWhereX: number, toWhereY: number): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(fromWhereX, fromWhereY),
        color: ƒS.Color.CSS("white", 0),
      },
      end: {
        translation: ƒS.positionPercent(toWhereX, toWhereY),
        color: ƒS.Color.CSS("white", 1)
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function ghostAnimation(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(70, 110),
        color: ƒS.Color.CSS("white", 1)
      },
      end: {
        translation: ƒS.positionPercent(110, 110),
        color: ƒS.Color.CSS("white", 0)
      },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function angryAnimation(): ƒS.AnimationDefinition {
    return {
      start: {
        color: ƒS.Color.CSS("white", 1)
      },
      end: {
        color: ƒS.Color.CSS("red", 1)
      },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function getAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  // Menu shortcuts
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close"
  };

  let gameMenu: ƒS.Menu;

  // true entspricht Menü ist offen und false zu
  let menuIsOpen: boolean = true;

  // true entspricht Inventory ist offen und false zu
  let invIsOpen: boolean = false;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
    }
  }

  // Menu shortcuts
  document.addEventListener("keydown", hndKeyPress);

  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        console.log("Menu");
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
      // Inventory shortcuts
      case ƒ.KEYBOARD_CODE.I:
        if (!invIsOpen) {
          console.log("open inventory");
          await ƒS.Inventory.open();
          invIsOpen = true;
        }
        else {
          console.log("close inventory");
          await ƒS.Inventory.open();
          ƒS.Inventory.close();
          invIsOpen = false;
        }
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("close inventory");
        await ƒS.Inventory.open();
        ƒS.Inventory.close();
        break;
    }
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      // CHAPTER 1
      { scene: one_villageEntrance, name: "Arrival in the village" },
      { scene: one_familyHouse, name: "At the Family House" },
      // CHAPTER 2
      { scene: two_villageEntrance, id:"meetInBetween", name: "The Items" },
      { scene: two_abandonedHouse, id:"oldHouse", name: "Getting the comb" },
      { scene: two_oldTownHall, id:"certificate", name: "Getting the birth Certificate" },

      // CHAPTER 3
      //{ scene: three_villageEntrance, name: "Going back to Town" },
      { scene: three_insideFamilyHouse, id:"goBack", name: "Choice to help, kill or wait" },
      // CHAPTER 4
      { scene: four_insideFamilyHouse, id:"helpProcedure", name: "Fightorwhat" }, 
      { scene: four_fightInTown, id: "fight", name: "Fight" },

      // CHAPTER 5
      { scene: five_villageEntrance, name: "Aftermath" },


      // END SCENE
      { scene: end_one, id: "end_one", name: "Ending One" },
      { scene: end_two, id: "end_two", name: "Ending two" },
      { scene: end_three, id: "end_three", name: "Ending three" },
      { scene: end_four, id: "end_four", name: "Ending four" },
      { scene: end_five, id: "end_five", name: "Ending five" },
      { scene: end_six, id: "end_six", name: "Ending six" },
      { scene: end_seven, id: "end_seven", name: "Ending seven" },
      { scene: end, id: "blackScreen", name: "Black Screen" }



      /*{ scene: healSceneInput, name: "healSceneInput" }
       { scene: healSceneChoices, name: "healSceneChoices" } */



    ];
    /* let scenes: ƒS.Scenes = [
      { scene: SupermarketScene, name: "SupermarketScene" }
      
    ]; */
    /* let scenes: ƒS.Scenes = [
      { scene: TestScene, name: "Test Scene" },
      { scene: TestScene02, name: "Test Scene 02" }
    ]; */

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
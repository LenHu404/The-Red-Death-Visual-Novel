"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    let whichItemfirst;
    (function (whichItemfirst) {
        whichItemfirst[whichItemfirst["notDecided"] = 0] = "notDecided";
        whichItemfirst[whichItemfirst["Certfiicate"] = 1] = "Certfiicate";
        whichItemfirst[whichItemfirst["Comb"] = 2] = "Comb";
        whichItemfirst[whichItemfirst["gotBoth"] = 3] = "gotBoth";
    })(whichItemfirst = Template.whichItemfirst || (Template.whichItemfirst = {}));
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "../FreeTransitions/Others/hearts.jpg",
            edge: 1
        },
        clouds: {
            duration: 1,
            alpha: "../FreeTransitions/WipesAndOther/12.jpg",
            edge: 1
        },
        starWars: {
            duration: 1,
            alpha: "../FreeTransitions/Others/008.jpg",
            edge: 1
        },
        wet: {
            duration: 1,
            alpha: "../FreeTransitions/Others/wet.jpg",
            edge: 1
        },
        swirl: {
            duration: 1,
            alpha: "../FreeTransitions/Others/swirl.png",
            edge: 1
        },
        test: {
            duration: 1,
            alpha: "../FreeTransitions/Others/034.png",
            edge: 1
        },
        test2: {
            duration: 1,
            alpha: "../FreeTransitions/Others/039.jpg",
            edge: 1
        }
    };
    Template.sound = {
        // themes
        dystopia: "../Audio/Dystopian.ogg",
        atmo1: "../Audio/atmo1.wav",
        battle: "../Audio/epicBattleMusic.mp3",
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
        horseRiding: "..Audio/horseRiding.mp3"
    };
    Template.locations = {
        nightCity: {
            name: "Night City",
            background: "Images/Backgrounds/Nightcity.png" /* ,
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
    Template.dataForSave = {
        nameProtagonist: "donald",
        gotCert: false,
        gotComb: false,
        decision1: whichItemfirst.notDecided,
        waitedToHeal: false
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ".....",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Prot_normal.png",
                behind: "Images/Characters/Prot_behind.png",
                horse_normal: "Images/Characters/Prothorse_normal.png",
                horse_behind: "Images/Characters/Prothorse_behind.png"
            }
        },
        char1: {
            name: "Owen",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/char3.png",
            }
        },
        char2: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/char2.png",
            }
        },
        seraphina: {
            name: "Seraphina",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/seraphina_normal.png",
                ill: "Images/Characters/seraphina_ill.png",
                monster: "Images/Characters/seraphina_monster.png"
            }
        },
        librarian: {
            name: "Librarian",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/librarian.png",
            }
        },
        novelPage: {
            name: ""
        }
    };
    // **** ITEMS ****
    // items is declared here as well as initialized
    Template.items = {
        birth_certificate: {
            name: "Old birth certificate",
            description: "An old birth certificate",
            image: "Images/Items/birth_certificate.png"
        },
        golden_comb: {
            name: "Golden comb",
            description: "A golden comb",
            image: "Images/Items/golden_comb.png",
            static: true
        }
    };
    function slideInAnimation(fromWhereX, fromWhereY, toWhereX, toWhereY) {
        return {
            start: {
                translation: Template.ƒS.positionPercent(fromWhereX, fromWhereY),
                color: Template.ƒS.Color.CSS("white", 1),
            },
            end: {
                translation: Template.ƒS.positionPercent(toWhereX, toWhereY),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.slideInAnimation = slideInAnimation;
    function ghostSlideInAnimation(fromWhereX, fromWhereY, toWhereX, toWhereY) {
        return {
            start: {
                translation: Template.ƒS.positionPercent(fromWhereX, fromWhereY),
                color: Template.ƒS.Color.CSS("white", 0),
            },
            end: {
                translation: Template.ƒS.positionPercent(toWhereX, toWhereY),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.ghostSlideInAnimation = ghostSlideInAnimation;
    function ghostAnimation() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(70, 110),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            end: {
                translation: Template.ƒS.positionPercent(110, 110),
                color: Template.ƒS.Color.CSS("white", 0)
            },
            duration: 5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.ghostAnimation = ghostAnimation;
    function angryAnimation() {
        return {
            start: {
                color: Template.ƒS.Color.CSS("white", 1)
            },
            end: {
                color: Template.ƒS.Color.CSS("red", 1)
            },
            duration: 5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.angryAnimation = angryAnimation;
    function getAnimation() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0.3) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.getAnimation = getAnimation;
    // Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let gameMenu;
    // true entspricht Menü ist offen und false zu
    let menuIsOpen = true;
    // true entspricht Inventory ist offen und false zu
    let invIsOpen = false;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
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
            case Template.ƒ.KEYBOARD_CODE.I:
                if (!invIsOpen) {
                    console.log("open inventory");
                    await Template.ƒS.Inventory.open();
                    invIsOpen = true;
                }
                else {
                    console.log("close inventory");
                    await Template.ƒS.Inventory.open();
                    Template.ƒS.Inventory.close();
                    invIsOpen = false;
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                await Template.ƒS.Inventory.open();
                Template.ƒS.Inventory.close();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
        buttonFunctionalities("Close");
        let scenes = [
            // CHAPTER 1
            /* { scene: one_villageEntrance, name: "Arrival in the village" },
            { scene: one_familyHouse, name: "At the Family House" },
            // CHAPTER 2
            { scene: two_villageEntrance, id:"meetInBetween", name: "The Items" },
            { scene: two_abandonedHouse, id:"oldHouse", name: "Getting the comb" }, */
            { scene: Template.two_oldTownHall, id: "certificate", name: "Getting the birth Certificate" },
            // CHAPTER 3
            //{ scene: three_villageEntrance, name: "Going back to Town" },
            { scene: Template.three_insideFamilyHouse, id: "goBack", name: "Choice to help, kill or wait" },
            // CHAPTER 4
            { scene: Template.four_insideFamilyHouse, id: "helpProcedure", name: "Fightorwhat" },
            { scene: Template.four_fightInTown, id: "fight", name: "Fight" },
            // CHAPTER 5
            { scene: Template.five_villageEntrance, name: "Aftermath" },
            // END SCENE
            { scene: Template.end_one, id: "end_one", name: "Ending One" },
            { scene: Template.end_two, id: "end_two", name: "Ending two" },
            { scene: Template.end_three, id: "end_three", name: "Ending three" },
            { scene: Template.end_four, id: "end_four", name: "Ending four" },
            { scene: Template.end_five, id: "end_five", name: "Ending five" },
            { scene: Template.end_six, id: "end_six", name: "Ending six" },
            { scene: Template.end_seven, id: "end_seven", name: "Ending seven" },
            { scene: Template.end, id: "blackScreen", name: "Black Screen" }
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
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.textAusgelagert = {
        Narrator: {
            T0000: "Wenn du in den Szenen-Code schaust, wirst du bemerken,...",
            T0001: "dass dieser Text nicht manuell,...",
            T0002: "sondern mit einer for of-Schleife wiedergegeben wird."
        },
        Aisaka: {
            T0000: "Okay, but lets go through the city on our way home!",
            T0001: "You are not my Father! Stop telling me what to do!"
        },
        Eduard: {
            T0000: "Its raining. Lets go home.",
            T0001: "No you are not going to get something from the store!"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function startSceneCopy() {
        console.log("First Test Scene");
        let text = {
            narrator: {
                T0000: "As your travling down a road you notic a village. You decide to go through it. ",
                T0001: "Just as you are traveling through the rough looking village an old man is approaching you.",
            },
            char1: {
                T0000: "Please sir, please ",
                T0001: "We need your help!!",
                T0002: "Its my daughter. She is in desperate need of help.",
                T0003: "She happens to get infected with a sickness or worse maybe a curse.",
                T0004: "There is a way to help her but we don't have the necessary items.",
                T0005: "And to get them you have to face some dark creatures and decieving riddles.",
                T0006: "Oh thank you kind sir!",
                T0007: "What name can we call you?",
                T0008: "Be praised...",
                T0009: "No no no nonono... ",
                T0010: "You have to help us!! Or we are doomed!",
                T0011: "This can not be happening...",
            },
            protagonist: {
                T0000: "...",
                T0001: "What is the matter?",
                T0002: "How do you think i can help?",
                T0003: "Sounds intersting.",
                T0004: "Point me to where i can start.",
                T0005: "I am sorry but i cant to this. I have a more urgent matter to attend to. ",
                T0006: "I wish you all best of luck.",
            }
        };
        let helpYesNo = {
            iSayYes: "Help the old man and his daughter.",
            iSayNo: "Keep on traveling"
        };
        let dialogue = {
            iSayYes: "Yes",
            iSayNo: "No",
            iSayNothing: "......."
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        await Template.ƒS.Location.show(Template.locations.eldenRing_dorf_eingang);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.slideInAnimation(0, 100, 20, 100));
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
        //await ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        //await ƒS.Character.show(characters.char1, characters.char1.pose.normal, ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(100, 100, 70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0000);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_normal, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0003);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0004);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0005);
        let dialogueElement = await Template.ƒS.Menu.getInput(helpYesNo, "choices");
        switch (dialogueElement) {
            case helpYesNo.iSayYes:
                console.log("Friendly");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0003);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0004);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0007);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "");
                Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
                Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
                //await ƒS.Speech.tell(characters.protagonist, "");
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0008 + Template.dataForSave.nameProtagonist);
                break;
            case helpYesNo.iSayNo:
                console.log("Rude");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0005);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0009);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0010);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0011);
                await Template.ƒS.Location.show(Template.locations.eldenRing01);
                await Template.ƒS.Character.hide(Template.characters.char1);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.ƒS.positionPercent(20, 100));
                await Template.ƒS.update(Template.transitions.test2.duration, Template.transitions.test2.alpha, Template.transitions.test2.edge);
                break;
        }
        /* await ƒS.Speech.tell(characters.char1, text.char1.T0003);
        dialogueElement = await ƒS.Menu.getInput(dialogue, "choices");
    
    
        switch (dialogueElement) {
          case dialogue.iSayYes:
            console.log("Friendly");
            await ƒS.Speech.tell(characters.protagonist, "");
            dataForSave.nameProtagonist = await ƒS.Speech.getInput();
            characters.protagonist.name = dataForSave.nameProtagonist;
            await ƒS.Speech.tell(characters.protagonist, "");
            await ƒS.Speech.tell(characters.char1, text.char1.T0004 + dataForSave.nameProtagonist);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
            await ƒS.Speech.tell(characters.char1, text.char1.T0005);
    
    
            break;
    
          case dialogue.iSayNo:
            console.log("Rude");
            await ƒS.Speech.tell(characters.protagonist, "");
            dataForSave.nameProtagonist = await ƒS.Speech.getInput();
            characters.protagonist.name = dataForSave.nameProtagonist;
            await ƒS.Speech.tell(characters.char1, text.char1.T0004 + dataForSave.nameProtagonist);
            break;
    
          case dialogue.iSayNothing:
            console.log("Mute");
            await ƒS.Speech.tell(characters.protagonist, "");
            dataForSave.nameProtagonist = await ƒS.Speech.getInput();
            characters.protagonist.name = dataForSave.nameProtagonist;
            await ƒS.Speech.tell(characters.char1, text.char1.T0004 + dataForSave.nameProtagonist);
            break;
        } */
        /* dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        characters.protagonist.name = dataForSave.nameProtagonist; */
        Template.ƒS.Speech.hide();
    }
    Template.startSceneCopy = startSceneCopy;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SupermarketScene() {
        console.log("First Test Scene");
        let dialogue = {
            iSayYes: "Okay",
            iSayNo: "No",
            iSayNothing: "......."
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.supermarketTrolleys, 0.2, 1, true);
        Template.ƒS.Sound.play(Template.sound.payingSound, 0.2, true);
        Template.ƒS.Sound.fade(Template.sound.smallCrowd, 0.2, 1, true);
        await Template.ƒS.Location.show(Template.locations.supermarketInside);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.Eduard, Template.characters.Eduard.pose.normal, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.happy, Template.ƒS.positionPercent(70, 110));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Aisaka, "I'm hungry. Can I go into the store?");
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("Friendly Brother");
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Make it quick.");
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, "Okay it wont take long!");
                await Template.ƒS.Character.hide(Template.characters.Aisaka);
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.happy, Template.ghostAnimation());
                break;
            case dialogue.iSayNo:
                console.log("Rude Brother");
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, Template.textAusgelagert.Eduard.T0001);
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.Character.hide(Template.characters.Aisaka);
                await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.ƒS.positionPercent(70, 110));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.angryAnimation());
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, Template.textAusgelagert.Aisaka.T0001);
                break;
            case dialogue.iSayNothing:
                console.log("Mute Brother");
                // continue path here
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, ".............");
                await Template.ƒS.Speech.tell(Template.characters.Eduard, "..buy something for me too.");
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, "Alright i'll be right back with something sweet for you!");
                await Template.ƒS.Character.hide(Template.characters.Aisaka);
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.happy, Template.ghostAnimation());
                break;
        }
        Template.ƒS.Speech.hide();
    }
    Template.SupermarketScene = SupermarketScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TestScene() {
        console.log("First Test Scene");
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.dystopia, 0.2, 1, true);
        await Template.ƒS.Location.show(Template.locations.supermarketInside);
        await Template.ƒS.update(Template.transitions.clouds.duration, Template.transitions.clouds.alpha, Template.transitions.clouds.edge);
        await Template.ƒS.Character.show(Template.characters.Eduard, Template.characters.Eduard.pose.normal, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Eduard, Template.textAusgelagert.Eduard.T0000);
        await Template.ƒS.Character.hide(Template.characters.Eduard);
        await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.upset, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Aisaka, Template.textAusgelagert.Aisaka.T0000);
        await Template.ƒS.Character.hide(Template.characters.Aisaka);
        Template.ƒS.Speech.hide();
    }
    Template.TestScene = TestScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TestScene02() {
        console.log("First Test Scene");
        let dialogue = {
            iSayYes: "Okay",
            iSayNo: "No",
            iSayNothing: "......."
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.nightCity);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.Eduard, Template.characters.Eduard.pose.normal, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.happy, Template.ƒS.positionPercent(70, 110));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Aisaka, "I'm hungry. Can I go into the store?");
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("Friendly Brother");
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, "Make it quick.");
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, "Okay it wont take long!");
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.ghostAnimation());
                break;
            case dialogue.iSayNo:
                console.log("Rude Brother");
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, Template.textAusgelagert.Eduard.T0001);
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.Character.hide(Template.characters.Aisaka);
                await Template.ƒS.Character.show(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.ƒS.positionPercent(70, 110));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.angryAnimation());
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, Template.textAusgelagert.Aisaka.T0001);
                break;
            case dialogue.iSayNothing:
                console.log("Mute Brother");
                // continue path here
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Eduard, ".............");
                await Template.ƒS.Speech.tell(Template.characters.Eduard, "..buy something for me too.");
                //await ƒS.Character.hide(characters.Eduard);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Aisaka, "Alright i'll be right back with something sweet for you!");
                await Template.ƒS.Character.animate(Template.characters.Aisaka, Template.characters.Aisaka.pose.angry, Template.ghostAnimation());
                break;
        }
        Template.ƒS.Speech.hide();
    }
    Template.TestScene02 = TestScene02;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TestScene03() {
        console.log("First Test Scene");
        /* let text = {
          lily: {
            T0001: "hallo",
            T0002: "tschüss"
          }
        }; */
    }
    Template.TestScene03 = TestScene03;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function one_familyHouse() {
        console.log("First Test Scene");
        let text = {
            narrator: {
                T0000: "You follow him through the empty streets to an old but mostly still intact house."
            },
            char1: {
                T0000: "This is our home.",
                T0001: "It isn't much but its enough for me and my daughter.",
                T0002: "We live alone since my wife died a few years ago.",
                T0003: "Please come inside",
                T0004: "Let me introduce you to my daughter Seraphina",
                T0005: "Seraphina, this is " + Template.dataForSave.nameProtagonist + ". He can help you!",
                T0006: "The two things we need are the birth certificate and an old item that belonged to Seraphina.",
                T0007: "You can decide which of these things to get first.",
                T0008: "Getting this isn't really complicated and more tedious.",
                T0009: "All certificates are stored in the townhall and are maneged by the librarian.",
                T0010: "But since he doesn't like us he wont help us finding it.",
                T0011: "Please go to the townhall and get the certificate.",
                T0012: "Ah and our last name is Hawthrone if that helps.",
                T0013: "The best place for this would be our old house from which we moved out of years ago.",
                T0014: "Basically anything that could belong to a young girl. Like a diary or a toy.  ",
            },
            protagonist: {
                T0000: "It's my pleasue.",
                T0001: "So, how can i help?",
                T0002: "Alright, i guess there is no point in wasting time.",
                T0003: "What do i look for in particular?",
                T0004: "Where do I look for that?"
            },
            seraphina: {
                T0000: "Really?!",
                T0001: "Thank you so much. I am never going to be able to repay you if you do.",
                T0002: "Good luck and bless you for helping!",
            }
        };
        let WhichItem = {
            certificate: "Get the birth certificate.",
            oldHouse: "Go to the old house."
        };
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        await Template.ƒS.Location.show(Template.locations.familyHouse);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
        //await ƒS.update(1);
        //await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(100, 100, 70, 100));
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(0, 100, 20, 100));
        //await ƒS.Character.show(characters.char1, characters.char1.pose.normal, ƒS.positionPercent(20, 100));
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0003);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.hide(Template.characters.char1);
        await Template.ƒS.update(1);
        // Inside te house
        await Template.ƒS.Location.show(Template.locations.insideFamilyHouse);
        await Template.ƒS.Character.show(Template.characters.seraphina, Template.characters.seraphina.pose.normal, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(Template.transitions.swirl.duration, Template.transitions.swirl.alpha, Template.transitions.swirl.edge);
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(100, 100, 70, 100));
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0004);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0005);
        await Template.ƒS.Speech.tell(Template.characters.seraphina, text.seraphina.T0000);
        await Template.ƒS.Speech.tell(Template.characters.seraphina, text.seraphina.T0001);
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(0, 100, 20, 100));
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0007);
        let dialogueElement = await Template.ƒS.Menu.getInput(WhichItem, "choices");
        switch (dialogueElement) {
            case WhichItem.certificate:
                console.log("certificate");
                Template.dataForSave.decision1 = Template.whichItemfirst.Certfiicate;
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0004);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0009);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0010);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0011);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0012);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0002);
                await Template.ƒS.Speech.tell(Template.characters.seraphina, text.seraphina.T0002);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                return "certificate";
            case WhichItem.oldHouse:
                Template.dataForSave.decision1 = Template.whichItemfirst.Comb;
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0013);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0003);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0014);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0002);
                await Template.ƒS.Speech.tell(Template.characters.seraphina, text.seraphina.T0002);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                return "oldHouse";
        }
    }
    Template.one_familyHouse = one_familyHouse;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function one_villageEntrance() {
        console.log("First Test Scene");
        let text = {
            narrator: {
                T0000: "Riding through the village, you catch the sight of an elderly man desperately waving for attention.",
                T0001: "Breathless, he approaches you",
                T0002: "You pull the reins, stopping the horse.",
                T0003: "His voice quivers with worry.",
            },
            char1: {
                T0000: "Excuse me, traveler!",
                T0001: "Please, I beg of you, spare a moment to hear my plea.",
                T0002: "My apologies for the urgency, but it is my daughter. She suffers from the red death, a terrible ailment that has plagued her for months. I fear her condition is worsening, and I am desperate to find a cure.",
                T0003: "The red death is a mysterious illness that afflicts the body, turning the skin as red as ember. It weakens its victims, draining their life force until there is nothing left. I've sought healers, herbalists, anyone who could aid her, but all in vain.",
                T0004: "There is a way to help her but we don't have the necessary items.",
                T0005: "And to get them you have to face some dark creatures and decieving riddles.",
                T0006: "Oh thank you kind sir!",
                T0007: "My name is Owen and what is your name?",
                T0008: "Be praised...",
                T0009: "No no no nonono... ",
                T0010: "You have to help us!! Or we are doomed!",
                T0011: "This can not be happening...",
                T0012: "Please follow me."
            },
            protagonist: {
                T0000: "What troubles you, old man?",
                T0001: "Why do you seem so distressed?",
                T0002: "The red death? I've heard whispers of such a disease. Tell me more about it, old man.",
                T0003: "I understand your desperation, and I sympathize with your plight. What makes you believe I can help?  ",
                T0004: "Point me to where i can start.",
                T0005: "I am sorry but i cant do this. I have a more urgent matter to attend to. ",
                T0006: "I wish you all best of luck.",
            }
        };
        let helpYesNo = {
            iSayYes: "Help the old man and his daughter.",
            iSayNo: "Keep on traveling"
        };
        let dialogue = {
            iSayYes: "Yes",
            iSayNo: "No",
            iSayNothing: "......."
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        await Template.ƒS.Location.show(Template.locations.eldenRing_dorf_eingang);
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.slideInAnimation(0, 100, 20, 100));
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
        //await ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        //await ƒS.Character.show(characters.char1, characters.char1.pose.normal, ƒS.positionPercent(20, 100));
        //await ƒS.Character.hide(characters.protagonist);
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(100, 100, 70, 100));
        /*
         ƒS.Inventory.add(items.birth_certificate);
         ƒS.Inventory.add(items.golden_comb); */
        // await ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_normal, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0003);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0004);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0005);
        let dialogueElement = await Template.ƒS.Menu.getInput(helpYesNo, "choices");
        switch (dialogueElement) {
            case helpYesNo.iSayYes:
                console.log("Friendly");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0003);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0004);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0007);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "");
                Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
                Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
                //await ƒS.Speech.tell(characters.protagonist, "");
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0008 + Template.dataForSave.nameProtagonist);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0012);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.Character.hide(Template.characters.char1);
                await Template.ƒS.update();
                console.log("name" + Template.characters.protagonist.name);
                console.log("name to save: " + Template.dataForSave.nameProtagonist);
                break;
            case helpYesNo.iSayNo:
                console.log("Rude");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0005);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0009);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0010);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0011);
                //await ƒS.Character.hide(characters.protagonist);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.Character.hide(Template.characters.char1);
                await Template.ƒS.update();
                return "end_one";
        }
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        Template.ƒS.Speech.hide();
    }
    Template.one_villageEntrance = one_villageEntrance;
})(Template || (Template = {}));
var Template;
(function (Template) {
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
    async function two_abandonedHouse() {
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
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        await Template.ƒS.Location.show(Template.locations.oldHouse);
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(0, 100, 20, 100));
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Location.show(Template.locations.insideOldHouse);
        //await ƒS.update(transitions.swirl.duration, transitions.swirl.alpha, transitions.swirl.edge);
        await Template.ƒS.update();
        goldenComb.addEventListener('click', getComb);
        document.querySelector("scene").appendChild(goldenComb);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0002);
        Template.ƒS.Speech.hide();
        document.querySelector("scene").appendChild(vase);
        document.querySelector("scene").appendChild(plank);
        plank.addEventListener('click', getPlank);
        vase.addEventListener('click', getVase);
        while (!goNext) {
            await Template.ƒS.Progress.delay(2);
        }
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0003);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0004);
        if (!gotPlank)
            document.querySelector("scene").removeChild(plank);
        if (!gotVase)
            document.querySelector("scene").removeChild(vase);
        Template.ƒS.Speech.hide();
        console.log("u");
        return "meetInBetween";
    }
    Template.two_abandonedHouse = two_abandonedHouse;
    function getComb() {
        Template.ƒS.Inventory.add(Template.items.golden_comb);
        document.querySelector("scene").removeChild(goldenComb);
        Template.dataForSave.gotComb = true;
        goNext = true;
    }
    async function getPlank(_event) {
        document.querySelector("scene").removeChild(plank);
        gotPlank = true;
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "Oh is something behind there?");
        Template.ƒS.Speech.hide();
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "Hmm doesn't seem like it.");
        Template.ƒS.Speech.hide();
    }
    async function getVase(_event) {
        document.querySelector("scene").removeChild(vase);
        gotVase = true;
        plank.style.zIndex = "-1";
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "Maybe something inside here?");
        plank.style.zIndex = "2";
        Template.ƒS.Speech.hide();
        plank.style.zIndex = "-1";
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "Hmm doesn't seem like it.");
        Template.ƒS.Speech.hide();
        plank.style.zIndex = "2";
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    let looking = true;
    let looking2 = true;
    let goNext = false;
    let timer = 0;
    let time = 5;
    let alreadyMarked = false;
    let rightBook = document.createElement('img');
    rightBook.src = 'Images/Items/transpPick.png';
    rightBook.id = "rightBook";
    let calendar = document.createElement('img');
    calendar.src = 'Images/Items/transpPick.png';
    calendar.id = "calendar";
    async function two_oldTownHall() {
        console.log("two_oldTownHall ");
        let text = {
            narrator: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
            },
            librarian: {
                T0000: "What do you want?!",
                T0001: "Hmm and why is that?",
                T0002: "For what do you need an old paper like that?",
                T0003: "And who's your friend??",
                T0004: "For the Hawthrone's??",
                T0005: "What do have to do with them??",
                T0006: "You better stay away from them.",
                T0007: "Hm i don't know where its hidden among these books but maybe i can help for some change?",
                T0008: "Then good luck finding it yourself.",
                T0009: "Oh this seems appropriate. Keep on the right side. It should be there.",
                T0010: "",
                T0011: "",
            },
            protagonist: {
                T0000: "This looks like its the town hall.",
                T0001: "Let's try my luck..",
                T0002: "Ehm hello? My Name is " + Template.dataForSave.nameProtagonist + ". And i would like to see a birth certificate of a friend if mine.",
                T0003: "No need to be so incensed about it.",
                T0004: "Its for my friend Seraphina.",
                T0005: "Seraphina  Hawthrone.",
                T0006: "This doesn't need to concern you.",
                T0007: "Just give me the birth certificate.",
                T0008: "Oh okay. I guess I am on my own.",
                T0009: "Lets put it in my backpack and head back.",
                T0010: "Hm can this be useful? Maybe I sould remeber it for later.",
                T0011: "This doesn't need to concern you.",
                T0012: "This doesn't need to concern you.",
                T0013: "This doesn't need to concern you.",
                T0014: "This doesn't need to concern you.",
            }
        };
        let payOrNot = {
            pay: "Give him 2 silver pieces.",
            noPay: "Don't give him money"
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        await Template.ƒS.Location.show(Template.locations.oldTownHall);
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.behind, Template.slideInAnimation(0, 100, 20, 100));
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.Location.show(Template.locations.insideTownHall);
        await Template.ƒS.Character.show(Template.characters.librarian, Template.characters.librarian.pose.normal, Template.ƒS.positionPercent(60, 110));
        //await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(0, 100, 20, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0000);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0001);
        await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0002);
        await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0003);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0003);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0004);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0005);
        await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0004);
        await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0005);
        await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0006);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0006);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0007);
        await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0007);
        let dialogueElement = await Template.ƒS.Menu.getInput(payOrNot, "choices");
        switch (dialogueElement) {
            case payOrNot.pay:
                console.log("pay");
                await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0009);
                // await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
                Template.ƒS.Character.hide(Template.characters.librarian);
                Template.ƒS.Speech.hide();
                break;
            //return "certificate";
            case payOrNot.noPay:
                console.log("Dont pay");
                await Template.ƒS.Speech.tell(Template.characters.librarian, text.librarian.T0008);
                //await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
                Template.ƒS.Character.hide(Template.characters.librarian);
                Template.ƒS.Speech.hide();
                break;
            //return "oldHouse";
        }
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0008);
        document.querySelector("scene").appendChild(rightBook);
        rightBook.addEventListener('click', getRightBook);
        document.querySelector("scene").appendChild(calendar);
        calendar.addEventListener('click', getCalendar);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        while (!goNext) {
            timer++;
            console.log("in loop");
            await Template.ƒS.Progress.delay(2);
            if (timer > time && !alreadyMarked) {
                console.log("addedBlink");
                alreadyMarked = true;
                rightBook.classList.add("blink");
                calendar.classList.add("blink");
            }
        }
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "Lets put it in my backpack and head back.");
        return "meetInBetween";
    }
    Template.two_oldTownHall = two_oldTownHall;
    async function getRightBook() {
        Template.ƒS.Inventory.add(Template.items.birth_certificate);
        document.querySelector("scene").removeChild(rightBook);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "Ah this must be it");
        Template.ƒS.Speech.hide();
        document.getElementById("birthCert").style.zIndex = "2";
        document.getElementById("birthCert").addEventListener('click', remove);
        document.getElementById("oldCal").style.zIndex = "-1";
        while (looking) {
            console.log("in loop2");
            await Template.ƒS.Progress.delay(2);
        }
        Template.ƒS.Inventory.add(Template.items.birth_certificate);
        Template.dataForSave.gotCert = true;
        goNext = true;
    }
    async function getCalendar() {
        Template.ƒS.Inventory.add(Template.items.birth_certificate);
        document.querySelector("scene").removeChild(calendar);
        document.getElementById("oldCal").style.zIndex = "2";
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "Hm can this be useful? Maybe I sould remeber it for later.");
        Template.ƒS.Speech.hide();
        document.getElementById("oldCal").addEventListener('click', remove2);
        while (looking2) {
            console.log("in loop3");
            await Template.ƒS.Progress.delay(2);
        }
    }
    function remove() {
        document.getElementById("birthCert").style.zIndex = "-1";
        looking = false;
    }
    function remove2() {
        document.getElementById("oldCal").style.zIndex = "-1";
        looking2 = false;
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function two_villageEntrance() {
        console.log("two_villageEntrance ");
        let text1 = {
            char1: {
                T0000: "Do you got the certificate?",
                T0001: "Oh thats perfect!",
                T0002: "Now only the old item left.",
                T0003: "The best place for this would be our old house from which we moved out of years ago.",
                T0004: "Basically anything that could belong to a young girl. Like a diary or a toy.  "
            },
            protagonist: {
                T0000: "Yes i got it!",
                T0001: "What do i look for in particular?"
            }
        };
        let text2 = {
            char1: {
                T0000: "Oh yeah, I think that should do the trick!",
                T0001: "Now only the birth certificate is left.",
                T0002: "Now getting the birth certificate isn't really complicated and more tedious.",
                T0003: "All certificates are stored in the townhall and are maneged by the librarian.",
                T0004: "But since he doesn't like us he wont help us finding it.",
                T0005: "Please go to the townhall and get the certificate.",
                T0006: "Ah and our last name is Hawthrone if that helps.",
            },
            protagonist: {
                T0000: "I got an old golden comb from the old house. I hope this will work.",
                T0001: "Alright, i guess there is no point in waisting time."
            }
        };
        let text3 = {
            char1: {
                T0000: "Ah perfect.",
                T0001: "Well now we are going back and see if this works.",
            },
            protagonist: {
                T0000: "So now I got both things, the certificate and an old comb.",
                T0001: "What are we going to do next?",
            }
        };
        let helpYesNo = {
            iSayYes: "Help the old man and his daughter.",
            iSayNo: "Keep on traveling"
        };
        let dialogue = {
            iSayYes: "Yes",
            iSayNo: "No",
            iSayNothing: "......."
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        if (Template.dataForSave.gotCert && Template.dataForSave.gotComb) {
            Template.dataForSave.decision1 = Template.whichItemfirst.gotBoth;
        }
        await Template.ƒS.Location.show(Template.locations.eldenRing_dorf_eingang);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(0, 100, 20, 100));
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(100, 100, 70, 100));
        switch (Template.dataForSave.decision1) {
            case Template.whichItemfirst.Certfiicate:
                await Template.ƒS.Speech.tell(Template.characters.char1, text1.char1.T0000);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text1.protagonist.T0000);
                await Template.ƒS.Speech.tell(Template.characters.char1, text1.char1.T0001);
                await Template.ƒS.Speech.tell(Template.characters.char1, text1.char1.T0002);
                await Template.ƒS.Speech.tell(Template.characters.char1, text1.char1.T0003);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text1.protagonist.T0001);
                await Template.ƒS.Speech.tell(Template.characters.char1, text1.char1.T0004);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                return "oldHouse";
            case Template.whichItemfirst.Comb:
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text2.protagonist.T0000);
                await Template.ƒS.Speech.tell(Template.characters.char1, text2.char1.T0000);
                await Template.ƒS.Speech.tell(Template.characters.char1, text2.char1.T0001);
                await Template.ƒS.Speech.tell(Template.characters.char1, text2.char1.T0002);
                await Template.ƒS.Speech.tell(Template.characters.char1, text2.char1.T0003);
                await Template.ƒS.Speech.tell(Template.characters.char1, text2.char1.T0004);
                await Template.ƒS.Speech.tell(Template.characters.char1, text2.char1.T0005);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text2.protagonist.T0001);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                return "certificate";
            case Template.whichItemfirst.gotBoth:
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text3.protagonist.T0000);
                await Template.ƒS.Speech.tell(Template.characters.char1, text3.char1.T0000);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text3.protagonist.T0001);
                await Template.ƒS.Speech.tell(Template.characters.char1, text3.char1.T0001);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                return "goBack";
        }
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
        //await ƒS.update(1);
        //await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
        //await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        //await ƒS.Character.show(characters.char1, characters.char1.pose.normal, ƒS.positionPercent(20, 100));
    }
    Template.two_villageEntrance = two_villageEntrance;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function three_insideFamilyHouse() {
        console.log("three_insideFamilyHouse ");
        let text = {
            narrator: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
            },
            char1: {
                T0000: "Seraphina!",
                T0001: "We are back! Come here please!",
                T0002: "OH NOO! SERAPHINAA",
                T0003: "oh no no nonono",
                T0004: "No I think we still have time. We have to.",
                T0005: "But it could be crititcal to do this now while she is in this state.",
                T0006: "There could be complications wich can lead to a transformation...",
                T0007: "But the chances are not very high I think.",
                T0008: "What do you think should we do?",
                T0009: "",
                T0010: "",
                T0011: "",
            },
            protagonist: {
                T0000: "Oh that does not look good...",
                T0001: "Are we too late?",
                T0002: "Why is that? What could possibly happen??",
                T0003: "You think?!",
                T0004: "",
                T0005: "",
                T0006: "",
            },
            seraphina: {
                T0000: "ugghhh",
                T0001: "",
                T0002: "",
            }
        };
        let text1 = {
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
                T0000: "No we have to do it now!",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
            }
        };
        let text2 = {
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
                T0000: "Maybe if we wait the symptons will simply weaken and go away",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
            }
        };
        let text3 = {
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
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
            }
        };
        let dialogue = {
            help: "Do the procedure now.",
            wait: "Wait till symptons get weaker.",
            end: "A fast painless end for her."
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        await Template.ƒS.Location.show(Template.locations.insideFamilyHouse);
        await Template.ƒS.update(Template.transitions.starWars.duration, Template.transitions.starWars.alpha, Template.transitions.starWars.edge);
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(0, 100, 25, 100));
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(0, 100, 15, 100));
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0001);
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.ill, Template.slideInAnimation(100, 100, 75, 100));
        await Template.ƒS.Speech.tell(Template.characters.seraphina, text.seraphina.T0000);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0003);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0004);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0005);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0007);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0008);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0003);
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choices");
        switch (dialogueElement) {
            case dialogue.help:
                console.log("help");
                return "helpProcedure";
            case dialogue.wait:
                console.log("wait");
                Template.dataForSave.waitedToHeal = true;
                return "fight";
            case dialogue.end:
                console.log("End it");
                return "end_two";
        }
        Template.ƒS.Speech.hide();
    }
    Template.three_insideFamilyHouse = three_insideFamilyHouse;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function three_villageEntrance() {
        console.log("three_villageEntrance ");
        let text = {
            char1: {
                T0000: "Seraphina!",
                T0001: "We are back! Come here please!",
                T0002: "OH NOO! SERAPHINAA",
                T0003: "oh no no nonono",
                T0004: "No I think we still have time. We havet to.",
                T0005: "But it could be crtitcal to do this now while she is in this state.",
                T0006: "What do you think should we do?"
            },
            protagonist: {
                T0000: "Oh that does not look good...",
                T0001: "Are we too late?",
                T0002: "Why is that? What could possibly happen??",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
            },
            seraphina: {
                T0000: "ugghhh"
            }
        };
        let dialogue = {
            help: "Do the procedure now.",
            wait: "Wait till symptons get weaker.",
            end: "A fast painless end for her."
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        await Template.ƒS.Location.show(Template.locations.insideFamilyHouse);
        await Template.ƒS.update(Template.transitions.starWars.duration, Template.transitions.starWars.alpha, Template.transitions.starWars.edge);
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(0, 100, 25, 100));
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(0, 100, 20, 100));
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0001);
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.ill, Template.slideInAnimation(100, 100, 75, 100));
        Template.ƒS.Sound.fade(Template.sound.femaleCrying, 0.9, 1);
        await Template.ƒS.Speech.tell(Template.characters.seraphina, text.seraphina.T0000);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0003);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0004);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0005);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0002);
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choices");
        switch (dialogueElement) {
            case dialogue.help:
                console.log("help");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0003);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0004);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0007);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "");
                Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
                Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
                //await ƒS.Speech.tell(characters.protagonist, "");
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0008 + Template.dataForSave.nameProtagonist);
                break;
            case dialogue.wait:
                console.log("wait");
                Template.dataForSave.waitedToHeal = true;
                break;
            case dialogue.end:
                console.log("End it");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0005);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0009);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0010);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0011);
                await Template.ƒS.Location.show(Template.locations.eldenRing01);
                await Template.ƒS.Character.hide(Template.characters.char1);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.ƒS.positionPercent(20, 100));
                await Template.ƒS.update(Template.transitions.test2.duration, Template.transitions.test2.alpha, Template.transitions.test2.edge);
                break;
        }
        /* await ƒS.Speech.tell(characters.char1, text.char1.T0003);
        dialogueElement = await ƒS.Menu.getInput(dialogue, "choices");
    
    
        switch (dialogueElement) {
          case dialogue.iSayYes:
            console.log("Friendly");
            await ƒS.Speech.tell(characters.protagonist, "");
            dataForSave.nameProtagonist = await ƒS.Speech.getInput();
            characters.protagonist.name = dataForSave.nameProtagonist;
            await ƒS.Speech.tell(characters.protagonist, "");
            await ƒS.Speech.tell(characters.char1, text.char1.T0004 + dataForSave.nameProtagonist);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
            await ƒS.Speech.tell(characters.char1, text.char1.T0005);
    
    
            break;
    
          case dialogue.iSayNo:
            console.log("Rude");
            await ƒS.Speech.tell(characters.protagonist, "");
            dataForSave.nameProtagonist = await ƒS.Speech.getInput();
            characters.protagonist.name = dataForSave.nameProtagonist;
            await ƒS.Speech.tell(characters.char1, text.char1.T0004 + dataForSave.nameProtagonist);
            break;
    
          case dialogue.iSayNothing:
            console.log("Mute");
            await ƒS.Speech.tell(characters.protagonist, "");
            dataForSave.nameProtagonist = await ƒS.Speech.getInput();
            characters.protagonist.name = dataForSave.nameProtagonist;
            await ƒS.Speech.tell(characters.char1, text.char1.T0004 + dataForSave.nameProtagonist);
            break;
        } */
        /* dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        characters.protagonist.name = dataForSave.nameProtagonist; */
        Template.ƒS.Speech.hide();
    }
    Template.three_villageEntrance = three_villageEntrance;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function healSceneChoices() {
        console.log("First Test Scene");
        let text = {
            narrator: {
                T0000: "",
                T0001: "",
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
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
            }
        };
        let helpYesNo = {
            iSayYes: "Help the old man and his daughter.",
            iSayNo: "Keep on traveling"
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        await Template.ƒS.Location.show(Template.locations.novelPage_pergament);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        let dialogueElement = await Template.ƒS.Menu.getInput(helpYesNo, "choices");
        switch (dialogueElement) {
            case helpYesNo.iSayYes:
                console.log("Friendly");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0003);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0004);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0007);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "");
                Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
                Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
                //await ƒS.Speech.tell(characters.protagonist, "");
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0008 + Template.dataForSave.nameProtagonist);
                break;
            case helpYesNo.iSayNo:
                console.log("Rude");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0005);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0009);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0010);
                await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T0006);
                await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0011);
                await Template.ƒS.Location.show(Template.locations.eldenRing01);
                await Template.ƒS.Character.hide(Template.characters.char1);
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.ƒS.positionPercent(20, 100));
                await Template.ƒS.update(Template.transitions.test2.duration, Template.transitions.test2.alpha, Template.transitions.test2.edge);
                break;
        }
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
        //await ƒS.update(1);
        //await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
        Template.ƒS.Speech.hide();
    }
    Template.healSceneChoices = healSceneChoices;
})(Template || (Template = {}));
var Template;
(function (Template) {
    let quickTimelength = 9;
    let chars = "ABCDEFGHJKLNOPQRSTUVWXYZ";
    let resultFight;
    (function (resultFight) {
        resultFight[resultFight["won"] = 0] = "won";
        resultFight[resultFight["killedHer"] = 1] = "killedHer";
        resultFight[resultFight["died"] = 2] = "died";
    })(resultFight = Template.resultFight || (Template.resultFight = {}));
    let fightResult;
    let failures = 1;
    let succes = 1;
    let lifeProt = 8;
    let lifeSera = 8;
    async function four_fightInTown() {
        console.log("four_fightInTown ");
        let text1 = {
            narrator: {
                T0000: "As you wait you notice how Seraphina's skin get more red and her whole gets bigger.",
                T0001: "Maybe waiting wasn't the best idea..."
            },
            protagonist: {
                T0000: "Maybe if we wait the symptons will simply weaken and go away"
            }
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        await Template.ƒS.Location.show(Template.locations.insideFamilyHouse);
        await Template.ƒS.update();
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
        console.log("waited?:" + Template.dataForSave.waitedToHeal);
        if (Template.dataForSave.waitedToHeal) {
            console.log("waited");
            await Template.ƒS.Speech.tell(Template.characters.protagonist, text1.protagonist.T0000);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text1.narrator.T0000);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text1.narrator.T0001);
        }
        else {
            console.log("tried to heal");
        }
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.0, 1);
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.ill, Template.slideInAnimation(70, 100, 70, 200));
        Template.ƒS.Sound.fade(Template.sound.monsterScream, 0.5, 1);
        Template.ƒS.Sound.fade(Template.sound.battle, 0.3, 1);
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.monster, Template.slideInAnimation(70, 200, 70, 100));
        await Template.ƒS.Speech.tell(Template.characters.narrator, "She transformed into a horrendous Monster!! ");
        await Template.ƒS.Speech.tell(Template.characters.char1, "oh no oo oo Seraphina.... ");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "You have to fight and win to help her! ");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "But be careful not to overdo it! ");
        if (Template.dataForSave.waitedToHeal) {
            await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(15, 100, 25, 100));
            await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(25, 100, 10, 100));
        }
        //Fight starts
        let meterProt = document.getElementById("lifeProt");
        let meterSera = document.getElementById("lifeSera");
        meterProt.value = lifeProt;
        meterSera.value = lifeSera;
        meterProt.max = lifeProt;
        meterSera.max = lifeSera;
        meterProt.style.zIndex = "2";
        meterSera.style.zIndex = "2";
        // document.getElementById("meterBar").value = ;
        // QUICKTIME EVENTS
        ////////////////////////////////////////////////////////////////////////
        document.getElementById("displayText").style.zIndex = "2";
        for (let i = 0; i < quickTimelength; i++) {
            let charToPress = chars.charAt(Math.floor(Math.random() * chars.length));
            document.getElementById("displayText").innerHTML = "HOLD " + charToPress;
            await Template.ƒS.Progress.delay(1 + Math.random() * 2);
            if (Template.ƒ.Keyboard.isPressedOne([convertKeyCode(charToPress)])) {
                console.log("succes++");
                succes++;
                lifeSera--;
                document.getElementById("displayText").innerHTML = "Succes";
            }
            else {
                console.log("failures++");
                failures++;
                lifeProt--;
                document.getElementById("displayText").innerHTML = "Failure";
            }
            console.log("Succes " + succes);
            console.log("failures " + failures);
            meterProt.value = lifeProt;
            meterSera.value = lifeSera;
            await Template.ƒS.Progress.delay(1);
            if (lifeSera <= 0 || lifeProt <= 0) {
                break;
            }
        }
        meterProt.style.zIndex = "-1";
        meterSera.style.zIndex = "-1";
        document.getElementById("displayText").style.zIndex = "-1";
        console.log("Final stats");
        console.log("Succes " + succes);
        console.log("failures " + failures);
        if (lifeProt >= 0 && lifeSera >= 0)
            fightResult = resultFight.won;
        if (lifeProt > 0 && lifeSera <= 0)
            fightResult = resultFight.killedHer;
        if (lifeProt <= 0 && lifeSera >= 0)
            fightResult = resultFight.died;
        Template.ƒS.Sound.fade(Template.sound.battle, 0.0, 1);
        switch (fightResult) {
            case resultFight.won:
                console.log("Won");
                return "end_seven";
            case resultFight.killedHer:
                console.log("Killed her");
                return "end_five";
            case resultFight.died:
                console.log("Died");
                return "end_six";
        }
    }
    Template.four_fightInTown = four_fightInTown;
    function convertKeyCode(char) {
        switch (char) {
            case "A":
                return Template.ƒ.KEYBOARD_CODE.A;
            case "B":
                return Template.ƒ.KEYBOARD_CODE.B;
            case "C":
                return Template.ƒ.KEYBOARD_CODE.C;
            case "D":
                return Template.ƒ.KEYBOARD_CODE.D;
            case "E":
                return Template.ƒ.KEYBOARD_CODE.E;
            case "F":
                return Template.ƒ.KEYBOARD_CODE.F;
            case "G":
                return Template.ƒ.KEYBOARD_CODE.G;
            case "H":
                return Template.ƒ.KEYBOARD_CODE.H;
            case "I":
                return Template.ƒ.KEYBOARD_CODE.I;
            case "J":
                return Template.ƒ.KEYBOARD_CODE.J;
            case "K":
                return Template.ƒ.KEYBOARD_CODE.K;
            case "L":
                return Template.ƒ.KEYBOARD_CODE.L;
            case "M":
                return Template.ƒ.KEYBOARD_CODE.M;
            case "N":
                return Template.ƒ.KEYBOARD_CODE.N;
            case "O":
                return Template.ƒ.KEYBOARD_CODE.O;
            case "P":
                return Template.ƒ.KEYBOARD_CODE.P;
            case "Q":
                return Template.ƒ.KEYBOARD_CODE.Q;
            case "R":
                return Template.ƒ.KEYBOARD_CODE.R;
            case "S":
                return Template.ƒ.KEYBOARD_CODE.S;
            case "T":
                return Template.ƒ.KEYBOARD_CODE.T;
            case "U":
                return Template.ƒ.KEYBOARD_CODE.U;
            case "V":
                return Template.ƒ.KEYBOARD_CODE.V;
            case "W":
                return Template.ƒ.KEYBOARD_CODE.W;
            case "X":
                return Template.ƒ.KEYBOARD_CODE.X;
            case "Y":
                //CHANGED DO TO ENGLISCH LAYOUT
                return Template.ƒ.KEYBOARD_CODE.Z;
            case "Z":
                //CHANGED DO TO ENGLISCH LAYOUT
                return Template.ƒ.KEYBOARD_CODE.Y;
            default:
                return Template.ƒ.KEYBOARD_CODE.A;
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    let failures = 1;
    let succes = 1;
    async function four_insideFamilyHouse() {
        console.log("four_insideFamilyHouse");
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        //ƒS.Speech.hide();
        await Template.ƒS.Speech.tell(Template.characters.char1, "Try to calm her down");
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(25, 100, 10, 100));
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(15, 100, 25, 100));
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "");
        let input = "";
        input = await Template.ƒS.Speech.getInput();
        if (input.includes("calm down") || input.includes("deep breaths") || input.includes("it's going to be okay") || input.includes("okay")) {
            await Template.ƒS.Speech.tell(Template.characters.narrator, "she calms down a bit");
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.narrator, "it doesn't seem to work...");
        }
        /////////////////////////////////////////////////////////////////////////
        await Template.ƒS.Speech.tell(Template.characters.narrator, "What is the day of Seraphina's birth?    ");
        let inputDate = await Template.ƒS.Speech.getInput();
        if (inputDate.includes("13")) {
            succes++;
            await Template.ƒS.Speech.tell(Template.characters.narrator, "correct");
        }
        else {
            failures++;
            await Template.ƒS.Speech.tell(Template.characters.narrator, "not correct");
        }
        console.log("Succes " + succes);
        console.log("failures " + failures);
        ////////////////////////////////////////////////////////////////////////
        await Template.ƒS.Speech.tell(Template.characters.narrator, "What was the unusual thing on that day? ");
        input = await Template.ƒS.Speech.getInput();
        if (input.includes("blood moon") || input.includes("red moon") || input.includes("moon constellation") || input.includes("blut mond") || input.includes("red")) {
            await Template.ƒS.Speech.tell(Template.characters.narrator, "correct");
            succes++;
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.narrator, "not correct");
            failures++;
        }
        /*  let dialogue = {
           iSayYes: "Yes",
           iSayNo: "No",
           iSayNothing: "......."
         }; */
        /*  let dialogueElement = await ƒS.Menu.getInput(dialogue, "choices");
     
         switch (dialogueElement) {
           case dialogue.iSayYes:
             succes++;
             break;
           case dialogue.iSayNo:
             failures++;
             break;
           default:
             failures++;
             break;
         } */
        Template.ƒS.Speech.hide();
        console.log("Succes " + succes);
        console.log("failures " + failures);
        if (succes > failures) {
            await Template.ƒS.Speech.tell(Template.characters.narrator, "It seems to have worked!");
            Template.ƒS.Speech.hide();
            return "end_three";
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.narrator, "It doesn't seem to be enough...");
            Template.ƒS.Speech.hide();
            return "fight";
        }
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
        //await ƒS.update(1);
        //await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    }
    Template.four_insideFamilyHouse = four_insideFamilyHouse;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function five_villageEntrance() {
        console.log("five_villageEntrance ");
    }
    Template.five_villageEntrance = five_villageEntrance;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function end() {
        console.log("end ");
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.0, 1, true);
        Template.ƒS.Speech.hide();
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update();
    }
    Template.end = end;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function end_five() {
        console.log("end_five ");
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        Template.ƒS.Sound.fade(Template.sound.femaleDeatchCry, 0.8, 1);
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.monster, Template.slideInAnimation(70, 100, 70, 200));
        await Template.ƒS.Speech.tell(Template.characters.char1, "NOOOO");
        await Template.ƒS.Speech.tell(Template.characters.char1, "YOU KILLED HER!!");
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(10, 100, 70, 100));
        await Template.ƒS.Speech.tell(Template.characters.char1, "HOW COULD YOU!");
        await Template.ƒS.Speech.tell(Template.characters.char1, "SHE WAS JUST A LITTLE GIRL!");
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "im sorry that wasn't my intention...");
        await Template.ƒS.Speech.tell(Template.characters.char1, "LEAVE!! GOO");
        await Template.ƒS.Speech.tell(Template.characters.char1, "I HOPE I NEVER SEE YOU AGAIN!!");
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.lonelyRoad);
        Template.ƒS.Sound.fade(Template.sound.horseRiding, 0.9, 1);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "As you leave in remorse you keep thinking about how you could have done better...");
        Template.ƒS.Speech.hide();
        return "blackScreen";
    }
    Template.end_five = end_five;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function end_four() {
        console.log("end_four ");
    }
    Template.end_four = end_four;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function end_one() {
        console.log("end_one ");
        let text = {
            narrator: {
                T0000: "As you keep on traveling you keep thinking about the old man and his daughter.",
                T0001: "'Should i have stayed and helped?' you keep on thinking ...",
                T0002: "But who knows what would have happend if you stayed...",
                T0003: "...",
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
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
            }
        };
        Template.ƒS.Speech.hide();
        //ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);
        await Template.ƒS.Location.show(Template.locations.lonelyRoad);
        Template.ƒS.Sound.fade(Template.sound.horseRiding, 0.9, 1);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        //await ƒS.Character.hide(characters.char1);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        /* await ƒS.Location.show(locations.eldenRing_dorf_eingang);
        await ƒS.Location.show(locations.eldenRing01);
            await ƒS.Character.hide(characters.char1);
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
    
            await ƒS.update(transitions.test2.duration, transitions.test2.alpha, transitions.test2.edge);
    
        ƒS.Speech.hide(); */
        return "blackScreen";
    }
    Template.end_one = end_one;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function end_seven() {
        console.log("end_seven");
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.monster, Template.slideInAnimation(70, 100, 70, 200));
        Template.ƒS.Sound.fade(Template.sound.vicotrySound, 0.4, 1);
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.normal, Template.slideInAnimation(70, 200, 70, 100));
        await Template.ƒS.Speech.tell(Template.characters.seraphina, "ughh... ");
        await Template.ƒS.Speech.tell(Template.characters.seraphina, "what happend? ");
        await Template.ƒS.Speech.tell(Template.characters.char1, "Seraphina!!");
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(10, 100, 55, 100));
        await Template.ƒS.Speech.tell(Template.characters.char1, "Everything is fine!! You are okay! We are okay!");
        await Template.ƒS.Speech.tell(Template.characters.char1, "Thank you so much " + Template.dataForSave.nameProtagonist + "! We will always be in your debt!");
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "I'm glad I could help...");
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.lonelyRoad);
        Template.ƒS.Sound.fade(Template.sound.horseRiding, 0.4, 1);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "And so ends another adventure of " + Template.dataForSave.nameProtagonist + "...");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
        Template.ƒS.Speech.hide();
        return "blackScreen";
    }
    Template.end_seven = end_seven;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function end_six() {
        console.log("end_six");
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Seems like it wasn't enough...");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Seraphina is way to strong in this form...");
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.monster, Template.slideInAnimation(70, 100, 30, 100));
        Template.ƒS.Sound.fade(Template.sound.playerDeatchCry, 0.4, 1);
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(25, 100, 25, 200));
        await Template.ƒS.Speech.tell(Template.characters.char1, "Seraphina please ... don't ... ");
        Template.ƒS.Sound.fade(Template.sound.playerDeatchCry, 0.3, 1);
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(10, 100, 15, 200));
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.lonelyRoad);
        Template.ƒS.Sound.fade(Template.sound.horseRiding, 0.4, 1);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "As you couldn't contain her, Seraphina, or the red monster, as she was called from now on, destroyed every town in her way...");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
        Template.ƒS.Speech.hide();
        return "blackScreen";
    }
    Template.end_six = end_six;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function end_three() {
        console.log("end_three ");
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.ill, Template.slideInAnimation(75, 100, 75, 200));
        await Template.ƒS.Character.animate(Template.characters.seraphina, Template.characters.seraphina.pose.normal, Template.slideInAnimation(75, 200, 75, 100));
        await Template.ƒS.Speech.tell(Template.characters.char1, "Oh Seraphina ...");
        await Template.ƒS.Speech.tell(Template.characters.char1, "Do you feel better?");
        await Template.ƒS.Speech.tell(Template.characters.seraphina, "Yes dad, much better!!");
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(25, 100, 62, 100));
        await Template.ƒS.Speech.tell(Template.characters.seraphina, "Actually I think I'm cured!");
        await Template.ƒS.Speech.tell(Template.characters.char1, "Oh thats wonderful!");
        await Template.ƒS.Speech.tell(Template.characters.char1, "Thank you so much " + Template.dataForSave.nameProtagonist + "!");
        await Template.ƒS.Speech.tell(Template.characters.char1, "We will forever be in your debt!!");
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "I did what anyone would try and I'm happy that it all worked out.");
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "If you excuse me, I have to keep going...");
        await Template.ƒS.Speech.tell(Template.characters.char1, "Yes of course. Thank you so much!");
        await Template.ƒS.Speech.tell(Template.characters.seraphina, "Thank you. And please visit us if you come through here again!");
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "I certainly will. Now Gooodbye...");
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.lonelyRoad);
        Template.ƒS.Sound.fade(Template.sound.horseRiding, 0.4, 1);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.horse_behind, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "And so ends another adventure of " + Template.dataForSave.nameProtagonist + "...");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
        Template.ƒS.Speech.hide();
        return "blackScreen";
    }
    Template.end_three = end_three;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function end_two() {
        console.log("end_two ");
        let text = {
            narrator: {
                T0000: "He tries to push ýou away from here but you are way to strong for him.",
                T0001: "He keeps pleading but you dont stop.",
                T0002: "'It needs to be done' you keep telling yourself.",
                T0003: ".....",
            },
            char1: {
                T0000: "WHATTT???",
                T0001: "DON'T YOU DARE!!",
                T0002: "PLEASE DON'T DO DO IT"
            }
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.atmo1, 0.05, 1, true);
        /* ƒS.Sound.play(sound.payingSound, 0.2, true);
        ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
        //await ƒS.Location.show(locations.insideFamilyHouse);
        await Template.ƒS.Character.animate(Template.characters.char1, Template.characters.char1.pose.normal, Template.slideInAnimation(25, 100, 60, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Character.animate(Template.characters.protagonist, Template.characters.protagonist.pose.normal, Template.slideInAnimation(15, 100, 30, 100));
        await Template.ƒS.Speech.tell(Template.characters.char1, text.char1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        Template.ƒS.Sound.fade(Template.sound.femaleDeatchCry, 0.9, 1);
        Template.ƒS.Character.hideAll();
        return "blackScreen";
    }
    Template.end_two = end_two;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map
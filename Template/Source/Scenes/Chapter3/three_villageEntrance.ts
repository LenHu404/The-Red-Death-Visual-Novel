namespace Template {
  export async function three_villageEntrance(): ƒS.SceneReturn {
    console.log("three_villageEntrance ");

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
        T0004: "No I think we still have time. We havet to.",
        T0005: "But it could be crtitcal to do this now while she is in this state.",
        T0006: "What do you think should we do?",
        T0007: "",
        T0008: "",
        T0009: "",
        T0010: "",
        T0011: "",

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
        T0000: "ugghhh",
        T0001: "",
        T0002:"",
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
      end:  "A fast painless end for her."
    };


    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */


    await ƒS.Location.show(locations.insideFamilyHouse);
    await ƒS.update(transitions.starWars.duration, transitions.starWars.alpha, transitions.starWars.edge);
    
    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(0, 100, 25, 100));
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(0, 100, 20, 100));
   
    await ƒS.Speech.tell(characters.char1, text.char1.T0000);
    await ƒS.Speech.tell(characters.char1, text.char1.T0001);

    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.ill, slideInAnimation(100, 100, 75, 100));
    await ƒS.Speech.tell(characters.seraphina, text.seraphina.T0000);
    await ƒS.Speech.tell(characters.char1, text.char1.T0002);
    await ƒS.Speech.tell(characters.char1, text.char1.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
    await ƒS.Speech.tell(characters.char1, text.char1.T0004);
    await ƒS.Speech.tell(characters.char1, text.char1.T0005);
    await ƒS.Speech.tell(characters.char1, text.char1.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);





    let dialogueElement = await ƒS.Menu.getInput(dialogue, "choices");


    switch (dialogueElement) {
      case dialogue.help:
        console.log("help");
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
        await ƒS.Speech.tell(characters.char1, text.char1.T0006);
        await ƒS.Speech.tell(characters.char1, text.char1.T0007);
        await ƒS.Speech.tell(characters.protagonist, "");
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        characters.protagonist.name = dataForSave.nameProtagonist;
        //await ƒS.Speech.tell(characters.protagonist, "");
        await ƒS.Speech.tell(characters.char1, text.char1.T0008 + dataForSave.nameProtagonist);
        break;

      case dialogue.wait:
        console.log("wait");
        dataForSave.waitedToHeal = true;
        

        break;
      case dialogue.end:
          console.log("End it");
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
          await ƒS.Speech.tell(characters.char1, text.char1.T0009);
          await ƒS.Speech.tell(characters.char1, text.char1.T0010);
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
          await ƒS.Speech.tell(characters.char1, text.char1.T0011);
          await ƒS.Location.show(locations.eldenRing01);
          await ƒS.Character.hide(characters.char1);
          await ƒS.Character.hide(characters.protagonist);
          await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
  
          await ƒS.update(transitions.test2.duration, transitions.test2.alpha, transitions.test2.edge);
  
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


    ƒS.Speech.hide();


  }
}
namespace Template {
  export async function five_villageEntrance(): ƒS.SceneReturn {
    console.log("five_villageEntrance ");

    let text = {
      narrator: {
        T0000: "Riding through the village, the main character catches sight of an elderly man desperately waving for attention.",
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
        T0007: "What name can we call you?",
        T0008: "Be praised...",
        T0009: "No no no nonono... ",
        T0010: "You have to help us!! Or we are doomed!",
        T0011: "This can not be happening...",

      },
      protagonist: {
        T0000: "What troubles you, old man?",
        T0001: "Why do you seem so distressed?",
        T0002: "The red death? I've heard whispers of such a disease. Tell me more about it, old man.",
        T0003: "I understand your desperation, and I sympathize with your plight. What makes you believe I can help?  ",
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


    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */


    await ƒS.Location.show(locations.eldenRing_dorf_eingang);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.horse_behind, slideInAnimation(0, 100, 20, 100));

    //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
    //await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);


    //await ƒS.Character.show(characters.char1, characters.char1.pose.normal, ƒS.positionPercent(20, 100));
    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(100, 100, 70, 100));
     
    ƒS.Inventory.add(items.birth_certificate);
    ƒS.Inventory.add(items.golden_comb);
    
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.char1, text.char1.T0000);
    await ƒS.Speech.tell(characters.char1, text.char1.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);
    await ƒS.Character.hide(characters.protagonist);
    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_normal, ƒS.positionPercent(20, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
    await ƒS.Speech.tell(characters.char1, text.char1.T0002);
    await ƒS.Speech.tell(characters.char1, text.char1.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
    await ƒS.Speech.tell(characters.char1, text.char1.T0004);
    await ƒS.Speech.tell(characters.char1, text.char1.T0005);


    let dialogueElement = await ƒS.Menu.getInput(helpYesNo, "choices");


    switch (dialogueElement) {
      case helpYesNo.iSayYes:
        console.log("Friendly");
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

      case helpYesNo.iSayNo:
        console.log("Rude");
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
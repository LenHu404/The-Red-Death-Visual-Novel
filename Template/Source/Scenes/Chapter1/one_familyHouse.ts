namespace Template {
  export async function one_familyHouse(): ƒS.SceneReturn {
    console.log("First Test Scene");
    characters.protagonist.name = dataForSave.nameProtagonist;

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
        T0005: "Seraphina, this is " + dataForSave.nameProtagonist + ". He can help you!",
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

      }
      ,
      seraphina: {
        T0000: "Really?!",
        T0001: "Thank you so much. I am never going to be able to repay you if you do.",
        T0002: "Good luck and bless you for helping!",

      }
    };

    let WhichItem = {
      certificate: "Get the birth certificate.",
      oldHouse: "Get the old item."
    };

    await ƒS.Character.hide(characters.protagonist);

    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */


    await ƒS.Location.show(locations.familyHouse);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);

    //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
    //await ƒS.update(1);
    //await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);

    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(100, 100, 70, 100));
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(0, 100, 20, 100));

    //await ƒS.Character.show(characters.char1, characters.char1.pose.normal, ƒS.positionPercent(20, 100));

    await ƒS.Speech.tell(characters.char1, text.char1.T0000);
    await ƒS.Speech.tell(characters.char1, text.char1.T0001);
    await ƒS.Speech.tell(characters.char1, text.char1.T0002);
    await ƒS.Speech.tell(characters.char1, text.char1.T0003);
    await ƒS.Character.hide(characters.protagonist);
    await ƒS.Character.hide(characters.char1);
    await ƒS.update(1);


    // Inside te house
    await ƒS.Location.show(locations.insideFamilyHouse);
    await ƒS.Character.show(characters.seraphina, characters.seraphina.pose.normal, ƒS.positionPercent(75, 100))
    await ƒS.update(transitions.swirl.duration, transitions.swirl.alpha, transitions.swirl.edge);
    await ƒS.update();
    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(100, 100, 70, 100));
    await ƒS.Speech.tell(characters.char1, text.char1.T0004);
    await ƒS.Speech.tell(characters.char1, text.char1.T0005);
    await ƒS.Speech.tell(characters.seraphina, text.seraphina.T0000);
    await ƒS.Speech.tell(characters.seraphina, text.seraphina.T0001);
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(0, 100, 20, 100));
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
    await ƒS.Speech.tell(characters.char1, text.char1.T0006);
    await ƒS.Speech.tell(characters.char1, text.char1.T0007);


    let dialogueElement = await ƒS.Menu.getInput(WhichItem, "choices");

    switch (dialogueElement) {
      case WhichItem.certificate:
        console.log("certificate");
        dataForSave.decision1 = whichItemfirst.Certfiicate;
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
        await ƒS.Speech.tell(characters.char1, text.char1.T0009);
        await ƒS.Speech.tell(characters.char1, text.char1.T0010);
        await ƒS.Speech.tell(characters.char1, text.char1.T0011);
        await ƒS.Speech.tell(characters.char1, text.char1.T0012);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
        await ƒS.Speech.tell(characters.seraphina, text.seraphina.T0002);
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        return "certificate";
      case WhichItem.oldHouse:
        dataForSave.decision1 = whichItemfirst.Comb;
        await ƒS.Speech.tell(characters.char1, text.char1.T0013);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
        await ƒS.Speech.tell(characters.char1, text.char1.T0014);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
        await ƒS.Speech.tell(characters.seraphina, text.seraphina.T0002);
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        return "oldHouse";
    }
  }
}

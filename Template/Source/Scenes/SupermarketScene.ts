namespace Template {
  export async function SupermarketScene(): ƒS.SceneReturn {
    console.log("First Test Scene");

    let dialogue = {
      iSayYes: "Okay",
      iSayNo: "No",
      iSayNothing: "......."
    };


    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.supermarketTrolleys, 0.2, 1, true);
    ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true);


    await ƒS.Location.show(locations.supermarketInside);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Character.show(characters.Eduard, characters.Eduard.pose.normal, ƒS.positionPercent(20, 100));
    await ƒS.Character.show(characters.Aisaka, characters.Aisaka.pose.happy, ƒS.positionPercent(70, 110));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Aisaka, "I'm hungry. Can I go into the store?");
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    characters.protagonist.name = dataForSave.nameProtagonist;
    let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass");




    switch (dialogueElement) {
      case dialogue.iSayYes:
        console.log("Friendly Brother");
        // continue path here
        await ƒS.Speech.tell(characters.protagonist, "Make it quick.");
        //await ƒS.Character.hide(characters.Eduard);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Aisaka, "Okay it wont take long!");
        await ƒS.Character.hide(characters.Aisaka);
        await ƒS.Character.animate(characters.Aisaka, characters.Aisaka.pose.happy, ghostAnimation());
        break;

      case dialogue.iSayNo:
        console.log("Rude Brother");
        // continue path here
        await ƒS.Speech.tell(characters.Eduard, textAusgelagert.Eduard.T0001);
        //await ƒS.Character.hide(characters.Eduard);
        await ƒS.Character.hide(characters.Aisaka);
        await ƒS.Character.show(characters.Aisaka, characters.Aisaka.pose.angry, ƒS.positionPercent(70, 110));
        await ƒS.update(0.5);
        await ƒS.Character.animate(characters.Aisaka, characters.Aisaka.pose.angry, angryAnimation());
        await ƒS.Speech.tell(characters.Aisaka, textAusgelagert.Aisaka.T0001);
        break;

      case dialogue.iSayNothing:
        console.log("Mute Brother");
        // continue path here
        // continue path here
        await ƒS.Speech.tell(characters.Eduard, ".............");
        await ƒS.Speech.tell(characters.Eduard, "..buy something for me too.");
        //await ƒS.Character.hide(characters.Eduard);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Aisaka, "Alright i'll be right back with something sweet for you!");
        await ƒS.Character.hide(characters.Aisaka);
        await ƒS.Character.animate(characters.Aisaka, characters.Aisaka.pose.happy, ghostAnimation());
        break;
    }



    ƒS.Speech.hide();


  }
}
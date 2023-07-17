namespace Template {
  export async function healSceneChoices(): ƒS.SceneReturn {
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


    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */


    await ƒS.Location.show(locations.novelPage_pergament);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);


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

    //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
    //await ƒS.update(1);
    //await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
   

    ƒS.Speech.hide();


  }
}
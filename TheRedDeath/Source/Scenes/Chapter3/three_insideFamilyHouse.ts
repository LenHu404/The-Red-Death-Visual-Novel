namespace Template {
  export async function three_insideFamilyHouse(): ƒS.SceneReturn {
    console.log("three_insideFamilyHouse ");
    characters.protagonist.name = dataForSave.nameProtagonist;

    if(dataForSave.gotCert && ƒS.Inventory.getAmount(items.birth_certificate) == 0) {
      ƒS.Inventory.add(items.birth_certificate);
    }
    if(dataForSave.gotComb && ƒS.Inventory.getAmount(items.golden_comb) == 0) {
      ƒS.Inventory.add(items.golden_comb);
    }


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


    let dialogue = {
      help: "Do the procedure now.",
      wait: "Wait till symptons get weaker.",
      end: "A fast painless end for her."
    };


    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */


    await ƒS.Location.show(locations.insideFamilyHouse);
    await ƒS.update(transitions.starWars.duration, transitions.starWars.alpha, transitions.starWars.edge);

    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(0, 100, 25, 100));
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(0, 100, 15, 100));

    await ƒS.Speech.tell(characters.char1, text.char1.T0000);
    await ƒS.Speech.tell(characters.char1, text.char1.T0001);

    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.ill, slideInAnimation(100, 100, 75, 100));
    ƒS.Sound.fade(sound.femaleCrying, 0.2, 1);
    await ƒS.Speech.tell(characters.seraphina, text.seraphina.T0000);
    await ƒS.Speech.tell(characters.char1, text.char1.T0002);
    await ƒS.Speech.tell(characters.char1, text.char1.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
    await ƒS.Speech.tell(characters.char1, text.char1.T0004);
    await ƒS.Speech.tell(characters.char1, text.char1.T0005);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
    await ƒS.Speech.tell(characters.char1, text.char1.T0006);
    await ƒS.Speech.tell(characters.char1, text.char1.T0007);
    await ƒS.Speech.tell(characters.char1, text.char1.T0008);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);






    let dialogueElement = await ƒS.Menu.getInput(dialogue, "choices");


    switch (dialogueElement) {
      case dialogue.help:
        console.log("help");

        return "helpProcedure";
      case dialogue.wait:
        console.log("wait");
        dataForSave.waitedToHeal = true;
        return "fight";
      case dialogue.end:
        console.log("End it");

        return "end_two";
    }


    ƒS.Speech.hide();


  }
}
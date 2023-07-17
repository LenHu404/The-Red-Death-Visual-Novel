namespace Template {
  export async function end_one(): ƒS.SceneReturn {
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

    ƒS.Speech.hide();
    //ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);
    await ƒS.Location.show(locations.lonelyRoad);
    ƒS.Sound.fade(sound.horseRiding, 0.9, 1);
    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(40, 100));
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
    await ƒS.Character.hide(characters.protagonist);
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
}
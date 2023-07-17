namespace Template {
  export async function end_two(): ƒS.SceneReturn {
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




    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */


    //await ƒS.Location.show(locations.insideFamilyHouse);
    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(25, 100, 60, 100));

    await ƒS.update();

    await ƒS.Speech.tell(characters.char1, text.char1.T0000);
    await ƒS.Speech.tell(characters.char1, text.char1.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(15, 100, 30, 100));

    await ƒS.Speech.tell(characters.char1, text.char1.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
    ƒS.Sound.fade(sound.femaleDeatchCry, 0.9, 1);

    ƒS.Character.hideAll();
    return "blackScreen";


  }
}
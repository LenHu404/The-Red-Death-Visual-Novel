namespace Template {
  export async function end_seven(): ƒS.SceneReturn {
    console.log("end_seven");

    


    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */

    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.monster, slideInAnimation(70, 100, 70, 200));
    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.normal, slideInAnimation(70, 200, 70, 100));

    await ƒS.Speech.tell(characters.seraphina, "ughh... ");
    await ƒS.Speech.tell(characters.seraphina, "what happend? ");

    await ƒS.Speech.tell(characters.char1, "Seraphina!!");
    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(10, 100, 55, 100));

    await ƒS.Speech.tell(characters.char1, "Everything is fine!! You are okay! We are okay!");
    await ƒS.Speech.tell(characters.char1, "Thank you so much " + dataForSave.nameProtagonist + "! We will always be in your debt!");
    await ƒS.Speech.tell(characters.protagonist, "I'm glad I could help...");

    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.lonelyRoad);
    ƒS.Sound.fade(sound.horseRiding, 0.4, 1);
    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(40, 100));
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Speech.tell(characters.narrator, "And so ends another adventure of " + dataForSave.nameProtagonist + "...");

    await ƒS.Speech.tell(characters.narrator, "...");




    ƒS.Speech.hide();

    return "blackScreen";



  }
}
namespace Template {
  export async function end_five(): ƒS.SceneReturn {
    console.log("end_five ");



    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);
    ƒS.Sound.fade(sound.femaleDeatchCry, 0.8, 1);
    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.monster, slideInAnimation(70, 100, 70, 200));

    await ƒS.Speech.tell(characters.char1, "NOOOO");
    await ƒS.Speech.tell(characters.char1, "YOU KILLED HER!!");
    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(10, 100, 70, 100));
    await ƒS.Speech.tell(characters.char1, "HOW COULD YOU!");
    await ƒS.Speech.tell(characters.char1, "SHE WAS JUST A LITTLE GIRL!");
    await ƒS.Speech.tell(characters.protagonist, "im sorry that wasn't my intention...");

    await ƒS.Speech.tell(characters.char1, "LEAVE!! GOO");
    await ƒS.Speech.tell(characters.char1, "I HOPE I NEVER SEE YOU AGAIN!!");

    ƒS.Character.hideAll();


    await ƒS.Location.show(locations.lonelyRoad);
    ƒS.Sound.fade(sound.horseRiding, 0.9, 1);

    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(40, 100));
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Speech.tell(characters.narrator, "As you leave in remorse you keep thinking about how you could have done better...");



    ƒS.Speech.hide();

    return "blackScreen";
    




  }
}
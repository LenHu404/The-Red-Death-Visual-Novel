namespace Template {
  export async function end_six(): ƒS.SceneReturn {
    console.log("end_six");

   


    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    await ƒS.Speech.tell(characters.narrator, "Seems like it wasn't enough...");
    await ƒS.Speech.tell(characters.narrator, "Seraphina is way to strong in this form...");
    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.monster, slideInAnimation(70, 100, 30, 100));


    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(25, 100, 25, 200));

    await ƒS.Speech.tell(characters.char1, "Seraphina please ... don't ... ");

    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(10, 100, 15, 200));

   

    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.lonelyRoad);
    ƒS.Sound.fade(sound.horseRiding, 0.4, 1);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Speech.tell(characters.narrator, "As you couldn't contain her, Seraphina, or the red monster, as she was called from now on, destroyed every town in her way...");
    await ƒS.Speech.tell(characters.narrator, "...");


    ƒS.Speech.hide();

    return "blackScreen";

  }
}
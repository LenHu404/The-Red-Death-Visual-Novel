namespace Template {
  export async function end_three(): ƒS.SceneReturn {
    console.log("end_three ");

    
    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.ill, slideInAnimation(75, 100, 75, 200));
    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.normal, slideInAnimation(75, 200, 75, 100));

    await ƒS.Speech.tell(characters.char1, "Oh Seraphina ...");

    await ƒS.Speech.tell(characters.char1, "Do you feel better?");
    await ƒS.Speech.tell(characters.seraphina, "Yes dad, much better!!");

    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(25, 100, 62, 100));


    await ƒS.Speech.tell(characters.seraphina, "Actually I think I'm cured!");

    await ƒS.Speech.tell(characters.char1, "Oh thats wonderful!");
    await ƒS.Speech.tell(characters.char1, "Thank you so much " + dataForSave.nameProtagonist + "!");
    await ƒS.Speech.tell(characters.char1, "We will forever be in your debt!!");

    await ƒS.Speech.tell(characters.protagonist, "I did what anyone would try and I'm happy that it all worked out.");

    await ƒS.Speech.tell(characters.protagonist, "If you excuse me, I have to keep going...");

    await ƒS.Speech.tell(characters.char1, "Yes of course. Thank you so much!");
    await ƒS.Speech.tell(characters.seraphina, "Thank you. And please visit us if you come through here again!");

    await ƒS.Speech.tell(characters.protagonist, "I certainly will. Now Gooodbye...");



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
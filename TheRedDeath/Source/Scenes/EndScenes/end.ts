namespace Template {
  export async function end(): ƒS.SceneReturn {
    console.log("end ");
    ƒS.Sound.fade(sound.atmo1, 0.0, 1, true);
    ƒS.Speech.hide();

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */

    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update();
    ƒS.Progress.delay(1);
    await ƒS.Speech.tell(characters.narrator,"Press 'F5' to play again! Maybe you will get a different ending?!" );

   // alert("Press 'F5' to play again! Maybe you will get a different ending?!");
  }
}
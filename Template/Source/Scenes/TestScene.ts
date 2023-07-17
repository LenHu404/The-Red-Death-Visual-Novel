namespace Template {
  export async function TestScene(): ƒS.SceneReturn {
    console.log("First Test Scene");

    






    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.dystopia, 0.2, 1, true);
    await ƒS.Location.show(locations.supermarketInside);
    await ƒS.update(transitions.clouds.duration, transitions.clouds.alpha, transitions.clouds.edge);
    await ƒS.Character.show(characters.Eduard, characters.Eduard.pose.normal, ƒS.positionPercent(70, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Eduard, textAusgelagert.Eduard.T0000);
    await ƒS.Character.hide(characters.Eduard);
    await ƒS.Character.show(characters.Aisaka, characters.Aisaka.pose.upset, ƒS.positionPercent(30, 110));
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Aisaka, textAusgelagert.Aisaka.T0000);
    await ƒS.Character.hide(characters.Aisaka);


    ƒS.Speech.hide();

    
  }
}
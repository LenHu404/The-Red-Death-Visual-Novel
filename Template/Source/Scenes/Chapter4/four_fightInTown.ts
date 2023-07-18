namespace Template {
  let chars = "ABCDEFGHJKLNOPQRSTUVWXYZ";
  
  export enum resultFight {
    won = 0,
    killedHer,
    died
  }
  let fightResult: resultFight;
  let quickTimelength = 12;
  let failures = 1;
  let succes = 1;
  let lifeProt = 8;
  let lifeSera = 8;

  export async function four_fightInTown(): ƒS.SceneReturn {
    console.log("four_fightInTown ");

    characters.protagonist.name = dataForSave.nameProtagonist;

    if(dataForSave.gotCert && ƒS.Inventory.getAmount(items.birth_certificate) == 0) {
      ƒS.Inventory.add(items.birth_certificate);
    }
    if(dataForSave.gotComb && ƒS.Inventory.getAmount(items.golden_comb) == 0) {
      ƒS.Inventory.add(items.golden_comb);
    }

    let text1 = {
      narrator: {
        T0000: "As you wait you notice how Seraphina's skin get more red and her whole gets bigger.",
        T0001: "Maybe waiting wasn't the best idea..."

      },
      protagonist: {
        T0000: "Maybe if we wait the symptons will simply weaken and go away"

      }
    };



    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1,);

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */


    await ƒS.Location.show(locations.insideFamilyHouse);
    await ƒS.update();

    //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));



    console.log("waited?:" + dataForSave.waitedToHeal);

    if (dataForSave.waitedToHeal) {
      console.log("waited");
      await ƒS.Speech.tell(characters.protagonist, text1.protagonist.T0000);
      await ƒS.Speech.tell(characters.narrator, text1.narrator.T0000);
      await ƒS.Speech.tell(characters.narrator, text1.narrator.T0001);


    }
    else {
      console.log("tried to heal");

    }
    ƒS.Sound.fade(sound.atmo1, 0.0, 1);

    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.ill, slideInAnimation(70, 100, 70, 200));
    ƒS.Sound.fade(sound.monsterScream, 0.5, 1);

    ƒS.Sound.fade(sound.battle, 0.3, 1);
    await ƒS.Character.animate(characters.seraphina, characters.seraphina.pose.monster, slideInAnimation(70, 200, 70, 100));

    await ƒS.Speech.tell(characters.narrator, "She transformed into a horrendous Monster!! ");
    await ƒS.Speech.tell(characters.char1, "oh no oo oo Seraphina.... ");
    await ƒS.Speech.tell(characters.narrator, "You have to fight and win to help her! ");
    await ƒS.Speech.tell(characters.narrator, "But be careful not to overdo it! ");

    if (dataForSave.waitedToHeal) {
      await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(15, 100, 25, 100));
      await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(25, 100, 10, 100));
    }

    //Fight starts
    let meterProt = document.getElementById("lifeProt")
    let meterSera = document.getElementById("lifeSera")
    meterProt.value = lifeProt;
    meterSera.value = lifeSera;

    meterProt.max = lifeProt;
    meterSera.max = lifeSera;

    meterProt.style.zIndex = "2";
    meterSera.style.zIndex = "2";


    // document.getElementById("meterBar").value = ;




    // QUICKTIME EVENTS
    ////////////////////////////////////////////////////////////////////////
    document.getElementById("displayText").style.zIndex = "2";

    for (let i = 0; i < quickTimelength; i++) {
      let charToPress = chars.charAt(Math.floor(Math.random() * chars.length));
      document.getElementById("displayText").innerHTML = "HOLD " + charToPress;
      await ƒS.Progress.delay(1 + Math.random() * 2);

      if (ƒ.Keyboard.isPressedOne([convertKeyCode(charToPress)])) {
        console.log("succes++");
        succes++;
        lifeSera--;
        document.getElementById("displayText").innerHTML = "Succes";

      } else {
        console.log("failures++");
        failures++;
        lifeProt--;
        document.getElementById("displayText").innerHTML = "Failure";

      }
      console.log("Succes " + succes);
      console.log("failures " + failures);

      meterProt.value = lifeProt;
      meterSera.value = lifeSera;

      await ƒS.Progress.delay(1);

      if (lifeSera <= 0 || lifeProt <= 0) {
        break;

      }
    }

    meterProt.style.zIndex = "-1";
    meterSera.style.zIndex = "-1";
    document.getElementById("displayText").style.zIndex = "-1";

    console.log("Final stats");
    console.log("Succes " + succes);
    console.log("failures " + failures);

    if (lifeProt >= 0 && lifeSera >= 0)
      fightResult = resultFight.won;
    if (lifeProt > 0 && lifeSera <= 0)
      fightResult = resultFight.killedHer;
    if (lifeProt <= 0 && lifeSera >= 0)
      fightResult = resultFight.died;


    ƒS.Sound.fade(sound.battle, 0.0, 1);
    switch (fightResult) {
      case resultFight.won:
        console.log("Won");

        return "end_seven";
      case resultFight.killedHer:
        console.log("Killed her");

        return "end_five";
      case resultFight.died:
        console.log("Died");
        return "end_six";
    }


  }
  function convertKeyCode(char: string): ƒ.KEYBOARD_CODE {
    switch (char) {
      case "A":
        return ƒ.KEYBOARD_CODE.A;
      case "B":
        return ƒ.KEYBOARD_CODE.B;
      case "C":
        return ƒ.KEYBOARD_CODE.C;
      case "D":
        return ƒ.KEYBOARD_CODE.D;
      case "E":
        return ƒ.KEYBOARD_CODE.E;
      case "F":
        return ƒ.KEYBOARD_CODE.F;
      case "G":
        return ƒ.KEYBOARD_CODE.G;
      case "H":
        return ƒ.KEYBOARD_CODE.H;
      case "I":
        return ƒ.KEYBOARD_CODE.I;
      case "J":
        return ƒ.KEYBOARD_CODE.J;
      case "K":
        return ƒ.KEYBOARD_CODE.K;
      case "L":
        return ƒ.KEYBOARD_CODE.L;
      case "M":
        return ƒ.KEYBOARD_CODE.M;
      case "N":
        return ƒ.KEYBOARD_CODE.N;
      case "O":
        return ƒ.KEYBOARD_CODE.O;
      case "P":
        return ƒ.KEYBOARD_CODE.P;
      case "Q":
        return ƒ.KEYBOARD_CODE.Q;
      case "R":
        return ƒ.KEYBOARD_CODE.R;
      case "S":
        return ƒ.KEYBOARD_CODE.S;
      case "T":
        return ƒ.KEYBOARD_CODE.T;
      case "U":
        return ƒ.KEYBOARD_CODE.U;
      case "V":
        return ƒ.KEYBOARD_CODE.V;
      case "W":
        return ƒ.KEYBOARD_CODE.W;
      case "X":
        return ƒ.KEYBOARD_CODE.X;
      case "Y":
        //CHANGED DO TO ENGLISCH LAYOUT
        return ƒ.KEYBOARD_CODE.Z;
      case "Z":
        //CHANGED DO TO ENGLISCH LAYOUT
        return ƒ.KEYBOARD_CODE.Y;
      default:
        return ƒ.KEYBOARD_CODE.A;
    }
  }
}

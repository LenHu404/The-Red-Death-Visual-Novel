namespace Template {

  let failures = 1;
  let succes = 1;

  export async function four_insideFamilyHouse(): ƒS.SceneReturn {
    console.log("four_insideFamilyHouse");

    characters.protagonist.name = dataForSave.nameProtagonist;

    if (dataForSave.gotCert && ƒS.Inventory.getAmount(items.birth_certificate) == 0) {
      ƒS.Inventory.add(items.birth_certificate);
    }
    if (dataForSave.gotComb && ƒS.Inventory.getAmount(items.golden_comb) == 0) {
      ƒS.Inventory.add(items.golden_comb);
    }

    ƒS.Sound.fade(sound.atmo1, 0.0, 1,);


    ƒS.Sound.fade(sound.ritual, 0.9, 1, true);

    //ƒS.Speech.hide();
    await ƒS.Location.show(locations.insideFamilyHouse);
    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(25, 100, 10, 100));
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(15, 100, 25, 100));
    await ƒS.Speech.tell(characters.char1, "Try to calm her down");

    //////////////////////////////////////////////////////////////////////////

    let i = 0;
    while (true) {
      await ƒS.Speech.tell(characters.protagonist, "");
      let input: string = "";
      input = await ƒS.Speech.getInput();
      if (input.includes("calm down") || input.includes("deep breaths") || input.includes("it's going to be okay") || input.includes("chill bro")
        || input.includes("it's okay") || input.includes("chill") || input.includes("cool") || input.includes("relax") || input.includes("take it easy") || input.includes("control")) {
        await ƒS.Speech.tell(characters.narrator, "she calms down a bit");
        break;
      }
      else {
        await ƒS.Speech.tell(characters.narrator, "that doesn't seem to work...");
        if (i >= 2) {
          await ƒS.Speech.tell(characters.narrator, "She didn't calm down...");
          break;
          
        } else {
          await ƒS.Speech.tell(characters.narrator, "Maybe say something different? ");

        }
      }
      i++;
    }

    /////////////////////////////////////////////////////////////////////////

    await ƒS.Speech.tell(characters.narrator, "What is the day of Seraphina's birth?    ");
    let inputDate = await ƒS.Speech.getInput();
    if (inputDate.includes("13")) {
      succes++;
      await ƒS.Speech.tell(characters.narrator, "correct");
    }
    else {
      failures++;
      await ƒS.Speech.tell(characters.narrator, "not correct");
    }

    console.log("Succes " + succes);
    console.log("failures " + failures);


    ////////////////////////////////////////////////////////////////////////

    await ƒS.Speech.tell(characters.narrator, "What was the unusual thing on that day?      ");

    let input = await ƒS.Speech.getInput();

    if (input.includes("blood moon") || input.includes("red moon") || input.includes("moon constellation") || input.includes("blut mond") || input.includes("red")
    || input.includes("Blood Moon") || input.includes("Blood moon") || input.includes("blood Moon") || input.includes("moon")) {
      await ƒS.Speech.tell(characters.narrator, "correct");
      succes++;

    }
    else {
      await ƒS.Speech.tell(characters.narrator, "not correct");
      failures++;
    }

    /////////////////////////////////////////////////////////////////////////

    await ƒS.Speech.tell(characters.narrator, "What item do you want to use?        ");

    input = await ƒS.Speech.getInput();

    if (input.includes("old golden comb") || input.includes("golden comb") || input.includes("comb") || input.includes("kamm")) {
      await ƒS.Speech.tell(characters.narrator, "correct");
      succes++;

    }
    else {
      await ƒS.Speech.tell(characters.narrator, "not correct");
      failures++;
    }

    /*  let dialogue = {
       iSayYes: "Yes",
       iSayNo: "No",
       iSayNothing: "......."
     }; */
    /*  let dialogueElement = await ƒS.Menu.getInput(dialogue, "choices");
 
     switch (dialogueElement) {
       case dialogue.iSayYes:
         succes++;
         break;
       case dialogue.iSayNo:
         failures++;
         break;
       default:
         failures++;
         break;
     } */

    ƒS.Speech.hide();


    console.log("Succes " + succes);
    console.log("failures " + failures);


    if (succes > failures) {
      await ƒS.Speech.tell(characters.narrator, "It seems to have worked!");
      ƒS.Speech.hide();
      return "end_three";
    }
    else {
      await ƒS.Speech.tell(characters.narrator, "It doesn't seem to be enough...");
      ƒS.Speech.hide();
      return "fight";
    }

  }
}
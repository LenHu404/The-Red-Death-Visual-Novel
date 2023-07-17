namespace Template {

  let failures = 1;
  let succes = 1;

  export async function four_insideFamilyHouse(): ƒS.SceneReturn {
    console.log("four_insideFamilyHouse");

  
    
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);
    
    //ƒS.Speech.hide();
    await ƒS.Speech.tell(characters.char1, "Try to calm her down");

    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(25, 100, 10, 100));
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(15, 100, 25, 100));

    
    await ƒS.Speech.tell(characters.protagonist, "");
    let input: string = "";
    input = await ƒS.Speech.getInput();

    if (input.includes("calm down") || input.includes("deep breaths")  || input.includes("it's going to be okay") || input.includes("okay")) {
      await ƒS.Speech.tell(characters.narrator, "she calms down a bit");
    }
    else {
      await ƒS.Speech.tell(characters.narrator, "it doesn't seem to work...");
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
    
    await ƒS.Speech.tell(characters.narrator, "What was the unusual thing on that day? ");
    
    input = await ƒS.Speech.getInput();
    
    if (input.includes("blood moon") || input.includes("red moon")  || input.includes("moon constellation") || input.includes("blut mond") || input.includes("red")) {
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

    
    if (succes > failures){
      await ƒS.Speech.tell(characters.narrator, "It seems to have worked!");
      ƒS.Speech.hide();
      return "end_three";
    }
    else {
      await ƒS.Speech.tell(characters.narrator, "It doesn't seem to be enough...");
      ƒS.Speech.hide();
      return "fight";
    }
    //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
    //await ƒS.update(1);
    //await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);





  }
}
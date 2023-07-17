namespace Template {
  export async function two_villageEntrance(): ƒS.SceneReturn {
    console.log("two_villageEntrance ");

    let text1 = {
      narrator: {
        T0000: "",
        T0001: "",
        T0002: "",
        T0003: "",
        
      },
      char1: {
        T0000: "Do you got the certificate?",
        T0001: "Oh thats perfect!",
        T0002: "Now only the old item left.",
        T0003: "The best place for this would be our old house from which we moved out of years ago.",
        T0004: "Basically anything that could belong to a young girl. Like a diary or a toy.  ",
        T0005: "",
        T0006: "",
        T0007: "",
        T0008: "",
        T0009: "",
        T0010: "",
        T0011: "",

      },
      protagonist: {
        T0000: "Yes i got it!",
        T0001: "What do i look for in particular?",
        T0002: "",
        T0003: "",
        T0004: "",
        T0005: "",
        T0006: "",
        T0007: "",
        T0008: "",
        T0009: "",
        T0010: "",
        T0011: "",
        T0012: "",
        T0013: "",
        T0014: "",
        T0015: ""

      }
    };

    let text2 = {
      narrator: {
        T0000: "",
        T0001: "",
        T0002: "",
        T0003: "",
        
      },
      char1: {
        T0000: "Oh yeah, I think that should do the trick!",
        T0001: "Now only the birth certificate is left.",
        T0002: "Now getting the birth certificate isn't really complicated and more tedious.",
        T0003: "All certificates are stored in the townhall and are maneged by the librarian.",
        T0004: "But since he doesn't like us he wont help us finding it.",
        T0005: "Please go to the townhall and get the certificate.",
        T0006: "Ah and our last name is Hawthrone if that helps.",
        T0007: "",
        T0008: "",
        T0009: "",
        T0010: "",
        T0011: "",

      },
      protagonist: {
        T0000: "I got an old golden comb from the old house. I hope this will work.",
        T0001: "Alright, i guess there is no point in waisting time.",
        T0002: "",
        T0003: "",
        T0004: "",
        T0005: "",
        T0006: "",
        T0007: "",
        T0008: "",
        T0009: "",
        T0010: "",
        T0011: "",
        T0012: "",
        T0013: "",
        T0014: "",
        T0015: ""

      }
    };

    let text3 = {
      narrator: {
        T0000: "",
        T0001: "",
        T0002: "",
        T0003: "",
        
      },
      char1: {
        T0000: "Ah perfect.",
        T0001: "Well now we are going back and see if this works.",
        T0002: "",
        T0003: "",
        T0004: "",
        T0005: "",
        T0006: "",
        T0007: "",
        T0008: "",
        T0009: "",
        T0010: "",
        T0011: "",

      },
      protagonist: {
        T0000: "So now I got both things, the certificate and an old comb.",
        T0001: "What are we going to do next?",
        T0002: "",
        T0003: "",
        T0004: "",
        T0005: "",
        T0006: "",
        T0007: "",
        T0008: "",
        T0009: "",
        T0010: "",
        T0011: "",
        T0012: "",
        T0013: "",
        T0014: "",
        T0015: ""

      }
    };

    let helpYesNo = {
      iSayYes: "Help the old man and his daughter.",
      iSayNo: "Keep on traveling"
    };

    let dialogue = {
      iSayYes: "Yes",
      iSayNo: "No",
      iSayNothing: "......."
    };


    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    /* ƒS.Sound.play(sound.payingSound, 0.2, true);
    ƒS.Sound.fade(sound.smallCrowd, 0.2, 1, true); */
    if(dataForSave.gotCert && dataForSave.gotComb) {
      dataForSave.decision1 = whichItemfirst.gotBoth;
    }


    await ƒS.Location.show(locations.eldenRing_dorf_eingang);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(0, 100, 20, 100));
    await ƒS.Character.animate(characters.char1, characters.char1.pose.normal, slideInAnimation(100, 100, 70, 100));

    switch (dataForSave.decision1){
      case whichItemfirst.Certfiicate:
        await ƒS.Speech.tell(characters.char1, text1.char1.T0000);
        await ƒS.Speech.tell(characters.protagonist, text1.protagonist.T0000);
        await ƒS.Speech.tell(characters.char1, text1.char1.T0001);
        await ƒS.Speech.tell(characters.char1, text1.char1.T0002);
        await ƒS.Speech.tell(characters.char1, text1.char1.T0003);
        await ƒS.Speech.tell(characters.protagonist, text1.protagonist.T0001);
        await ƒS.Speech.tell(characters.char1, text1.char1.T0004);


        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        return "oldHouse";
      case whichItemfirst.Comb:
        await ƒS.Speech.tell(characters.protagonist, text2.protagonist.T0000);
        await ƒS.Speech.tell(characters.char1, text2.char1.T0000);
        await ƒS.Speech.tell(characters.char1, text2.char1.T0001);
        await ƒS.Speech.tell(characters.char1, text2.char1.T0002);
        await ƒS.Speech.tell(characters.char1, text2.char1.T0003);
        await ƒS.Speech.tell(characters.char1, text2.char1.T0004);
        await ƒS.Speech.tell(characters.char1, text2.char1.T0005);
        await ƒS.Speech.tell(characters.protagonist, text2.protagonist.T0001);

        
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        return "certificate";
      case whichItemfirst.gotBoth:
        await ƒS.Speech.tell(characters.protagonist, text3.protagonist.T0000);
        await ƒS.Speech.tell(characters.protagonist, text3.protagonist.T0001);
        await ƒS.Speech.tell(characters.char1, text3.char1.T0000);
        await ƒS.Speech.tell(characters.char1, text3.char1.T0001);

        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        return "goBack";

    }
    //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.horse_behind, ƒS.positionPercent(20, 100));
    //await ƒS.update(1);
    //await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    //await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);


    //await ƒS.Character.show(characters.char1, characters.char1.pose.normal, ƒS.positionPercent(20, 100));
     
    


  }
}
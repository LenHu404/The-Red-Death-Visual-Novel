namespace Template {
  let looking = true;
  let looking2 = true;
  let goNext = false;
  let timer = 0;
  let time = 5;
  let alreadyMarked = false;
  let rightBook = document.createElement('img');
  rightBook.src = 'Images/Items/transpPick.png';
  rightBook.id = "rightBook";
  let calendar = document.createElement('img');
  calendar.src = 'Images/Items/transpPick.png';
  calendar.id = "calendar";

  export async function two_oldTownHall(): ƒS.SceneReturn {
    console.log("two_oldTownHall ");


    let text = {
      narrator: {
        T0000: "",
        T0001: "",
        T0002: "",
        T0003: "",

      },
      librarian: {
        T0000: "What do you want?!",
        T0001: "Hmm and why is that?",
        T0002: "For what do you need an old paper like that?",
        T0003: "And who's your friend??",
        T0004: "For the Hawthrone's??",
        T0005: "What do have to do with them??",
        T0006: "You better stay away from them.",
        T0007: "Hm i don't know where its hidden among these books but maybe i can help for some change?",
        T0008: "Then good luck finding it yourself.",
        T0009: "Oh this seems appropriate. Keep on the right side. It should be there.",
        T0010: "",
        T0011: "",

      },
      protagonist: {
        T0000: "This looks like its the town hall.",
        T0001: "Let's try my luck..",
        T0002: "Ehm hello? My Name is " + dataForSave.nameProtagonist + ". And i would like to see a birth certificate of a friend if mine.",
        T0003: "No need to be so incensed about it.",
        T0004: "Its for my friend Seraphina.",
        T0005: "Seraphina  Hawthrone.",
        T0006: "This doesn't need to concern you.",
        T0007: "Just give me the birth certificate.",
        T0008: "Oh okay. I guess I am on my own.",
        T0009: "Lets put it in my backpack and head back.",
        T0010: "Hm can this be useful? Maybe I sould remeber it for later.",
        T0011: "This doesn't need to concern you.",
        T0012: "This doesn't need to concern you.",
        T0013: "This doesn't need to concern you.",
        T0014: "This doesn't need to concern you.",


      }
    };
    let payOrNot = {
      pay: "Give him 2 silver pieces.",
      noPay: "Don't give him money"
    };



    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.atmo1, 0.05, 1, true);

    await ƒS.Location.show(locations.oldTownHall);
    await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.behind, slideInAnimation(0, 100, 20, 100));

    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);

    await ƒS.Character.hide(characters.protagonist);

    await ƒS.Location.show(locations.insideTownHall);
    await ƒS.Character.show(characters.librarian, characters.librarian.pose.normal, ƒS.positionPercent(60, 110))
    //await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.normal, slideInAnimation(0, 100, 20, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.librarian, text.librarian.T0000);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
    await ƒS.Speech.tell(characters.librarian, text.librarian.T0001);
    await ƒS.Speech.tell(characters.librarian, text.librarian.T0002);
    await ƒS.Speech.tell(characters.librarian, text.librarian.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
    await ƒS.Speech.tell(characters.librarian, text.librarian.T0004);
    await ƒS.Speech.tell(characters.librarian, text.librarian.T0005);
    await ƒS.Speech.tell(characters.librarian, text.librarian.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);
    await ƒS.Speech.tell(characters.librarian, text.librarian.T0007);

    let dialogueElement = await ƒS.Menu.getInput(payOrNot, "choices");

    switch (dialogueElement) {
      case payOrNot.pay:
        console.log("pay");
        await ƒS.Speech.tell(characters.librarian, text.librarian.T0009);
        // await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
        ƒS.Character.hide(characters.librarian);
        ƒS.Speech.hide();
        break;
      //return "certificate";
      case payOrNot.noPay:
        console.log("Dont pay");
        await ƒS.Speech.tell(characters.librarian, text.librarian.T0008);
        //await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
        ƒS.Character.hide(characters.librarian);
        ƒS.Speech.hide();
        break;
      //return "oldHouse";
    }
    await ƒS.update();
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0008);

    document.querySelector("scene").appendChild(rightBook);
    rightBook.addEventListener('click', getRightBook);
    document.querySelector("scene").appendChild(calendar);
    calendar.addEventListener('click', getCalendar);
    
    
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    
    while (!goNext) {
      timer++;
      console.log("in loop")
      await ƒS.Progress.delay(2);
      if(timer > time && !alreadyMarked){
        console.log("addedBlink");
        alreadyMarked = true;
        rightBook.classList.add("blink");
        calendar.classList.add("blink");
      }

    }
    
    await ƒS.Speech.tell(characters.protagonist, "Lets put it in my backpack and head back.");
    
    return "meetInBetween";
  }
  async function getRightBook(): Promise<void> {
    ƒS.Inventory.add(items.birth_certificate);
    document.querySelector("scene").removeChild(rightBook);
    await ƒS.Speech.tell(characters.protagonist, "Ah this must be it");
    ƒS.Speech.hide();
    document.getElementById("birthCert").style.zIndex = "2";
    document.getElementById("birthCert").addEventListener('click', remove);
    document.getElementById("oldCal").style.zIndex = "-1";

    while (looking) {
      console.log("in loop2")
      await ƒS.Progress.delay(2);
      
    }
    ƒS.Inventory.add(items.birth_certificate);
    dataForSave.gotCert = true;
    goNext = true;

  }

  async function getCalendar(): Promise<void> {
    ƒS.Inventory.add(items.birth_certificate);
    document.querySelector("scene").removeChild(calendar);
    document.getElementById("oldCal").style.zIndex = "2"; 
    await ƒS.Speech.tell(characters.protagonist, "Hm can this be useful? Maybe I sould remeber it for later.");
    ƒS.Speech.hide();


    document.getElementById("oldCal").addEventListener('click', remove2);
    while (looking2) {
      console.log("in loop3")
      await ƒS.Progress.delay(2);

    }
  }

  function remove(): void {
    document.getElementById("birthCert").style.zIndex = "-1";
    looking = false;
  }

  function remove2(): void {
    document.getElementById("oldCal").style.zIndex = "-1";
    looking2 = false;
  }
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    enum whichItemfirst {
        notDecided = 0,
        Certfiicate = 1,
        Comb = 2,
        gotBoth = 3
    }
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        clouds: {
            duration: number;
            alpha: string;
            edge: number;
        };
        starWars: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        test: {
            duration: number;
            alpha: string;
            edge: number;
        };
        test2: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        dystopia: string;
        atmo1: string;
        battle: string;
        supermarketTrolleys: string;
        smallCrowd: string;
        payingSound: string;
        monsterScream: string;
        playerDeatchCry: string;
        femaleDeatchCry: string;
        femaleCrying: string;
        vicotrySound: string;
        horseRiding: string;
    };
    let locations: {
        nightCity: {
            name: string;
            background: string;
        };
        nightPark: {
            name: string;
            background: string;
        };
        supermarketInside: {
            name: string;
            background: string;
        };
        gif: {
            name: string;
            background: string;
        };
        eldenRing01: {
            name: string;
            background: string;
        };
        eldenRing02: {
            name: string;
            background: string;
        };
        eldenRing_dorf_eingang: {
            name: string;
            background: string;
        };
        novelPage_pergament: {
            name: string;
            background: string;
        };
        blackScreen: {
            name: string;
            background: string;
        };
        familyHouse: {
            name: string;
            background: string;
        };
        insideFamilyHouse: {
            name: string;
            background: string;
        };
        oldTownHall: {
            name: string;
            background: string;
        };
        insideTownHall: {
            name: string;
            background: string;
        };
        lonelyRoad: {
            name: string;
            background: string;
        };
        oldHouse: {
            name: string;
            background: string;
        };
        insideOldHouse: {
            name: string;
            background: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        gotCert: boolean;
        gotComb: boolean;
        decision1: whichItemfirst;
        waitedToHeal: boolean;
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                behind: string;
                horse_normal: string;
                horse_behind: string;
            };
        };
        char1: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        char2: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        seraphina: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                ill: string;
                monster: string;
            };
        };
        librarian: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        novelPage: {
            name: string;
        };
    };
    let items: {
        birth_certificate: {
            name: string;
            description: string;
            image: string;
        };
        golden_comb: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function slideInAnimation(fromWhereX: number, fromWhereY: number, toWhereX: number, toWhereY: number): ƒS.AnimationDefinition;
    function ghostSlideInAnimation(fromWhereX: number, fromWhereY: number, toWhereX: number, toWhereY: number): ƒS.AnimationDefinition;
    function ghostAnimation(): ƒS.AnimationDefinition;
    function angryAnimation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
}
declare namespace Template {
    let textAusgelagert: {
        Narrator: {
            T0000: string;
            T0001: string;
            T0002: string;
        };
        Aisaka: {
            T0000: string;
            T0001: string;
        };
        Eduard: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Template {
    function startSceneCopy(): ƒS.SceneReturn;
}
declare namespace Template {
    function SupermarketScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function TestScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function TestScene02(): ƒS.SceneReturn;
}
declare namespace Template {
    function TestScene03(): ƒS.SceneReturn;
}
declare namespace Template {
    function one_familyHouse(): ƒS.SceneReturn;
}
declare namespace Template {
    function one_villageEntrance(): ƒS.SceneReturn;
}
declare namespace Template {
    function two_abandonedHouse(): ƒS.SceneReturn;
}
declare namespace Template {
    function two_oldTownHall(): ƒS.SceneReturn;
}
declare namespace Template {
    function two_villageEntrance(): ƒS.SceneReturn;
}
declare namespace Template {
    function three_insideFamilyHouse(): ƒS.SceneReturn;
}
declare namespace Template {
    function three_villageEntrance(): ƒS.SceneReturn;
}
declare namespace Template {
    function healSceneChoices(): ƒS.SceneReturn;
}
declare namespace Template {
    enum resultFight {
        won = 0,
        killedHer = 1,
        died = 2
    }
    function four_fightInTown(): ƒS.SceneReturn;
}
declare namespace Template {
    function four_insideFamilyHouse(): ƒS.SceneReturn;
}
declare namespace Template {
    function five_villageEntrance(): ƒS.SceneReturn;
}
declare namespace Template {
    function end(): ƒS.SceneReturn;
}
declare namespace Template {
    function end_five(): ƒS.SceneReturn;
}
declare namespace Template {
    function end_four(): ƒS.SceneReturn;
}
declare namespace Template {
    function end_one(): ƒS.SceneReturn;
}
declare namespace Template {
    function end_seven(): ƒS.SceneReturn;
}
declare namespace Template {
    function end_six(): ƒS.SceneReturn;
}
declare namespace Template {
    function end_three(): ƒS.SceneReturn;
}
declare namespace Template {
    function end_two(): ƒS.SceneReturn;
}

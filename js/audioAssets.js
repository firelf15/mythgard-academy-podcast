'use strict';

// Audio Source - Mythgard Academy Podcast : https://media.signumuniversity.org/mythgardacademy/feed
var audioData = [
    {
        'title': 'MSA001: The Fellowship of the Ring, Lecture 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA001_LOTRI/MSA001_Olsen_2012-07-11_Class01_PartI.mp3'
    },
    {
        'title': 'MSA001: The Fellowship of the Ring, Lecture 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA001_LOTRI/MSA001_Olsen_2012-07-12_Class02_PartII.mp3'
    },
    {
        'title': 'MSA001: The Fellowship of the Ring, Lecture 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA001_LOTRI/MSA001_Olsen_2012-07-12_Class03_PartIII.mp3'
    },
    {
        'title': 'MSA001: The Fellowship of the Ring, Lecture 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA001_LOTRI/MSA001_Olsen_2012-07-17_Class04_PartIV.mp3'
    },
    {
        'title': 'MSA001: The Fellowship of the Ring, Lecture 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA001_LOTRI/MSA001_Olsen_2012-07-24_Class05_PartV.mp3'
    },
    {
        'title': 'MSA001: The Fellowship of the Ring, Lecture 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA001_LOTRI/MSA001_Olsen_2012-07-26_Class06_PartVI.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-08-27_Class01_TheMendingOfTheFellowship.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-08-29_Class02_TheMakingOfMyth.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-09-03_Class03_TheDeadWoodBurning.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-09-05_Class04_TheWisdomOfSaruman.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-09-14_Class05_TheChoicesOfMisterFrodo.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-09-14_Class06_LightAndHighBeauty.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-09-18_Class07_OverTheThreshold.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-09-20_Class08_DoomAndGreatDeeds.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-09-24_Class09_MoreSamwise.mp3'
    },
    {
        'title': 'MSA003: The TwoTowers, Lecture 10',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA003_LOTRII/MSA003_Olsen_2013-09-26_Class10_OpenQandA.mp3'
    },
    {
        'title': 'MSA004: The Return of the King, Lecture 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA004_LOTRIII/MSA004_Olsen_2013-10-25_Class01_TheBoardIsSet.mp3'
    },
    {
        'title': 'MSA004: The Return of the King, Lecture 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA004_LOTRIII/MSA004_Olsen_2013-11-04_Class02_WrathRuinAndARedNightfall.mp3'
    },
    {
        'title': 'MSA004: The Return of the King, Lecture 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA004_LOTRIII/MSA004_Olsen_2013-11-07_Class03_HopeAndIgnorance.mp3'
    },
    {
        'title': 'MSA004: The Return of the King, Lecture 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA004_LOTRIII/MSA004_Olsen_2013-11-21_Class04_TheHeroOfTheAge.mp3'
    },
    {
        'title': 'MSA004: The Return of the King, Lecture 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA004_LOTRIII/MSA004_Olsen_2013-11-21_Class05_TheVeryWineOfBlessedness.mp3'
    },
    {
        'title': 'MSA004: The Return of the King, Lecture 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA004_LOTRIII/MSA004_Olsen_2013-12-02_Class06_GoodEndings.mp3'
    },
    {
        'title': 'MSA004: The Return of the King, Lecture 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA004_LOTRIII/MSA004_Olsen_2013-12-07_Class07_NecessaryBackgroundOfHistory.mp3'
    },
    {
        'title': 'MSA004: The Return of the King, Lecture 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA004_LOTRIII/MSA004_Olsen_2013-12-12_Class08_ThePerceptionOfDepth.mp3'
    },
    {
        'title': 'MSA004: The Return of the King, Lecture 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA004_LOTRIII/MSA004_Olsen_2013-12-27_Class09_OpenQandA.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-01-10_Class01_OfTuorAndTheCracksOfDoom.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-01-15_Class02_OfTheDoomsOfTurin.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-01-22_Class03_LimpingWisdomAndTheFeetOfDoom.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-01-22_Class04_MoneOnTheHouseOfHador.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-01-29_Class05_EstrangedInElenna.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-02-05_Class06_TheMetaHistoryOfGaladriel.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-02-12_Class07_LegendsAndStories.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-02-13_Class08_BonusQandASession.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-02-19_Class09_WeavingTheWeb.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 10',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-03-04_Class10_TheFollyOfTheFallen.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 11',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-03-05_Class11_FillingUpTheCorners.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 12',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-03-12_Class12_TheHistoryOfWizards.mp3'
    },
    {
        'title': 'MSA005: Unfinished Tales, Class 13',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA005_UnfinishedTales/MSA005_Olsen_2014-03-13_Class13_TheLostStonesOfGondorAndArnor.mp3'
    },
    {
        'title': 'MSA006: Enders Game, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA006_EndersGame/MSA006_Olsen_2014-04-02_Class01_PlayingGames.mp3'
    },
    {
        'title': 'MSA006: Enders Game, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA006_EndersGame/MSA006_Olsen_2014-04-09_Class02_MindGames.mp3'
    },
    {
        'title': 'MSA006: Enders Game, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA006_EndersGame/MSA006_Olsen_2014-04-18_Class03_EnderPwnsBattleSchool.mp3'
    },
    {
        'title': 'MSA006: Enders Game, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA006_EndersGame/MSA006_Olsen_2014-04-23_Class04_TheTeacherIsTheEnemy.mp3'
    },
    {
        'title': 'MSA006: Enders Game, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA006_EndersGame/MSA006_Olsen_2014-05-03_Class05_TheEndOfTheWorld.mp3'
    },
    {
        'title': 'MSA006: Enders Game, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA006_EndersGame/MSA006_Olsen_2014-05-07_Class06_AdaptingEnder.mp3'
    },
    {
        'title': 'MSA007: The Book of Lost Tales I, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA007_BookOfLostTales1/MSA007_Olsen_2014-05-21_Class01_TheCottageofLostPlay.mp3'
    },
    {
        'title': 'MSA007: The Book of Lost Tales I, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA007_BookOfLostTales1/MSA007_Olsen_2014-05-28_Class02_TheDawningoftheGods.mp3'
    },
    {
        'title': 'MSA007: The Book of Lost Tales I, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA007_BookOfLostTales1/MSA007_Olsen_2014-06-04_Class03_TheChoiceoftheValar.mp3'
    },
    {
        'title': 'MSA007: The Book of Lost Tales I, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA007_BookOfLostTales1/MSA007_Olsen_2014-06-11_Class04_QASession1.mp3'
    },
    {
        'title': 'MSA007: The Book of Lost Tales I, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA007_BookOfLostTales1/MSA007_Olsen_2014-06-18_Class05_TheDarkeningofHeartsinValinor.mp3'
    },
    {
        'title': 'MSA007: The Book of Lost Tales I, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA007_BookOfLostTales1/MSA007_Olsen_2014-06-25_Class06_TheMisadventuresoftheGods.mp3'
    },
    {
        'title': 'MSA007: The Book of Lost Tales I, Class 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA007_BookOfLostTales1/MSA007_Olsen_2014-07-02_Class07_InContactWiththeEarth.mp3'
    },
    {
        'title': 'MSA007: The Book of Lost Tales I, Class 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA007_BookOfLostTales1/MSA007_Olsen_2014-07-09_Class08_TheSpellofBottomlessDread.mp3'
    },
    {
        'title': 'MSA007: The Book of Lost Tales I, Class 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA007_BookOfLostTales1/MSA007_Olsen_2014-07-16_Class09_SubcreationandLanguage.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-07-30_Class01_TheHandThatHadKnownPain.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-08-06_Class02_TheMatadorandtheBull.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-08-13_Class03_TheThingMustTakeItsCourse.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-08-21_Class04_TheSeedIsSown.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-08-28_Class05_TheOneWhoPointstheWay.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-09-03_Class06_OnlyIWillRemain.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-09-10_Class07_HawkvMouse.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-09-17_Class08_ActionandInaction.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-09-24_Class09_QuestionsonBookTwo.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 10',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-10-01_Class10_RidingtheMaker.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 11',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-10-08_Class11_LookingintotheDarkness.mp3'
    },
    {
        'title': 'MSA008: Dune, Class 12',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA008_Dune/MSA008_Olsen_2014-10-15_Class12_AUniverseFullofDoors.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2014-11-05_Class01_Escape.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2014-11-12_Class02_RoofedwithMistandWires.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2014-11-19_Class03_ANewWorld.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2014-11-30_Class04_BeingCunningandFullofTricks.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2014-12-03_Class05_WhereAreWe.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2014-12-10_Class06_TheRabbitofDeathandFear.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2014-12-17_Class07_ThlaylisStorm.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2014-12-30_Class08_BigRabbitSmallRabbit.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2015-01-07_Class09_TheMakingsoftheBestStoryEver.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 10',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2015-01-14_Class10_DreamsandLegendsHoppingOutoftheGrass.mp3'
    },
    {
        'title': 'MSA009: Watership Down, Class 11',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA009_WatershipDown/MSA009_Olsen_2015-01-21_Class11_WhereinItsBadnessConsists.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-02-11_Class01_AModestBeginning.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-02-18_Class02_DiscoveringGreatness.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-02-25_Class03_TurintheFey.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-03-04_Class04_DoomandTears.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-03-11_Class05_BeforetheBeginningofHistory.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-03-18_Class06_LighterandMoreHappyThings.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-03-25_Class07_CursesFoiledAgain.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-04-01_Class08_TheTalesTrueBeginning.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-04-08_Class09_TheEriolStory.mp3'
    },
    {
        'title': 'MSA010: The Book of Lost Tales, Part II, Class 10',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA010_BookOfLostTales2/MSA010_Olsen_2015-04-15_Class10_IfYouBelievetheOldTales.mp3'
    },
    {
        'title': 'MSA011: The Princess Bride, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA011_ThePrincessBride/MSA011_Olsen_2015-05-13_Class01_GoldmanandMorgenstern.mp3'
    },
    {
        'title': 'MSA011: The Princess Bride, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA011_ThePrincessBride/MSA011_Olsen_2015-05-20_Class02_TrueLove.mp3'
    },
    {
        'title': 'MSA011: The Princess Bride, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA011_ThePrincessBride/MSA011_Olsen_2015-05-27_Class03_TheTrueHeroes.mp3'
    },
    {
        'title': 'MSA011: The Princess Bride, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA011_ThePrincessBride/MSA011_Olsen_2015-06-08_Class04_WhatThisBookSays.mp3'
    },
    {
        'title': 'MSA011: The Princess Bride, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA011_ThePrincessBride/MSA011_Olsen_2015-06-10_Class05_TheMoviePart1.mp3'
    },
    {
        'title': 'MSA011: The Princess Bride, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA011_ThePrincessBride/MSA011_Olsen_2015-06-17_Class06_TheMoviePart2.mp3'
    },
    {
        'title': 'MSA012: The Lays of Beleriand, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA012_LaysOfBeleriand/MSA012_Olsen_2015-07-08_Class01_ExploringtheEpic.mp3'
    },
    {
        'title': 'MSA012: The Lays of Beleriand, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA012_LaysOfBeleriand/MSA012_Olsen_2015-07-15_Class02_LoveandLoss.mp3'
    },
    {
        'title': 'MSA012: The Lays of Beleriand, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA012_LaysOfBeleriand/MSA012_Olsen_2015-07-22_Class03_OfIncreaseandDigression.mp3'
    },
    {
        'title': 'MSA012: The Lays of Beleriand, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA012_LaysOfBeleriand/MSA012_Olsen_2015-07-29_Class04_TheEpicImpulse.mp3'
    },
    {
        'title': 'MSA012: The Lays of Beleriand, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA012_LaysOfBeleriand/MSA012_Olsen_2015-08-05_Class05_TheEchoofaSpell.mp3'
    },
    {
        'title': 'MSA012: The Lays of Beleriand, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA012_LaysOfBeleriand/MSA012_Olsen_2015-08-12_Class06_ReleasefromBondage.mp3'
    },
    {
        'title': 'MSA012: The Lays of Beleriand, Class 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA012_LaysOfBeleriand/MSA012_Olsen_2015-08-19_Class07_DungeonsandGreatDoom.mp3'
    },
    {
        'title': 'MSA012: The Lays of Beleriand, Class 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA012_LaysOfBeleriand/MSA012_Olsen_2015-08-26_Class08_TheGreatEscape.mp3'
    },
    {
        'title': 'MSA012: The Lays of Beleriand, Class 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA012_LaysOfBeleriand/MSA012_Olsen_2015-09-02_Class09_TheEchoesoftheLays.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-09-16_Class01_TheDiscoveryofEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-09-23_Class02_PerspectivesonEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-09-30_Class03_TheEmancipationofEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-10-08_Class04_TheGrowthofEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-10-14_Class05_TheDigestionofEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-10-21_Class06_TheDisputeOverEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-10-28_Class07_TheBoundariesofEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-11-04_Class08_TheMadnessofEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-11-11_Class09_TheKingofEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 10',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-11-18_Class10_TheReturnofEnglishMagic.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 11',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-11-25_Class11_TheAdaptationofEnglishMagic1.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 12',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-12-07_Class12_TheAdaptationofEnglishMagic2.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 13',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-12-10_Class13_TheAdaptationofEnglishMagic3.mp3'
    },
    {
        'title': 'MSA013: Jonathan Strange & Mr Norrell, Class 14',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA013_JonathanStrange/MSA013_Olsen_2015-12-16_Class14_TheAdaptationofEnglishMagic4.mp3'
    },
    {
        'title': 'Fundraiser Special Episode: The Father Christmas Letters, by J.R.R. Tolkien',
        'url': 'https://s3.amazonaws.com/media.podcast/SignumSessions/SignumSessions10.mp3'
    },
    {
        'title': 'Fundraiser Special Episode: Dr. Corey Olsen Blinks with His Take on Doctor Who',
        'url': 'https://s3.amazonaws.com/media.podcast/SignumSessions/SignumSessions13.mp3'
    },
    {
        'title': 'MSA014: The Shaping of Middle-earth, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA014_ShapingOfMiddleEarth/MSA014_Olsen_2016-01-06_Class01_TheBirthoftheSilmarillion.mp3'
    },
    {
        'title': 'MSA014: The Shaping of Middle-earth, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA014_ShapingOfMiddleEarth/MSA014_Olsen_2016-01-13_Class02_TheFloweringoftheSilmarillion.mp3'
    },
    {
        'title': 'MSA014: The Shaping of Middle-earth, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA014_ShapingOfMiddleEarth/MSA014_Olsen_2016-01-20_Class03_TheWaxingoftheSilmarillion.mp3'
    },
    {
        'title': 'MSA014: The Shaping of Middle-earth, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA014_ShapingOfMiddleEarth/MSA014_Olsen_2016-01-27_Class04_TheRevisionoftheSilmarillion.mp3'
    },
    {
        'title': 'MSA014: The Shaping of Middle-earth, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA014_ShapingOfMiddleEarth/MSA014_Olsen_2016-02-03_Class05_TheChartingoftheSilmarillion.mp3'
    },
    {
        'title': 'MSA014: The Shaping of Middle-earth, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA014_ShapingOfMiddleEarth/MSA014_Olsen_2016-02-10_Class06_AMysteryintheSilmarillion.mp3'
    },
    {
        'title': 'MSA014: The Shaping of Middle-earth, Class 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA014_ShapingOfMiddleEarth/MSA014_Olsen_2016-02-17_Class07_TheSortingoftheSilmarillion.mp3'
    },
    {
        'title': 'MSA014: The Shaping of Middle-earth, Class 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA014_ShapingOfMiddleEarth/MSA014_Olsen_2016-02-24_Class08_ReflectionsontheSilmarillion.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-03-09_Class01_ChangingPerspectives.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-03-16_Class02_FacingFacts.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-03-23_Class03_ThereIsAlwaysCause.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-03-30_Class04_BadDreamsforThoseWhoSleepUnwisely.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-04-06_Class05_PossibleImpossibilities.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 6',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-04-13_Class06_ADevilishMockery.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 7',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-05-04_Class07_ProtectingMina.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 8',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-05-11_Class08_ThereIstoHertheSilence.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 9',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-05-18_Class09_OurStarandOurHope.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 10',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-05-25_Class10_DraculaQandA.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 11',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-06-05_Class11_DraculasEarlyFilmCareer.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 12',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-06-08_Class12_TheHorrorofDracula.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 13',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-06-15_Class13_CoppolasDracula.mp3'
    },
    {
        'title': 'MSA015: Dracula, Class 14',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA015_Dracula/MSA015_Olsen_2016-06-22_Class14_DraculaConclusions.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 1',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA016_TheLostRoad/MSA016_Olsen_2016-07-06_Class01_TheLastTale.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 2',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA016_TheLostRoad/MSA016_Olsen_2016-07-13_Class02_Eftsith.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 3',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA016_TheLostRoad/MSA016_Olsen_2016-07-20_Class03_Imrama.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 4',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA016_TheLostRoad/MSA016_Olsen_2016-07-27_Class04_PreppingtheSilmarillionforPublication.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 5',
        'url': 'https://s3.amazonaws.com/media.mythgardacademy/MSA016_TheLostRoad/MSA016_Olsen_2016-08-03_Class05_TheTreeofTongues.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 6',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA016_TheLostRoad/MSA016_Olsen_2016-08-14_Class06_TheFinalDraftoftheSilmarillion.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 7',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA016_TheLostRoad/MSA016_Olsen_2016-08-17_Class07_MythandHistory.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 8',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA016_TheLostRoad/MSA016_Olsen_2016-08-24_Class08_TwoWorldsComeTogether.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 9',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA016_TheLostRoad/MSA016_Olsen_2016-08-31_Class09_TheEndoftheSilmarillion.mp3'
    },
    {
        'title': 'MSA016: The Lost Road and Other Writings, Class 10',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA016_TheLostRoad/MSA016_Olsen_2016-09-16_Class10_TheEtymologies.mp3'
    },
    {
        'title': 'MSA017: The Dispossessed, Class 01',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA017_TheDispossessed/MSA017_Olsen_2016-09-21_Class01_FromtheMoon.mp3'
    },
    {
        'title': 'MSA017: The Dispossessed, Class 02',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA017_TheDispossessed/MSA017_Olsen_2016-09-28_Class02_IAmStillHere.mp3'
    },
    {
        'title': 'MSA017: The Dispossessed, Class 03',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA017_TheDispossessed/MSA017_Olsen_2016-10-05_Class03_Quarantine.mp3'
    },
    {
        'title': 'MSA017: The Dispossessed, Class 04',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA017_TheDispossessed/MSA017_Olsen_2016-10-12_Class04_Nuchnibi.mp3'
    },
    {
        'title': 'MSA017: The Dispossessed, Class 05',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA017_TheDispossessed/MSA017_Olsen_2016-10-25_Class05_HumanNature.mp3'
    },
    {
        'title': 'MSA017: The Dispossessed, Class 06',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA017_TheDispossessed/MSA017_Olsen_2016-11-02_Class06_PoliticsOfReality.mp3'
    },
    {
        'title': 'MSA017: The Dispossessed, Class 07',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA017_TheDispossessed/MSA017_Olsen_2016-11-09_Class07_Revolution.mp3'
    },
    {
        'title': 'MSA017: The Dispossessed, Class 08',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA017_TheDispossessed/MSA017_Olsen_2016-11-11_Class08_UnbuildingTheWall.mp3'
    },
    {
        'title': 'MSA017: The Dispossessed, Class 09',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA017_TheDispossessed/MSA017_Olsen_2016-12-05_Class09_TrueVoyageisReturn.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 01',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2016-12-14_Class01_InSearchofaSequel.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 02',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2016-12-21_AdventureComesOnUnexpectedly.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 03',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-01-04_ConcerningWraithsandRings.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 04',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-01-11_ALightheartedAdventure.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 05',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-01-18_TheShadowGrowsHobbitryAbides.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 06',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-01-25_NewsfromBree.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 07',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-02-01_ATurningPointinHisCareer.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 08',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-02-08_LivingatOnceinTwoWorlds.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 09',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-02-15_Reconsiderations.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 10',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-02-22_RetconningtheRing.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 11',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-03-08_TheQuestTakesShape.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 12',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-03-15_BingosTwoHalves.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 13',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-03-22_ClarificationsandTidying.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 14',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-03-29_TheFurtherAdventuresofOdoBolger.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 15',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-04-05_OldBeginningsandNewEndings.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 16',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-04-12_OffIntotheBlue.mp3'
    },
    {
        'title': 'MSA018: Return of the Shadow, Class 17',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA018_ReturnOfTheShadow/MSA018_Olsen_2017-04-19_StandingbyBalinsTomb.mp3'
    },
    {
        'title': 'MSA019: Boethius:The Consolation of Philosophy, Class 01',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA019_Boethius/MSA019_20170510_Whats-Wrong-with-the-World.mp3'
    },
    {
        'title': 'MSA019: Boethius:The Consolation of Philosophy, Class 02',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA019_Boethius/MSA019_20170517_When-Fortune-Turns-Against-You.mp3'
    },
    {
        'title': 'MSA019: Boethius:The Consolation of Philosophy, Class 03',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA019_Boethius/MSA019_20170524_Looking-for-Happiness-in-All-the-Wrong-Places.mp3'
    },
    {
        'title': 'MSA019: Boethius:The Consolation of Philosophy, Class 04',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA019_Boethius/MSA019_20170607_From-God-and-Back-to-God.mp3'
    },
    {
        'title': 'MSA019: Boethius:The Consolation of Philosophy, Class 05',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA019_Boethius/MSA019_20170614_The-Problem-of-Evil-Revisited.mp3'
    },
    {
        'title': 'MSA019: Boethius:The Consolation of Philosophy, Class 06',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA019_Boethius/MSA019_20170621_Gods-Point-of-View.mp3'
    },
    {
        'title': 'MSA019: Boethius:The Consolation of Philosophy, Class 07',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA019_Boethius/MSA019_20170629_Free-Will-and-Gods-Knowledge.mp3'
    },
    {
        'title': 'MSA020: Treason of Isengard, Class 01',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA020_TreasonOfIsengard/MSA020_20170719_Retconning-the-Ring.mp3'
    },
    {
        'title': 'MSA020: Treason of Isengard, Class 02',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA020_TreasonOfIsengard/MSA020_20170726_Of-Wraiths-Narrators-Wizards-and-Songs.mp3'
    },
    {
        'title': 'MSA020: Treason of Isengard, Class 03',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA020_TreasonOfIsengard/MSA020_20170809_A-Weather-Driven-Mariner.mp3'
    },
    {
        'title': 'MSA020: Treason of Isengard, Class 04',
        'url': 'https://media.mythgardacademy.s3.amazonaws.com/MSA020_TreasonOfIsengard/MSA020_20170816_Drawn-Irresistibly-Towards-the-Older-World.mp3'
    }
];

module.exports = audioData;

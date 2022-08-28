
	var myStorage = localStorage;

    var TimeInter = { },
        CL = [],
        CLDead = [],
        AutoPS = [],
        Resize,
        SaveInfo = null,
        
        MD = {

            "Touch": false,
            "Monetization": false,
            "CoilNum": 0,
            "CoilCard": false,

            "Blood": null,

            "AppVersion": "1.0.0",

            "Mobile": 0,
            "MobileWork": false,
            "VX": [50,20],
            "VY": [25,10],
            "LXY": [0,0],

            "RestartCounter": 0,
            "RestartCounter2": 0,

            "RestartCounter_2": 0,
            "RestartCounter2_2": 0,

            "FullHarvest": false,
            "AutoPlay": false,
            "AutoC": 0,
            "AutoCard": 0,

            "RundC": 0,
            "Rune": 0,

            "Blocade": false,
            "Moves": 0,

            "Power": 0,
            "AcumulatedPower": 1,
            "SoulPower": 0,

            "CardCreated": 0,
            "CardsOnBoard": 0,
            "CardsSacrificed": 0,
            "CardsMerge": 0,

            "MaxBuiltUp": 0,

            "Restarts": 0,
            "Harvests": 0,

            "Loaded": false,

            "WindowMove": null,
            "Cell": null,

            "Width": 0,
            "Height": 0,

            "PxW": 0,
            "PxH": 0,

            "TouchX": 0,
            "TouchY": 0,

            "DiffY": 0, 
            "DiffX": 0, 

            "AddCards": [null,null],

            "MouseONCardCounter": [0,null],

            "Cost":{

                0: 5,
                1: 100,
                2: 600,

            },

            "CostMulti":{

                0: {
                 
                    0:[0,10,5],
                    1:[11,18,100],
                    2:[19,20,250000],
                    3:[21,25,55000000],
                    4:[26,100000,150000000],

                },
                1: {
                    
                    0:[0,5,50],
                    1:[6,10,1500],
                    2:[11,15,2500000],
                    3:[16,20,135000000],
                    4:[21,100000,2500000000],

                },

            },

            "Ranks":{

                0: [1,0],
                1: [1,0],
                2: [1,0],
    
            },
            
            "Rank2Cards":{

                "lenght": 5,

                0: [true,0],
                1: [false,3],
                2: [false,5],
                3: [false,4], // coil
                4: [false,6],

            },
            
            "NomCost":{

                0: 0,
                1: 0

            },

            "SpecCost":{

                0: 0,
                1: 600,
                2: 1250000,
                3: 80000000,
                4: 66666666666666

            },

            "DemonEye":{

                "PX": 0,
                "PY": 0,

            }

        },
       
        TextData = {

            0:{
                "Size": 17,
                "Spec": "normal",
                "Color": "red",

                "LWidth": 2,
                "SColor": "red",
                "LineJoin": "round",
                "SPY": 0,
            },

            1:{
                "Size": 20,
                "Spec": "bold",
                "Color": "white",
            },

            100:{
                "Size": 20,
                "Spec": "bold",
                "Color": "red",
            },

            2:{
                "Size": 11,
                "Enter": 15,
                "Spec": "normal",
                "Color": "white",
            },

            3:{
                "Size": 16,
                "Spec": "normal",
                "Color": "white",

                "LWidth": 8,
                "SColor": "black",
                "LineJoin": "round",
                "SPY": 0,
            },

            4:{
                "Size": 30,
                "Spec": "normal",
                "Color": "white",
            },

            400:{
                "Size": 30,
                "Spec": "bold",
                "Color": "red",
            },

            5:{
                "Size": 30,
                "Spec": "bold",
                "Color": "white",
            },

            6:{
                "Size": 20,
                "Enter": 40,
                "Spec": "normal",
                "Color": "white",
            },

            7:{
                "Size": 14,
                "Spec": "normal",
                "Color": "white",

                "LWidth": 1,
                "SColor": "white",
                "LineJoin": "round",
                "SPY": 0,
            },

            700:{
                "Size": 14,
                "Spec": "bold",
                "Color": "red",
            },

            7000:{
                "Size": 10,
                "Spec": "bold",
                "Color": "red",
            },

            70000:{
                "Size": 8,
                "Spec": "bold",
                "Color": "red",
            },

            8:{
                "Size": 20,
                "Spec": "normal",
                "Color": "white",
            },

            9:{
                "Size": 45,
                "Spec": "normal",
                "Color": "white",
            },

            10:{
                "Size": 25,
                "Spec": "bold",
                "Color": "white",
            },

            11:{
                "Size": 35,
                "Spec": "bold",
                "Color": "red",
            },

            12:{
                "Size": 30,
                "Spec": "bold",
                "Color": "red",
            },

            "Ver":{
                "Size": 15,
                "Spec": "normal",
                "Color": "white",
            },

            13:{
                "Size": 17,
                "Spec": "bold",
                "Color": "black",

                "LWidth": 1,
                "SColor": "black",
                "LineJoin": "round",
                "SPY": 0,
            },

        },
        
        Ranks = {

            "P0":{

                0:[3,6,0], // 0 start, 4 koniec, 0 jaka grafika
                1:[7,9,1],
                2:[10,13,2],
                3:[14,500,3]

            },

            "P1":{

                0:[3,6,0],
                1:[7,10,1],
                2:[11,14,2],
                3:[15,500,3]

            },

        },
        
        CD = {

            "Colors": "ffff000f000fff00fff0f",
            "Colors_Hero": "ffff00fff0000007ff1cf",
            
            0:{ // Necro
                
                "StarPatern": 2, 
                "Skill": "*",
                "NumberS": "",
                "SkillSpec": 0,

                "Rang": 3, 
                "Name": "NECROMANCER",

                "Spec": 0,

                "PX": 14, 
                "PY": 55, 

                "M": 6,
                "S": 19,

                "F": "@PRRRRRR@@@RRZ[RRB@@PR[[[[R@@@Z[kmm]B@@X]kRRR]@@@U[RRRRE@@PjSRRRR@@@RZSRRRB@@PR[RRRR@@@RjSRRRB@@PRZSRRR@@@RR]RRRB@@PRR[RRR@@@RRjSRRB@@PRRZSRR@@@RRR]RRB@@PRRR[RR@@@RRRZSRB@@PRRR]RR@@",

                "Text": [
                    ["Harvest - adds death energy when you"],
                    ["right click a card, the amount of added"],
                    ["energy depends on the built up energy"],
                    ["from cards. Revives all cards and saves game."],
                    ["Necromancer can shatter the card."]
                ]

            },

            1:{
                
                "StarPatern": 1,
                "Skill": "*",
                "NumberS": 2,
               
                "Rang": 1, 
                "Name": "MOVING GRAVE",
                "Spec": 1,

                "PX": 33, 
                "PY": 57, 

                "M": 5,
                "S": 15,

                "F": "@@@HHH@@@@@AAAA@@IHIII@@HIIII@@@HIIIA@@@HIIA@@@@HIA@@@@HIA@@@@@II@@@@@II@@@@@HIA@@@@@IIA@@@BHIA@@@RJIJ@R@RRRRQRR@",
                
                "Text": [
                    ["Death Energy Multiplier - multiplies the energy"],
                    ["of the cards in range, < + > on the frames"],
                    [" indicates the direction of energy multiplication,"],
                    ["it can be merged with a twin card"],
                    ["(same level and card name)."]
                ]

            },

            2:{

                "StarPatern": 0,
                "Skill": "+",
                "NumberS": 1,
                
                "Rang": 0, 
                "Name": "BONES",
                "Spec": 2,

                "PX": 33, 
                "PY": 55, 

                "M": 5,
                "S": 15,
                
                "F": "@@@@@@@@@HA@IHA@@IAHII@@II@HI@HIA@@IA@IA@AHI@@I@IAIA@@@IAIIA@@IAHAI@@@A@@@@@H@@A@@@HIIIAA@@IIIIHA@@A@H@HA@@@@@@@@",
                
                "Text": [
                    ["Death Energy Transfer - adds energy to"],
                    ["the cards in range, < + > on the frames"],
                    ["indicates the transfer direction of energy,"],
                    ["it can be merged with a twin card"],
                    ["(same level and card name)."]
                ]

            },

            "Rank":{

                0:{

                    0:{

                        "Name": "SKELETON",

                        "PX": 33, 
                        "PY": 55, 

                        "M": 5,
                        "S": 15,

                        "F": "@@@@@@@@@@HI@@@@@@JB@@@@@HI@@@@@@H@@@@@HHIH@@@HHHHH@@@AIHAA@@HHHHH@@@AHI@A@@@H@H@@@@@A@A@@@@H@H@@@@@A@A@@@@I@HA@@",

                    },

                    1:{

                        "Name": "CORPSES",

                        "PX": 33, 
                        "PY": 55, 

                        "M": 5,
                        "S": 15,

                        "F": "@@@@@@@@HJHI@@@@III@@@@HJIIIA@@@HIA@@@@@AHI@@@@H@@AIAIB@@@PQHI@I@@IAJIA@@@A@HIA@HIA@IIIAHI@AHA@@IAH@HI@IA@@@@@HI@",

                    },

                    2:{

                        "Name": "UNDEADS",

                        "PX": 33, 
                        "PY": 55, 

                        "M": 5,
                        "S": 15,

                        "F": "@@@@@@@@@@HA@@@@@HJA@@@@@HI@IA@IHIAPQHAHHA@IA@AHI@@A@@IAIHIH@@IAAIIA@@HIHAI@@HI@HI@@@AI@AA@@I@IHH@@HAHAAA@HA@HIH@",

                    },

                    3:{

                        "Name": "DEAD ARMY",

                        "PX": 33, 
                        "PY": 55, 

                        "M": 5,
                        "S": 15,

                        "F": "@@@IA@@@@@PQHI@HI@IAJB@JB@@HI@HI@@@@@@@@IA@IA@@PQ@PQ@IAIA@IAPQ@@@@A@IA@@AIA@A@@AAAAIAAHHAIAAAAAAAIAIHH@IAAAAA@A@A",

                    },

                },

                1:{

                    0:{

                        "Name": "TOMB",

                        "PX": 33, 
                        "PY": 55, 

                        "M": 5,
                        "S": 15,

                        "F": "@@@@@@@@@@@B@@@@@@RB@@@@@@B@@@@@@IA@@@@@IIA@@@@IIIA@@@IIIIA@@IRRRJA@IB@@@JAHB@@@@J@B@@B@@BP@@JB@P@B@JIB@BP@PIQ@P@",

                    },

                    1:{

                        "Name": "GRAVEYARD",

                        "PX": 33, 
                        "PY": 55, 

                        "M": 5,
                        "S": 15,

                        "F": "@@@@@@@@@@@@@@@@B@@@@B@RB@B@RB@B@RB@B@P@@B@P@@@BP@B@@@RB@RB@@@B@@B@@@P@BP@@@B@RB@B@RB@B@RB@B@P@@B@P@@@@P@@@@@@@@@",

                    },

                    2:{

                        "Name": "BLACK CHURCH",

                        "PX": 33, 
                        "PY": 55, 

                        "M": 5,
                        "S": 15,

                        "F": "@@@P@@@@@@@B@@@@@@RB@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@H@@@@@@PR@@@@@PRR@@@@PRRR@@@PRRRR@@",

                    },
                    
                    3:{

                        "Name": "DEAD CASTLE",

                        "PX": 33, 
                        "PY": 55, 

                        "M": 5,
                        "S": 15,

                        "F": "@@A@@A@@@AIHAA@@HHHHH@@@AAAAA@@H@@@H@@@A@B@A@@HIIII@@@@@P@@@@@@@B@@@@@@R@@@@@@RB@@@@@RB@@@@@PRR@@@@@PRR@@@@@PRB@@",

                    },

                },

            },

            3:{
                
                "Eye":{

                    "PX": 53, 
                    "PY": 85, 
    
                    "M": 5,
                    "S": 7,
    
                    "F": "@RB@RRBRBRRRPRRBRBRRB@RB@",
    
                },
                
                "DAdd": true,

                "StarPatern": 2, 
                "Skill": "*",
                "NumberS": "",

                "Rang": 3, 
                "Name": "%#$%@@#$",

                "Spec": 0,
                "SkillSpec": 1,

                "PX": 34, 
                "PY": 66, 

                "M": 5,
                "S": 15,

                "F": "@PRRRR@@P@@@@P@P@@@@@PP@@@@@@PB@@@@@@R@@@@@@PB@@@@@@R@@@@@@PB@@@@@@R@@@@@@PB@@@@@@R@@@@@@PP@@@@@P@P@@@@P@@PRRRR@@",
                     
                "Text": [
                    ["Service - the demon watches and memorizes the"],
                    ["used cards, he does not have a good memory"],
                    ["so moving the card or go to sleep clears his memory."],
                    ["The demon must see the full harvest to repeat it"],
                    ["(eye twitches when he is ready to serve)."]
                ]

            },

            4:{

                "BloodStains":{

                    "M": 8,
                    "S": 8,

                    "length": 6,

                    0:{
                       
                        "PX": -1, 
                        "PY": -1, 
    
                        "F": "RRRRRRRRRRRBRR@@RB@@R@@@@R@@PR@@",
                        
                        "Star": 0
    
                    },

                    1:{
                       
                        "PX": 35, 
                        "PY": 56, 
    
                        "F": "@@@@@@@@@R@@@RB@@PR@@PR@@@@@@@@@",
                        
                        "Star": null
    
                    },

                    2:{
                       
                        "PX": -1, 
                        "PY": 137, 
    
                        "F": "@@@@@@PB@@RRB@PRRB@BRB@@RRR@RRRB",
                        
                        "Star": 2
    
                    },

                    3:{
                       
                        "PX": 140-62, 
                        "PY": 137, 
    
                        "F": "@@B@@RRP@RRR@PRR@@RR@PRRPRRR@RRR",
                        
                        "Star": 7
    
                    },

                    4:{
                       
                        "PX": 43, 
                        "PY": 76, 
    
                        "F": "@@@@@@P@@PR@@RR@@RR@@PB@@@@@@@@@",
                        
                        "Star": null
    
                    },
                   
                    5:{
                       
                        "PX": 140-62, 
                        "PY": -1, 
    
                        "F": "RRR@@RRR@PRR@RRR@PRR@@PR@@@B@@@@",

                        "Star": 5
    
                    },

                },
                
                "StarPatern": 3, 
                "Skill": "*",
                "NumberS": "",

                "DAdd": true,

                "Rang": 3, 
                "Name": "DEAD SINNER",
                "SkillSpec": 4,

                "Spec": 0,

                "PX": 40, 
                "PY": 70, 

                "M": 5,
                "S": 15,

                "F": "@@@@@@@@@@@@IA@@@AHHI@@@IIIIA@@IIII@@@IIIII@@@AHIII@@@HIIIA@@HIIAI@@HIIIHA@IIHI@H@HI@IA@@@HAHI@@@@@HI@@@@@@I@@@@@",
                    
                "Text": [
                    ["Splash - the sinner's body fills with blood"],
                    ["every harvest, using the card splashes blood"],
                    ["on cards in < + > direction. A card covered in"],
                    ["blood gives 2x death energy. Splashing"],
                    ["again cleans the previous cards."]
                ]

            },

            5:{
                
                "StarPatern": 2, 
                "Skill": "*",
                "NumberS": "",
                "SkillSpec": 3,

                "DAdd": true,

                "Spec": 0,
                "Rang": 3, 
                "Name": ["DEAD RUNS"],

                "Runs_0": [["%%%#%#$&"],["&#$%$%#&"],["@*%%#%%&"],["&%$%$#$&"],["&#$%$%#&"],["&#$%#$%#$"]],
                "Runs_1": [["@&&$%#$%%"],["&%$#%#$&"],["&#$%#$%#&"],["@&$%#$&%&"],["&#$$@#$#$"],["&%&#$%&#"]],
                "Runs_2": [["&%@#$%#%"],["&#$%#$%#$"],["&$%%$$%&#"],["&$%$%#$&"],["&%$&#&#$"],["&%&#$%&#"]],

                "PX": 22, 
                "PY": 65, 
                  
                "Text": [
                    ["Dead Field - dead runes allow the"],
                    ["necromancer to handle a larger harvest"],
                    ["field, card works passively."],
                ]

            },

            6:{
                
                "Fire":{

                    "N": [0,1,3,5,5],

                    0:[69,69],

                    1:[34,89],
                    2:[104,89],

                    3:[33,130],
                    4:[104,130],

                },

                "StarPatern": 2, 
                "Skill": "*",
                "NumberS": "",

                "DAdd": true,

                "Rang": 3, 
                "Name": "BLOOD RITUAL",
                "SkillSpec": 5,

                "Spec": 0,

                "PX": 34, 
                "PY": 78, 

                "M": 5,
                "S": 15,

                "F": "@@@H@@@@@@@A@@@@@@P@@@@@@PP@@@A@@BB@@I@@B@B@HRRRRRRRBBB@@@BB@R@@@PB@@RB@RB@@B@RB@B@P@RPBP@QPB@@RPIR@@@@PJB@@@@@@B",
                    
                "Text": [
                    ["Sacrifice - after all candles are lit, a ritual"],
                    ["is held that sacrifices all cards except"],
                    ["the necromancer. Each sacrificed level of a card"],
                    ["adds soul energy, build up energy is multiplied"],
                    ["by soul energy at each harvest."]
                ]

            },

        },
        
        Web = {

            "XY": [7,4],

            "PX": 685,
            "PY": 114,

            "List": [],
            "List_2": [],

            "Unlock": [1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1]

        },

        Buttons = {

            0:{

                "length": 4,

                0:{
    
                    "Rang": 0, 
    
                    "Width": 266+355-71,
                    "Height": 117,
    
                    "MouseOn": false,
                    "Clicked": false,
    
    
                    "PX": 71,
                    "PY": 753,
                    
                },
    
                1:{
    
                    "Rang": 1, 
    
                    "Width": 266,
                    "Height": 117,
    
                    "MouseOn": false,
                    "Clicked": false,
    
                    "PX": 71,
                    "PY": 898,
                    
                },
    
                2:{
    
                    "Rang": 2, 
    
                    "Width": 266,
                    "Height": 117,
    
                    "MouseOn": false,
                    "Clicked": false,
    
                    "PX": 355,
                    "PY": 898,
                    
                },
    
                3:{
    
                    "Width": 90,
                    "Height": 90,
    
                    "MouseOn": false,
                    "Clicked": false,
    
                    "PX": 15,
                    "PY": 15,
                    
                },
    
            },

            1:{

                "length": 5,

                0:{
    
                    "Rang": 0, 
    
                    "Width": 266,
                    "Height": 117,
    
                    "MouseOn": false,
                    "Clicked": false,
    
    
                    "PX": 71,
                    "PY": 753,
                    
                },
    
                1:{
    
                    "Rang": 1, 
    
                    "Width": 266,
                    "Height": 117,
    
                    "MouseOn": false,
                    "Clicked": false,
    
                    "PX": 355,
                    "PY": 753,
                    
                },
    
                2:{
    
                    "Rang": 2, 
    
                    "Width": 266,
                    "Height": 117,
    
                    "MouseOn": false,
                    "Clicked": false,
    
                    "PX": 355,
                    "PY": 898,
                    
                },
    
                3:{
    
                    "Width": 90,
                    "Height": 90,
    
                    "MouseOn": false,
                    "Clicked": false,
    
                    "PX": 15,
                    "PY": 15,
                    
                },
    
                4:{
    
                    "Width": 266,
                    "Height": 117,
    
                    "MouseOn": false,
                    "Clicked": false,
    
                    "PX": 71,
                    "PY": 898,
                    
                },
    
            },
           
        },

        StarsMap = {

            0:{

                "length": 4,

                0: {
                  
                    0:[0,0,1,0,0,0,0,1],
                    1:[1,0,0,0,0,1,0,0],
                    2:[1,0,1,0,0,0,0,0],
                    3:[0,0,0,0,0,1,0,1],   

                },

                1: {
                  
                    0:[0,0,1,0,1,0,0,1],
                    1:[1,0,0,1,0,1,0,0],
                    2:[1,1,1,0,0,0,0,0],
                    3:[0,0,0,0,0,1,1,1],   

                },

                2: {
                   
                    0:[1,0,1,0,1,1,0,1],
                    1:[1,0,1,1,0,1,0,1],
                    2:[1,1,1,0,0,1,0,1],
                    3:[1,0,1,0,0,1,1,1],  

                },

                3: {
                  
                    0:[1,1,1,0,1,1,1,1],
                    1:[1,1,1,1,0,1,1,1],
                    2:[1,1,1,1,1,1,0,1],
                    3:[1,0,1,1,1,1,1,1],  

                },

                4: {
                  
                    0:[1,1,1,1,1,1,1,1],
                    1:[1,1,1,1,1,1,1,1],
                    2:[1,1,1,1,1,1,1,1],
                    3:[1,1,1,1,1,1,1,1],  

                },

            },

            1:{

                "length": 4,

                0: {
                  
                    0:[0,0,0,1,0,0,0,0],
                    1:[0,1,0,0,0,0,0,0],
                    2:[0,0,0,0,1,0,0,0],
                    3:[0,0,0,0,0,0,1,0],   

                },

                1: {
                  
                    0:[0,0,0,1,0,0,1,0],
                    1:[0,1,0,0,0,0,1,0],
                    2:[0,1,0,0,1,0,0,0],
                    3:[0,1,0,0,0,0,1,0],   

                },

                2: {
                    
                    0:[0,1,0,1,0,0,1,0],
                    1:[0,1,0,1,0,0,1,0],
                    2:[0,1,0,0,1,0,1,0],
                    3:[0,1,0,0,1,0,1,0], 

                },

                3: {
                
                    0:[0,1,0,1,1,0,1,0],
                    1:[0,1,0,1,1,0,1,0],
                    2:[0,1,0,1,1,0,1,0],
                    3:[0,1,0,1,1,0,1,0],     

                },

                4: {
                
                    0:[0,1,1,1,1,0,1,1],
                    1:[1,1,0,1,1,1,1,0],
                    2:[1,1,0,1,1,0,1,1],
                    3:[0,1,1,1,1,1,1,0],    

                },
  
            },

            2:{

                "length": 1,

                0: {

                    0:[1,1,1,1,1,1,1,1], 

                }
                
            },

            3:{

                "length": 1,

                0: {

                    0:[1,0,1,0,0,1,0,1], 

                }
                
            },
       
        };
        
	var windowWidth = window.innerWidth,
		windowHeight = window.innerHeight,
		pixelRatio = window.devicePixelRatio || 1;

	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");

		canvas.width = windowWidth * pixelRatio;
		canvas.height = windowHeight * pixelRatio;

		canvas.style.width = windowWidth + 'px';
		canvas.style.height = windowHeight + 'px';	
	
    function LoadEngine(){

        SaveInfo = JSON.parse(JSON.stringify(MD));

        PixelRatio();
        WebCreate();
        
        TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen);

    }

    function LoadGame(){

		if(localStorage.getItem('CFG_IdleN_S') == "true"){
            
            var BloodC = null;

            MD.Loaded = true;
	
            for (var x = 0; x < Number(localStorage.getItem('CFG_IdleN_CLlen')); x++) {
               
                CreateCard(
                    Number(localStorage.getItem('CFG_IdleN_Card_Num_'+x)),
                    false,
                    Number(localStorage.getItem('CFG_IdleN_Cell_'+x)),
                    Number(localStorage.getItem('CFG_IdleN_PaternNum_'+x)),
                    Number(localStorage.getItem('CFG_IdleN_Level_'+x))
                );

                if(Number(localStorage.getItem('CFG_IdleN_Card_Num_'+x)) == 5)
                for (var z = 0; z < Web.List.length; z++)
                Web.List[z].Unlock = true;

                if(Number(localStorage.getItem('CFG_IdleN_Card_Num_'+x)) == 4)
                BloodC = CL[x];

                if(CL[x].Data.SkillSpec != null && Number(localStorage.getItem('CFG_IdleN_Card_Num_'+x)) != 0)
                MD.Ranks[2][0]++;

            }
           
            if(BloodC != null){

                var Nmu = [
                    [0,1,1,0,0,0,1],
                    [1,0,1,0,0,0,2],
                    [0,0,0,1,0,1,1],
                    [0,0,0,0,1,1,2],
                    [0,1,0,1,0,0,2],
                    [1,0,0,0,0,1,2],
                    [0,0,1,0,1,0,2],
                ];
    
                for (var x = 0; x < CL.length; x++)
                if(localStorage.getItem('CFG_IdleN_Blood_'+x) == "true" && Number(localStorage.getItem('CFG_IdleN_Card_Num_'+x)) != 4){
                    
                    var nm = Math.floor((Math.random() * 7));
    
                    for (let b = 0; b < 6; b++)
                    if(Nmu[nm][b]){

                        CL[x].Blood.push(BloodC.Blood[b]);
                        CL[x].BloodL++;

                        if(BloodC.Blood[b].StarN != null && CL[x].Stars[BloodC.Blood[b].StarN] == "+")
                        CL[x].BloodStars[BloodC.Blood[b].StarN] = "+";

                    }

                }
            
            }

            MD.Power = Number(localStorage.getItem('CFG_IdleN_Power'));
            MD.SoulPower = Number(localStorage.getItem('CFG_IdleN_SoulPower'));

            MD.CardCreated = Number(localStorage.getItem('CFG_IdleN_CardCreated'));
            MD.CardsSacrificed = Number(localStorage.getItem('CFG_IdleN_CardsSacrificed'));
            MD.CardsMerge = Number(localStorage.getItem('CFG_IdleN_CardsMerge'));

            MD.MaxBuiltUp = Number(localStorage.getItem('CFG_IdleN_MaxBuiltUp'));
            MD.Restarts = Number(localStorage.getItem('CFG_IdleN_Restarts'));
            MD.Harvests = Number(localStorage.getItem('CFG_IdleN_Harvests'));

            if(localStorage.getItem('CFG_IdleN_CoilCard') == "true")
            MD.CoilCard = true; else MD.CoilCard = false;
           
            for (var x = 0; x < 2; x++) {
                
                MD.Ranks[x][0] = Number(localStorage.getItem('CFG_IdleN_Ranks_0_'+x));
                MD.Ranks[x][1] = Number(localStorage.getItem('CFG_IdleN_Ranks_1_'+x));
  
            }

            for (var x = 0; x < 2; x++)
            MD.NomCost[x] = Number(localStorage.getItem('CFG_IdleN_NomCost_'+x));
          
            for (var x = 0; x < MD.Rank2Cards.lenght; x++)
            if(localStorage.getItem('CFG_IdleN_R2C_'+x) == "true")
            MD.Rank2Cards[x][0] = true;
            else MD.Rank2Cards[x][0] = false;
          
            CostH();

        } else 
        if(!MD.Loaded){

            CreateCard(0);
            CoilCheck();

        }
        	
    }

    function SaveVal(){

        localStorage.setItem('CFG_IdleN_S',true);

        localStorage.setItem('CFG_IdleN_Power',MD.Power);
        localStorage.setItem('CFG_IdleN_SoulPower',MD.SoulPower);

        localStorage.setItem('CFG_IdleN_CardCreated',MD.CardCreated);
        localStorage.setItem('CFG_IdleN_CardsSacrificed',MD.CardsSacrificed);
        localStorage.setItem('CFG_IdleN_CardsMerge',MD.CardsMerge);

        localStorage.setItem('CFG_IdleN_MaxBuiltUp',MD.MaxBuiltUp);
        localStorage.setItem('CFG_IdleN_Restarts',MD.Restarts);
        localStorage.setItem('CFG_IdleN_Harvests',MD.Harvests);

    }

    function SaveMain(){

        localStorage.setItem('CFG_IdleN_S',true);

        var lenCard = 0;

        for (var x = 0; x < CL.length; x++) 
        if(CL[x] != null){
            
            localStorage.setItem('CFG_IdleN_Card_Num_'+lenCard,CL[x].Card_Num);
            localStorage.setItem('CFG_IdleN_Cell_'+lenCard,CL[x].Cell);
            localStorage.setItem('CFG_IdleN_Level_'+lenCard,CL[x].Level);
            localStorage.setItem('CFG_IdleN_PaternNum_'+lenCard,CL[x].PaternNum);

            if(CL[x].Blood.length > 0)
            localStorage.setItem('CFG_IdleN_Blood_'+lenCard,true);
            else localStorage.setItem('CFG_IdleN_Blood_'+lenCard,false);
           
            lenCard ++;

        }

        for (var x = 0; x < 2; x++) {
            
            localStorage.setItem('CFG_IdleN_Ranks_0_'+x,MD.Ranks[x][0]);
            localStorage.setItem('CFG_IdleN_Ranks_1_'+x,MD.Ranks[x][1]);
             
        }

        for (var x = 0; x < 2; x++)
        localStorage.setItem('CFG_IdleN_NomCost_'+x,MD.NomCost[x]);
          
        for (var x = 0; x < MD.Rank2Cards.lenght; x++)
        localStorage.setItem('CFG_IdleN_R2C_'+x,MD.Rank2Cards[x][0]);
          
        localStorage.setItem('CFG_IdleN_CLlen',lenCard);
        
        SaveVal();

    }

    function PixelRatio(){ 

        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        pixelRatio = window.devicePixelRatio || 1;

        var Height = (windowHeight* pixelRatio) , Width = (windowWidth* pixelRatio);
            
        canvas.width = windowWidth * pixelRatio;
        canvas.height = windowHeight * pixelRatio;

        canvas.style.width = windowWidth + 'px';
        canvas.style.height = windowHeight + 'px';

        if(Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) > 36)
            for (;Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) != 36;)
                windowHeight = Math.round(36 * ((windowWidth + windowHeight) / 100));

        if (Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) > 64)
            for (;Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) != 64;)
                windowWidth = Math.round(64 * ((windowWidth + windowHeight) / 100));

        MD.PxW = ((windowWidth * pixelRatio) / 1920);
        MD.PxH = ((windowHeight * pixelRatio) / 1080);

        MD.DiffY = ((Height - windowHeight* pixelRatio)) / 2;
        MD.DiffX = ((Width - windowWidth* pixelRatio)) / 2;
    
        MD.Width = 1920*MD.PxW;
        MD.Height = 1080*MD.PxH;

        NoUpdateScreen();

    }

    // ---- //
    
    function WebCreate(){

        for (var x = 0; x < Web.XY[1]; x++){
            
            Web.List_2.push([]);	
           
            for (var y = 0; y < Web.XY[0]; y++) {

                Web.List.push({
                   
                    "X": y,
                    "Y": x,
    
                    "PX": Web.PX+(168*y),
                    "PY": Web.PY+(228*x),
    
                    "CardIn": null,

                    "Unlock": false,
    
                });

                if(!Web.Unlock[Web.List.length-1])
                Web.List[Web.List.length-1].Unlock = true;

                Web.List_2[x].push((Web.XY[0]*x)+y);	
    
            }

        } 
       
        LoadGame();
 
    }

    function WebDraw(){

        for (var x = 0; x < Web.List.length; x++) {
          
            var Cell = Web.List[x];

            ctx.save();	

            ctx.translate(Cell.PX* MD.PxW, Cell.PY* MD.PxH);
        
                    if(x == MD.AddCards[2])
                    if("NECROMANCER" == MD.AddCards[0]){
            
                        ctx.beginPath();

                            rectDrawer(2,"white",0,0,168,228);

                            ctx.fillStyle = 'red';
                            ctx.fill();

                            rectDrawer(8,"black",0,0,168,228);

                        ctx.closePath();

                    }

                    ctx.beginPath();
                
                        if(x == MD.Cell){

                            ctx.globalAlpha = 0.55;
                            ctx.strokeStyle = "White";

                        }

                        if(x == MD.AddCards[2]) 
                        ctx.strokeStyle = "Red";

                        ctx.lineWidth = 2 * MD.PxW;
                    
                        if(x == MD.Cell || x == MD.AddCards[2]) 
                        ctx.rect(0, 0, 168* MD.PxW, 228* MD.PxH);

                        ctx.stroke();
            
                    ctx.closePath();

            ctx.restore();
     
            ctx.save();	

            ctx.translate(Cell.PX* MD.PxW, Cell.PY* MD.PxH);
        
                ctx.beginPath();
            
                    if(x == MD.Cell) 
                    ctx.globalAlpha = 0.3;
                    else ctx.globalAlpha = 0.1;
                    
                    if(!Web.List[x].Unlock)
                    ctx.globalAlpha = 0.04;

                    rectDrawer(2,"White",13,13,142,202);

                    ctx.fillStyle = 'White';
                    ctx.fill();
        
                ctx.closePath();
            
                ctx.globalAlpha = 0.4;
               
                if(Web.List[x].Unlock)
                TextDrawer(["+"],4,85,120);

            ctx.restore();
     
        }

        if(MD.AutoPlay)
        if(MD.AutoC <= 0){

            if(!CL[AutoPS[MD.AutoCard].Card].Used)
            SpecFunction(CL[AutoPS[MD.AutoCard].Card]);

            MD.AutoCard++;

            if(MD.AutoCard > AutoPS.length-1)
            MD.AutoCard = 0;

            MD.AutoC = 10;

        } else MD.AutoC--;

    }

    // ---- //

    function CreateCard(Card_Num,Level,CellS,PaternNumS,LevelC){

        MD.CardsOnBoard++;

        var CleanCheck = [];

        for (var x = 0; x < Web.List.length; x++) 
        if(Web.List[x].CardIn == null && Web.List[x].Unlock)
        CleanCheck.push(x);
            
        var Cell = CleanCheck[Math.floor(Math.random() * CleanCheck.length)],
            Check = false, 
            Num = 0;
            
        if(Card_Num == 0)
            Cell = 10;
        else MD.CardCreated++;

        if(CellS != null)
        Cell = CellS;
       
        var Num = Math.floor(Math.random() * StarsMap[CD[Card_Num].StarPatern].length);

        if(PaternNumS != null)
        Num = PaternNumS;

        var StartStars = StarsMap[CD[Card_Num].StarPatern][0][Num];
        
        var Card = {
            
            "Card_Num": Card_Num,
            "TN": 0,

            "Blood": [],
            "BloodL": 0,
            
            "Merged": false,
            "Restart": false,
            "Level": 1,

            "Data": CD[Card_Num],

            "Draw": false,
            "Function": null,

            "PX": Web.List[Cell].PX+13.5,
            "PY": Web.List[Cell].PY+13.5,
            "Cell": Cell,

            "Skill": CD[Card_Num].Skill,
            "NumberS": CD[Card_Num].NumberS,
            "AddedNumber": CD[Card_Num].NumberS,
            "SkillText": CD[Card_Num].Skill+CD[Card_Num].NumberS,

            "Shadow": 0,
            "Counter": 0,
            "UseCounter":0,

            "Scale": 1,
            "ScaleM": 0.85,
            "ScaleAdd": 0,
            
            "PX_2": 0,
            "PY_2": 0,

            "PX_2_M": 0,
            "PY_2_M": 0,

            "MadeCounter": 200,

            "Start_Stars_Patern": CD[Card_Num].StarPatern,
            "PaternNum": Num,
            "StarsTab": StartStars,
            "Stars":{

                0: " ",
                1: " ",
                2: " ",
                3: " ",
                4: " ",
                5: " ",
                6: " ",
                7: " ",

            },
            "BloodStars": {

                0: " ",
                1: " ",
                2: " ",
                3: " ",
                4: " ",
                5: " ",
                6: " ",
                7: " ",
    
            }
    
        }
        
        for (var x = 0; x < StartStars.length; x++)
        if(StartStars[x]) Card.Stars[x] = "+";

        if(CL.length > 1)
        for (var x = 0; x < CL.length; x++) 
        if(CL[x] == null){

            Check = true;
            Num = x;

        }

        var x = 0; 

        if(!Check){

            CL.push(JSON.parse(JSON.stringify(Card)));
            x = CL.length-1;
    
        } else {
            
            CL[Num] = JSON.parse(JSON.stringify(Card));
            x = Num;
    
        }

        Web.List[Cell].CardIn = x;
        CL[x].TN = x;
       
        CL[x].Function = function (){ CardDraw(CL[x]); }

        if(LevelC != null)
        if(LevelC > 1){
           
            CL[x].Level = LevelC;

            CL[x].NumberS = CD[Card_Num].NumberS;

            for (var y = 0; y < CL[x].Level-1; y++) 
            CL[x].NumberS += CL[x].NumberS;
  
            CL[x].AddedNumber = CL[x].NumberS;
            CL[x].SkillText = CL[x].Skill+CL[x].NumberS;

        }
        
        if(Level && CL[x].Data.Rang < 3 && CL[x].Level != MD.Ranks[CL[x].Data.Rang][0]){

            CL[x].Level = MD.Ranks[CL[x].Data.Rang][0];

            CL[x].NumberS = CD[Card_Num].NumberS;

            for (var y = 0; y < CL[x].Level-1; y++) 
            CL[x].NumberS += CL[x].NumberS;
  
            CL[x].AddedNumber = CL[x].NumberS;
            CL[x].SkillText = CL[x].Skill+CL[x].NumberS;

        }
       
        if(CL[x].Data.SkillSpec == 4)
        BloodAdd(CL[x]);

        AppRank(CL[x]);

    }

    function CardDraw(Data){
       
		ctx.save();	
        
        if(Data.Shadow == 0 && Data.Draw){
            
            Data.Shadow = 1;
            Data.Counter = 5;
            Data.ScaleAdd = (Data.ScaleM-1)/5;

        }

        if(Data.Counter > 0 && Data.Shadow == 1){
           
            Data.Scale += Data.ScaleAdd;

            Data.PX_2 += 2.5;
            Data.PY_2 += 3;

            Data.Counter --;

        }

        if(Data.Counter > 0 && Data.Shadow == 2){
           
            Data.Scale -= Data.ScaleAdd;

            Data.PX_2 -= Data.PX_2_M;
            Data.PY_2 -= Data.PY_2_M;

            Data.Counter --;

            if(Data.Counter <= 0){

                Data.Shadow = 0;
                Data.Scale = 1;
                Data.PX_2 = 0;
                Data.PY_2 = 0;

                Data.PX = Web.List[Data.Cell].PX+13.5;
                Data.PY = Web.List[Data.Cell].PY+13.5;

            }

        }

        ctx.translate((Data.PX_2+Data.PX)* MD.PxW, (Data.PY_2+Data.PY)* MD.PxH);

        if(Data.MadeCounter > 0){

            ctx.translate(Math.floor((Math.random() * (Data.MadeCounter/12))-Data.MadeCounter/25)*MD.PxW, Math.floor((Math.random() * (Data.MadeCounter/12))-Data.MadeCounter/25)*MD.PxH);

            if(Data.MadeCounter > 9)
            for (var z = 0; z < MD.VX[MD.Mobile]; z++) {
               
                ctx.save();	
            
                    ctx.beginPath();

                    ctx.rect(
                        Math.floor((Math.random() * 140))* MD.PxW, 
                        (7+200-Data.MadeCounter+Math.floor((Math.random() * 5)))* MD.PxH, 
                        4* MD.PxW,
                        4* MD.PxH);
                        
                    if(Math.floor((Math.random() * 2)) == 1)
                    ctx.fillStyle = 'white'; else ctx.fillStyle = 'black';

                    ctx.fill();
                    ctx.closePath();

                ctx.restore();
            
            }
           
            ctx.rect(-5* MD.PxW, -5* MD.PxH, (10+140)* MD.PxW, (10+200-Data.MadeCounter)* MD.PxH);
            ctx.clip();
            
            Data.MadeCounter -= 9;

            if(Data.MadeCounter <= 0)
            Data.MadeCounter = 0;

        }
        
        if(Data.UseCounter > 0){

            ctx.translate(Math.floor((Math.random() * 5)-2.5)*MD.PxW, Math.floor((Math.random() * 5)-2.5)*MD.PxH);
            Data.UseCounter--;

            if(Data.UseCounter <= 0){

                Data.ShadowUse = false;

                if(!Data.Restart && Data.Data.Rang != 3) Data.Used = true;
                else {

                    Data.Used = false;
                    Data.Restart = false;

                }

            }

        }
          
        if(Data.Shadow > 0)
        ctx.scale(Data.Scale, Data.Scale);
        
            MainCardDrew(Data);

        ctx.restore();
       
    }

    function DeadDraw(Data){
       
        if(Data.MadeCounter <= 0){

            Data.MadeCounter = 0;
            return;

        }

        Data.MadeCounter -= 15;

		ctx.save();	
        
        ctx.translate(Data.PX* MD.PxW, Data.PY* MD.PxH);
 
		ctx.save();	
        ctx.beginPath();
        fillrectDrawer(1,"black",0,0,140,-20,"black");
        ctx.closePath();
        ctx.restore();

       // if(Data.DesType == 1){

            Data.DesAnim -= 0.01;
            ctx.globalAlpha = Data.DesAnim;

       // }

        for (var z = 0; z < MD.VY[MD.Mobile]; z++) {
            
            ctx.save();	
        
                ctx.beginPath();

                ctx.rect(
                    Math.floor((Math.random() * 140))* MD.PxW, 
                    (7+Data.MadeCounter+Math.floor((Math.random() * 15)))* MD.PxH, 
                    4* MD.PxW,
                    4* MD.PxH);
                    
                if(Data.DesType == 1){
                    
                    if(Math.floor((Math.random() * 2)) == 1)
                    ctx.fillStyle = 'white'; else ctx.fillStyle = 'black';
    
                } else 
                ctx.fillStyle = 'red';
               
                ctx.fill();
                ctx.closePath();

            ctx.restore();
        
        }
        
        ctx.rect(-5* MD.PxW, -5* MD.PxH, (10+140)* MD.PxW, (10+Data.MadeCounter)* MD.PxH);
        ctx.clip();
        
        if(Data.DesType != 1)
        ctx.translate(Math.floor((Math.random() * 5)-2.5)*MD.PxW, Math.floor((Math.random() * 5)-2.5)*MD.PxH);

            MainCardDrew(Data);

        ctx.restore();
      
    }

    function MainCardDrew(Data){

        ctx.save();	
            
        ctx.beginPath();
    
            ctx.strokeStyle = "White";
            ctx.lineWidth = 2 * MD.PxW;
        
            ctx.rect(0, 0, 140* MD.PxW, 200* MD.PxH);

            ctx.fillStyle = 'Black';

            if(Data.Draw){
               
                ctx.beginPath();
                    ctx.shadowColor = 'white';
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;

                    ctx.strokeStyle = "white";
                    ctx.rect(0, 0, (140)* MD.PxW, (200)* MD.PxH);
                    ctx.stroke();
                ctx.closePath();

            } else if(Data.MouseON)
            rectDrawer(1,"red",-2,-2,144,204);

            if(Data.ShadowUse){
                
                fillrectDrawer(1,"red",-2,-2,144,204,"red");
               
                if(Data.SkillText == "*")
                if(Data.Data.SkillSpec == 1){
                    
                    PixelDraw(Data.Data.Eye,true,100);
                    PixelDraw(Data.Data,true,100);

                }

            }

            ctx.fill();
            ctx.stroke();

        ctx.closePath();
 
    ctx.restore();

    if(!Data.ShadowUse){
       
        TextDrawer([Data.Stars[0]+"     "+Data.Stars[3]+"     "+Data.Stars[5]],0,70,18);
        TextDrawer([Data.Stars[1]+"           "+Data.Stars[6]],0,70,100);
        TextDrawer([Data.Stars[2]+"     "+Data.Stars[4]+"     "+Data.Stars[7]],0,70,192);
    
    } else {

        TextDrawer([Data.Stars[0]+"     "+Data.Stars[3]+"     "+Data.Stars[5]],13,70,18);
        TextDrawer([Data.Stars[1]+"           "+Data.Stars[6]],13,70,100);
        TextDrawer([Data.Stars[2]+"     "+Data.Stars[4]+"     "+Data.Stars[7]],13,70,192);
    
    }
   
    ctx.save();	
        
        ctx.beginPath();
    
            TextDrawer([Data.Data.Name],2,71,45);

            if(Data.SkillText == "*"){

                if(Data.Data.SkillSpec == 0){
                   
                    fillrectDrawer(5,"red",31,55,80,114,"red");
                    PixelDraw(Data.Data,true,Data.Data.SkillSpec);

                } else if(Data.Data.SkillSpec == 1){

                    if(!Data.ShadowUse){

                        ctx.save();	
            
                            ctx.translate(0, 3*MD.PxH);
                            PixelDraw(Data.Data,true,101);

                        ctx.restore();

                        ctx.save();	

                            if(!MD.AutoPlay){
                            
                                DemonEye(Data);

                                ctx.save();	
                                ctx.translate((MD.DemonEye.PX*0.80)*MD.PxW, (MD.DemonEye.PY*0.80)*MD.PxH);
                                    PixelDraw(Data.Data.Eye,true,101);
                                ctx.restore();
    
                                ctx.translate(MD.DemonEye.PX*MD.PxW, MD.DemonEye.PY*MD.PxH);

                            } else {
                                
                                ctx.save();	
                                ctx.translate((AutoPS[MD.AutoCard].Mpx*0.80)*MD.PxW, (AutoPS[MD.AutoCard].Mpy*0.80)*MD.PxH);
                                    PixelDraw(Data.Data.Eye,true,101);
                                ctx.restore();

                                ctx.translate(AutoPS[MD.AutoCard].Mpx * MD.PxW, AutoPS[MD.AutoCard].Mpy * MD.PxH);
                                                
                            }

                            PixelDraw(Data.Data.Eye,true,Data.Data.SkillSpec);

                        ctx.restore();

                        ctx.save();	
            
                            if(MD.AutoPlay || MD.FullHarvest)
                            ctx.translate(-2+Math.floor((Math.random() * 4))*MD.PxW, -2+Math.floor((Math.random() * 4))*MD.PxH);

                            PixelDraw(Data.Data,true,Data.Data.SkillSpec);

                        ctx.restore();

                    }

                } else if(Data.Data.SkillSpec == 3){

                    TextDrawer(Data.Data["Runs_"+MD.Rune],2,71,70);

                    if(MD.RundC <= 0){

                        MD.RundC = 2;
                        MD.Rune = Math.floor((Math.random() * 3));

                    } else MD.RundC--;
                    
                } else if(Data.Data.SkillSpec == 5){

                    PixelDraw(Data.Data,true,Data.Data.SkillSpec);
                    
                    ctx.save();	
                    
                    for (var c = 0; c < Data.Data.Fire.N[MD.RestartCounter_2]; c++)
                    for (var z = 0; z < 10; z++) {
               
                        ctx.save();	
                    
                            ctx.beginPath();
        
                            ctx.rect(
                                (Data.Data.Fire[c][0]+Math.floor((Math.random() * 4)))* MD.PxW, 
                                (Data.Data.Fire[c][1]+Math.floor((Math.random() * 7)))* MD.PxH, 
                                2* MD.PxW,
                                2* MD.PxH);
                                
                            ctx.fillStyle = 'red';
        
                            ctx.fill();
                            ctx.closePath();
        
                        ctx.restore();
                    
                    }

                    ctx.restore();
            
                } else if(Data.Data.F)
                PixelDraw(Data.Data,true,Data.Data.SkillSpec);

            } else {

                PixelDraw(Data.Data);
                
                if(Data.Merged){

                    if(Data.SkillText.length < 7)
                    TextDrawer([Data.SkillText],100,70,160);
                    else if(Data.SkillText.length < 12) TextDrawer([Data.SkillText],700,70,160);
                    else if(Data.SkillText.length < 15) TextDrawer([Data.SkillText],7000,70,160);
                    else TextDrawer([Data.SkillText],70000,70,160);

                } else {

                    if(Data.SkillText.length < 7)
                    TextDrawer([Data.SkillText],1,70,160);
                    else TextDrawer([Data.SkillText],7,70,160);

                }

                TextDrawer([cinTRoman(Data.Level)],3,70,5);

            }
           
            ctx.save();	
                        
                ctx.beginPath();
                ctx.strokeStyle = "White";
                ctx.lineWidth = 1 * MD.PxW;
                
                for (var y = 0; y < Data.Data.Rang+1; y++) 
                ctx.rect((28-3*y)* MD.PxW, (28-3*y)* MD.PxH, (86+6*y)* MD.PxW, (144+6*y)* MD.PxH);
                    
                ctx.stroke();
                ctx.closePath();

            ctx.restore();

        ctx.closePath();
      
    ctx.restore();

        if(Data.BloodL > 0){

            for (var z = 0; z < Data.BloodL; z++)
            PixelDraw(Data.Blood[z],false);
            
            TextDrawer([Data.BloodStars[0]+"     "+Data.BloodStars[3]+"     "+Data.BloodStars[5]],13,70,18);
            TextDrawer([Data.BloodStars[1]+"           "+Data.BloodStars[6]],13,70,100);
            TextDrawer([Data.BloodStars[2]+"     "+Data.BloodStars[4]+"     "+Data.BloodStars[7]],13,70,192);

        }
    
        if(Data.Used){
        
            ctx.save();	
                    
                ctx.beginPath();
            
                    ctx.globalAlpha = 0.6;

                    fillrectDrawer(1,"Black",-12,-12,164,224,"Black");

                ctx.closePath();

            ctx.restore();

        }
    
    }

    function AddCards(){
        
        if(MD.AddCards[0] == "NECROMANCER"){
            
            if(CL[MD.AddCards[1]].Skill == "*")
            MD.AcumulatedPower *= CL[MD.AddCards[1]].AddedNumber;
            else if(CL[MD.AddCards[1]].Skill == "+") 
            MD.AcumulatedPower += CL[MD.AddCards[1]].AddedNumber;

            CostH();

            DeleteCard(MD.AddCards[1],2);
            return;

        }

        MD.CardsMerge++;

        CL[MD.AddCards[0]].Level++;
        CL[MD.AddCards[0]].NumberS += CL[MD.AddCards[1]].AddedNumber;
        CL[MD.AddCards[0]].AddedNumber = CL[MD.AddCards[0]].NumberS;
        CL[MD.AddCards[0]].SkillText = CL[MD.AddCards[0]].Skill+CL[MD.AddCards[0]].NumberS;
       
        if(MD.Ranks[CL[MD.AddCards[0]].Data.Rang][0]+2 == CL[MD.AddCards[0]].Level){

            MD.Ranks[CL[MD.AddCards[0]].Data.Rang][1]++;

            if(MD.Ranks[CL[MD.AddCards[0]].Data.Rang][1] > 2){

                MD.Ranks[CL[MD.AddCards[0]].Data.Rang][0] ++;
                MD.Ranks[CL[MD.AddCards[0]].Data.Rang][1] = 0;
               
            }
           
        }

        AppRank(CL[MD.AddCards[0]]);

        DeleteCard(MD.AddCards[1],1,MD.AddCards[0]);
        ClearCards();

        AutoPlayClear();
       
    }

    function BuyCard(x){

        if((MD.CardsOnBoard == Web.List.length && MD.Rank2Cards[2][0]) || (MD.CardsOnBoard == Web.List.length-8 && !MD.Rank2Cards[2][0]))
        return;

        var N = [2,1,0];
        
        CoilCheck();

        if(MD.Power >= MD.Cost[x]){
            
            if(N[x] > 0){
               
                MD.NomCost[x]++;

                CreateCard(N[x],true);
                MD.Power -= MD.Cost[x];

                CostH();

            } else {

                for (var y = 0; y < MD.Rank2Cards.lenght; y++) 
                if(!MD.Rank2Cards[y][0]){
                    
                    CreateCard(MD.Rank2Cards[y][1]);

                    MD.Power -= MD.Cost[x];
                   
                    MD.Ranks[2][0]++;

                    if(MD.CoilCard && y == 2)
                    MD.Ranks[2][0]++;

                    if(y == 2)
                    for (var z = 0; z < Web.List.length; z++)
                    Web.List[z].Unlock = true;

                    MD.Rank2Cards[y][0] = true;

                    CostH();
                    return;

                }

            }

        }
      
    }

    function AppRank(Card){
        
        if(Card.Data.Rang < 3){
 
            for (var x = 0; x < 4; x++)
            if(Ranks["P"+Card.Data.Rang][x][0] <= Card.Level && Ranks["P"+Card.Data.Rang][x][1] >= Card.Level) {
            
                var UpTo = CD.Rank[Card.Data.Rang][Ranks["P"+Card.Data.Rang][x][2]];
               
                Card.Data.Name = UpTo.Name;
                Card.Data.F = UpTo.F;
                Card.Data.PX = UpTo.PX;
                Card.Data.PY = UpTo.PY;
                Card.Data.M = UpTo.M;
                Card.Data.S = UpTo.S;
    
                var StartStars = StarsMap[Card.Start_Stars_Patern][Ranks["P"+Card.Data.Rang][x][2]+1][Card.PaternNum];
    
                Card.StarsTab = StartStars;
            
                for (var x = 0; x < StartStars.length; x++)
                if(StartStars[x]) Card.Stars[x] = "+";
                else Card.Stars[x] = " ";
    
            }

        }
       
    }

    function BloodAdd(Card){
        
        for (var x = 0; x < CD[4].BloodStains.length; x++){
          
            Card.Blood.push({

                "StarN": null,

                "M": CD[4].BloodStains.M,
                "S": CD[4].BloodStains.S,
    
                "PX": CD[4].BloodStains[x].PX,
                "PY": CD[4].BloodStains[x].PY,
    
                "F": CD[4].BloodStains[x].F,

            });
           
            if(CD[4].BloodStains[x].Star != null && Card.Stars[CD[4].BloodStains[x].Star] == "+"){

                Card.BloodStars[CD[4].BloodStains[x].Star] = "+";
                Card.Blood[Card.Blood.length-1].StarN = CD[4].BloodStains[x].Star;

            }

            Card.BloodL++;
            
        }
        
    }

    function CostH(){
        
        for (var x = 0; x < 5; x++) 
        if(MD.NomCost[0] >= MD.CostMulti[0][x][0] && MD.NomCost[0] <= MD.CostMulti[0][x][1])
        MD.Cost[0] = MD.CostMulti[0][x][2]*(MD.NomCost[0]+1);
        
        for (var x = 0; x < 5; x++) 
        if(MD.NomCost[1] >= MD.CostMulti[1][x][0] && MD.NomCost[1] <= MD.CostMulti[1][x][1])
        MD.Cost[1] = MD.CostMulti[1][x][2]*(MD.NomCost[1]+1);
        
        if(MD.Ranks[2][0] > 1)
        MD.Cost[2] = MD.SpecCost[MD.Ranks[2][0]];

    }

    // ---- //

    function DeleteCard(x,Type,Place){
        
        MD.CardsOnBoard--;

        DeadAnimMake(x,Type,Place);

        Web.List[CL[x].Cell].CardIn = null;
        CL[x] = null;

        AutoPlayClear();

    }

    function DeadAnimMake(x,Type,Place){

        var Val = true, Num = 0;

        for(var y = 0; y < CLDead.length; y++) 		
        if(CLDead[y] == null){
        
            CLDead[y] = CL[x];
            
            Val = false;
            Num = y;

            y = CLDead.length;
            
        }
        
        if(Val){

            CLDead.push(CL[x]);
            Num = CLDead.length-1;
    
        }
        
        CLDead[Num].Function = function (){ DeadDraw(CLDead[Num]); }

        CLDead[Num].MadeCounter = 200;
        CLDead[Num].DesType = Type;
        CLDead[Num].DesAnim = 1;
      
        if(Type != 0){

            CLDead[Num].PX = MD.LXY[0];
            CLDead[Num].PY = MD.LXY[1];
 
        }

        if(Place != null){

            CLDead[Num].PX = CL[Place].PX;
            CLDead[Num].PY = CL[Place].PY;
 
        }
      
    }

    // ---- //

    function DemonEye(Data){

        for (var x = 0; x < 10; x++) {

            if(MD.TouchX/MD.PxW > (MD.DiffX+Data.PX+70)+50*x) 
            MD.DemonEye.PX = x;
            else if(MD.TouchX/MD.PxW <= (MD.DiffX+Data.PX+100)-50*x) 
            MD.DemonEye.PX = -x;

            if(MD.TouchY/MD.PxH > (MD.DiffY+Data.PY+100)+50*x) 
            MD.DemonEye.PY = x;
            else if(MD.TouchY/MD.PxH <= (MD.DiffY+Data.PY+100)-50*x) 
            MD.DemonEye.PY = -x;

        }

    }

    function SpecFunction(Card){
        
        if(Card.UseCounter <= 0){

            switch (Card.Data.Spec) {	
                case 0: {
                   
                    switch (Card.Data.SkillSpec) {	
                        case 0: {

                            MD.Blocade = false;
    
                            MD.Harvests++;

                            var Add = 0;

                            if(MD.SoulPower > 0)
                            Add = MD.AcumulatedPower*MD.SoulPower;
                            else Add = MD.AcumulatedPower;

                            MD.Power += Add;
                            
                            if(Add > MD.MaxBuiltUp)
                            MD.MaxBuiltUp = Add;
            
                            MD.AcumulatedPower = 1;
            
                            for (var x = 0; x < CL.length; x++)
                            if(CL[x] != null && CL[x].Data.Name != Card.Data.Name && !CL[x].Data.DAdd){
                               
                                CL[x].UseCounter = 10;
                                CL[x].Restart = true;
                                CL[x].Merged = false;
            
                                CL[x].AddedNumber = CL[x].NumberS;
                                CL[x].SkillText = CL[x].Skill+CL[x].NumberS;
            
                            }

                            if(!MD.AutoPlay && MD.Rank2Cards[1][0])
                            MD.FullHarvest = true;

                            if(MD.Blood != null){

                                CL[MD.Blood].BloodL = 6;
                                MD.Blood = null;

                            } 
                            
                            SaveMain();
                        
                        }
                        break;	
                        case 1: {

                            if(!MD.AutoPlay && MD.FullHarvest)
                            MD.AutoPlay = true;
                            else MD.AutoPlay = false;
                            
                            MD.AutoCard = 0;
                            MD.AutoC = 8;

                        }	
                        break;
                        case 4: {

                            if(MD.Blood == null){
 
                                var Nmu = [
                                    [0,1,1,0,0,0,1],
                                    [1,0,1,0,0,0,2],
                                    [0,0,0,1,0,1,1],
                                    [0,0,0,0,1,1,2],
                                    [0,1,0,1,0,0,2],
                                    [1,0,0,0,0,1,2],
                                    [0,0,1,0,1,0,2],
                                ];
    
                                for (var h = 0; h < CL.length; h++) 
                                if(CL[h] != null && CL[h].BloodL > 0) {
    
                                    if(Card.TN != h) CL[h].Blood = [];
    
                                    CL[h].BloodL = 0;
    
                                    CL[h].BloodStars = {
    
                                        0: " ",
                                        1: " ",
                                        2: " ",
                                        3: " ",
                                        4: " ",
                                        5: " ",
                                        6: " ",
                                        7: " ",
                            
                                    };
    
                                }
                                
                                Card.BloodL = 6;
    
                                var BloodList = BoardFind(Card,3);
                                
                                if(BloodList.length > 0){
    
                                    for (let n = 0; n < BloodList.length; n++){
                                       
                                        var nm = Math.floor((Math.random() * 7));
    
                                        for (let b = 0; b < 6; b++)
                                        if(Nmu[nm][b]){
    
                                            CL[BloodList[n]].Blood.push(Card.Blood[b]);
                                            CL[BloodList[n]].BloodL++;
    
                                            if(Card.Blood[b].StarN != null && CL[BloodList[n]].Stars[Card.Blood[b].StarN] == "+")
                                            CL[BloodList[n]].BloodStars[Card.Blood[b].StarN] = "+";
    
                                        }
                                       
                                    }
                                   
                                }
                               
                                for (let n = 0; n < Card.BloodL; n++)
                                if(Card.Blood[n].StarN != null && Card.Stars[Card.Blood[n].StarN] == "+")
                                Card.BloodStars[Card.Blood[n].StarN] = "+";
                             
                                Card.BloodL = 0;
                                
                                MD.Blood = Card.TN;

                            }
                           
                        }
                        break;	
                        case 5: {

                            MD.RestartCounter_2 ++;
                            MD.RestartCounter2_2 = 80;
        
                            if(MD.RestartCounter_2 > 3){
        
                                RestartGame(true);
                                MD.RestartCounter_2 = 0;
        
                            }
        
                        }
                        break;
                    }

                } break;	
                case 1: BoardFind(Card,1);
                break;	
                case 2: BoardFind(Card,2);
                break;		
            }
            
            if(MD.Mobile) for (var x = 0; x < CL.length; x++)
            if(CL[x] != null && CL[x].Data.SkillSpec == 1) DemonEye(CL[x]);
            
            if(!MD.AutoPlay && MD.Rank2Cards[1][0])
            if(Card.Data.SkillSpec != 1 && !Card.Data.DAdd)
            AutoPS.push({

                "Mpx": MD.DemonEye.PX,
                "Mpy": MD.DemonEye.PY,
                "Card": Card.TN,

            });

            Card.SkillText = Card.Skill+Card.NumberS;
    
            Card.ShadowUse = true;
            Card.UseCounter = 20;
    
        }

    }

    function BoardFind(Card,Val){

        if(Val == 3)
        var BloodList = [];

        for(var x = -1, z = 0; x < 2; x++) for(var y = -1; y < 2; y++) if(x != 0 || y != 0){

            if (Web.List[Card.Cell].Y+y > -1 && Web.List[Card.Cell].X+x > -1 &&  
                Web.List[Card.Cell].Y+y < Web.XY[1] && Web.List[Card.Cell].X+x < Web.XY[0]){

                var CardPlace = Web.List[Web.List_2[Web.List[Card.Cell].Y+y][Web.List[Card.Cell].X+x]].CardIn;

                if(CardPlace != null && Card.StarsTab[z] == 1)
                if(((!CL[CardPlace].Used && CL[CardPlace].UseCounter <= 0) || CL[CardPlace].Data.Name == "NECROMANCER") && !CL[CardPlace].Data.DAdd){

                    if(Val == 1){

                        if(CL[CardPlace].Data.Name == "NECROMANCER"){

                            if(Card.Blood.length > 0)
                            MD.AcumulatedPower *= (Card.AddedNumber*2);
                            else MD.AcumulatedPower *= Card.AddedNumber;

                        } else {

                            if(Card.Blood.length > 0)
                            CL[CardPlace].AddedNumber *= (Card.AddedNumber*2);
                            else CL[CardPlace].AddedNumber *= Card.AddedNumber;

                            CL[CardPlace].SkillText = CL[CardPlace].Skill+CL[CardPlace].AddedNumber;

                        }
                
                    } if(Val == 2) {

                        if(CL[CardPlace].Data.Name == "NECROMANCER"){

                            if(Card.Blood.length > 0)
                            MD.AcumulatedPower += (Card.AddedNumber*2);
                            else MD.AcumulatedPower += Card.AddedNumber;

                        } else {

                            if(Card.Blood.length > 0)
                            CL[CardPlace].AddedNumber += (Card.AddedNumber*2);
                            else CL[CardPlace].AddedNumber += Card.AddedNumber;

                            CL[CardPlace].SkillText = CL[CardPlace].Skill+CL[CardPlace].AddedNumber;

                        }

                    } if(Val == 3){

                        if(CL[CardPlace].Data.Name != "NECROMANCER")
                        BloodList.push(CardPlace);

                    }

                    if(Val != 3)
                    CL[CardPlace].Merged = true;

                }

            }

            z++;

        }

        if(Val != 3){

            Card.Merged = false;
            MD.Blocade = true;
            
        } else {

            return BloodList;

        }

    }

    // --- //

    function ClearCards(){

        if(MD.WindowMove != null){

            CL[MD.WindowMove].PX = Web.List[CL[MD.WindowMove].Cell].PX+13.5;
            CL[MD.WindowMove].PY = Web.List[CL[MD.WindowMove].Cell].PY+13.5;

            CL[MD.WindowMove].Draw = false;
            CL[MD.WindowMove].Shadow = 0;

            CL[MD.WindowMove].Counter = 0;
            CL[MD.WindowMove].Scale = 1;

            CL[MD.WindowMove].PX_2 = 0;
            CL[MD.WindowMove].PY_2 = 0;

            MD.WindowMove = null;
            MD.Cell = null;

        } 

        MD.AddCards = [null,null];

    }

    function AutoPlayClear(){
       
        AutoPS = [];
        MD.AutoCard = 0;

        MD.FullHarvest = false;
        MD.AutoPlay = false;

    }

    function RestartGame(Val){
       
        if(Val){

            var Num = MD.SoulPower-5;

            for (var x = 0; x < CL.length; x++) 
            if(CL[x] != null){
               
                if(CL[x].Start_Stars_Patern < 2) Num += CL[x].Level;
                else Num += 5; 
        
                MD.CardsSacrificed++;
            } 

            MD.CardsSacrificed--;

            var CCardCreated = MD.CardCreated,
                CSacrificed = MD.CardsSacrificed,
                CMerge = MD.CardsMerge,

                CMaxBuiltUp = MD.MaxBuiltUp,
                CRestarts = MD.Restarts,
                CHarvests = MD.Harvests;

        }
        
        MD = JSON.parse(JSON.stringify(SaveInfo));

        if(navigator.userAgent.match(/mobile/i) || navigator.userAgent.match(/iPad|Android|Touch/i))
        MD.Mobile = 1;

        for (var x = 0; x < CL.length; x++) 
        if(CL[x] != null) DeleteCard(x,0);
        
        CreateCard(0);

        for (var x = 0; x < Web.List.length; x++)
        if(!Web.Unlock[x]) Web.List[x].Unlock = true;
        else Web.List[x].Unlock = false;
        
        MD.CardsOnBoard = 1;

        AutoPlayClear();
        CoilCheck();
        PixelRatio();

        CostH();

        if(Val){
           
            MD.CardCreated = CCardCreated;
            MD.CardsSacrificed = CSacrificed;
            MD.CardsMerge = CMerge;

            MD.MaxBuiltUp = CMaxBuiltUp;
            MD.Harvests = CHarvests;
 
            MD.Restarts = CRestarts+1;
            MD.SoulPower += Num;

        } else MD.SoulPower = 0;
        
    }

    // --- //

   /*  f = function(i){
        var n=1e4;
        if (i > n) return null;
        return Math.sin(i/1500 - Math.sin(i/331)*Math.sin(i/91))*t(i,n);
    }

    // Sound player
    t=(i,n)=>(n-i)/n;

    function PlaySound(){

        s=A.createBufferSource()
        s.buffer=m
        s.connect(A.destination)
        s.start()

    } */

    // --- //

    function ButtonDraw(){

        for (var x = 0; x < Buttons[MD.Mobile].length; x++){

            ctx.save();	
            
                ctx.translate(Buttons[MD.Mobile][x].PX* MD.PxW, Buttons[MD.Mobile][x].PY* MD.PxH);

                ctx.beginPath();
            
                    ctx.strokeStyle = "white";

                    ctx.lineWidth = 2 * MD.PxW;
                
                    ctx.rect(0, 0, Buttons[MD.Mobile][x].Width* MD.PxW, Buttons[MD.Mobile][x].Height* MD.PxH);

                    ctx.fillStyle = 'Black';

                    ctx.fill();

                    if(x != 3)
                    if(Buttons[MD.Mobile][x].MouseOn)
                    rectDrawer(2,"red",-4,-4,8+Buttons[MD.Mobile][x].Width,8+Buttons[MD.Mobile][x].Height);

                    if(Buttons[MD.Mobile][x].Clicked)
                    rectDrawer(2,"red",0,0,Buttons[MD.Mobile][x].Width,Buttons[MD.Mobile][x].Height);

                    if(x != 3)
                    ctx.stroke();
        
                ctx.closePath();
        
                if(x == 4)
                if(!MD.MobileWork)
                TextDrawer(["MOVE CARDS"],4,Buttons[MD.Mobile][x].Width/2,63);
                else {
                    
                    rectDrawer(4,"red",5,5,Buttons[MD.Mobile][x].Width-10,Buttons[MD.Mobile][x].Height-10);
                    TextDrawer(["USE CARDS"],12,Buttons[MD.Mobile][x].Width/2,65);

                }

                if(x < 3)
                if(MD.Cost[x]){

                    TextDrawer(["RANK "+cinTRoman(Buttons[MD.Mobile][x].Rang+1)+" CARD"],8,Buttons[MD.Mobile][x].Width/2,40);

                    if(MD.Cost[x] <= MD.Power)
                    TextDrawer([MD.Cost[x]],4,Buttons[MD.Mobile][x].Width/2,80);
                    else 
                    TextDrawer([MD.Cost[x]],400,Buttons[MD.Mobile][x].Width/2,80);

                } else 
                TextDrawer(["MAX"],4,Buttons[MD.Mobile][x].Width/2,63);

                if(x < 3){

                    if(x == 2)
                    TextDrawer([cinTRoman(MD.Ranks[x][0]+MD.CoilNum)],3,Buttons[MD.Mobile][x].Width/2,5);
                    else
                    TextDrawer([cinTRoman(MD.Ranks[x][0])],3,Buttons[MD.Mobile][x].Width/2,5);
               
                } else if(MD.RestartCounter > 0 && x == 3)
                TextDrawer(["!"+MD.RestartCounter+"!"],11,Buttons[MD.Mobile][x].Width/2,50);

            ctx.restore();
       
        }
        
    }

    function PixelDraw(Data,Hero,Num){

        ctx.save();	
           
        ctx.beginPath();
    
            ctx.translate(Data.PX* MD.PxW, Data.PY* MD.PxH);
    
            var px = [], 
                P = Data.F.replace(/./g,a=>{z=a.charCodeAt();px.push(z&7);px.push((z>>3)&7);});

            for(j = 0; j < Data.S ; j++) 
            for(i = 0; i < Data.S ; i++)
            if(px[j*Data.S+i]){

                ctx.save();	
                if(Hero){

                    if(Num == 0 || Num == 2){
                       
                        ctx.translate(Math.floor((Math.random() * 2))*MD.PxW, Math.floor((Math.random() * 2))*MD.PxH);
                        ctx.fillStyle = "#"+CD.Colors_Hero.substr(3*(px[j*Data.S+i]-1),3);
    
                    } else if(Num == 1)
                    ctx.fillStyle = "#"+CD.Colors.substr(3*(px[j*Data.S+i]-1),3);
                    else if(Num == 100)
                    ctx.fillStyle = "Black";
                    else if(Num == 101)
                    ctx.fillStyle = "White";
                    else 
                    ctx.fillStyle = "#"+CD.Colors.substr(3*(px[j*Data.S+i]-1),3);

                } else
                ctx.fillStyle = "#"+CD.Colors.substr(3*(px[j*Data.S+i]-1),3);

                ctx.fillRect(
                    (i*Data.M-0.5)* MD.PxW,
                    (j*Data.M-0.5)* MD.PxH,
                    (Data.M+1) * MD.PxW, 
                    (Data.M+1)* MD.PxH
                );

                ctx.restore();
            }

        ctx.closePath();

        ctx.restore();
        
    }

    function rectDrawer(Line,Color,X,Y,W,H){

        ctx.beginPath();

            ctx.lineWidth = Line * MD.PxW;
            ctx.strokeStyle = Color;
            ctx.rect(X * MD.PxW, Y * MD.PxH, W * MD.PxW, H * MD.PxH);
            ctx.stroke();

        ctx.closePath();

    }

    function fillrectDrawer(Line,Color,X,Y,W,H,fColor){

        ctx.strokeStyle = Color;
        ctx.lineWidth = Line * MD.PxW;
        ctx.rect(X* MD.PxW, Y* MD.PxH, W* MD.PxW, H* MD.PxH);

        ctx.fillStyle = fColor;
        ctx.stroke();
        ctx.fill();

    }

    function TextDrawer(Text,TextN,PX,PY){
        
        var TextData2 = TextData[TextN];

        for (var x = 0; x < Text.length; x++){
            
            ctx.save();	

            if(x > 0)
            var PY2 = PY+(TextData2.Enter*x);
            else var PY2 = PY; 
    
            ctx.font = TextData2.Spec+" "+(TextData2.Size*MD.PxW)+"px Courier New";
            ctx.textAlign = "center";
    
            if(TextData2.SColor){
            
                ctx.lineWidth = TextData2.LWidth*MD.PxW;
                ctx.strokeStyle = TextData2.SColor;
                ctx.lineJoin = TextData2.LineJoin;
                ctx.strokeText(Text[x], PX * MD.PxW, (PY2+TextData2.SPY) * MD.PxH);
    
            }
    
            ctx.fillStyle = TextData2.Color;
            ctx.fillText(Text[x], PX * MD.PxW, PY2 * MD.PxH);
    
            ctx.restore();
    
        } 
         
    }

    function AbD(Card){

        TextDrawer(["Ability"],10,340,470);
        TextDrawer(Card,6,340,510);

    }

    function cinTRoman(num) {
        
        var roman = {
          M: 1000,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1
        };

        var str = '';
      
        for (var i of Object.keys(roman)) {
          var q = Math.floor(num / roman[i]);
          num -= q * roman[i];
          str += i.repeat(q);
        }
      
        return str;
    } 

    function CoilCheck(){

        Monetization();
        if(!MD.CoilCard && MD.Monetization){
            
            MD.CoilNum = 1;
            MD.Rank2Cards[3][0] = true;
            CreateCard(MD.Rank2Cards[3][1]);
            MD.CoilCard = true;
            
        } 

        localStorage.setItem('CFG_IdleN_CoilCard',MD.CoilCard);

    }

    // --- //

	function UpdateScreen(){  
       
            MainDraw();

            ctx.closePath();
            
        ctx.restore();
       
        TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen);

	}

	function NoUpdateScreen(){  
       
            MainDraw();
                
            TextDrawer(["Click on the Screen to Continue the Game"],3,960,1050);

            ctx.closePath();
            
        ctx.restore();
       
	}

    function MainDraw(){

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.save();	
           
            ctx.beginPath();
           
        if(MD.RestartCounter > 0)
        if(MD.RestartCounter2 == 0)
        MD.RestartCounter = 0;
        else MD.RestartCounter2--;

        if(MD.RestartCounter_2 > 0){
           
            if(MD.RestartCounter2_2 == 0){

                MD.RestartCounter_2--;
                MD.RestartCounter2_2 = 80;
    
            } else MD.RestartCounter2_2--;
    
        }
        
        ctx.translate(MD.DiffX,MD.DiffY); 
 
        ctx.rect(0, 0, MD.Width, MD.Height);
        ctx.clip();

        ctx.save();	
        
            fillrectDrawer(1,"Black",0,0,1920,1080,"Black");
            rectDrawer(2,"White",0,0,1920,1080);
            rectDrawer(2,"White",5,5,1910,1070);

        ctx.restore();

        WebDraw();

        TextDrawer(["DEATH ENERGY"],5,1272,55);
        TextDrawer([MD.Power],5,1272,95);

        if(MD.WindowMove != null) AbD(CL[MD.WindowMove].Data.Text);
        else if(MD.MouseONCard != null)
        if(MD.MouseONCardCounter[0] <= 0) AbD(CL[MD.MouseONCard].Data.Text);
        else MD.MouseONCardCounter[0]--; 
           
        TextDrawer(["BUILT UP ENERGY"],8,998,59);


        if(MD.AcumulatedPower == 1){

            if(MD.SoulPower > 0)
            TextDrawer([MD.AcumulatedPower*MD.SoulPower],8,998,90);
            else TextDrawer([MD.AcumulatedPower],8,998,90);

        } else {

            if(MD.SoulPower > 0)
            TextDrawer([MD.AcumulatedPower*MD.SoulPower],100,998,90);
            else TextDrawer([MD.AcumulatedPower],100,998,90);
        
        }

        TextDrawer(["SOUL ENERGY"],8,1547,59);
        TextDrawer([MD.SoulPower],8,1547,90);

        TextDrawer(["IDLE NECROMANCER"],9,340,70);

        TextDrawer(["MAX Built Up"],8,190,160);
        TextDrawer([MD.MaxBuiltUp],8,190,190);

        TextDrawer(["Summoned Cards"],8,190,260);
        TextDrawer([MD.CardCreated],8,190,290);

        TextDrawer(["Sacrificed Cards"],8,490,160);
        TextDrawer([MD.CardsSacrificed],8,490,190);

        TextDrawer(["Merge Cards"],8,490,260);
        TextDrawer([MD.CardsMerge],8,490,290);

        TextDrawer(["Blood Rituals"],8,190,360);
        TextDrawer([MD.Restarts],8,190,390);

        TextDrawer(["Harvests"],8,490,360);
        TextDrawer([MD.Harvests],8,490,390);

        TextDrawer([MD.AppVersion],"Ver",50,1080-30);

        if(MD.Blocade && MD.Moves == 0){

            ctx.save();	
            rectDrawer(3,"Red",684,113,1178,914);
            ctx.restore();

            ctx.save();	
            rectDrawer(1,"Red",680,109,1186,922);
            ctx.restore();

        }
        
        ButtonDraw();

        for (var x = 0; x < CL.length; x++) 
        if(CL[x] != null && !CL[x].Draw) CL[x].Function();
    
        for (var x = 0; x < CLDead.length; x++) 
        if(CLDead[x] != null) {
            
            CLDead[x].Function();

            if(CLDead[x].MadeCounter <= 0)
            CLDead[x] = null;
        
        }

        if(MD.WindowMove != null)
        CL[MD.WindowMove].Function();
       
    }

    // --- //

    window.addEventListener("load", function(){ 
        
        LoadEngine();

        if(navigator.userAgent.match(/mobile/i) || navigator.userAgent.match(/iPad|Android|Touch/i)){

            MD.Mobile = 1;

            window.addEventListener('touchmove', function(e){
            
                e.preventDefault();

                if(e.targetTouches.length == 1){
        
                    MD.TouchX = e.targetTouches[0].pageX* pixelRatio;
                    MD.TouchY = e.targetTouches[0].pageY* pixelRatio;

                    MTMove(e);
        
                }	
        
            }, {passive:false})
            
            window.addEventListener('touchstart', function(e){
        
                if(e.targetTouches.length == 1) {
                 
                    MD.TouchX = e.targetTouches[0].pageX* pixelRatio;
                    MD.TouchY = e.targetTouches[0].pageY* pixelRatio;
                    
                    MTDownStart(e,false);
                   
                }
        
            }, false)
        
            window.addEventListener('touchend', function(e){
                
                if(e.targetTouches.length == 0) MTUpEnd();

            },false)
        
        } else {
            
            window.oncontextmenu = function (e) { return false; }
            
            window.addEventListener('mousemove', function(e){
                   
                MD.TouchX = e.clientX * pixelRatio;
                MD.TouchY = e.clientY * pixelRatio;
               
                MTMove(e);

            }, false)
    
            window.addEventListener('mousedown', function(e){
                
                MD.TouchX = e.clientX * pixelRatio;
                MD.TouchY = e.clientY * pixelRatio;
            
                MTDownStart(e,true);

            }, false)
    
            window.addEventListener('mouseup', function(e){
                
                MTUpEnd();

            }, false)
    
        }
       
        window.addEventListener('blur', onPause);
        window.addEventListener('focus', onResume);
       
        Monetization();

    });

    window.addEventListener("resize", function (event) {

        clearTimeout(Resize);
		Resize = setTimeout(PixelRatio, 500);
       
    });

    function Monetization(){

        if (document.monetization && !MD.Monetization) {
            document.monetization.addEventListener('monetizationstart', () => {
                
                MD.Monetization = true;

            })
        }

    }

    function onPause() {
		 
        ClearCards();

		//MD.TouchX = 0;
		//MD.TouchY = 0;
        
        if(!MD.AutoPlay){
           
            cancelAnimationFrame(TimeInter.UpdateScreen);
            NoUpdateScreen();
     
        }
       
    }

    function onResume() {
	 
        cancelAnimationFrame(TimeInter.UpdateScreen);
        TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen);
        
	}

	function backButton() { return false; }

    function MTUpEnd(){
         
       // if(MD.Touch)
       // PlaySound();
         
        ButtonHitBox(2);
       
        if(MD.WindowMove != null){

            MD.LXY[0] = CL[MD.WindowMove].PX;
            MD.LXY[1] = CL[MD.WindowMove].PY;

            CL[MD.WindowMove].Draw = false;
            CL[MD.WindowMove].Shadow = 2;
            CL[MD.WindowMove].Counter = 5;
    
            if(MD.Cell != null){
        
                Web.List[CL[MD.WindowMove].Cell].CardIn = null;
    
                CL[MD.WindowMove].PX_2_M = (CL[MD.WindowMove].PX-Web.List[MD.Cell].PX+13.5)/CL[MD.WindowMove].Counter;
                CL[MD.WindowMove].PY_2_M = (CL[MD.WindowMove].PY-Web.List[MD.Cell].PY+13.5)/CL[MD.WindowMove].Counter;
    
                CL[MD.WindowMove].Cell = MD.Cell;
                
                Web.List[CL[MD.WindowMove].Cell].CardIn = MD.WindowMove;
    
                MD.WindowMove = null;

                AutoPlayClear();

            } else {
    
                CL[MD.WindowMove].PX = Web.List[CL[MD.WindowMove].Cell].PX+13.5;
                CL[MD.WindowMove].PY = Web.List[CL[MD.WindowMove].Cell].PY+13.5;
    
                CL[MD.WindowMove].PX_2_M = 2.5;
                CL[MD.WindowMove].PY_2_M = 3;
                
                MD.WindowMove = null;
    
            }
    
        }
       
        if(MD.AddCards[0] != null && !MD.Blocade && CL[MD.AddCards[1]].Data.Spec != 0)
        AddCards();

        MD.Cell = null;
        MD.AddCards = [null,null];

        CardsHitBox(2);

        for (var x = 0; x < Buttons[MD.Mobile].length; x++){

            Buttons[MD.Mobile][x].Clicked = false;
            if(MD.Mobile) Buttons[MD.Mobile][x].MouseOn = false;

        }
 
       /*  if(!MD.Touch){

            MD.Touch = true;

            A=new AudioContext()
            m=A.createBuffer(1,96e3,18e3);
            b=m.getChannelData(0)
            for(i=96e3;i--;)b[i]=f(i)

        } */
 
    }

    function MTDownStart(e,Val){
 
       // if(MD.Touch)
      //  PlaySound();
         
        if((e.button == 0 && Val) || (!MD.MobileWork && !Val)){
            
            if(!MD.Blocade || MD.Moves > 0)
            CardsHitBox(1);

            ButtonHitBox(1);

            if(MD.WindowMove != null)
            BoardHitBox();

        } else {
            
            if(MD.Mobile)
            ButtonHitBox(1);

            CardsHitBox(0);
            ClearCards();
        
        }
           
    }

    function MTMove(e){

        MD.AddCards = [null,null];
    
        CardsHitBox(2);

        if(MD.WindowMove != null){
            
            var ActWin = CL[MD.WindowMove];
        
            if( MD.TouchX > MD.DiffX && MD.TouchY > MD.DiffY && MD.TouchX < MD.DiffX+MD.Width && MD.TouchY < MD.DiffY+MD.Height){
                
                ActWin.PX = (MD.TouchX-MD.DiffX)/MD.PxW-ActWin.MPX;
                ActWin.PY = (MD.TouchY-MD.DiffY)/MD.PxH-ActWin.MPY;
                
                MD.Cell = null;  

                BoardHitBox();

            } else ClearCards();
           
        }
        
        if(MD.WindowMove == null)
        ButtonHitBox(0)

    }

    // --- //

    function ButtonHitBox(Val){

        if(!MD.AutoPlay)
        for (var x = 0; x < Buttons[MD.Mobile].length; x++){

            if( MD.TouchX > MD.DiffX+Buttons[MD.Mobile][x].PX*MD.PxW &&
                MD.TouchY > MD.DiffY+Buttons[MD.Mobile][x].PY*MD.PxH &&  
                MD.TouchX < MD.DiffX+Buttons[MD.Mobile][x].PX*MD.PxW+Buttons[MD.Mobile][x].Width*MD.PxW && 
                MD.TouchY < MD.DiffY+Buttons[MD.Mobile][x].PY*MD.PxH+Buttons[MD.Mobile][x].Height*MD.PxH){
    
                if(Val == 0 || MD.Mobile)
                Buttons[MD.Mobile][x].MouseOn = true;

                if(Val == 1)
                Buttons[MD.Mobile][x].Clicked = true;

                if(Val == 2 && Buttons[MD.Mobile][x].Clicked)
                if(x < 3) BuyCard(x); else if(x == 4){
                    
                    if(!MD.Blocade)
                    if(!MD.MobileWork)
                    MD.MobileWork = true;
                    else MD.MobileWork = false;
                    
                } else {

                    MD.RestartCounter ++;
                    MD.RestartCounter2 = 50;

                    if(MD.RestartCounter > 3){

                        RestartGame();
                        MD.RestartCounter = 0;

                    }

                }
    
            } else {

                Buttons[MD.Mobile][x].MouseOn = false;
                Buttons[MD.Mobile][x].Clicked = false;

            }
           
        }
     
    }

    function BoardHitBox(){

        for (var x = 0; x < Web.List.length; x++)
        if(Web.List[x].Unlock)
        if( MD.TouchX > MD.DiffX+ Web.List[x].PX*MD.PxW &&
            MD.TouchY > MD.DiffY+ Web.List[x].PY*MD.PxH &&  
            MD.TouchX < MD.DiffX+ Web.List[x].PX*MD.PxW+ 168*MD.PxW && 
            MD.TouchY < MD.DiffY+ Web.List[x].PY*MD.PxH+ 228*MD.PxH) {
            
            if((Web.List[x].CardIn == null || x == CL[MD.WindowMove].Cell)) MD.Cell = x;  
            else if(CL[Web.List[x].CardIn].Data.Name == CL[MD.WindowMove].Data.Name && CL[Web.List[x].CardIn].Level == CL[MD.WindowMove].Level && 
                !CL[Web.List[x].CardIn].Used && !CL[Web.List[x].CardIn].Merged && !CL[MD.WindowMove].Merged)
            MD.AddCards = [Web.List[x].CardIn,MD.WindowMove,x];
            else if(CL[Web.List[x].CardIn].Data.Name == "NECROMANCER" && CL[MD.WindowMove].Data.Spec != 0)
            MD.AddCards = [CL[Web.List[x].CardIn].Data.Name,MD.WindowMove,x];

        }
    }

    function CardsHitBox(Val){

        var Check = false;

        for (var x = 0; x < CL.length; x++)
        if(CL[x] != null){

            CL[x].MouseON = false;

            if( MD.TouchX > MD.DiffX+CL[x].PX*MD.PxW &&
                MD.TouchY > MD.DiffY+CL[x].PY*MD.PxH &&  
                MD.TouchX < MD.DiffX+CL[x].PX*MD.PxW+140*MD.PxW && 
                MD.TouchY < MD.DiffY+CL[x].PY*MD.PxH+200*MD.PxH){
    
                Check = true;

                if(MD.WindowMove == null)
                if(Val == 0 && !CL[x].Used && CL[x].Data.SkillSpec != 3){
                    
                    if(CL[x].Data.SkillSpec == 1 || !MD.AutoPlay)
                    SpecFunction(CL[x]);
    
                } else if(Val == 1 && !CL[x].Used && (!MD.Blocade || MD.Moves > 0) && !MD.AutoPlay){
      
                    MD.WindowMove = x;
        
                    var ActWin = CL[x];
    
                    ActWin.Draw = true;
            
                    ActWin.MPX = Math.abs(ActWin.PX-(MD.TouchX-MD.DiffX)/MD.PxW);
                    ActWin.MPY = Math.abs(ActWin.PY-(MD.TouchY-MD.DiffY)/MD.PxH);
    
                } else if(Val == 2){
                    
                    CL[x].MouseON = true;
                    MD.MouseONCard = x;

                    if(MD.MouseONCardCounter[1] != x){

                        MD.MouseONCardCounter[0] = 6;
                        MD.MouseONCardCounter[1] = x;

                    }

                }
    
            }

        }
       
        if(!Check)
        MD.MouseONCard = null;
        
        if(MD.Mobile && Val == 2)
        for (var x = 0; x < CL.length; x++)
        if(CL[x] != null){

            CL[x].MouseON = false;
            MD.MouseONCard = null;

        } 
  
    }

var itemArr = [
    {
        id:0, 
        name:"", 
        imgurl:"",
        type:"ingredient"
    },
    {
        id:278, 
        name:"Diamond Pickaxe", 
        imgurl:"sprites/items/diamond_pickaxe.png",
        type:"form",
        recipe:[
            [264, 264, 264], 
            [0, 280, 0] ,
            [0, 280, 0]]
    },
	{
        id:277, 
        name:"Diamond Shovel", 
        imgurl:"sprites/items/diamond_shovel.png",
        type:"form",
        recipe:[
            [264], 
            [280],
            [280]]
    },
	{
        id:276, 
        name:"Diamond Sword", 
        imgurl:"sprites/items/diamond_sword.png",
        type:"form",
        recipe:[
            [264], 
            [264],
            [280]]
    },
	{
        id:279, 
        name:"Diamond Axe", 
        imgurl:"sprites/items/diamond_axe.png",
        type:"form",
        recipe:[
            [264, 264], 
            [264, 280] ,
            [0, 280]]
    },
	{
        id:293, 
        name:"Diamond Hoe", 
        imgurl:"sprites/items/diamond_hoe.png",
        type:"form",
        recipe:[
            [264, 264], 
            [0, 280],
            [0, 280]]
    },
	{
        id:310, 
        name:"Diamond Helmet", 
        imgurl:"sprites/items/diamond_helmet.png",
        type:"form",
        recipe:[
            [264, 264, 264], 
            [264, 0, 264]]
    },
	{
        id:311, 
        name:"Diamond Chestplate", 
        imgurl:"sprites/items/diamond_chestplate.png",
        type:"form",
        recipe:[
            [264, 0, 264], 
            [264, 264, 264] ,
            [264, 264, 264]]
    },
	{
        id:312, 
        name:"Diamond Leggings", 
        imgurl:"sprites/items/diamond_leggings.png",
        type:"form",
        recipe:[
            [264, 264, 264], 
            [264, 0, 264] ,
            [264, 0, 264]]
    },
	{
        id:313, 
        name:"Diamond Boots", 
        imgurl:"sprites/items/diamond_boots.png",
        type:"form",
        recipe:[
            [264, 0, 264] ,
            [264, 0, 264]]
    },
	{
        id:57, 
        name:"Diamond Block", 
        imgurl:"sprites/blocks/diamond_block.png",
        type:"form",
        recipe:[
            [264, 264, 264], 
            [264, 264, 264] ,
            [264, 264, 264]]
    }, 
	{
        id:283, 
        name:"Golden Sword", 
        imgurl:"sprites/items/gold_sword.png",
        type:"form",
        recipe:[
            [266], 
            [266],
            [280]]
    }, 
	{
        id:284, 
        name:"Golden Shovel", 
        imgurl:"sprites/items/gold_shovel.png",
        type:"form",
        recipe:[
            [266], 
            [280],
            [280]]
    }, 
	{
        id:285, 
        name:"Golden Pickaxe", 
        imgurl:"sprites/items/gold_pickaxe.png",
        type:"form",
        recipe:[
            [266, 266, 266], 
            [0, 280, 0] ,
            [0, 280, 0]]
    },
	{
        id:286, 
        name:"Golden Axe", 
        imgurl:"sprites/items/gold_axe.png",
        type:"form",
        recipe:[
            [266, 266], 
            [266, 280] ,
            [0, 280]]
    },
	{
        id:"294", 
        name:"Golden Hoe", 
        imgurl:"sprites/items/gold_hoe.png",
        type:"form",
        recipe:[
            [266, 266], 
            [0, 280] ,
            [0, 280]]
    },
	{
        id:314, 
        name:"Golden Helmet", 
        imgurl:"sprites/items/gold_helmet.png",
        type:"form",
        recipe:[
            [266, 266, 266], 
            [266, 0, 266]]
    },
	{
        id:315, 
        name:"Golden Chestplate", 
        imgurl:"sprites/items/gold_chestplate.png",
        type:"form",
        recipe:[
            [266, 0, 266], 
            [266, 266, 266] ,
            [266, 266, 266]]
    }, 
	{
        id:316, 
        name:"Golden Leggings", 
        imgurl:"sprites/items/gold_leggings.png",
        type:"form",
        recipe:[
            [266, 266, 266], 
            [266, 0, 266],
            [266, 0, 266]]
    },
	{
        id:317, 
        name:"Golden Boots", 
        imgurl:"sprites/items/gold_boots.png",
        type:"form",
        recipe:[ 
            [266, 0, 266],
            [266, 0, 266]]
    }, 
	{
        id:41, 
        name:"Gold Block", 
        imgurl:"sprites/blocks/gold_block.png",
        type:"form",
        recipe:[
            [266, 266, 266], 
            [266, 266, 266],
            [266, 266, 266]]
    },
	{
        id:322, 
        name:"Golden Apple", 
        imgurl:"sprites/items/apple_golden.png",
        type:"form",
        recipe:[
            [266, 266, 266], 
            [266, 260, 266],
            [266, 266, 266]]
    },
	{
        id:133, 
        name:"Emerald Block", 
        imgurl:"sprites/blocks/emerald_block.png",
        type:"form",
        recipe:[
            [388, 388, 388], 
            [388, 388, 388],
            [388, 388, 388]]
    },
    {id:280, name:"Stick", imgurl:"sprites/items/stick.png", type:"ingredient"},
    {id:264, name:"Diamond", imgurl:"sprites/items/diamond.png", type:"ingredient"},
	{id:266, name:"Gold", imgurl:"sprites/items/gold_ingot.png", type:"ingredient"},
	{id:260, name:"Apple", imgurl:"sprites/items/apple.png", type:"ingredient"},
	{id:388, name:"Emerald", imgurl:"sprites/items/emerald.png", type:"ingredient"},
	{id:296, name:"Wheat", imgurl:"sprites/items/wheat.png", type:"ingredient"},
    {
        id:297, 
        name:"Bread", 
        imgurl:"sprites/items/bread.png",
        type:"form",
        recipe:[[296, 296, 296]]
    },
	//Added recipies Wednesday 4-8-15
	{
        id:340, 
        name:"Book", 
        imgurl:"sprites/items/book_normal.png",
        type:"list",
        recipe:[339, 339, 339, 334]
    },
	{id:339, name:"Paper", imgurl:"sprites/items/paper.png", type:"ingredient"},
	{id:334, name:"Leather", imgurl:"sprites/items/leather.png", type:"ingredient"},
	
	//iron related goodies with smaller crafting
	{id:265, name:"Iron", imgurl:"sprites/items/iron_ingot.png", type:"ingredient"},
	{
        id:328, 
        name:"Minecart", 
        imgurl:"sprites/items/minecart_normal.png",
        type:"form",
        recipe:[
            [265, 0, 265],
            [265, 265, 265]]
    },
	{
        id:359, 
        name:"Shears", 
        imgurl:"sprites/items/shears.png",
        type:"form",
        recipe:[
            [0, 265],
            [265, 0]]
    },
	{
        id:325, 
        name:"Bucket", 
        imgurl:"sprites/items/bucket_empty.png",
        type:"form",
        recipe:[
            [265, 0, 265],
            [0, 265, 0]]
    },
	
	//extras added  Thursday 4-9-15
	{id:20, name:"Glass", imgurl:"sprites/blocks/glass.png", type:"ingredient"},
	{
        id:374, 
        name:"Glass Bottle", 
        imgurl:"sprites/items/potion_bottle_empty.png",
        type:"form",
        recipe:[
            [20, 0, 20],
            [0, 20, 0]]
    },
	{id:287, name:"String", imgurl:"sprites/items/string.png", type:"ingredient"},
	{
        id:346, 
        name:"Fishing Rod", 
        imgurl:"sprites/items/fishing_rod_uncast.png",
        type:"form",
        recipe:[
            [0, 0, 280],
            [0, 280, 287],
			[280, 0, 287]]
    },
	{
        id:261, 
        name:"Bow", 
        imgurl:"sprites/items/bow_standby.png",
        type:"form",
        recipe:[
            [287, 280, 0],
            [287, 0, 280],
			[287, 280, 0]]
    },
	{
        id:65, 
        name:"Ladder", 
        imgurl:"sprites/blocks/ladder.png",
        type:"form",
        recipe:[
            [280, 0, 280],
            [280, 280, 280],
			[280, 0, 280]]
    },
	{id:318, name:"Flint", imgurl:"sprites/items/flint.png", type:"ingredient"},
	{
        id:259, 
        name:"Flint and Steel", 
        imgurl:"sprites/items/flint_and_steel.png",
        type:"form",
        recipe:[
            [265, 0,],
            [0, 318]]
    }
];
/**
 * ||========================================================================================================================||
 * ||                                                                                                                        ||
 * ||  ________  _______   ________  _________  ___  ___  ________  ________  ___  ___  ________  ________  ________         ||
 * || |\   ___ \|\  ___ \ |\   __  \|\___   ___\\  \|\  \|\   __  \|\   __  \|\  \|\  \|\   __  \|\   __  \|\   ___  \       ||
 * ||  \ \  \_|\ \ \   __/|\ \  \|\  \|___ \  \_\ \  \\\  \ \  \|\  \ \  \|\  \ \  \\\  \ \  \|\ /\ \  \|\  \ \  \\ \  \     ||
 * ||   \ \  \ \\ \ \  \_|/_\ \   __  \   \ \  \ \ \   __  \ \   __  \ \   _  _\ \  \\\  \ \   __  \ \   __  \ \  \\ \  \    ||
 * ||    \ \  \_\\ \ \  \_|\ \ \  \ \  \   \ \  \ \ \  \ \  \ \  \ \  \ \  \\  \\ \  \\\  \ \  \|\  \ \  \ \  \ \  \\ \  \   ||
 * ||     \ \_______\ \_______\ \__\ \__\   \ \__\ \ \__\ \__\ \__\ \__\ \__\\ _\\ \_______\ \_______\ \__\ \__\ \__\\ \__\  ||
 * ||      \|_______|\|_______|\|__|\|__|    \|__|  \|__|\|__|\|__|\|__|\|__|\|__|\|_______|\|_______|\|__|\|__|\|__| \|__|  ||
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 * ||                                                                                                                        ||  
 * ||                                               ★ Please do not modify this code ★                                      ||  
 * ||                                   ► This Mod was created for Minecraft Bedrock Edition ◄                               || 
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 */

/**
* @made_by Death_Aruban
* @version [1.0.5]
* @link [https://discord.com/invite/NKy9A9RAe8]
*/

export const config = {
    items:{
        /**
         * state : true or false if you want to use to pay with item
         * id : Id Item
         * amount : cost to enchant
         * name : Name Item
         */
        state:true,
        id:'da:enchant_essence',
        amount:3,
        name:'Item Enchant Essence \nAmount'
    },

    scores:{
        /**
         * state: true or false if you want to use to pay scoreboard
         * score_name : scoreboard name from which it should take
         * score_remove : cost to enchant
         * display_name and name : name that appears in the ui
         * refund : in case of disenchantment how much it returns to the player
         */
        state:false ,
        score_name:'money',
        score_remove:10,
        display_name:'Money',
        refund:0.6,
        name:'Money'
    },

    xp:{
        /**
         * state: true or false if you want to use to pay XP
         * xp_remove : cost to enchant
         * refund: in case of disenchantment how much it returns to the player
         * name: name that appears in the ui
         */
        state:true,
        xp_remove:3,
        refund:0.5,
        name:'XP'
    }

}
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
* @version [1.0.0]
* @link [https://discord.com/invite/NKy9A9RAe8]
*/

(function(_0x4adb85,_0x3e9cbb){const _0x1b5942=AruCube_0x47b0,_0x41ca51=_0x4adb85();while(!![]){try{const _0x3c7f39=parseInt(_0x1b5942(0xb8))/0x1+-parseInt(_0x1b5942(0xb5))/0x2+parseInt(_0x1b5942(0xbf))/0x3*(-parseInt(_0x1b5942(0xb4))/0x4)+parseInt(_0x1b5942(0xbb))/0x5*(-parseInt(_0x1b5942(0xb0))/0x6)+-parseInt(_0x1b5942(0xc0))/0x7*(parseInt(_0x1b5942(0xbc))/0x8)+parseInt(_0x1b5942(0xb1))/0x9*(-parseInt(_0x1b5942(0xb2))/0xa)+parseInt(_0x1b5942(0xba))/0xb*(parseInt(_0x1b5942(0xaf))/0xc);if(_0x3c7f39===_0x3e9cbb)break;else _0x41ca51['push'](_0x41ca51['shift']());}catch(_0x5f43b5){_0x41ca51['push'](_0x41ca51['shift']());}}}(AruCube_0x13cd,0xba340));import{world}from'@minecraft/server';import{Items_list,enchant_incompatibility}from'./enchant';function AruCube_0x47b0(_0x4c5bb4,_0x303f03){const _0x13cd96=AruCube_0x13cd();return AruCube_0x47b0=function(_0x47b0dc,_0x2ed4e0){_0x47b0dc=_0x47b0dc-0xaf;let _0x28e2a=_0x13cd96[_0x47b0dc];return _0x28e2a;},AruCube_0x47b0(_0x4c5bb4,_0x303f03);}export function getTexturePath(_0x4170a4){const _0x13792e=AruCube_0x47b0;let _0x266e25=Items_list[_0x4170a4];if(_0x266e25)return _0x266e25;return _0x13792e(0xb6);};export function formatItemName(_0x5dd4de){const _0x50b286=AruCube_0x47b0;let _0x2cb9c9=_0x5dd4de['split'](':');if(_0x2cb9c9[_0x50b286(0xbe)]!==0x2)return _0x5dd4de;_0x2cb9c9=_0x2cb9c9[0x1][_0x50b286(0xb9)]('_');for(let _0x27e872=0x0;_0x27e872<_0x2cb9c9['length'];_0x27e872++){_0x2cb9c9[_0x27e872]=_0x2cb9c9[_0x27e872][_0x50b286(0xb3)](0x0)['toUpperCase']()+_0x2cb9c9[_0x27e872]['slice'](0x1);}return _0x2cb9c9['join']('\x20');}function AruCube_0x13cd(){const _0x19fd29=['63mgnLqQ','51870EYqeRq','getPlayers','2292osctxf','12tLgvZX','597447YSuCAa','160LJWeXQ','charAt','174940ZBVHrr','1219334ioAsNg','arucube/enchant_table/resources/icon/unknown_icon','floor','288917mCGvZv','split','232969YyHDee','1471145OnPcJP','424sYNwjr','includes','length'];AruCube_0x13cd=function(){return _0x19fd29;};return AruCube_0x13cd();};export function see_xp(_0x3b2220){const _0x598863=AruCube_0x47b0;let _0x46511e=0x0,_0x36a2c0=0x60d7;while(_0x46511e<_0x36a2c0){let _0x5d7985=Math[_0x598863(0xb7)]((_0x46511e+_0x36a2c0)/0x2),_0x30eb13=[...world[_0x598863(0xc1)]({'minLevel':_0x46511e,'maxLevel':_0x5d7985})];_0x30eb13[_0x598863(0xbd)](_0x3b2220)?_0x36a2c0=_0x5d7985:_0x46511e=_0x5d7985+0x1;}return _0x46511e;};export function checkCompatibility(_0x474f9b){const _0x5e8316=AruCube_0x47b0;for(let _0xd45a65=0x0;_0xd45a65<_0x474f9b[_0x5e8316(0xbe)];_0xd45a65++){let _0xe9f473=enchant_incompatibility[_0x474f9b[_0xd45a65]['id']];if(_0xe9f473)for(let _0x574d28=0x0;_0x574d28<_0x474f9b[_0x5e8316(0xbe)];_0x574d28++){if(_0xd45a65!==_0x574d28&&_0xe9f473[_0x5e8316(0xbd)](_0x474f9b[_0x574d28]['id']))return![];}}return!![];};
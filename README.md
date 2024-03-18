<p align="center">
     <a href="https://github.com/DeathAruban/Enchant-MCBE">
		<img src="https://github.com/DeathAruban/Enchant-MCBE/blob/main/img/enchant+.png" loading="eager" />
	</a><br>
    <b>Addon Enchant + for Minecraft: Bedrock Edition written in Json and javascript MC (API 1.20.71)</b>
<p align="center">
	<a href="https://github.com/DeathAruban/Enchant-MCBE/releases/latest"><img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/DeathAruban/Enchant-MCBE?label=release&sort=semver"></a>
	<a href="https://github.com/DeathAruban/Enchant-MCBE/releases/latest"><img alt="GitHub release (latest by SemVer)" src="https://img.shields.io/github/downloads/DeathAruban/Enchant-MCBE/latest/total?sort=semver"></a>
<img alt="PingPong status" src="https://img.shields.io/pingpong/status/sp_7b7ce509b36c47ee9b20d041d018dc0a">
<a href="https://discord.gg/NKy9A9RAe8"><img src="https://img.shields.io/discord/373199722573201408?label=discord&color=7289DA&logo=discord" alt="Discord" /></a>
<a href="https://github.com//DeathAruban/Enchant-MCBE/releases"><img alt="GitHub all releases" src="https://img.shields.io/github/downloads/DeathAruban/Enchant-MCBE/total?label=downloads%40total"></a>
<img alt="YouTube Video Views" src="https://img.shields.io/youtube/views/cT3YZJbOkBw?style=social">
<img alt="GitHub" src="https://img.shields.io/github/license/DeathAruban/Enchant-MCBE">
</p>

# Description
This behavior adds a new enchantment table to your world, allowing for maximum customization when enchanting your items. Currently, it supports vanilla enchantments. In future updates, support for custom enchantments will also be added.

## Language support 🌍
- English (United States)
- English (United Kingdom)
- if you find errors or your language is missing, send me a message, if you provide me with a correct translation I will add credits for support 🤝

# Check if the version or where you are using the addon is compatible

| Supported | World | Realms |Server Dedicated | Custom servers | Windows | Mobile | PS4/PS5 | Xbox | Nintendo Switch |
| ------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| 1.20.71   |:white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| previous versions   | :x:  | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | 

# How does it work
To make it work, the first thing you will need to do is build the enchantment table using this recipe:
<p align="center">
 <img src="https://github.com/DeathAruban/Enchant-MCBE/blob/main/img/craft.png" loading="eager" />
</p>
Now, when you place the created block in the crafting table, it will appear like this:
<p align="center">
 <img src="https://github.com/DeathAruban/Enchant-MCBE/blob/main/img/enchant_table_3d.png" loading="eager" />
</p>
When you interact with the block, obviously you should not have any blocks or items in your hand. This will open a UI which will show the items in your inventory that can be enchanted by the table. Under each item, there will be a slot name with a value. This is to help you understand where in your inventory your item is located. Here, you need to select the item you prefer to enchant
<p align="center">
 <img src="https://github.com/DeathAruban/Enchant-MCBE/blob/main/img/1.png" loading="eager" />
</p>
When you have selected the item to enchant, it will take you to this UI where you select which enchantments you want to apply. Remember, you must respect the principle of enchanting in Minecraft Bedrock, that you cannot put enchantments that cannot be combined, like Protection and Fire Protection. In vanilla, these are not enchantments that you can put together, and the same applies here.
<p align="center">
 <img src="https://github.com/DeathAruban/Enchant-MCBE/blob/main/img/2.png" loading="eager" />
</p>
Once you have added the enchantments you desire, confirm with the button below which will take you to a similar UI. This will give you a summary of the enchantments you are adding and the final price. Obviously, you can either confirm or cancel. If you confirm, the corresponding amount of XP indicated will be removed from you.
<p align="center">
 <img src="https://github.com/DeathAruban/Enchant-MCBE/blob/main/img/3.png" loading="eager" />
</p>
# Cost Xp
Instead, if you want to change the price to enchant your items, just go to:

```json5
scripts/config.js
```
Open the config file and change the value on xp which is 5 by default.
```json5
 xp:5
```

# How to install

## 🖥️ Computer

📁.mcaddon version
- Download the enchant+.mcaddon version
- click on it to open and it will automatically insert it into the game
- 
📦.zip version
- go to 
 ```bash
%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\
```
- pull the texture into the resources folder instead the behavior into the behaviors folder

## 📱 Mobile

📁.mcaddon version
- Download the enchant+.mcaddon version
- click on it to open and it will automatically insert it into the game

📦.zip version
- download or use an application to manage files in the phone, I recommend this [RS Gestore File - Explorer EX](https://play.google.com/store/apps/details?id=com.rs.explorer.filemanager&hl=it&gl=US)
- (ANDROID & AMAZON FIRE OS) go to 
 ```bash
/Android/data/com.mojang.minecraftpe/files/games/com.mojang/
```

- (APPLE IOS ) go to

 ```bash
/On My iPhone/Minecraft/games/com.mojang/
```

- pull the texture into the resources folder instead the behavior into the behaviors folder

## 🕹️ Console (PS4/PS5/Switch/Xbox and other)

📦.zip version
- create dedicated bedrock realm or server
- pull the texture into the resources folder instead the behavior into the behaviors folder (Realm or Server)
- enter the realm or the server and you will find your component,remember to enable the settings necessary for operation listed before
- ⛔you can't put it directly in the console, the manufacturer things don't allow to import external files, it is possible only in case you have made a modification of your console

## For more info visit my discord or watch the video guide on my channel
- ✉️ Discord Link : [Click](https://discord.gg/NKy9A9RAe8)
- 💻 Youtube Link :[Click](https://www.youtube.com/watch?v=QoqngsfcNZE&ab_channel=Death_Aruban%E2%84%A2)

## Thank you for choosing this component and to appreciate how it works 😄

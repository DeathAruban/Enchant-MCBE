<p align="center">
     <a href="https://github.com/DeathAruban/Enchant-MCBE">
		<img src="https://github.com/DeathAruban/Enchant-MCBE/blob/main/img/enchant+.png" loading="eager" />
	</a><br>
	<b>Enchant + for Minecraft Bedrock Edition 1.20.60 without using Experimental mode, use</b></p>
 <p align="center"><b>module_name:@minecraft/server v1.8.0</b></p>
 <p align="center"><b>module_name:@minecraft/server-ui v1.1.0</b></p>
<p align="center">
	<a href="https://github.com/DeathAruban/Loot-Bag/releases/latest"><img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/DeathAruban/Loot-Bag?label=release&sort=semver"></a>
	<a href="https://github.com/DeathAruban/Loot-Bag/releases/latest"><img alt="GitHub release (latest by SemVer)" src="https://img.shields.io/github/downloads/DeathAruban/Loot-Bag/latest/total?sort=semver"></a>
<img alt="PingPong status" src="https://img.shields.io/pingpong/status/sp_7b7ce509b36c47ee9b20d041d018dc0a">
<img alt="YouTube Video Views" src="https://img.shields.io/youtube/views/cT3YZJbOkBw?style=social">
<img alt="GitHub" src="https://img.shields.io/github/license/DeathAruban/Loot-Bag">
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

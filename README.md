# Forked from [https://github.com/OthelloRhin/MHW_Icons_SVG].
An attempt to serve these beautiful handmade SVG icons as react components.
I'm using them for a small personal project.
Converted using SVGR

## Usage
The `individual-components` contains each icon set as different files. For example
```
/individual-components
|--/armor
   |--/arms
        |--Rank 1.svg
        |--Rank 2.svg
        |--Rank 3.svg
        |--Rank 4.svg
        |--Rank 5.svg
        |--Rank 6.svg
        |--Rank 7.svg
        |--Rank 8.svg
        |--Rank 9.svg
        |--Rank 10.svg
        |--Rank 11.svg
        |--Rank 12.svg
```

You can simply import them using 
```jsx
import SvgHelmRank01 from '.../route/to/svg/file'
//Rest of your code...
<SvgHelmRank01 /> //for rank 1 svg helm
```

---


The `reusable-components` contains each icon set as different files. For example
```
/individual-react-files
|--/armor
    |--/helm
        |--HelmArmorSlotIcon.jsx
    |--/chest
        |--ChestArmorSlotIcon.jsx
    |--/helm
        |--HelmArmorSlotIcon.jsx
    |--/torso
        |--TorsoArmorSlotIcon.jsx
    |--/legs
        |--LegsArmorSlotIcon.jsx
```

You can import the `Arms` component using 
```jsx
import ArmsArmorSlotIcon from '.../route/to/svg/file'
//Rest of your code...
<ArmsArmorSlotIcon rank={1} size={16}/> //for rank 1 svg helm
//rank is 1 to 12.
//size is any. you have to toy around with it.
```

# Support
I'll be converting more icons as needed.
Only weapons and armor for now.
If you need something please open up an issue and we'll see.

---

# MONSTER HUNTER: WORLD - SVG ICONS
A collection of handmade icons in SVG format from MONSTER HUNTER: WORLD.  

## Finished icons:
- The different crown sizes.
- The decorations of rank 1 to 4 and their different colors.
- All hunter weapons and their rank colors (1 to 12).
- Specialized tools (mantles and boosters).
- Traps (Pitfall & Shock).  
- Hunter armor.

---

## Install & Use as a GitHub Package

You can use this package in other projects by installing directly from GitHub:

```bash
npm install doctornaz/MHW_Icons_SVG-react
```

Or with yarn:
```bash
yarn add doctornaz/MHW_Icons_SVG-react
```

## Usage Example

```jsx
import { ArmsArmorSlotIcon } from 'mhw-icons-svg-react/reusable-react-components/armor/arms';

// In your component:
<ArmsArmorSlotIcon rank={1} size={32} />
```

Refer to the `reusable-react-components` and `individual-components` folders for more exports and usage details.

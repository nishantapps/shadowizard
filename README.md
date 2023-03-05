# Shadowizard 
Shadowizard is a simple, customizable, and lightweight package that allows you to add beautiful and customizable box-shadow effects to your HTML elements. It's easy to use and can be installed via the Node Package Manager (NPM).

# Installation
We can using:
• NPM
• CDN
> To install Shadowizard using NPM, open your terminal and run the following command:
 ```
npm install @developerso/shadowizard
```
> To use using cdn:

For development version:
```
<script src="https://cdn.jsdelivr.net/gh/developerso/shadowizard@2.5.4/shadowizard/packages/cdn/dist/js/shadowizard.js" integrity="sha256-Hjwjah7dAfJtwF6EkpNZdLSc4rtR/ZKv9xf6RbSD1do=" crossorigin="anonymous"></script>
```
For production version:
```
<script src="https://cdn.jsdelivr.net/gh/developerso/shadowizard@2.5.4/shadowizard/packages/cdn/dist/js/shadowizard.min.js" integrity="sha256-Hjwjah7dAfJtwF6EkpNZdLSc4rtR/ZKv9xf6RbSD1do=" crossorigin="anonymous"></script>
```
# Usage
> Using NPM
1. Import the Shadowizard package into your JavaScript file.
```
import shadowizard from '@developerso/shadowizard';
```
2. Call the shadowizard function and pass in the target HTML element and any customization options you want to use.
```
shadowizard({
    shadow_type: 'soft',
    padding: false
});
```

> Using CDN

Add Following script in body tag.

REMEMBER to add the cdn. [See the documentation](https://github.com/developerso/shadowizard/wiki#installation)
```
<script>
shadowizard({
    shadow_type: 'soft',
    padding: false
});
</script>
```
# Options

`Shadowizard` provides you with several options that you can use to customize the box-shadow effect:

• `shadow_type` `(string)`: This option determines the type of shadow effect you want to use. You can choose from two types: hard and soft. The default is hard.

• `padding` `(boolean)`: This option determines whether or not to include padding in the shadow effect. If set to true, the shadow will be applied to the padding as well as the content of the HTML element. If set to false, the shadow will only be applied to the content. The default is false.

• `shadow_color` `(string)`: This option determines the color of the shadow effect. You can use any valid CSS color value. The default is rgba(0,0,0,0.2).

• `shadow_distance` `(string)`: This option determines the distance between the HTML element and the shadow. You can use any valid CSS length value. The default is 10px.

▪︎ `shadow_blur` `(string)`: This option determines the blur radius of the shadow. You can use any valid CSS length value. The default is 10px.

# Example

```
// Example 1 - Using the default options
shadowizard();

// Example 2 - Applying a soft shadow effect
shadowizard({
    shadow_type: 'soft'
});

// Example 3 - Applying a blue shadow effect
shadowizard({
    shadow_color: 'blue'
});

// Example 4 - Applying a shadow effect with padding
shadowizard({
    padding: true
});

// Example 5 - Applying a shadow effect with a distance of 20px and a blur radius of 15px
shadowizard({
    shadow_distance: '20px',
    shadow_blur: '15px'
});
```

# Conclusion 

Shadowizard is a simple and customizable package that makes it easy to add beautiful box-shadow effects to your HTML elements. With its easy-to-use API and customizable options, you can quickly and easily create stunning visual effects that enhance the design of your website or application.


# Tags

![](https://img.shields.io/github/downloads/developerso/shadowizard/total?color=green)
![](https://img.shields.io/npm/v/@developerso/shadowizard)
![](https://img.shields.io/jsdelivr/gh/hm/developerso/shadowizard)
![](https://img.shields.io/github/license/developerso/shadowizard)
![](https://img.shields.io/npm/l/@developerso/shadowizard?label=NPM%20license)
![](https://img.shields.io/badge/Github%20Latest%20version-2.5.3-green)

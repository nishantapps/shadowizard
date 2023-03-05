# Shadowizard CDN 
![](https://img.shields.io/badge/CDN%20Latest%20version-2.5.3-green)
The Shadowizard Package CDN is a JavaScript package that provides users with the ability to easily add shadow effects to HTML elements. This package can be installed using NPM or Yarn, or it can be downloaded directly from the GitHub repository.

> The CDN distribution of Shadowizard Package is available in the "js" directory of the "dist" folder. This directory contains the following files:

`shadowizard.min.js`: This is the minified version of the Shadowizard Package that should be used in production environments. It is optimized for performance and has a smaller file size.
 
`shadowizard.js`: This is the uncompressed version of the Shadowizard Package that should be used for development purposes. It includes comments and whitespace for easier debugging.
To use the Shadowizard Package CDN in your web project, you can include the following code in the head of your HTML file:

# Usage


> To use the Shadowizard Package CDN in your web project, you can include the following code in the head of your HTML file:

```
<head>
  <script src="https://cdn.jsdelivr.net/npm/shadowizard@latestversion/dist/js/shadowizard.min.js"></script>
</head>
```

This code includes the minified version of the package from the jsDelivr CDN. You can replace ``latestversion`` with the version of the package you want to use.

Once you have included the Shadowizard Package CDN in your project, you can use the ``shadowizard()`` function to add shadow effects to your HTML elements. Here's an example:

```
<div class="box">
  This is a box with a shadow effect.
</div>

<script>
  shadowizard({
    shadow_type: 'soft',
    padding: false
  });
</script>
```


In this example, we have created a `div` element with a class of `box`. We then use the `shadowizard()` function to add a shadow effect to the box. The `shadow_type` option specifies the type of `shadow effect` to use, and the `padding` option specifies whether or not to include padding in the shadow effect.

For more information on how to use the Shadowizard Package, please refer to the documentation on the [GitHub repository](https://github.com/developerso/shadowizard).

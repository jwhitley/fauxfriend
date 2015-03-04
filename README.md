# fauxfriend

This is a library and CLI for generating faux-column images as described in [Faux Columns for Liquid Layouts](https://www.addedbytes.com/blog/code/faux-columns-for-liquid-layouts/) and Ethan Marcotte's [Responsive Web Design](http://abookapart.com/products/responsive-web-design).

Usage:

```
fauxfriend -l '#525252' -r 'rgba(0, 0, 0, 0)' -p 45.5 faux-column.png
```

The options are:

`-l` (required) left column color

`-r` (required) right column color

`-p` (required) left/right boundary point as a percentage 

The output filename must be specified as an additional argument, and the output format is always PNG.

Any valid CSS color may be specified, and transparency is supported using `rgba` style colors as shown in the example above.

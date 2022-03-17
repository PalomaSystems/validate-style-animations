![npm](https://img.shields.io/npm/v/validate-style-animations)

# validate-style-animations
A small library for an easy element highlighting when validation fails.

## Install
### NPM
`npm i validate-style-animations`
### CDN
```
<script src="https://unpkg.com/validate-style-animations/dist/index.min.js"></script>
```

## Usage
### validateStyle

There is a second optional parameter:

`sortable`

Default: `true`

Type: `Boolean`

add or remove the validation classes
```
import { validateStyle } from 'validate-style-animations'

const element = document.getElementById('elementId')
validateStyle(element)

//OR

validateStyle(element, true)
validateStyle(element, false)

```

# LKT Loader

![ts](https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge)
![js](https://img.shields.io/badge/Javascript-f68333?style=for-the-badge)
![vue](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Flekrat%2Flkt-loader%2Fmaster%2Fpackage.json&query=%24.dependencies.vue&style=for-the-badge&label=vue&color=42b883)
![node](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Flekrat%2Flkt-loader%2Fmaster%2Fpackage.json&query=%24.engines.node&style=for-the-badge&label=node&color=026e00)

## Installation

```bash
npm i -S lkt-loader
```

## Usage
```typescript
import LktLoader from 'lkt-loader';

app.use(LktLoader);
```

## Configuration
In case you want to change the loader, you can configure the component which will be displayed:

```typescript
import LktLoader, {setCustomLoader} from 'lkt-loader';

app.use(LktLoader);

setCustomLoader('your-loader-component');

// Or use an imported component
import {Loader} from "path/to/Loader.vue";
setCustomLoader(Loader);
```

## Default stylesheet configuration
```css
:root {
    /* lkt-loader */
    --loader-outer-size: 80px;
    --loader-inner-size: 64px;
    --loader-color: #ffffff;
}
```
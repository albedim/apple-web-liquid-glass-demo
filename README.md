# Create the updated README.md file content
readme_content = """\
# 🧊 React Liquid Glass (iOS 26 Style)

Highly and customizable components inspired by the iOS 26 frosted translucent "liquid glass" UI.

Built with **React + Tailwind CSS**, this library lets you create realistic glassmorphism effects using SVG noise distortion, inner/drop shadows, blur, and color tint overlays.

---

## ✨ Features

- 📱 iOS 26-style frosted glass visuals
- 🖱️ Liquid-glass **container**
- 🖲️ Liquid-glass **button** with feedback
- 🎛️ Fully customizable (color, opacity, shadows, blur, distortion, etc.)
- 🧩 Supports children components inside the glass
- 🎨 Tailwind-compatible and accessible
- 🧪 SVG-based animated distortion (realistic liquid glass effect)

---

## 🚀 Demo

Liquid Glass Demo

> Try it yourself: [Live Demo (CodeSandbox)](http://albedim.github.io/apple-web-liquid-glass-demo)

---

## 📦 Installation

```bash
npm install apple-web-liquid-glass
# or
yarn add apple-web-liquid-glass

# 🧊 React Liquid Glass - GlassContainer Usage

## Usage

```tsx
import React from 'react';
import GlassContainer from 'react-liquid-glass';

const App = () => {
  return (
    <GlassContainer
      containerWidth={320}
      containerHeight={192}
      glassColor="#ffffff"
      glassOpacity={30}
      distortionIntensity={80}
    >
      <p className="text-black">Hello, Glass Container!</p>
    </GlassContainer>
  );
};

export default App;


---

### `USAGE_GLASS_BUTTON.md`

```md
# 🧊 React Liquid Glass - GlassButton Usage

## Usage

```tsx
import React from 'react';
import GlassButton from 'react-liquid-glass';

const App = () => {
  return (
    <GlassButton
      containerWidth={200}
      containerHeight={60}
      glassColor="#ffffff"
      glassOpacity={25}
      distortionIntensity={90}
      onClick={() => alert('Glass Button clicked!')}
    >
      Click Me
    </GlassButton>
  );
};

export default App;

# 🧊 React Liquid Glass - GlassContainer Props

| Prop Name            | Type             | Default     | Description                                                                 |
|----------------------|------------------|-------------|-----------------------------------------------------------------------------|
| `children`           | `React.ReactNode`| `undefined` | Elements to render inside the glass container                              |
| `containerWidth`     | `number`         | `320`       | Width of the container in pixels                                           |
| `containerHeight`    | `number`         | `192`       | Height of the container in pixels                                          |
| `cornerRadius`       | `number`         | `28`        | Border radius of the container                                             |
| `glassColor`         | `string`         | `"#ffffff"` | Base color of the glass effect                                             |
| `glassOpacity`       | `number`         | `20`        | Opacity of the glass color (0–100)                                         |
| `innerShadowColor`   | `string`         | `"#ffffff"` | Color of the inner shadow                                                  |
| `innerShadowBlur`    | `number`         | `20`        | Blur radius for the inner shadow                                           |
| `innerShadowSpread`  | `number`         | `-5`        | Spread radius for the inner shadow                                         |
| `dropShadowBlur`     | `number`         | `24`        | Blur radius for the outer drop shadow                                      |
| `backdropBlur`       | `number`         | `2`         | Blur applied to the background content                                     |
| `noiseScale`         | `number`         | `0.008`     | Scale for the noise used in the distortion effect                          |
| `distortionIntensity`| `number`         | `77`        | Intensity of the distortion (used in the displacement map filter)          |

# 🧊 React Liquid Glass - GlassButton Props

| Prop Name            | Type             | Default     | Description                                                                 |
|----------------------|------------------|-------------|-----------------------------------------------------------------------------|
| `children`           | `React.ReactNode`| `undefined` | Elements to render inside the glass button                                 |
| `containerWidth`     | `number`         | `200`       | Width of the button in pixels                                              |
| `containerHeight`    | `number`         | `60`        | Height of the button in pixels                                             |
| `cornerRadius`       | `number`         | `28`        | Border radius of the button                                                |
| `glassColor`         | `string`         | `"#ffffff"` | Base color of the glass effect                                             |
| `glassOpacity`       | `number`         | `20`        | Opacity of the glass color (0–100)                                         |
| `innerShadowColor`   | `string`         | `"#ffffff"` | Color of the inner shadow                                                  |
| `innerShadowBlur`    | `number`         | `20`        | Blur radius for the inner shadow                                           |
| `innerShadowSpread`  | `number`         | `-5`        | Spread radius for the inner shadow                                         |
| `dropShadowBlur`     | `number`         | `24`        | Blur radius for the outer drop shadow                                      |
| `backdropBlur`       | `number`         | `2`         | Blur applied to the background content                                     |
| `noiseScale`         | `number`         | `0.008`     | Scale for the noise used in the distortion effect                          |
| `distortionIntensity`| `number`         | `77`        | Intensity of the distortion (used in the displacement map filter)          |
| `onClick`            | `() => void`     | `undefined` | Click event handler                                                        |
| `disabled`           | `boolean`        | `false`     | Disables the button and disables pointer events                           |


# AIRKEYS
## Technology Stack

## 1. Application Foundation

### React
Purpose:
- Component-based interface.
- Application navigation.
- Instrument selection.
- Studio interface.
- UI state management.

### TypeScript
Purpose:
- Type safety.
- Explicit event contracts.
- Maintainable modules.
- Safer integration between systems.

### Vite
Purpose:
- Development server.
- Fast build process.
- TypeScript and React integration.

## 2. Computer Vision

### MediaPipe Hand Landmarker

Purpose:
- Hand detection.
- Landmark extraction.
- Fingertip tracking.
- Handedness information.

The pretrained model will be used initially.

Official documentation:
https://developers.google.com/edge/mediapipe/solutions/vision/hand_landmarker/web_js

## 3. Gesture Recognition

### Custom TypeScript modules

Purpose:
- Finger-state detection.
- Gesture classification.
- Landmark normalization.
- Smoothing.
- Threshold management.
- Gesture-to-event conversion.

We will implement the gesture engine ourselves using MediaPipe landmarks.

Custom ML training will only be considered if conventional geometric and temporal rules prove insufficient.

## 4. Audio

### Web Audio API

Purpose:
- Browser-native audio processing.
- Audio nodes.
- Gain and filtering.
- Low-level audio control.

Documentation:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

### Tone.js

Purpose:
- Synthesizers.
- Musical note control.
- Polyphony.
- Effects.
- Musical scheduling.

Documentation:
https://tonejs.github.io/

## 5. Visual Rendering

### CSS

Purpose:
- Layout.
- Typography.
- Interface transitions.
- Responsive behavior.

### Canvas 2D

Purpose:
- Lightweight interactive graphics.
- Sound-reactive effects.
- Visual feedback.

Additional rendering libraries will be evaluated only when the requirements justify them.

PixiJS or Three.js may be considered later.

## 6. State Management

Initial approach:
- React state for application-level state.
- Refs for mutable high-frequency values.

Zustand may be introduced if shared application state becomes complex.

## 7. Persistence

Initial approach:
- LocalStorage for preferences.
- IndexedDB for larger local data if required.

No server-side database is required for the MVP.

## 8. Development Tools

- Visual Studio Code.
- Node.js.
- npm.
- Git.
- GitHub.
- Chrome DevTools.
- Figma for interface design.

## 9. Testing

Potential tools:

### Vitest
Unit testing for TypeScript modules.

### React Testing Library
UI component testing.

### Playwright
Browser-level integration and interaction testing.

Testing tools will be introduced as the relevant modules are implemented.

## 10. Deployment

Initial deployment candidates:
- Vercel.
- Netlify.
- Cloudflare Pages.

Final selection will depend on deployment requirements.

## 11. Hardware Considerations

Primary development machine:

- Intel Core i5-1135G7.
- 8 GB RAM.
- Intel Iris Xe integrated graphics.
- Windows 11.
- 64-bit architecture.

Performance strategy:

- Start with modest camera resolution.
- Use adaptive inference frequency.
- Avoid unnecessary GPU-heavy visual effects.
- Keep video processing outside the main UI thread.
- Measure actual latency and frame rate.

## 12. Dependency Philosophy

Every dependency must have a defined purpose.

Avoid:
- Unnecessary UI frameworks.
- Multiple overlapping state libraries.
- Heavy 3D engines without a real requirement.
- Paid services for capabilities available locally.
- Dependencies added only for convenience when a small native implementation is clearer.

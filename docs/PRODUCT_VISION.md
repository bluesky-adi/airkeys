
# AirKeys
## Product Vision

**Working name:** AirKeys

**Product category:** Browser-based interactive music experience

**Core concept:** AirKeys allows people to interact with virtual musical instruments using natural hand movements captured through their device's webcam.

---

## 1. The Vision

AirKeys aims to make musical exploration more accessible, expressive, and playful by turning physical movement into musical interaction.

Instead of relying exclusively on a traditional keyboard, mouse, or MIDI controller, users can interact with virtual instruments through gestures in physical space.

The experience should feel immediate, responsive, intuitive, and creatively engaging.

AirKeys is not simply a webcam-controlled instrument simulator. It is an interactive musical environment where movement, sound, and visual feedback work together.

## 2. The Core Experience

The intended user journey:

1. The user opens AirKeys in their browser.
2. They enter an instrument selection experience.
3. They select an instrument.
4. They grant camera permission.
5. The application detects and tracks their hands.
6. The gesture engine interprets their movements.
7. Their gestures trigger musical actions.
8. The audio engine produces sound in real time.
9. The interface responds visually to their interaction.

The experience should minimize setup friction and allow users to begin experimenting quickly.

## 3. Product Principles

### Natural interaction
Gestures should feel understandable and predictable rather than requiring complicated memorization.

### Musical responsiveness
The system should minimize latency between physical movement and audible output.

### Instrument-specific interaction
Each instrument should have its own meaningful interaction model. A piano, guitar, and synthesizer should not simply be different skins on the same gesture system.

### Creative accessibility
Users should be able to experiment without needing formal musical training.

### Visual character
The interface should have a distinctive artistic identity. It should feel tactile, editorial, expressive, and carefully designed.

### Technical reliability
Camera tracking, gesture recognition, audio generation, and rendering must work together without making the experience unstable.

## 4. Initial Instrument Direction

### Virtual Piano

The first instrument will be a virtual piano or keyboard-based instrument.

Initial interaction goals:

- Detect individual fingertips.
- Map fingertip positions to virtual keys.
- Trigger notes when fingers enter or activate key regions.
- Support multiple simultaneous notes.
- Detect when a finger leaves a key and release the note.
- Provide visual feedback for active notes.
- Include basic calibration and sensitivity controls.

The first instrument is a technical proof of the interaction architecture, not the limit of the product.

## 5. Future Instrument Possibilities

### Guitar
Explore virtual strings, strumming gestures, and fret or chord selection.

### Synthesizer
Explore pitch manipulation, modulation, filtering, and expressive sound controls through hand movement.

These instruments should be introduced only after the initial interaction system is reliable.

## 6. Initial MVP Scope

The first functional version should contain:

- A polished instrument selection and studio interface.
- Webcam permission and camera initialization.
- Real-time hand landmark detection.
- Finger and hand-position interpretation.
- A gesture recognition and mapping system.
- One playable virtual piano.
- Real-time audio generation.
- Multiple simultaneous notes.
- Basic calibration and sensitivity controls.
- Responsive visual feedback.
- A stable browser experience.

## 7. Explicitly Out of Scope for the First MVP

The following are future possibilities, not initial requirements:

- Multiple fully developed instruments.
- User accounts and cloud synchronization.
- Social features and collaboration.
- AI-generated music.
- Advanced recording and editing.
- Custom gesture editor.
- Complex 3D environments.

## 8. Technical Philosophy

AirKeys will use a modular architecture.

The camera system detects hands.

The computer vision layer extracts hand landmarks.

The gesture engine interprets those landmarks into meaningful actions.

The instrument layer translates those actions into instrument-specific events.

The audio engine generates and manages sound.

The visual layer provides immediate feedback.

These systems should remain independently understandable and testable.

## 9. Success Criteria

The MVP should demonstrate:

- Reliable detection of at least one hand.
- Consistent fingertip tracking.
- Accurate mapping of finger positions to musical notes.
- Reliable note activation and release.
- Support for simultaneous notes.
- Low enough latency for an enjoyable playing experience.
- Stable performance on ordinary consumer laptops.
- A distinctive and coherent visual experience.

## 10. Long-Term Direction

AirKeys should grow into a creative environment where people discover, experiment with, and express music through movement.

The long-term opportunity is not merely replacing physical instruments with a webcam.

It is exploring new ways for humans to interact with sound.

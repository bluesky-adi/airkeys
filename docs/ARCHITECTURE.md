
# AIRKEYS
## System Architecture

## 1. Architectural Overview

AirKeys follows a modular, event-driven architecture.

The application separates computer vision, gesture interpretation, instrument behavior, audio generation, and visual rendering.

The central design principle:

**Detect movement -> Interpret intention -> Generate musical events -> Produce sound -> Render feedback.**

## 2. High-Level Architecture

```text
                    AIRKEYS APPLICATION
                            |
              +-------------+-------------+
              |                           |
          APPLICATION UI              STUDIO
              |                           |
       Instrument Selection        Instrument Controller
                                          |
                                  +-------+-------+
                                  |               |
                             CAMERA SYSTEM   AUDIO ENGINE
                                  |               |
                             Video Frames     Sound Output
                                  |
                           COMPUTER VISION
                                  |
                           MediaPipe Model
                                  |
                            Hand Landmarks
                                  |
                            GESTURE ENGINE
                                  |
                         Normalized Gestures
                                  |
                          INSTRUMENT ADAPTER
                                  |
                           Musical Events
                                  |
                       AUDIO + VISUAL FEEDBACK
```

## 3. Major Components

### 3.1 Application Layer

Responsibilities:

- Application navigation.
- Instrument selection.
- Studio initialization.
- Camera permission states.
- Error and loading states.
- Global application state.

React should manage application-level state, not every individual video frame or fingertip coordinate.

### 3.2 Camera System

Responsibilities:

- Request camera permission.
- Initialize webcam.
- Manage video streams.
- Handle camera errors.
- Provide frames to the vision system.
- Stop camera resources when the studio closes.

Camera access should remain local to the browser.

### 3.3 Computer Vision Layer

Technology: MediaPipe Hand Landmarker.

Responsibilities:

- Detect hands.
- Extract 21 landmarks per hand.
- Provide normalized landmark coordinates.
- Track hand presence and handedness.
- Handle timestamps and inference results.

The initial implementation will use a pretrained model.

No custom ML model training is required for the MVP.

Inference should eventually run inside a Web Worker to avoid blocking the UI thread.

### 3.4 Gesture Engine

Responsibilities:

- Normalize landmark coordinates.
- Identify fingertip positions.
- Estimate finger states.
- Detect meaningful gestures.
- Apply smoothing.
- Handle thresholds and hysteresis.
- Estimate movement velocity where necessary.
- Generate discrete gesture events.
- Prevent duplicate or unstable triggers.

The gesture engine must be independent of any particular instrument.

### 3.5 Instrument Layer

Each instrument implements its own interaction behavior.

Initial instrument: Piano.

Responsibilities:

- Define interactive key regions.
- Map gesture positions to notes.
- Detect key activation and release.
- Support polyphony.
- Manage instrument-specific state.
- Emit musical events.

An instrument should not need to know how the webcam or MediaPipe works.

### 3.6 Audio Engine

Technology: Web Audio API and Tone.js.

Responsibilities:

- Initialize audio context.
- Manage synthesizers.
- Trigger notes.
- Release notes.
- Support simultaneous voices.
- Manage volume and effects.
- Schedule audio events.
- Handle audio lifecycle.

The audio engine should exist independently of React components.

It must support explicit initialization following a user interaction because browsers restrict automatic audio playback.

### 3.7 Visual Rendering

Initial technology: CSS and Canvas 2D.

Responsibilities:

- Active key visualization.
- Fingertip and interaction indicators.
- Sound-reactive effects.
- Instrument feedback.
- Lightweight animations.

Visual rendering must not interfere with audio timing or camera inference.

### 3.8 Persistence

Initial approach:

- LocalStorage for lightweight settings.
- IndexedDB for larger local records if required.

No backend is required for the MVP.

## 4. Data Flow

1. Camera produces video frames.
2. Vision system processes selected frames.
3. MediaPipe returns hand landmarks.
4. Gesture engine interprets landmark changes.
5. Instrument adapter converts gesture events into musical events.
6. Audio engine processes note events.
7. Visual renderer displays interaction feedback.

The system should use structured event contracts rather than tightly coupling components.

## 5. Event Contracts

Initial conceptual events:

- `hand:detected`
- `hand:lost`
- `finger:position`
- `gesture:activated`
- `gesture:released`
- `note:on`
- `note:off`
- `instrument:changed`

Musical note events should include relevant information such as:

- MIDI note number.
- Frequency when required.
- Velocity.
- Source identifier.
- Timestamp.
- Instrument identifier.

Exact TypeScript interfaces will be defined during implementation.

## 6. Performance Architecture

Performance-critical work must be separated from UI rendering.

Key principles:

- Avoid React rerenders for every video frame.
- Use a Web Worker for vision inference.
- Throttle inference when appropriate.
- Use low-resolution camera input initially.
- Avoid unnecessary allocations in frame-processing loops.
- Keep audio scheduling independent of React.
- Use smoothing without introducing excessive latency.
- Profile CPU and memory consumption.

## 7. Error Handling

The application must handle:

- Camera permission denied.
- Camera unavailable.
- Camera already in use.
- Model loading failure.
- WebGL or browser capability limitations.
- Audio initialization failure.
- Tracking loss.
- Unexpected inference errors.

Users should receive understandable recovery instructions.

## 8. Privacy

- Camera processing should happen locally.
- Camera frames should not be uploaded to a server.
- Camera access should be explicitly requested.
- Camera tracks should stop when no longer needed.
- No recording should occur without explicit user action.

## 9. Architectural Constraints

- No backend during the MVP.
- No custom ML training during the MVP.
- No unnecessary microservices.
- No unnecessary 3D rendering.
- No coupling of instrument logic to computer vision internals.
- No high-frequency React state updates for tracking data.

## 10. Evolution

The architecture should permit new instruments to reuse the camera, vision, gesture, audio, and rendering infrastructure.

Adding a guitar should primarily involve a new instrument adapter and its interaction model, not rewriting the entire application.

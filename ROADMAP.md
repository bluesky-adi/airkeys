
# AIRKEYS
## Development Roadmap

## Development Philosophy

Build incrementally.

Every milestone must have:
- A defined objective.
- A working implementation.
- Verification steps.
- A clear completion condition.

Do not proceed simply because the code compiles.

---

## PHASE 0: Foundation

Objectives:
- Create GitHub repository.
- Establish project documentation.
- Finalize initial technical direction.
- Establish design references.

Deliverables:
- Product vision.
- System architecture.
- Technology stack.
- Development roadmap.
- Design direction.

Completion:
Project foundation is documented and ready for implementation.

## PHASE 1: Development Environment

Objectives:
- Initialize React and TypeScript.
- Configure Vite.
- Establish project structure.
- Configure linting and formatting where useful.
- Establish Git workflow.

Deliverables:
- Running development environment.
- Initial application shell.
- Basic navigation structure.

Completion:
Application runs locally without configuration errors.

## PHASE 2: Visual Design Foundation

Objectives:
- Define typography and color system.
- Design application entry experience.
- Design instrument selection.
- Design piano studio.
- Define camera states and interaction feedback.

Deliverables:
- Figma designs.
- Reusable design tokens.
- Responsive layout specifications.

Completion:
Core screens have approved visual designs.

## PHASE 3: Audio Engine

Objectives:
- Initialize browser audio.
- Integrate Tone.js.
- Implement basic synthesis.
- Implement note triggering.
- Implement note release.
- Implement polyphony.

Deliverables:
- Independent audio engine.
- Testable piano sound.
- Reliable note lifecycle.

Completion:
Keyboard interaction can trigger and release multiple notes correctly.

## PHASE 4: Camera and Computer Vision

Objectives:
- Implement camera permission flow.
- Initialize webcam.
- Integrate MediaPipe Hand Landmarker.
- Extract hand landmarks.
- Detect hand presence and loss.
- Measure inference performance.

Deliverables:
- Working camera module.
- Landmark visualization.
- Reliable tracking lifecycle.

Completion:
Hand landmarks are consistently detected and displayed.

## PHASE 5: Gesture Engine

Objectives:
- Normalize landmarks.
- Identify fingertips.
- Estimate finger states.
- Implement smoothing.
- Implement gesture activation and release.
- Prevent duplicate triggers.
- Test tracking stability.

Deliverables:
- Independent gesture engine.
- Typed gesture events.
- Unit tests.

Completion:
Finger movement produces stable and predictable gesture events.

## PHASE 6: Virtual Piano Integration

Objectives:
- Design spatial key regions.
- Map fingertip positions to keys.
- Implement note-on and note-off.
- Support simultaneous notes.
- Connect gestures to the audio engine.
- Implement calibration.
- Implement visual key feedback.

Deliverables:
- Playable webcam-controlled piano.

Completion:
Users can reliably play individual notes and simple chords using their hands.

## PHASE 7: Studio Experience

Objectives:
- Integrate all modules.
- Add camera controls.
- Add sensitivity settings.
- Add loading and error states.
- Add interaction feedback.
- Refine transitions and responsiveness.

Deliverables:
- Complete initial AirKeys studio.

Completion:
The entire experience works from instrument selection to musical interaction.

## PHASE 8: Testing and Optimization

Objectives:
- Measure end-to-end latency.
- Test false activations.
- Test note release reliability.
- Test multiple simultaneous notes.
- Test different lighting conditions.
- Test different webcam positions.
- Profile CPU and memory.
- Test supported browsers.

Deliverables:
- Test report.
- Performance improvements.
- Known limitations documentation.

Completion:
MVP meets agreed reliability and performance criteria.

## PHASE 9: Release

Objectives:
- Production build.
- Browser compatibility checks.
- Deployment.
- Documentation.
- Final usability testing.

Deliverables:
- Publicly accessible AirKeys MVP.
- README.
- Known limitations.
- Future development plan.

## FUTURE PHASES

Possible extensions:

- Guitar interaction.
- Gesture-controlled synthesizer.
- Musical Sketchbook.
- Recording and replay.
- Custom gesture mapping.
- Advanced audio effects.
- Additional creative environments.
- Optional cloud synchronization.
- Collaborative musical experiences.

These features require separate feasibility and design decisions.

---

## Development Rules

1. Implement one subsystem at a time.
2. Test each subsystem independently.
3. Avoid introducing unnecessary dependencies.
4. Keep audio timing independent from UI rendering.
5. Measure performance rather than guessing.
6. Maintain documentation as architecture evolves.
7. Commit working milestones to Git.
8. Never treat an untested implementation as complete.

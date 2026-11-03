
import * as Tone from "tone";

class AudioEngine {
  private synth: Tone.PolySynth | null = null;
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    await Tone.start();

    this.synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: "triangle",
      },
      envelope: {
        attack: 0.02,
        decay: 0.15,
        sustain: 0.7,
        release: 0.4,
      },
    });

    this.synth.volume.value = -8;
    this.synth.toDestination();

    this.initialized = true;
  }

  playNote(note: string): void {
    if (!this.synth || !this.initialized) return;

    this.synth.triggerAttack(note);
  }

  releaseNote(note: string): void {
    if (!this.synth || !this.initialized) return;

    this.synth.triggerRelease(note);
  }

  dispose(): void {
    if (this.synth) {
      this.synth.dispose();
      this.synth = null;
    }

    this.initialized = false;
  }
}

export const audioEngine = new AudioEngine();

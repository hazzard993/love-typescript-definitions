declare module "love.audio" {
  import { Type } from "love";
  import { SoundData } from "love.sound";

  /**
   * Represents an audio input device capable of recording sounds.
   *
   * @link [RecordingDevice](https://love2d.org/wiki/RecordingDevice)
   * @since 11.0
   */
  interface RecordingDevice extends Type<"RecordingDevice"> {
    /**
     * Gets the number of bits per sample in the data currently being recorded.
     *
     * @return bits, The number of bits per sample in the data that's currently being recorded.
     * @link [RecordingDevice:getBitDepth](https://love2d.org/wiki/RecordingDevice:getBitDepth)
     * @since 11.0
     */
    getBitDepth(): number;

    /**
     * Gets the number of channels currently being recorded (mono or stereo).
     *
     * @return channels, The number of channels being recorded (`1` for mono, `2` for stereo).
     * @link [RecordingDevice:getChannelCount](https://love2d.org/wiki/RecordingDevice:getChannelCount)
     * @since 11.0
     */
    getChannelCount(): number;

    /**
     * Gets all recorded audio [SoundData](https://love2d.org/wiki/SoundData) stored in the device's internal ring buffer.
     *
     * @return data, The recorded audio data, or _nil/undefined_ if the device isn't recording.
     * @link [RecordingDevice:getData](https://love2d.org/wiki/RecordingDevice:getData)
     * @since 11.0
     */
    getData(): SoundData | undefined;

    /**
     * Gets the name of the recording device.
     *
     * @return name, The name of the device.
     * @link [RecordingDevice:getName](https://love2d.org/wiki/RecordingDevice:getName)
     * @since 11.0
     */
    getName(): string;

    /**
     * Gets the number of currently recorded samples.
     *
     * @return samples, The number of samples that have been recorded so far.
     * @link [RecordingDevice:getSampleCount](https://love2d.org/wiki/RecordingDevice:getSampleCount)
     * @since 11.0
     */
    getSampleCount(): number;

    /**
     * Gets the number of samples per second currently being recorded.
     *
     * @return rate, The number of samples being recorded per second (sample rate).
     * @link [RecordingDevice:getSampleRate](https://love2d.org/wiki/RecordingDevice:getSampleRate)
     * @since 11.0
     */
    getSampleRate(): number;

    /**
     * Gets whether the device is currently recording.
     *
     * @return recording, `true` if the RecordingDevice is recording, `false` otherwise.
     * @link [RecordingDevice:isRecording](https://love2d.org/wiki/RecordingDevice:isRecording)
     * @since 11.0
     */
    isRecording(): boolean;

    /**
     * Begins recording audio using this device.
     *
     * @param samplecount The maximum number of samples to store in an internal ring buffer when recording. [RecordingDevice:getData](https://love2d.org/wiki/RecordingDevice:getData) clears the internal buffer when called.
     * @param samplerate The number of samples per second to store when recording. (Default `8000`)
     * @param bitdepth The number of bits per sample. (Default `16`)
     * @param channels Whether to record in mono or stereo. Most microphones don't support more than 1 channel. (Default `1`)
     * @return success, `true` if the device successfully began recording using the specified parameters, `false` if not.
     * @link [RecordingDevice:start](https://love2d.org/wiki/RecordingDevice:start)
     * @since 11.0
     */
    start(
      samplecount: number,
      samplerate?: number,
      bitdepth?: number,
      channels?: number,
    ): boolean;

    /**
     * Stops recording audio from this device. Any sound data currently in the device's buffer will be returned.
     *
     * @return data, The sound data currently in the device's buffer, or _nil/undefined_ if the device wasn't recording.
     * @link [RecordingDevice:stop](https://love2d.org/wiki/RecordingDevice:stop)
     * @since 11.0
     */
    stop(): SoundData | undefined;
  }
}

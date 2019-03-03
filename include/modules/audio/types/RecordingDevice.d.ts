/**
 * Represents an audio input device capable of recording sounds.
 * @link [RecordingDevice](https://love2d.org/wiki/RecordingDevice)
 */
declare interface RecordingDevice extends Object {

    /**
     * Gets the number of bits per sample in the data currently being recorded.
     * @return {number} bits, The number of bits per sample in the data that's currently being recorded.
     * @link [RecordingDevice:getBitDepth](https://love2d.org/wiki/RecordingDevice:getBitDepth)
     */
    getBitDepth(): number;

    /**
     * Gets the number of channels currently being recorded (mono or stereo).
     * @return {number} channels, The number of channels being recorded (1 for mono, 2 for stereo).
     * @link [RecordingDevice:getChannelCount](https://love2d.org/wiki/RecordingDevice:getChannelCount)
     */
    getChannelCount(): number;

    /**
     * Gets all recorded audio SoundData stored in the device's internal ring buffer.
     * @return {SoundData} data, The recorded audio data, or nil if the device isn't recording.
     * @link [RecordingDevice:getData](https://love2d.org/wiki/RecordingDevice:getData)
     */
    getData(): SoundData;

    /**
     * Gets the name of the recording device.
     * @return {string} name, The name of the device.
     * @link [RecordingDevice:getName](https://love2d.org/wiki/RecordingDevice:getName)
     */
    getName(): string;

    /**
     * Gets the number of currently recorded samples.
     * @return {number} samples, The number of samples that have been recorded so far.
     * @link [RecordingDevice:getSampleCount](https://love2d.org/wiki/RecordingDevice:getSampleCount)
     */
    getSampleCount(): number;

    /**
     * Gets the number of samples per second currently being recorded.
     * @return {number} rate, The number of samples being recorded per second (sample rate).
     * @link [RecordingDevice:getSampleRate](https://love2d.org/wiki/RecordingDevice:getSampleRate)
     */
    getSampleRate(): number;

    /**
     * Gets whether the device is currently recording.
     * @param TODO
     * @return {boolean} recording, True if the RecordingDevice is recording, false otherwise.
     * @link [RecordingDevice:isRecording](https://love2d.org/wiki/RecordingDevice:isRecording)
     */
    isRecording(): boolean;

    /**
     * Begins recording audio using this device.
     * @param samplecount The maximum number of samples to store in an internal ring buffer when recording. RecordingDevice:getData clears the internal buffer when called.
     * @param samplerate The number of samples per second to store when recording. (Default 8000)
     * @param bitdepth The number of bits per sample. (Default 16)
     * @param channels Whether to record in mono or stereo. Most microphones don't support more than 1 channel. (Default 1)
     * @return {boolean} success, True if the device successfully began recording using the specified parameters, false if not.
     * @link [RecordingDevice:start](https://love2d.org/wiki/RecordingDevice:start)
     */
    start(samplecount: number, samplerate?: number, bitdepth?: number, channels?: number): boolean;

    /**
     * Stops recording audio from this device. Any sound data currently in the device's buffer will be returned.
     * @return {SoundData} data, The sound data currently in the device's buffer, or nil if the device wasn't recording.
     * @link [RecordingDevice:stop](https://love2d.org/wiki/RecordingDevice:stop)
     */
    stop(): SoundData;

}

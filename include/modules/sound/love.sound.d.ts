declare namespace love {

    /**
     * This module is responsible for decoding sound files. It can't play the sounds,
     * see love.audio for that.
     * @noSelf
     * @link [love.sound](https://love2d.org/wiki/love.sound)
     */
    export namespace sound {
        /**
         * Attempts to find a decoder for the encoded sound data in the specified file.
         *
         * @param file The file with encoded sound data.
         * @param buffer The size of each decoded chunk, in bytes.
         * @return decoder, A new Decoder object.
         */
        export function newDecoder(file: File, buffer?: number): Decoder;

        /**
         * Attempts to find a decoder for the encoded sound data in the specified file.
         *
         * @param filename The filename of the file with encoded sound data.
         * @param buffer The size of each decoded chunk, in bytes.
         * @return decoder, A new Decoder object.
         */
        export function newDecoder(filename: string, buffer?: number): Decoder;

        /**
         * Creates new SoundData from a file. It's also possible to create SoundData with
         * a custom sample rate, channel and bit depth.
         *
         *
         * The sound data will be decoded to the memory in a raw format. It is recommended
         * to create only short sounds like effects, as a 3 minute song uses 30 MB of
         * memory this way.
         *
         * @param filename The filename of the file to load.
         * @return soundData, A new SoundData object.
         */
        export function newSoundData(filename: string): SoundData;

        /**
         * Creates new SoundData from a file. It's also possible to create SoundData with
         * a custom sample rate, channel and bit depth.
         *
         *
         * The sound data will be decoded to the memory in a raw format. It is recommended
         * to create only short sounds like effects, as a 3 minute song uses 30 MB of
         * memory this way.
         *
         * @param file A File pointing to an audio file.
         * @return soundData, A new SoundData object.
         */
        export function newSoundData(file: File): SoundData;

        /**
         * Creates new SoundData from a file. It's also possible to create SoundData with
         * a custom sample rate, channel and bit depth.
         *
         *
         * The sound data will be decoded to the memory in a raw format. It is recommended
         * to create only short sounds like effects, as a 3 minute song uses 30 MB of
         * memory this way.
         *
         * @param data The encoded data to decode into audio.
         * @return soundData, A new SoundData object.
         */
        export function newSoundData(data: Data): SoundData;

        /**
         * Creates new SoundData from a file. It's also possible to create SoundData with
         * a custom sample rate, channel and bit depth.
         *
         *
         * The sound data will be decoded to the memory in a raw format. It is recommended
         * to create only short sounds like effects, as a 3 minute song uses 30 MB of
         * memory this way.
         *
         * @param samples Total number of samples.
         * @param rate Number of samples per second
         * @param bits Bits per sample (8 or 16).
         * @param channels Either 1 for mono or 2 for stereo.
         * @return soundData, A new SoundData object.
         */
        export function newSoundData(samples: number, rate?: number, bits?: number, channels?: number): SoundData;

    }

}

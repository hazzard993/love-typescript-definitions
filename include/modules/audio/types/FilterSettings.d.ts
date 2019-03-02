declare interface FilterSettings {

    /**
     * The type of filter to use.
     */
    type: FilterType;

    /**
     * The overall volume of the audio. Must be between 0 and 1.
     */
    volume: number;

    /**
     * Volume of high-frequency audio. Only applies to low-pass and band-pass filters. Must be between 0 and 1.
     */
    highgain?: number;

    /**
     * Volume of low-frequency audio. Only applies to high-pass and band-pass filters. Must be between 0 and 1.
     */
    lowgain?: number;

}

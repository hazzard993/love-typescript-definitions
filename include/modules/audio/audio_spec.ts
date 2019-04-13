// Enums
let distanceModel: DistanceModel;
let effectType: EffectType;
let effectWaveform: EffectWaveform;
let filterType: FilterType;
let sourceType: SourceType;
let timeUnit: TimeUnit;

/**
 * Documented at
 * https://love2d.org/wiki/RecordingDevice
 * Obtained 2019/03/02
 */
declare const recordingDevice: RecordingDevice;
recordingDevice.release;
recordingDevice.type;
recordingDevice.typeOf;
recordingDevice.getBitDepth;
recordingDevice.getChannelCount;
recordingDevice.getData;
recordingDevice.getName;
recordingDevice.getSampleCount;
recordingDevice.getSampleRate;
recordingDevice.isRecording;
recordingDevice.start;
recordingDevice.stop;

/**
 * Documented at
 * https://love2d.org/wiki/Source
 */
declare const source: Source;
source.release;
source.type;
source.typeOf;
source.clone;
source.getAirAbsorption;
source.getAttenuationDistances;
source.getChannelCount;
source.getChannels;
source.getCone;
source.getDirection;
source.getDuration;
source.getEffect;
source.getFilter;
source.getFreeBufferCount;
source.getPitch;
source.getPosition;
source.getRolloff;
source.getType;
source.getVelocity;
source.getVolume;
source.getVolumeLimits;
source.isLooping;
source.isPlaying;
source.isRelative;
source.pause;
source.play;
source.queue;
source.seek;
source.setAirAbsorption;
source.setAttenuationDistances;
source.setCone;
source.setDirection;
source.setEffect;
source.setFilter;
source.setLooping;
source.setPitch;
source.setPosition;
source.setRelative;
source.setRolloff;
source.setVelocity;
source.setVolume;
source.setVolumeLimits;
source.stop;
source.tell;

// Functions
love;
love.audio;

/**
 * Obtained from
 * https://love2d.org/wiki/love.audio
 * 2019/03/02
 */
love.audio.getActiveEffects;
love.audio.getActiveSourceCount;
love.audio.getDistanceModel;
love.audio.getDopplerScale;
love.audio.getEffect;
love.audio.getMaxSceneEffects;
love.audio.getMaxSourceEffects;
love.audio.getOrientation;
love.audio.getPosition;
love.audio.getRecordingDevices;
love.audio.getSourceCount;
love.audio.getVelocity;
love.audio.getVolume;
love.audio.isEffectsSupported;
love.audio.newQueueableSource;
love.audio.newSource;
love.audio.pause;
love.audio.play;
love.audio.setDistanceModel;
love.audio.setDopplerScale;
love.audio.setEffect;
love.audio.setMixWithSystem;
love.audio.setOrientation;
love.audio.setPosition;
love.audio.setVelocity;
love.audio.setVolume;
love.audio.stop;

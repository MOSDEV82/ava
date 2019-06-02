// Check if Text -> Speech is supported on the browser.
if (!window || !Window || !document || window && !window.speechSynthesis) throw new Error("SpeechSynthesis is not supported in your Browser!");

/**
 * A class to work with [`window.speechSynthesis`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).
 */
export default class TextToSpeech
{
	
	/** The syntesis object. */
	public speaker: SpeechSynthesis = window.speechSynthesis;
	
	/** The language to speak in. */
	public language: string = "en-US";
	
	/** The pitch to use when speaking. */
	public pitch: number = 1;
	
	/** The rate to use when speaking. */
	public rate: number = 1;
	
	/** The volume to speak in. */
	public volume: number = 1;
	
	/**
	 * Initiate the text to speech object.
	 * @param options The options to apply to new [`SpeechSynthesisUtterance`(s)](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance).
	 */
	public constructor (options: { language?: string, pitch?: number, rate?: number, volume?: number })
	{
		if (typeof options.language === "string") this.language = options.language;
		if (typeof options.pitch === "number") this.pitch = options.pitch;
		if (typeof options.rate === "number") this.rate = options.rate;
		if (typeof options.volume === "number") this.volume = options.volume;
	}
	
	/**
	 * Say something.
	 * @param text The text to speak.
	 * @param cb A function used to override utterance options and to attach events to this specific message.
	 */
	public say (text: string, cb?: (utterance: SpeechSynthesisUtterance) => void)
	{
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.lang = this.language;
		utterance.pitch = this.pitch;
		utterance.rate = this.rate;
		utterance.volume = this.volume;
		utterance.voice = (window.speechSynthesis.getVoices().find(voice => voice.name === "Samantha" && voice.lang === this.language) || window.speechSynthesis.getVoices().find(voice => voice.lang === this.language)) || null;
		if (typeof cb === "function") cb(utterance);
		this.speaker.speak(utterance);
	}
	
}

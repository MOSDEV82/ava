// Check if Speech -> Text is supported on the browser.
if (!window || !Window || !document) throw new Error("SpeechRecognition is not supported in your Browser!");

// Dependencies
import { EventEmitter } from "events";
import SpeechRecognition from "./SpeechRecognition";

// Check if Speech -> Text is supported on the browser.
if (!SpeechRecognition) throw new Error("SpeechRecognition is not supported in your Browser!");

/**
 * Turn speech into text.
 */
export default class SpeechToText extends EventEmitter
{
	/**
	 * The [`audioend`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/audioend_event) event of
	 * the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is fired when the user
	 * agent has finished capturing audio for speech recognition.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_AUDIOEND: "audioend" = "audioend";
	
	/**
	 * The [`audiostart`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/audiostart_event) event
	 * of the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is fired when the
	 * user agent has started to capture audio for speech recognition.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_AUDIOSTART: "audiostart" = "audiostart";
	
	/**
	 * The [`end`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/end_event) event of the
	 * [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
	 * [`SpeechRecognition`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) object is fired when
	 * the speech recognition service has disconnected.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_END: "end" = "end";
	
	/**
	 * The [`error`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/error_event) event of the
	 * [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
	 * [`SpeechRecognition`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) object is fired when
	 * a speech recognition error occurs.
	 * @event
	 * @type [SpeechRecognitionError](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_ERROR: "error" = "error";
	
	/**
	 * The [`nomatch`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/nomatch_event) event of the
	 * [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is fired when the speech
	 * recognition service returns a final result with no significant recognition.
	 * 
	 * This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_NOMATCH: "nomatch" = "nomatch";
	
	/**
	 * The [`result`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/result_event) event of the
	 * [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is fired when the speech
	 * recognition service returns a result — a word or phrase has been positively recognized and this has been
	 * communicated back to the app.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_RESULT: "result" = "result";
	
	/**
	 * The [`soundend`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/soundend_event) event of the
	 * [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is fired when any sound
	 * — recognisable speech or not — has stopped being detected.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_SOUNDEND: "soundend" = "soundend";
	
	/**
	 * The [`soundstart`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/soundstart_event) event of
	 * the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is fired when any sound
	 * — recognisable speech or not — has been detected.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_SOUNDSTART: "soundstart" = "soundstart";
	
	/**
	 * The [`speechend`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/speechend_event) event of
	 * the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is fired when speech
	 * recognized by the speech recognition service has stopped being detected.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_SPEECHEND: "speechend" = "speechend";
	
	/**
	 * The [`speechstart`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/speechstart_event) event of
	 * the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is fired when sound
	 * recognized by the speech recognition service as speech has been detected.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	 */
	static EVENT_SPEECHSTART: "speechstart" = "speechstart";
	
	/**
	 * The [`start`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/start_event) event of the
	 * [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
	 * [`SpeechRecognition`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) object is fired when
	 * the speech recognition service has begun listening to incoming audio with intent to recognize grammars
	 * associated with the current [`SpeechRecognition`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	*/
	static EVENT_START: "start" = "start";
	
	/**
	 * The `final` event is fired when the speech recognition service has resolved a word, sentance, paragraph,
	 * etc.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	*/
	static EVENT_FINAL: "final" = "final";
	
	/**
	 * The `data` event is fired when the speech recognition service is progressing the audio.
	 * @event
	 * @type [SpeechRecognitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent)
	*/
	static EVENT_DATA: "data" = "data";
	
	/**
	 * The speech recognition engine.
	 */
	readonly recorder: SpeechRecognition = new SpeechRecognition();
	
	/** The recognition language. */
	get lang (): string { return this.recorder.lang; }
	/** The recognition language. */
	set lang (value: string) { this.recorder.lang = value; }
	
	/**
	 * Initiate a new Speech to Text engine.
	 * @param lang The language to recognize (defaults to `en-US`).
	 */
	public constructor (lang: string = "en-US")
	{
		// Pre Init
		super();
		
		// Init
		this.lang = lang;
		this.recorder.continuous = false;
		this.recorder.interimResults = true;
		
		// Events
		this.recorder.addEventListener("audioend", event => this.emit("audioend", event));
		this.recorder.addEventListener("audiostart", event => this.emit("audiostart", event));
		this.recorder.addEventListener("end", event => this.emit("end", event));
		this.recorder.addEventListener("error", error => this.emit("error", error));
		this.recorder.addEventListener("nomatch", event => this.emit("nomatch", event));
		this.recorder.addEventListener("result", event => this.emit("result", event));
		this.recorder.addEventListener("soundend", event => this.emit("soundend", event));
		this.recorder.addEventListener("soundstart", event => this.emit("soundstart", event));
		this.recorder.addEventListener("speechend", event => this.emit("speechend", event));
		this.recorder.addEventListener("speechstart", event => this.emit("speechstart", event));
		this.recorder.addEventListener("start", event => this.emit("start", event));
		
		// `data` and `final` events
		this.recorder.addEventListener("result", event => {
			const result: SpeechRecognitionResult = event.results[event.resultIndex];
			const final: boolean = result.isFinal;
			if (final) this.emit("final", event);
			else this.emit("data", event);
		});
	}
	
	/**
	 * Starts the speech recognition service listening to incoming audio with intent to recognize grammars associated
	 * with the current `SpeechRecognition`.
	 */
	start ()
	{
		this.recorder.start();
		return this;
	}
	
	/**
	 * Stops the speech recognition service from listening to incoming audio, and doesn't attempt to return a
	 * [`SpeechRecognitionResult`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult).
	 */
	abort ()
	{
		this.recorder.abort();
		return this;
	}
	
	/**
	 * Stops the speech recognition service from listening to incoming audio, and attempts to return a
	 * [`SpeechRecognitionResult`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult) using the
	 * audio captured so far.
	 */
	stop ()
	{
		this.recorder.stop();
		return this;
	}
}

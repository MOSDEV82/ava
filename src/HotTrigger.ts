/**
 * A hot trigger allows you to test whether a string includes a trigger phrase, and eliminate it out of the string.
 */
export default class HotTrigger
{
	
	/** The hot trigger regular expression. */
	public trigger: RegExp;
	
	/**
	 * Create a new hot trigger.
	 * @param trigger The hot trigger.
	 */
	public constructor (trigger: RegExp = /^(((Hi|Hello|Hey|Howdy) Ava)|Ava)/gi)
	{
		this.trigger = trigger;
	}
	
	/**
	 * Check if a text contains the correct phrase.
	 * @param text The text to check.
	 */
	test (text: string): boolean { return this.trigger.test(text); }
	
	/**
	 * Eliminate the phrase out of the text.
	 * @param text The text to trim.
	 */
	trim (text: string): string { return text.replace(this.trigger, "").trim(); }
	
}

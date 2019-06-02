// Dependencies
import HotTrigger from "./HotTrigger";

/**
 * Generate a hot link based on name and greetings.
 */
export default class Phrase extends HotTrigger
{
	/**
	 * Create a new hot trigger.
	 * @param name The name of intelligence.
	 * @param greetings The greetings.
	 */
	public constructor (name: string = "Ava", greetings: string[] = [ "Hello", "Howdy", "Hi", "Hey" ])
	{
		super(new RegExp(`((${greetings.join("|")}) ${name})`, "gi"));
	}
}

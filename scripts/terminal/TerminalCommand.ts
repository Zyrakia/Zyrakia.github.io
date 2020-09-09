interface CommandProperties {
	identifier: string;
	usage?: string;
	hidden?: boolean;
}

abstract class TerminalCommand {
	protected abstract readonly properties: CommandProperties;
	private resolveInput: Function;

	public abstract async invoke(terminal: Terminal, args: string[]): Promise<void>;

	public takeInput(input: string) {
		if (!this.resolveInput) return;
		this.resolveInput(input);
		this.resolveInput = undefined;
	}

	protected openInput(terminal: Terminal) {
		terminal.openInput(this);
		return new Promise<string>((resolve) => {
			this.resolveInput = resolve;
		});
	}

	public getProperties() {
		return this.properties;
	}
}

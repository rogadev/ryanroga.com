declare module 'qrcode' {
	interface QRCodeOptions {
		version?: number;
		errorCorrectionLevel?: string;
		width?: number;
		margin?: number;
		color?: {
			dark?: string;
			light?: string;
		};
	}

	function toCanvas(
		canvas: HTMLCanvasElement,
		text: string,
		options?: QRCodeOptions
	): Promise<void>;

	export default {
		toCanvas
	};
}

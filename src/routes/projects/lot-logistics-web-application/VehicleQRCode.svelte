<script lang="ts">
	import QRCode from 'qrcode';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let vin: string = '';
	export let vehicleName: string = '';

	let qrCanvas: HTMLCanvasElement;

	onMount(async () => {
		if (browser) {
			try {
				await QRCode.toCanvas(qrCanvas, vin, {
					width: 96, // 24px * 4 to match your previous size
					margin: 1,
					color: {
						dark: '#111827', // gray-900
						light: '#FFFFFF'
					}
				});
			} catch (err) {
				console.error('Error generating QR code:', err);
			}
		}
	});
</script>

<div class="flex items-center justify-center bg-white p-3 rounded-lg">
	<div class="flex flex-col items-center">
		<div class="w-24 h-24 bg-gray-900 flex items-center justify-center mb-1">
			<canvas bind:this={qrCanvas} class="w-20 h-20"></canvas>
		</div>
		<span class="text-gray-900 text-xs font-medium">{vehicleName}</span>
		<span class="text-gray-600 text-xs">VIN: {vin}</span>
		<span class="text-blue-600 text-xs mt-1">Scan to view vehicle details</span>
	</div>
</div>

<script setup lang="ts">
import { onMounted, ref, watch, type PropType } from "vue";
import { createAllVerticalTextCanvas } from '@mogamoga1024/vertical-text-canvas';

const canvas = ref<HTMLCanvasElement>()

const props = defineProps({
	text: {
		type: String as PropType<string>,
		required: true,
	},
})

const drawCanvas = () => {
	if (canvas.value === undefined) return
	const ctx = canvas.value.getContext('2d')
	if (ctx === null) return

	ctx.clearRect(0, 0, 1000, 1000)

	const lines = props.text.split('\n').filter(char => char.length)

	// ctx.font = "20px source-han-serif'"
	let w = canvas.value.width;
	for (const line of lines) {
		const vTextCanvas =
			createAllVerticalTextCanvas(line, "20px source-han-serif")
		w -= vTextCanvas.width
		ctx.drawImage(vTextCanvas, w, 0)
	}
}

watch(() => props.text, () => {
	drawCanvas()
}, { immediate: true })

onMounted(drawCanvas)
</script>

<template>
	<div style="display: flex; justify-content: center;">
		<canvas ref="canvas" style="border: solid black 2px;" width="600" height="900"></canvas>
	</div>
</template>

<style scoped>
canvas {
	max-width: 90vw;
}
</style>
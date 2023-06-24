import noUiSlider from './nouislider.min.mjs';

const nouislider = () => {
	const slider = document.getElementById('slider');

	if (!slider) {
		return;
	}

	const input0 = document.getElementById('input0');
	const input1 = document.getElementById('input1');
	const inputs = [input0, input1];

	noUiSlider.create(slider, {
		start: [10500, 55500],
		connect: true,
		step: 100,
		range: {
			min: [1000],
			max: [100000]
		}
	});

	slider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		slider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
};

export default nouislider;

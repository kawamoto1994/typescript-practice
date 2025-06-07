const snackList = [
  { name: "チョコレート", flavor: "sweet" },
  { name: "ポテトチップス", flavor: "salty" },
  { name: "ビスケット", flavor: "sweet" },
  { name: "せんべい", flavor: "salty" },
];

const targetElement250607_01 = document.querySelector('[data-output]');
const checkList = document.querySelectorAll('[data-flavor]');

if (targetElement250607_01 instanceof HTMLElement) {
	checkList.forEach((item) => {
		item.addEventListener('change', () => {
			const checkedList = document.querySelectorAll('[data-flavor]:checked');
			if (checkedList.length === 0) {
				targetElement250607_01.innerHTML = '';
			}
		checkedList.forEach((item) => {
			if (item instanceof HTMLInputElement) {
				const snack = item.value;
				const filterSnackList = snackList.filter((item) => item.flavor === snack).map((item) => [item.name]);
				targetElement250607_01.innerHTML += filterSnackList.join('');
			}
		})
	})
})
}

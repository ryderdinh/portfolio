let nameContact = document.querySelector('#name-contact');
let emailContact = document.querySelector('#email-contact');
let messageContact = document.querySelector(
	"textarea[placeholder='Enter your message']"
);

document
	.querySelector('#send-message')
	.addEventListener('click', e => {
		e.preventDefault();
		toggleElmLoading();
		if (
			nameContact.value == '' ||
			emailContact.value == '' ||
			messageContact.value == ''
		) {
			toggleElmLoading();
			launch_toast('warning', "Don't leave it blank !");
		} else {
			(async () => {
				try {
					let result = await db.collection('message').add({
						fullname: nameContact.value,
						email: emailContact.value,
						message: messageContact.value
					});
					setTimeout(() => {
						initialForm();
						toggleElmLoading();
						launch_toast('success', 'Send email successfully!');
					}, 1500);
				} catch (error) {
					console.log('error');
					setTimeout(() => {
						toggleElmLoading();
						launch_toast('error', 'Error!');
					}, 1500);
				}
			})();
		}
	});

function toggleElmLoading() {
	let childElementSend = document.getElementsByClassName('elm-send');
	for (const el of childElementSend) {
		el.classList.toggle('hidden');
	}
}

function initialForm() {
	nameContact.value = '';
	emailContact.value = '';
	messageContact.value = '';
}

/***
 * =========================================================
 * Hi,I'm dinhquanganh
 * =========================================================
 ***/

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
		// Check empty
		if (
			nameContact.value == '' ||
			emailContact.value == '' ||
			messageContact.value == ''
		) {
			// is empty
			toggleElmLoading();
			launch_toast('warning', "Don't leave it blank !");
		} else {
			// not empty
			(async () => {
				try {
					// Connect database and save message to db
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
					// Handle error
					console.log('error');
					setTimeout(() => {
						toggleElmLoading();
						launch_toast('error', 'Error!');
					}, 1500);
				}
			})();
		}
	});

// As name func :D
function toggleElmLoading() {
	let childElementSend = document.getElementsByClassName('elm-send');
	for (const el of childElementSend) {
		el.classList.toggle('hidden');
	}
}

// Initialize an empty form
function initialForm() {
	nameContact.value = '';
	emailContact.value = '';
	messageContact.value = '';
}

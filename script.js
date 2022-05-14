var form = document.querySelector('form');
var input = document.querySelector('input');
var textarea = document.querySelector('textarea');
var wrapper = document.querySelector('.wrapper');
console.log(textarea.value)


function fetchFormData(formData){
	fetch('http://api.qrserver.com/v1/read-qr-code/',{
		method: 'POST',
		body: formData
	}).then(res => res.json())
		.then((result)=>{
			wrapper.classList.add('active');
			textarea.value = result[0].symbol[0].data
		})
	
}
form.addEventListener('click',function(){
	input.click();
})

input.addEventListener('change', function(e){
	let filedata = e.target.files[0];
	let formData = new FormData();
	formData.append('file', filedata);
	fetchFormData(formData);
	
})
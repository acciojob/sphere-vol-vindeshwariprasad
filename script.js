function volume_sphere() {
	let radius = parseFloat(document.getElementById("radius").value);

    // Calculate the volume of the sphere
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume in the volume input field
    document.getElementById("volume").value = volume.toFixed(4);
	return false;
    //Write your code here
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

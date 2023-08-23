const uploadButton = document.getElementById('uploadButton')
const imageInput = document.getElementById('imageInput')
const resultDiv = document.getElementById('result')

uploadButton.addEventListener('click', async () => {
  const imageFile = imageInput.files[0]

  if (!imageFile) {
    resultDiv.textContent = 'Please select an image to upload.'
    return
  }

  try {
    const formData = new FormData()
    formData.append('image', imageFile)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      const data = await response.json()
      resultDiv.textContent = JSON.stringify(data, null, 2)
    } else {
      resultDiv.textContent = 'Error occurred during request.'
    }
  } catch (error) {
    console.error('Error:', error)
    resultDiv.textContent = 'An error occurred while uploading the image.'
  }
})

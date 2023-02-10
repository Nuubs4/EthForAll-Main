const imagePreview = (file: File, callback: Callback) => {
  const reader = new FileReader()
  reader.onload = () => callback(reader.result)

  reader.readAsDataURL(file)
}

export default imagePreview

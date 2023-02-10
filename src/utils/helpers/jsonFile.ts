const jsonFile = (
  filename: string,
  obj: {
    [key: string]: any
  }
) => {
  return new File([JSON.stringify(obj)], filename)
}

export default jsonFile

export const errorHandler = (res, code, message, error) => {
  res.status(code).json({
    error: {
      code: code,
      message,
      error
    }
  })
}

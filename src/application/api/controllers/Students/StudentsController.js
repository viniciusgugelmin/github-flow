class StudentsController {
  getViniDataUseCase;

  constructor(getViniDataUseCase) {
    this.getViniDataUseCase = getViniDataUseCase;
  }

  getVini(req, res) {
    const data = this.getViniDataUseCase.execute();

    res.json(data);
  }
}

export { StudentsController };

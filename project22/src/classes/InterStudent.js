class InterStudent {
  constructor(
    studentName,
    engMarks,
    sansMarks,
    maths1AMarks,
    maths1BMarks,
    phyMarks,
    chemMarks
  ) {
    this.studentName = studentName;
    this.englishMarks = engMarks;
    this.sanskritMarks = sansMarks;
    this.maths1AMarks = maths1AMarks;
    this.maths1BMarks = maths1BMarks;
    this.physicsMarks = phyMarks;
    this.chemistryMarks = chemMarks;
  }
  calculateResult = () => {
    this.totalMarks =
      this.englishMarks +
      this.sanskritMarks +
      this.maths1AMarks +
      this.maths1BMarks +
      this.physicsMarks +
      this.chemistryMarks;
    this.perc = (this.totalMarks / 470) * 100;

    console.log(`Name: ${this.studentName},
    Total Marks: ${this.totalMarks},
    Percentage: ${this.perc.toFixed(2)}. `);
   
  };
}
export default InterStudent;

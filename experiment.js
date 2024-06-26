class Experiment {
  // Group Details
  static rollNos = '102117167,102117168'
  static names = 'Creative Canvas(Priyanka Bedi, Saneha Garg)'

  canvasSel = '#myCanvas'

  run() {

    // Run the Steppers
    // this.runSteppers()

    // Hide Steppers
    this.hideSteppers()
    canvasSetup(this.canvasSel)

    // Clock
    // --------------------------------------------------
    const clock = new Clock(this.canvasSel)
    // const ms = document.timeline.currentTime
    // clock.draw(ms)
    // clock.draw(ms+25000)
    //clock.draw(ms)
    const clockRafFn = (ts) => {
      clock.draw(ts)
      window.requestAnimationFrame(clockRafFn)
    }
    const clockRaf = window.requestAnimationFrame(clockRafFn)
    
  }

  // runSteppers() {

  //   // Steppers
  //   // --------------------------------------------------
  //   const stepperOneRaf
	//   = window.requestAnimationFrame(stepperOne)

  //   const stepperTwoRaf
	//   = window.requestAnimationFrame(stepperTwo)

  //   const stepperThree = new StepperThree(
  //     '#valueFromStepperThree', 15
  //   )
  //   const stepperThreeFn = (ts) => {
  //     if (!stepperThree.isActive) stepperThree.start()
  //     stepperThree.step(ts)
  //     window.requestAnimationFrame(stepperThreeFn)
  //   }
  //   const stepperThreeRaf
	//   = window.requestAnimationFrame(stepperThreeFn)
  //   // --------------------------------------------------
    
  // }

  hideSteppers() {
    document.querySelector('#side-note')
      .classList.add('hidden')
  }
}

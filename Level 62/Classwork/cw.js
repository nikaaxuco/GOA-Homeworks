  function countdownTimer(seconds) {
      if (seconds < 0) {
          console.log("please enter a positive number");
          return;
      }

      for (let remainingSeconds = seconds; remainingSeconds >= 0; remainingSeconds--) {
          if (remainingSeconds === 0) {
              console.log("times up!");
          } else {
              console.log(remainingSeconds);
          }
      }
  }


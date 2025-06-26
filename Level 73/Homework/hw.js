  function getCurrentDateTime() {
      const now = new Date();
      return now.toISOString().slice(0, 19).replace('T', ' ');
  }

  function calculateAge(birthdate) {
      const birth = new Date(birthdate);
      const now = new Date();
    
      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      let days = now.getDate() - birth.getDate();
    
      if (months < 0 || (months === 0 && days < 0)) {
          years--;
          months += 12;
      }
    
      if (days < 0) {
          months--;
          const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, birth.getDate());
          days = Math.floor((now - lastMonth) / (1000 * 60 * 60 * 24));
      }
    
      document.getElementById('ageResult').innerHTML = 
          `Age: ${years} years, ${months} months, ${days} days`;
  }

  function getDayOfWeek(date) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const d = new Date(date);
      return days[d.getDay()];
  }

  let counter = 0;
  const timerInterval = setInterval(() => {
      document.getElementById('timer').innerHTML = counter++;
  }, 1000);

  const clockInterval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      document.getElementById('clock').innerHTML = time;
  }, 1000);

  const randomInterval = setInterval(() => {
      console.log(Math.random());
  }, 1000);

  function showDelayedMessage(message, delay) {
      setTimeout(() => {
          document.getElementById('delayedMessage').innerHTML = message;
      }, delay);
  }

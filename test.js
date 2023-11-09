document.getElementById("myButton").addEventListener("mouseover", function() {
    this.style.left = "100px"; // Змінюємо ліве зміщення
  });
  
  document.getElementById("myButton").addEventListener("mouseout", function() {
    this.style.left = "0"; // Повертаємо кнопку на місце
  });
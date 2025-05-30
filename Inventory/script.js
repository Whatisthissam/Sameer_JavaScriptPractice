const inventory = [
    { name: "Banana", color: "Yellow", calories: 105 },
    { name: "Apple", color: "Red", calories: 95 },
    { name: "Lemon", color: "Yellow", calories: 37 },
    { name: "Strawberry", color: "Red", calories: 33 },
    { name: "Avocado", color: "Green", calories: 160 },
    { name: "Grapes", color: "Purple", calories: 62 },
    { name: "Kiwi", color: "Green", calories: 42 }
  ];
  
  function summarizeInventory() {
    const totalFruits = inventory.length;
  
    const colorCount = {};
    let totalCalories = 0;
  
    inventory.forEach(fruit => {
      totalCalories += fruit.calories;
  
      if (colorCount[fruit.color]) {
        colorCount[fruit.color]++;
      } else {
        colorCount[fruit.color] = 1;
      }
    });
  
    const avgCalories = (totalCalories / totalFruits).toFixed(2);
  
    const output = document.getElementById("output");
    output.innerHTML = `
      <p><strong>Total Fruits:</strong> ${totalFruits}</p>
      <p><strong>Total Calories:</strong> ${totalCalories}</p>
      <p><strong>Average Calories per Fruit:</strong> ${avgCalories}</p>
      <p><strong>Fruits by Color:</strong></p>
      <ul>
        ${Object.entries(colorCount)
          .map(([color, count]) => `<li>${color}: ${count}</li>`)
          .join("")}
      </ul>
    `;
  }
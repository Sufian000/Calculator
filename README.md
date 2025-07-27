# 🧮 Advanced Scientific Calculator

A sleek, browser-based scientific calculator built using **vanilla JavaScript**, **HTML5**, and **CSS3**, designed with a modern glassmorphism UI. This calculator supports real-time expression parsing, mathematical functions, and a persistent history log — all without external libraries or frameworks.

---

## 🚀 Features

- **Arithmetic operations**: Addition, subtraction, multiplication, division
- **Scientific functions**:  
  `sin`, `cos`, `tan`, `log`, `ln`, `√`, `x²`, `eˣ`
- **Constants**: π (pi)
- **Parentheses management**: Auto-balanced for nested expressions
- **Expression history**: Scrollable panel to review past calculations
- **Input validation**: Prevents malformed expressions and manages open parentheses
- **Responsive design**: Works seamlessly on both desktop and mobile devices
- **Glassmorphism UI**: Stylish and modern interface using blurred backgrounds

---

## 📁 Project Structure

```
📦 calculator/
 ┣ 📄 index.html          # Main layout and button controls
 ┣ 📄 calculator.css      # Visual styling with flex/grid layout
 ┗ 📄 calculator.js       # Expression handling and logic
```

---

## 🔧 Setup & Usage

1. **Clone this repository** or download the files directly:
   ```bash
   git clone https://github.com/yourusername/advanced-scientific-calculator.git
   cd advanced-scientific-calculator
   ```

2. **Open the application**:
   Simply open `index.html` in any modern web browser.

---

## ⚙️ Implementation Details

### ➤ Expression Handling

Expressions are dynamically constructed as the user clicks buttons. Before evaluation:

- Custom functions like `sin(` or `log(` are mapped to corresponding `Math.*` calls
- Open parentheses are auto-balanced on evaluation
- Inputs like `×`, `÷`, and `π` are translated into valid JavaScript expressions

### ➤ Safe Evaluation

The calculator uses a sanitized `Function` constructor to evaluate expressions:

```javascript
Function('"use strict"; return (' + safeExpr + ')')();
```

Only whitelisted `Math.*` operations are allowed.

---

## 📌 Future Enhancements

- Keyboard input support
- Degree/radian toggle for trig functions
- Dark mode toggle
- Export/import history
- Unit conversions

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute.

---

## 🙌 Acknowledgments

Created with vanilla JavaScript as a demonstration of client-side math parsing and interactive UI design. Inspired by the need for lightweight, offline-accessible scientific calculators.
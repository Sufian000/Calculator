'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const historyList = document.getElementById('history-list');
  let expr = '';
  let openParens = 0;

  const pushHistory = (input, result) => {
    const li = document.createElement('li');
    li.textContent = `${input} = ${result}`;
    historyList.prepend(li);
  };

  document.getElementById('calculator')
    .addEventListener('click', e => {
      const btn = e.target;
      if (btn.tagName !== 'BUTTON') return;

      const val = btn.textContent;

      if (btn.dataset.action === 'clear') {
        expr = ''; openParens = 0;
        display.value = '';
        return;
      }
      if (btn.dataset.action === 'back') {
        if (expr.endsWith('(')) openParens--;
        if (expr.endsWith(')')) openParens++;
        expr = expr.slice(0, -1);
        display.value = expr;
        return;
      }
      if (btn.dataset.action === 'paren') {
        if (openParens === 0 || expr.endsWith('(') || /[+\-×÷*/]$/.test(expr)) {
          expr += '('; openParens++;
        } else if (openParens > 0) {
          expr += ')'; openParens--;
        }
        display.value = expr;
        return;
      }
      if (btn.dataset.const === 'pi') {
        expr += Math.PI;
        display.value = expr;
        return;
      }
      if (btn.dataset.func) {
        expr += btn.dataset.func + '(';
        openParens++;
        display.value = expr;
        return;
      }
      if (btn.dataset.action === 'add') { expr += '+'; display.value = expr; return; }
      if (btn.dataset.action === 'subtract') { expr += '-'; display.value = expr; return; }
      if (btn.dataset.action === 'multiply') { expr += '*'; display.value = expr; return; }
      if (btn.dataset.action === 'divide') { expr += '/'; display.value = expr; return; }

      if (btn.dataset.action === 'equals') {
        try {
          expr += ')'.repeat(openParens);
          const safeExpr = expr
            .replace(/\bsin\(/g, 'Math.sin(')
            .replace(/\bcos\(/g, 'Math.cos(')
            .replace(/\btan\(/g, 'Math.tan(')
            .replace(/\blog\(/g, 'Math.log10(')
            .replace(/\bln\(/g, 'Math.log(')
            .replace(/\bsqrt\(/g, 'Math.sqrt(')
            .replace(/\bpow\(/g, 'Math.pow(')
            .replace(/\bexp\(/g, 'Math.exp(');

          const result = Function('"use strict"; return (' + safeExpr + ')')();
          pushHistory(display.value, result);
          display.value = result;
          expr = result.toString();
          openParens = 0;
        } catch {
          display.value = 'Error';
          expr = '';
          openParens = 0;
        }
        return;
      }

      if (/[\d.]/.test(val)) {
        expr += val;
        display.value = expr;
      }
    });
});

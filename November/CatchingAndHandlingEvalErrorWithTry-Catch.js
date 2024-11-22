// Write a JavaScript program that uses a try-catch block to catch and handle an 'EvalError' when evaluating an invalid expression.

const isEval = (exp) => {
  try {
    const result = eval(exp);
    console.log(`Result : ${result}`);
  } catch (error) {
    if (error instanceof EvalError) {
      console.log(`Eval Error : ${error.message}`);
    } else {
      console.log(`Error : ${error.message}`);
    }
  }
};

isEval("30 + 30");
isEval("30 + ");
isEval(10 + 20);

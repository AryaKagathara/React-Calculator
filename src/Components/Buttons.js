import React from "react";

import "./Style.css";

function Buttons({buttonHandler, sign, equal, remove, convert, dot, percent}) {
    
    return (
      <div className="pad">
        <button className="ac" onClick={() => remove()} >AC</button>
        <button className="plus-minus" onClick={() => convert()}>+/-</button>
        <button className="percent" onClick={() => percent()}>%</button>
        <button className="division" onClick={() => sign('/')}>/</button>
        <button className="seven" onClick={() => buttonHandler(7)} value="7">
          7
        </button>
        <button className="eight" onClick={() => buttonHandler(8)} value="8">
          8
        </button>
        <button className="nine" onClick={() => buttonHandler(9)} value="9">
          9
        </button>
        <button className="multiply" onClick={() => sign('*')}>*</button>
        <button className="four" onClick={() => buttonHandler(4)} value="4">
          4
        </button>
        <button className="five" onClick={() => buttonHandler(5)} value="5">
          5
        </button>
        <button className="six" onClick={() => buttonHandler(6)} value="6">
          6
        </button>
        <button className="minus" onClick={() => sign('-')}>-</button>
        <button className="one" onClick={() => buttonHandler(1)} value="1">
          1
        </button>
        <button className="two" onClick={() => buttonHandler(2)} value="2">
          2
        </button>
        <button className="three" onClick={() => buttonHandler(3)} value="3">
          3
        </button>
        <button className="add" onClick={() => sign('+')}>+</button>
        <button className="zero" onClick={() => buttonHandler(0)} value="4">
          0
        </button>
        <button className="dot" onClick={() => dot(".")}>.</button>
        <button className="equal" onClick={() => equal()}>=</button>
      </div>
    );
}

export default Buttons;

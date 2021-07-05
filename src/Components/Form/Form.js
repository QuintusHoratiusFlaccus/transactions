"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Deposit_1 = require("../Filters/Deposit/Deposit");
var RadioGroup_1 = require("../RadioGroup/RadioGroup");
function Form() {
    var _a = react_1.useState('deposit'), transaction = _a[0], setTransaction = _a[1];
    var handleRadioChange = function (e) {
        setTransaction(e.target.attributes[2].value);
    };
    return (<>
            <RadioGroup_1["default"] transaction={transaction} handleRadioChange={handleRadioChange}/>
            <Deposit_1["default"] />
        </>);
}
exports["default"] = Form;

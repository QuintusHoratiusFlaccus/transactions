import React, {useState} from "react";
import Deposit from "../Filters/Deposit/Deposit";
import RadioGroup from "../RadioGroup/RadioGroup";

function Form() {
    const [transaction, setTransaction] = useState<string>('deposit')

    const handleRadioChange = (e: React.ChangeEvent): void => {
        setTransaction(e.target.attributes[2].value)
    }

    return(
        <>
            <RadioGroup
                transaction={transaction}
                handleRadioChange={handleRadioChange}
            />
            <Deposit/>
        </>
    )
}

export default Form
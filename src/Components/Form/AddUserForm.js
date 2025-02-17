import {useState} from "react";
import Input from "./Input";
import RadioInput from "./RadioInput";

function AddUserForm(props) {

    const [userState , setUserState] = useState({
        name : "",
        IDCode : "",
        email : "",
        accessRate : "",
    })

    // if we change one of state's parameters, All them change!
    // so first we use datasets to find changed parameter!
    // then we use prevState & update state!
    const getInputsValue = (key, value) => setUserState({...userState, [key]: value})


    const formHandler = e => {
        e.preventDefault();
        props.changeUsersList(userState)
        setUserState({
            name : "",
            IDCode : "",
            email : "",
            accessRate: userState.accessRate,
        })
        props.hide()
    }

    return (
        <div className={`addUsersForm ${props.formClass}`}>
            <form className="form" onSubmit={formHandler}>
                <span className={"closeForm"} onClick={props.hide}> + </span>
                <h3> فرم ثبت نام اعضای جدید </h3>
                <div className="inputs">
                    <div className="rightSide">
                        <Input label={"نام و نام خانوادگی :"} type={"text"} value={userState.name}  name={"name"} onchangeFunction={(e) => getInputsValue('name', e.target.value)} />
                        <Input label={"کد ملی :"} type={"text"} value={userState.IDCode}  name={"IDCode"} onchangeFunction={(e) => getInputsValue('IDCode', e.target.value)} />
                    </div>
                    <div className="leftSide">
                        <Input label={"ایمیل :"} type={"text"} value={userState.email}  name={"email"} onchangeFunction={(e) => getInputsValue('email', e.target.value)} />
                        <RadioInput mainLabel={"میزان دسترسی کاربر :"} label1={"ادمین"} label2={"عضوساده"} name={"accessRate"} onchangeFunction={getInputsValue}/>
                    </div>
                </div>
                <button type="submit"> اضافه کردن عضو جدید </button>
            </form>
        </div>
    )
}

export default AddUserForm;
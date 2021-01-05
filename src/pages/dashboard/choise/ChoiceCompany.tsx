import { useState, useEffect } from "react"
import Select from 'react-select'
import './choiceCompany.css'
import { useDispatch, useSelector } from "react-redux"
import { listCompanyAction } from "../../../store/actions/listCompanyAction"
import { RootState } from "../../../store/reducers/rootReducer"
import { pickCompanyAction } from "../../../store/actions/pickCompanyAction"


export default function ChoiceCompany(): JSX.Element {

    const [options, setOptions] = useState<object[]>([])
    const companysNamesList = useSelector((state: RootState) => state.listCompany.listCompanysInfo.listCompany)
    const [pickCompanyName, PickCompanyName] = useState(String(companysNamesList[0]))

    const pickCompany = useSelector((state: RootState) => state.pickCompany.pickCompany)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listCompanyAction())
        console.log(companysNamesList);
    }, [dispatch])

    useEffect(() => {
        const obj = companysNamesList.map((item, index) => {
            console.log('---', item, index)
            return { value: companysNamesList[index], label: companysNamesList[index] }
        })
        setOptions(obj)
    }, [companysNamesList]);

    const handlePickNameOfCompany = (value: any) => {
        if (value.value !== pickCompanyName) {
            PickCompanyName(String((Object.values(Object(value)))[1]))
            dispatch(pickCompanyAction({ pickCompanyName }))
        }
    }

    console.log('===', pickCompany)
    return (
        <div id="selectCompany">
            <Select
                defaultValue={{ label: companysNamesList[0], value: companysNamesList }}
                pickcompanyname={pickCompanyName}
                onChange={handlePickNameOfCompany}
                options={options}
            />
        </div>
    )
}
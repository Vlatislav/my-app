import React from 'react'

import './company.css'
import CreateCompany from './createCompany/CreateCompany'
import CreateRisk from './createRisk/CreateRisk'

export default function Company(): JSX.Element {
    // const [listNamesCompany, setListNamesCompany] = useState([])
    //const dispatch = useDispatch();
    //const isInitialMount = useRef(0);

    //useEffect(() => {
    //    firebaseService.getListCompany(setListNamesCompany)
    //}, [])
    //
    //console.log(31, listNamesCompany)
    //if (isInitialMount.current !== 2) {
    //    try {
    //        dispatch(listCompanyAction())
    //        console.log(1, listNamesCompany)
    //        if (listNamesCompany[0] !== 'error') {
    //            console.log(2, listNamesCompany)
    //            dispatch(listCompanySuccessAction({ listCompany: listNamesCompany }))
    //        }
    //        else
    //            dispatch(listCompanyErrorAction('error Read the list Company'))
    //    }
    //    catch (e) {
    //        dispatch(listCompanyErrorAction(e))
    //    }
    //    isInitialMount.current++;
    //}
    //
    //console.log(32, listNamesCompany)



    return (
        <form>
            <CreateCompany />
            <CreateRisk />
        </form>
    )
}


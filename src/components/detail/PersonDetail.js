import {useParams} from "react-router";
import {useEffect, useState} from "react";
import CONSTANTS from "../../utils/CONSTANTS";
import {fetchData} from "../../utils/Utils";
import {BreadcrumbComponent} from "../nav/BreadcrumbComponent";

export function PersonDetail() {
    const {id} = useParams()
    const [person,setPerson] = useState('')
    const [branch,setBranch] = useState('');
    const breadcrumbItems = [
        { text: 'Trang chủ', link: '/' },
        { text: branch ? branch.name : 'Chi', link:  branch ? '/branch/'+branch.id : '/branch/1' },
        { text: person ? person.name : '', link: null}
    ];
    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const url = CONSTANTS.BASE_API + '/people/'+id;
                const fetchedData = await fetchData(url);

                const url_branch = CONSTANTS.BASE_API + '/branch/'+fetchedData.branchId;
                const fetchedDataBranch = await fetchData(url_branch);
                setPerson(fetchedData)
                setBranch(fetchedDataBranch)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataAsync();
    }, [])

    return (
        <>
            <BreadcrumbComponent items={breadcrumbItems}/>
            {person.name}
        </>
    )
}
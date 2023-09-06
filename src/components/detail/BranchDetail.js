import {useParams} from "react-router";
import {useEffect, useState} from "react";
import CONSTANTS from "../../utils/CONSTANTS";
import {fetchData} from "../../utils/Utils";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BreadcrumbComponent} from "../nav/BreadcrumbComponent";

export function BranchDetail() {
    const {id} = useParams()
    const [list, setList] = useState([]);
    const [branch,setBranch] = useState('');
    const breadcrumbItems = [
        { text: 'Trang chủ', link: '/' },
        { text: branch ? branch.name : 'Chi', link: null },
    ];
    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const url = CONSTANTS.BASE_API + '/people/branch/'+id;
                const fetchedData = await fetchData(url);
                setList(fetchedData)
            } catch (error) {
                console.log(error)
            }
        }
        const fetchBranchNameAsync = async () => {
            try {
                const url = CONSTANTS.BASE_API + '/branch/'+id;

                const fetchedData = await fetchData(url);
                console.log(fetchedData)
                setBranch(fetchedData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchBranchNameAsync();
        fetchDataAsync();
    }, [])
    return (
        <>
            <BreadcrumbComponent items={breadcrumbItems}/>
            <h1>Danh sách đinh của {branch.name}</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Ngày sinh</th>
                    <th>Cha</th>
                    {/*<th>Mẹ</th>*/}
                </tr>
                </thead>
                <tbody>
                {list.map((item,index) => {
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>
                                <Link to= {`/people/${item.id}`}>{item.name}</Link>
                            </td>
                            <td>{item.birthDay}</td>
                            <td>
                                {item.dad ?
                                    <Link to= {`/people/${item.dad.id}`}>{item.dad.name}</Link>
                                    : '-'}</td>
                            {/*<td>*/}
                            {/*    {item.mom ?*/}
                            {/*        <Link to= {`/people/${item.mom.id}`}>{item.mom.name}</Link>*/}
                            {/*        : '-'}*/}
                            {/*</td>*/}
                        </tr>
                    )
                })}
                </tbody>

            </Table>
        </>
    )
}
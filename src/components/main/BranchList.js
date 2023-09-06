import {Col, Row} from "react-bootstrap";
import {BranchCard} from "./BranchCard";
import {useEffect, useState} from "react";
import CONSTANTS from "../../utils/CONSTANTS";
import {fetchData} from "../../utils/Utils";

export function BranchList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const url = CONSTANTS.BASE_API + '/branch';
                const fetchedData = await fetchData(url);
                setList(fetchedData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataAsync();
    }, [])
    const numberOfElements = 15; // Define the number of temporary elements

    const temporaryElements = Array.from({length: numberOfElements}, (_, index) => (
        <Col xs={12} md={6} lg={3} className="mb-4">
            <BranchCard key={index}/>
        </Col>
    ));

    return (
        <>
            <Row>
                {list.map((item, index) => {
                    return (
                        <Col xs={12} md={6} lg={3} className="mb-4">
                            <BranchCard
                                key={index}
                                id = {item.id}
                                title={item.name}
                                text={item.description}
                                refDetail={item.ref}
                            />
                        </Col>
                    )
                })}
            </Row>

        </>
    )
}
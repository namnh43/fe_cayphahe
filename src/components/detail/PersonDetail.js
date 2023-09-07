import {useParams} from "react-router";
import {useEffect, useState} from "react";
import CONSTANTS from "../../utils/CONSTANTS";
import {fetchData} from "../../utils/Utils";
import {BreadcrumbComponent} from "../nav/BreadcrumbComponent";
import {Col, Container, Row, Tab, Table, Tabs, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

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
    }, [id])

    return (
        <>
            <BreadcrumbComponent items={breadcrumbItems}/>
            <h4 style={{textTransform: 'capitalize'}}>{person.name}</h4>
            <Tabs
                defaultActiveKey="personal"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="personal" title="Tiểu sử">
                    <Container>
                        <Row>
                            <Col xs={8}>
                                <Table striped hover>
                                    <tbody>
                                    <tr>
                                        <th className='col-3'>Tên húy</th>
                                        <td>NNN</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày sinh</th>
                                        <td >{person.birthDay}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày mất</th>
                                        <td>{person.deadDay}</td>
                                    </tr>
                                    <tr>
                                        <th>Thành viên của chi</th>
                                        <td><Link to={'/branch/'+branch.id}>{branch.name}</Link></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={4}>
                                <Image className='w-100 h-100' src="https://mui.com/static/images/cards/contemplative-reptile.jpg" roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="relationship" title="Quan hệ họ hàng">
                    <Container>
                        <Row>
                            <Col xs={8}>
                                <Table striped hover>
                                    <tbody>
                                    <tr>
                                        <th className='col-3'>Bố</th>
                                        <td>{person.dad ? <Link to={'/people/'+person.dad.id}>{person.dad.name}</Link>:''}</td>
                                    </tr>
                                    <tr>
                                        <th>Mẹ</th>
                                        <td >{person.mom? <Link to={'/people/'+person.mom.id}>{person.mom.name}</Link>: ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Vợ/Chồng</th>
                                        <td>{person.deadDay}</td>
                                    </tr>
                                    <tr>
                                        <th>Con</th>
                                        <td><Link to={'/branch/'+branch.id}>{branch.name}</Link></td>
                                    </tr>
                                    <tr>
                                        <th>Anh/Chị em ruột</th>
                                        <td>{person.deadDay}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="timeline" title="Các mốc thời gian">
                    Tab content for timeline
                </Tab>
            </Tabs>

        </>
    )
}